<template>
  <el-col :span="5">
    <el-menu default-active="1"
             theme="light">
      <el-menu-item v-for="(menu, index) in diaries" :key="menu.id">{{menu.name}}</el-menu-item>
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
    requestDiaries (diaryId, pageNum, pageSize) {
      this.$http.post('/tg/api/diaries',
        {
          diaryId: diaryId,
          pageNum: pageNum,
          pageSize: pageSize
        }
      ).then(response => {
        this.diaries = response.body.data.data
      }, response => {
        console.error(response)
      })
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
