<template>
  <div style="float: left; width: 40%">
    <div>
      <el-button @click="back()" type="success">返回</el-button>
    </div>
    <div>
      <el-form label-width="100px" :model="diary" :rules="rules" ref="diary" label-position="left">
        <el-form-item label="日记名称" prop="name">
          <el-input v-model="diary.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="diary.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">创建</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      diary: {
        authorId: '',
        name: '',
        description: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入日记名称', trigger: 'change'},
          {min: 1, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入日记描述', trigger: 'change'},
          {min: 1, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    back () {
      this.$router.back()
    },
    resetForm () {
      this.diary = {}
    },
    submitForm () {
      this.requestCreateDiary(this.diary.name, this.diary.description)
    },
    requestCreateDiary (name, description) {
      this.$http.post('/tg/api/diaries/create',
        {
          authorId: '12345678123456781234567812345678',
          name: name,
          description: description
        }
      ).then(response => {
        if (response.body.id !== 'undefined') {
          this.$notify({
            title: '成功',
            message: '创建日记成功',
            type: 'success'
          })
        }
      }, response => {
        this.$notify.error({
          title: '错误',
          message: '创建日记失败，请联系管理员，邮箱wusi0109@163.com'
        })
      })
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
</style>
