<template>
  <el-col v-if="showDiaries" :span="5">
    <el-menu default-active="1" theme="light">
      <el-menu-item
        :index="diary.id"
        v-for="(diary, index) in diaries"
        :key="diary.id"
        v-on:click="setDiaryId(diary.id)">
        {{diary.name}}
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      diaries: []
    }
  },
  components: {},
  computed: mapGetters({
    // 映射 this.showDiaries 为 store.getters.showDiaries
    showDiaries: 'showDiaries',
    flushDiaries: 'flushDiaries'
  }),
  watch: {
    showDiaries (newValue, oldValue) {
      // 如果设置现实状态栏，或者前后value都是true，那么就再请求一次日记列表
      if (newValue) {
        this.requestDiaries('', this.$consts.pageNum, this.$consts.pageSize)
      }
    },
    flushDiaries (newValue, oldValue) {
      if (newValue) {
        this.requestDiaries('', this.$consts.pageNum, this.$consts.pageSize)
      }
    }
  },
  methods: {
    requestDiaries (userId, pageNum, pageSize) {
      this.$http.post('/tg/api/diaries',
        {
          userId: userId,
          pageNum: pageNum,
          pageSize: pageSize
        }
      ).then(response => {
        this.$store.dispatch('setShowDiaries', true)
        // 强制刷新标志位置0
        this.$store.dispatch('setFlushDiaries', false)
        this.diaries = response.body.data
      }, response => {
        console.error(response)
      })
    },
    setDiaryId (diaryId) {
      if (this.$route.name !== 'index') {
        this.$router.push({name: 'index'})
      }
      // 分发mutation setDiaryId, 这个状态在 Index.vue中 mapGetters用到
      this.$store.dispatch('setDiaryId', diaryId)
    }
  },
  created () {
    this.requestDiaries('', this.$consts.pageNum, this.$consts.pageSize)
  },
  activated () {
  },
  deactivated () {
  }
}
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
