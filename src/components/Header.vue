<template>
  <div style="margin-bottom: 10px">
    <el-row>
      <el-col :span="24" class="grid-content bg-purple-dark">
        <span @click="toIndex()" style="cursor: pointer">云日记</span>
        <router-link v-if="!isLogin" tag="span" :to="{name:'login'}" style="cursor: pointer">登录</router-link>
        <span v-if="isLogin" style="cursor: pointer" @click="logout()">退出</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  components: {},
  computed: mapGetters({
    // 映射 this.localDiaryId 为 store.getters.diaryId
    isLogin: 'isLogin'
  }),
  methods: {
    toIndex () {
      // 分发mutation setShowDiaries, 这个状态在 Index.vue中 mapGetters用到
      this.$store.dispatch('setShowDiaries', true)
      this.$store.dispatch('setFlushPages', true)
      this.$router.push({name: 'index'})
    },
    logout () {
      this.$removeToken()
      this.$router.push({name: 'login'})
      // 分发mutation setShowDiaries, 这个状态在 SideBar.vue中 mapGetters用到
      this.$store.dispatch('setShowDiaries', false)
      this.$store.dispatch('setFlushDiaries', false)
      this.$store.dispatch('setIsLogin', false)
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
