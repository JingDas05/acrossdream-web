<template>
  <el-col :span="5">
    <el-menu default-active="1"
             theme="light">
      <el-menu-item
        index="index"
        v-for="(diary, index) in diaries"
        :key="diary.id"
        v-on:click="setDiaryId(diary.id)">
        {{diary.name}}
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>

export default {
  data () {
    return {
      diaries: []
    }
  },
  components: {},
  computed: {},
  methods: {
    requestDiaries (userId, pageNum, pageSize) {
      this.$http.post('/tg/api/diaries',
        {
          userId: userId,
          pageNum: pageNum,
          pageSize: pageSize
        }
      ).then(response => {
        this.diaries = response.body.data
      }, response => {
        console.error(response)
      })
    },
    setDiaryId (diaryId) {
      // 分发mutation setDiaryId, 这个状态在 Index.vue中 mapGetters用到
      this.$store.dispatch('setDiaryId', diaryId)
    }
  },
  created () {
    this.requestDiaries('12345678123456781234567812345678', 1, 10)
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
