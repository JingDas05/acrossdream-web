<template>
  <div style="margin-bottom: 10px">
    <el-row>
      <el-col :span="24" class="grid-content bg-purple-dark">
        <span @click="toIndex()" style="cursor: pointer">云日记</span>
        <router-link tag="span" :to="{name:'login'}" style="cursor: pointer">登陆</router-link>
        <span style="cursor: pointer" @click="logout()">退出</span>
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
  methods: {
    toIndex () {
      // 分发mutation setShowDiaries, 这个状态在 Index.vue中 mapGetters用到
      this.$store.dispatch('setFlushPages', true)
      this.$router.push({name: 'index'})
    },
    logout () {
      this.$removeToken()
      this.$router.push({name: 'login'})
      // 分发mutation setShowDiaries, 这个状态在 SideBar.vue中 mapGetters用到
      this.$store.dispatch('setShowDiaries', false)
    }
  },
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
