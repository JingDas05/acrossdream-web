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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="tiny">
      <span>确认创建日记吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogVisible: true,
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
      isNull (content) {
        if (content === null || content === undefined || content === '') {
          return true
        }
      },
      showDialog () {
        this.dialogVisible = true
//        console.error(this.dialogVisible)
      },
      back () {
//      this.$router.back()
        this.$router.push({name: 'index'})
        this.clear()
      },
      clear () {
        this.diary.name = ''
        this.diary.description = ''
        this.diary.authorId = ''
      },
      resetForm () {
        this.clear()
      },
      submitForm () {
        this.requestCreateDiary(this.diary.name, this.diary.description)
        this.dialogVisible = false
      },
      requestCreateDiary (name, description) {
        let title = this.diary.name
        if (this.isNull(title)) {
          this.$alert('请填写日记名称', '提示', {
            confirmButtonText: '确定'})
          return
        }
        this.$http.post('/tg/api/diaries/create',
          {
            authorId: '',
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
          this.$router.push({name: 'index'})
          // 分发 action， 刷新日记
          this.$store.dispatch('setFlushPages', true)
          this.$store.dispatch('setFlushDiaries', true)
          this.clear()
        }, response => {
          console.error(response)
          this.$notify({
            title: '提示',
            message: '登录后创建，账号密码联系wusi0109@163.com'
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
