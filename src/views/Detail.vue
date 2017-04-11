<template>
  <div>
    helloComponent
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action:${action}`
          })
        }
      })
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
