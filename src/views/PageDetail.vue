<template>
  <div>
    <el-button @click="toIndex()" type="success">返回</el-button>

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
      this.$http.get('/tg/api/pages/detail/{userId}/{pageId}',
        {
          userId: userId,
          pageId: pageId
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
  },
  components: {
  }
}
</script>

<style scoped>
</style>
