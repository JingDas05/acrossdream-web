<template>
  <div>
    <el-select v-model="pageParams.diaryId" clearable placeholder="请选择日记">
      <el-option
        v-for="(diary, index) in diaries"
        :key="diary.id"
        :label="diary.name"
        :value="diary.id">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      diaries: [],
      pageParams: {

      }
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
    }
//    requestCreatePage () {
//      this.$http.post('/tg/api/diaries/create',
//        {
//          authorId: '12345678123456781234567812345678',
//          name: name,
//          description: description
//        }
//      ).then(response => {
//        if (response.body.id !== 'undefined') {
//          this.$notify({
//            title: '成功',
//            message: '创建日记成功',
//            type: 'success'
//          })
//        }
//      }, response => {
//        this.$notify.error({
//          title: '错误',
//          message: '创建日记失败，请联系管理员，邮箱wusi0109@163.com'
//        })
//      })
//    }
  },
  created () {
    this.requestDiaries('12345678123456781234567812345678', this.$consts.pageNum, this.$consts.pageSize)
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
  }
}
</script>

<style scoped>
</style>
