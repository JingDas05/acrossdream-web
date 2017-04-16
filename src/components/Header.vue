<template>
  <div style="margin-bottom: 10px">
    <el-row>
      <el-col :span="24" class="grid-content bg-purple-dark">
        <router-link tag="span" :to="{name:'hello'}" style="cursor: pointer">AcrossDream</router-link>
        <router-link tag="span" :to="{name:'login'}" style="cursor: pointer">登陆</router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {},
  created () {
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
  .bg-purple-dark {
    background: #13ce66;
  }
</style>
