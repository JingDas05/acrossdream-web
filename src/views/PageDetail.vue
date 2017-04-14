<template>
  <div style="float: left; width: 65%">
    <el-button @click="toIndex()" type="success">返回</el-button>
    <div>
      <h1 style="text-align: center">{{pageDetail.name}}</h1>
    </div>
    <div style="border-bottom: solid; clear: both">
      <span>{{pageDetail.createTime}}</span>
      <span>{{pageDetail.weather}}</span>
      <span>{{pageDetail.mind}}</span>
      <span>来自于:{{pageDetail.diaryName}}</span>
    </div>
    <div>
      <p v-html="pageDetail.content"></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageDetail: {}
    }
  },
  methods: {
    requestPageDetail (userId, pageId) {
      this.$http.get('/tg/api/pages/{userId}/{pageId}', {
        params: {
          userId: userId,
          pageId: pageId
        }
      }
      ).then(response => {
        this.pageDetail = response.body.data
      }, response => {
        console.error(response)
      })
    },
    toIndex () {
      this.$router.back()
    }
  },
  created () {
    this.requestPageDetail('12345678123456781234567812345678', this.$route.params.pageId)
  },
  components: {
  }
}
</script>

<style scoped>
</style>
