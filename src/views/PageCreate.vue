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
    <!--input上传图片组件，调用方法upload-->
    <!--<input ref="files" type="file" name="upload-file" id="upload-file" v-on:change="upload">-->
    <div>
          <div>
            <!-- quill-editor -->
            <quill-editor ref="myTextEditor"
                          v-model="pageParams.content"
                          :options="editorOption"
                          @change="onChange"
                          style="height: 100em">
              <div id="toolbar" slot="toolbar">
                <span class="ql-formats"><button type="button" class="ql-bold"></button></span>
                <span class="ql-formats"><button type="button" class="ql-italic"></button></span>
                <span class="ql-formats"><button type="button" class="ql-underline"></button></span>
                <span class="ql-formats"><button type="button" class="ql-strike"></button></span>
                <span class="ql-formats"><button type="button" class="ql-blockquote"></button></span>
                <span class="ql-formats"><button type="button" class="ql-code-block"></button></span>
                <span class="ql-formats"><button type="button" class="ql-header" value="1"></button></span>
                <span class="ql-formats"><button type="button" class="ql-header" value="2"></button></span>
                <span class="ql-formats"><button type="button" class="ql-list" value="ordered"></button></span>
                <span class="ql-formats"><button type="button" class="ql-list" value="bullet"></button></span>
                <span class="ql-formats"><button type="button" class="ql-script" value="sub"></button></span>
                <span class="ql-formats"><button type="button" class="ql-script" value="super"></button></span>
                <span class="ql-formats"><button type="button" class="ql-indent" value="-1"></button></span>
                <span class="ql-formats"><button type="button" class="ql-indent" value="+1"></button></span>
                <span class="ql-formats"> <button type="button" class="ql-direction" value="rtl"></button></span>
                <span class="ql-formats">
                  <select class="ql-size">
                    <option value="small"></option>
                    <option selected></option>
                    <option value="large"></option>
                    <option value="huge"></option>
                  </select>
                </span>
                <span class="ql-formats">
                  <select class="ql-header" >
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                    <option selected="selected"></option>
                  </select>
                </span>
                <span class="ql-formats">
                  <select class="ql-color">
                    <option selected="selected"></option>
                    <option value="#e60000"></option>
                    <option value="#ff9900"></option>
                    <option value="#ffff00"></option>
                    <option value="#008a00"></option>
                    <option value="#0066cc"></option>
                    <option value="#9933ff"></option>
                    <option value="#ffffff"></option>
                    <option value="#facccc"></option>
                    <option value="#ffebcc"></option>
                    <option value="#ffffcc"></option>
                    <option value="#cce8cc"></option>
                    <option value="#cce0f5"></option>
                    <option value="#ebd6ff"></option>
                    <option value="#bbbbbb"></option>
                    <option value="#f06666"></option>
                    <option value="#ffc266"></option>
                    <option value="#ffff66"></option>
                    <option value="#66b966"></option>
                    <option value="#66a3e0"></option>
                    <option value="#c285ff"></option>
                    <option value="#888888"></option>
                    <option value="#a10000"></option>
                    <option value="#b26b00"></option>
                    <option value="#b2b200"></option>
                    <option value="#006100"></option>
                    <option value="#0047b2"></option>
                    <option value="#6b24b2"></option>
                    <option value="#444444"></option>
                    <option value="#5c0000"></option>
                    <option value="#663d00"></option>
                    <option value="#666600"></option>
                    <option value="#003700"></option>
                    <option value="#002966"></option>
                    <option value="#3d1466"></option>
                  </select>
                </span>
                <span class="ql-formats">
                  <select class="ql-background">
                    <option value="#000000"></option>
                    <option value="#e60000"></option>
                    <option value="#ff9900"></option>
                    <option value="#ffff00"></option>
                    <option value="#008a00"></option>
                    <option value="#0066cc"></option>
                    <option value="#9933ff"></option>
                    <option selected="selected"></option>
                    <option value="#facccc"></option>
                    <option value="#ffebcc"></option>
                    <option value="#ffffcc"></option>
                    <option value="#cce8cc"></option>
                    <option value="#cce0f5"></option>
                    <option value="#ebd6ff"></option>
                    <option value="#bbbbbb"></option>
                    <option value="#f06666"></option>
                    <option value="#ffc266"></option>
                    <option value="#ffff66"></option>
                    <option value="#66b966"></option>
                    <option value="#66a3e0"></option>
                    <option value="#c285ff"></option>
                    <option value="#888888"></option>
                    <option value="#a10000"></option>
                    <option value="#b26b00"></option>
                    <option value="#b2b200"></option>
                    <option value="#006100"></option>
                    <option value="#0047b2"></option>
                    <option value="#6b24b2"></option>
                    <option value="#444444"></option>
                    <option value="#5c0000"></option>
                    <option value="#663d00"></option>
                    <option value="#666600"></option>
                    <option value="#003700"></option>
                    <option value="#002966"></option>
                    <option value="#3d1466"></option>
                  </select>
                </span>
                <span class="ql-formats">
                  <select class="ql-font">
                    <option selected="selected"></option>
                    <option value="serif"></option>
                    <option value="monospace"></option>
                  </select>
                </span>
                <span class="ql-formats">
                  <select class="ql-align">
                    <option selected="selected"></option>
                    <option value="center"></option>
                    <option value="right"></option>
                    <option value="justify"></option>
                  </select>
                </span>
                <span class="ql-formats"><button type="button" class="ql-clean"></button></span>
                <span class="ql-formats"><button type="button" class="ql-link"></button></span>
                <!--图片按钮点击事件-->
                <span class="ql-formats">
                  <button type="button" @click="imgClick()">
                    <svg viewBox="0 0 18 18">
                      <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
                      <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
                      <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
                    </svg>
                  </button>
                </span>
                <span class="ql-formats"><button type="button" class="ql-video"></button></span>
              </div>
            </quill-editor>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  // vue 七牛云上传项目 https://github.com/SkyFire-Lee/vue-qiniu-upload-demo
  // quill官网https://quilljs.com/docs/modules/toolbar/， 有对富文本工具栏的一些api
  data () {
    return {
      fileKey: 'file',
      uploadUrl: '/api/service/upload',
      editorOption: {
        placeholder: '在此记录下你的足迹吧，千里之行始于足下......',
        modules: {
          toolbar: '#toolbar'
        }
      },
      content: '',
      text: '',
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
    // 获取当前编辑器的对象，这个地方可以看vue-quill-editor源码
    // myTextEditor是当前编辑器的引用，在上面定义了
    editor () {
      return this.$refs.myTextEditor.quill
    }
  },
  methods: {
    // 选择上传图片切换时调用的函数，注入的input对象
    onFileChange (e) {
      let files = e.target.files
      if (files.length === 0) {
        return
      }
      // 选中编辑器
      this.editor.focus()
      // 限制图片大小
      if (files[0].size > 1024 * 1024 * 6) {
        this.$alert('图片不能大于6MB', '图片尺寸过大', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      let data = new FormData()
      // 选择多个文件时，获取第一张
      data.append(this.fileKey, files[0])
      this.$http.post(this.uploadUrl, data).then(response => {
        if (response.data) {
          this.editor.insertEmbed(this.editor.getSelection().index, 'image', response.body.httpPath)
        }
      }, response => {
        // error handing
        console.log('上传图片失败')
      })
    },
    // 编辑器中点击上传图片按钮，触发的方法
    imgClick () {
      if (!this.uploadUrl) {
        console.log('没有设定上传路径')
        return
      }
      // 内存创建input file， 这个也可以在当前页面隐藏一个input
      let input = document.createElement('input')
      input.type = 'file'
      input.name = this.fileKey
      input.accept = 'image/jpeg, image/png, image/jpg, image/gif'
      // 选择完图片，触发onchange函数，调用onFileChange函数
      input.onchange = this.onFileChange
      input.click()
    },
    // 这个方法接受vue-quill-editor的通知，传递过来的对象是 {editor: self.quill,html: html,text: text}
    onChange (entity) {
      // 这个是纯文本信息
      this.text = entity.text
      // this.$emit('input', this.content)
    },
    // input输入框上传图片api
    upload: function (e) {
      e.preventDefault()
      // var files = this.$refs.files
      let files = e.target.files
      let data = new FormData()
      // key为file, value为上传图片，因为可能选中多个，默认只取第一个
      data.append('file', files[0])
      this.$http.post('/api/service/upload', data).then(response => {
        // done handing
      }, response => {
        // error handing
      })
    },
    clear () {
      this.pageParams.diaryId = ''
      this.pageParams.content = ''
      this.pageParams.mind = ''
      this.pageParams.weather = ''
      this.pageParams.name = ''
      this.text = ''
    },
    back () {
//      this.$router.back()
      this.$router.push({name: 'index'})
      this.clear()
    },
    isNull (content) {
      if (content === null || content === undefined || content === '') {
        return true
      }
    },
    create () {
      let diaryId = this.pageParams.diaryId
      let title = this.pageParams.name
      if (this.isNull(diaryId)) {
        this.$alert('请选择记录所属日记', '提示', {
          confirmButtonText: '确定'})
        return
      }
      if (this.isNull(title)) {
        this.$alert('请填写记录标题', '提示', {
          confirmButtonText: '确定'})
        return
      }
      this.requestCreatePage(this.pageParams.diaryId,
        this.pageParams.name,
        this.pageParams.content,
        this.pageParams.mind,
        this.pageParams.weather,
        this.text)
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
    // text是纯文本
    requestCreatePage (diaryId, name, content, mind, weather, text) {
      this.$http.post('tg/api/pages/create',
        {
          authorId: '',
          diaryId: diaryId,
          name: name,
          content: content,
          mind: mind,
          weather: weather,
          text: text
        }
      ).then(response => {
        if (response.body.id !== 'undefined') {
          this.$notify({
            title: '成功',
            message: '创建记录成功',
            type: 'success'
          })
          this.$router.push({name: 'pageDetail', params: {pageId: response.body.id}})
          // 分发mutation setShowDiaries, 这个状态在 SideBar.vue中 mapGetters用到
          this.$store.dispatch('setShowDiaries', false)
          this.$store.dispatch('setFlushDiaries', false)
          this.clear()
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
    this.requestDiaries('', this.$consts.pageNum, this.$consts.sideBarPageSize)
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
