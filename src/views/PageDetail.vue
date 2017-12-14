<template>
  <div style="float: left; width: 85%">
    <el-button @click="back()" type="success">返回</el-button>
    <div>
      <h1 style="text-align: center">{{pageDetail.name}}</h1>
    </div>
    <div style="border-bottom: solid; clear: both">
      <span class="el-icon-date">&nbsp;{{pageDetail.createTime}}&nbsp;&nbsp;</span>
      <span>{{pageDetail.weather}}&nbsp;&nbsp;</span>
      <span>{{pageDetail.mind}}&nbsp;&nbsp;</span>
      <span>来自于:{{pageDetail.diaryName}}&nbsp;&nbsp;</span>
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
      this.$http.get('/tg/api/pages/detail/{pageId}', {
        params: {
          pageId: pageId
        }
      }
      ).then(response => {
        this.pageDetail = response.body.data
      }, response => {
        console.error(response)
      })
    },
    back () {
      // 显示左侧日记列表
      this.$store.dispatch('setShowDiaries', true)
      this.$router.back()
    }
  },
  created () {
  },
  activated () {
    // 不显示左侧日记列表，并且请求日记详情
    this.$store.dispatch('setShowDiaries', false)
    this.requestPageDetail('', this.$route.params.pageId)
  },
  components: {
  }
}
</script>

<style scoped>
</style>
