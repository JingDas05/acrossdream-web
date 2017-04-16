<template>
  <div style="float: left; width: 65%">
    <el-form label-width="100px" :model="user" :rules="rules" ref="user" label-position="left">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '输入姓名', trigger: 'change'}
        ],
        password: [
          {required: true, message: '输入密码', trigger: 'change'}
        ]
      }
    }
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
</style>
