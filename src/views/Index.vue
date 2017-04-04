<template>
  <el-col :span="15" :offset="9">
    <div class="grid-content bg-purple">
      内容
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
