<template>
  <div style="float: left; width: 65%">
    <div>
      <el-button @click="back()" type="success">返回</el-button>
      <el-button @click="create()" type="primary">创建</el-button>
    </div>
    <div>
      <el-input v-model="pageParams.name" placeholder="标题"></el-input>
      <el-select v-model="pageParams.diaryId" clearable placeholder="请选择日记">
        <el-option
          v-for="(diary, index) in diaries"
          :key="diary.id"
          :label="diary.name"
          :value="diary.id">
        </el-option>
      </el-select>
      <el-input v-model="pageParams.mind" placeholder="心情" class="input"></el-input>
      <el-input v-model="pageParams.weather" placeholder="天气" class="input"></el-input>
    </div>
    <div>
      <md-card>
        <md-card-media>
          <div style="height: 100em">
            <!-- quill-editor -->
            <quill-editor ref="myTextEditor"
                          v-model="pageParams.content"
                          :options="editorOption">
            </quill-editor>
          </div>
        </md-card-media>
      </md-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: '',
      editorOption: {},
      diaries: [],
      pageParams: {
        diaryId: '',
        name: '',
        content: '',
        mind: '',
        weather: ''
      }
    }
  },
  components: {},
  computed: {
  },
  methods: {
    back () {
      this.$router.back()
    },
    create () {
      this.requestCreatePage(this.pageParams.diaryId,
        this.pageParams.name,
        this.pageParams.content,
        this.pageParams.mind,
        this.pageParams.weather)
    },
    requestDiaries (userId, pageNum, pageSize) {
      this.$http.post('/tg/api/diaries',
        {
          userId: userId,
          pageNum: pageNum,
          pageSize: pageSize
        }
      ).then(response => {
        this.diaries = response.body.data
      }, response => {
        console.error(response)
        this.$notify.error({
          title: '错误',
          message: '获取日记列表失败，请联系管理员，邮箱wusi0109@163.com'
        })
      })
    },
    requestCreatePage (diaryId, name, content, mind, weather) {
      this.$http.post('tg/api/pages/create',
        {
          authorId: '',
          diaryId: diaryId,
          name: name,
          content: content,
          mind: mind,
          weather: weather
        }
      ).then(response => {
        if (response.body.id !== 'undefined') {
          this.$notify({
            title: '成功',
            message: '创建记录成功',
            type: 'success'
          })
          this.$router.push({name: 'pageDetail', params: {pageId: response.body.id}})
        }
      }, response => {
        console.error(response)
        this.$notify.error({
          title: '错误',
          message: '创建记录失败，请联系管理员，邮箱wusi0109@163.com'
        })
      })
    }
  },
  created () {
  },
  activated () {
    this.requestDiaries('', this.$consts.pageNum, this.$consts.pageSize)
  },
  deactivated () {
  }
}
</script>

<style lang="css" scoped>
  .input {
    width: 34%;
  }
</style>
