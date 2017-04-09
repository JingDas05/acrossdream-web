<template>
  <el-col :span="5">
    <el-menu default-active="1"
             theme="light">
      <el-menu-item v-for="diary in diaries" :key="diary.id">{{diary.name}}</el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
// 注入action, 这个状态在 Index.vue中 getter用到
import { setDiaryId } from '../vuex/actions/page_action'
export default {
  vuex: {
    actions: {
      setDiaryId
    }
  },
  data () {
    return {
      diaries: []
    }
  },
  components: {},
  computed: {},
  methods: {
    test () {
      this.setDiaryId('123456')
    },
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
    }
  },
  created () {
    this.test()
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
