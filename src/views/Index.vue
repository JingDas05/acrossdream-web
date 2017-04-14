<template>
  <el-col :span="19">
    <div>
      <div>
        <div style="margin-bottom: 10px">
          <el-input v-on:keyup.enter="search(keyword)" style="width: 60%" v-model="keyword" placeholder="请输入搜索内容"></el-input>
          <el-button @click="search(keyword)" type="success">搜索</el-button>
        </div>
        <div>
          <el-select v-model="queryParams.diaryId" clearable placeholder="请选择日记">
            <el-option
              v-for="(diary, index) in diaries"
              :key="diary.id"
              :label="diary.name"
              :value="diary.id">
            </el-option>
          </el-select>
          <el-date-picker
            v-model="queryParams.startTime"
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择起始时间">
          </el-date-picker>
          <span>-</span>
          <el-date-picker
            v-model="queryParams.endTime"
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择结束时间">
          </el-date-picker>
          <el-button type="success">搜索</el-button>
        </div>
      </div>
      <ul style="list-style: none">
        <router-link :to="{ name: 'pageDetail', params: { pageId: page.id }}"
                     v-for="(page, index) in pages"
                     :key="index"
                     tag="li">
          <h2>{{page.name}}</h2>
          <div>
            <!--<span>创建人：{{}}</span>&nbsp;&nbsp;-->
            <span><span class="el-icon-date">&nbsp;&nbsp;</span>{{page.createTime}}</span>
          </div>
          <p v-html="page.content"></p>
        </router-link>
      </ul>
    </div>
  </el-col>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        keyword: '',
        queryParams: {
          userId: '',
          pageSize: 10,
          pageNum: 1,
          diaryId: '',
          startTime: '',
          endTime: ''
        },
        pages: [],
        diaries: [],
        key: ''
      }
    },
    computed: mapGetters({
      // 映射 this.localDiaryId 为 store.getters.diaryId
      localDiaryId: 'diaryId'
    }),
    methods: {
      search (keyword) {
        this.requestSearch(keyword, 0, 10)
      },
      requestBy (userId, pageNum, pageSize, diaryId, startTime, endTime) {
        this.$http.post('/tg/api/pages/getByPeriod',
          {
            userId: userId,
            pageNum: pageNum,
            pageSize: pageSize,
            diaryId: diaryId,
            startTime: startTime,
            endTime: endTime
          }
        ).then(response => {
          this.pages = response.body.data
        }, response => {
          console.error(response)
        })
      },
      requestSearch (keyword, from, size) {
        console.error(keyword)
        this.$http.post('/tg/api/search',
          {
            keyword: keyword,
            from: from,
            size: size
          }
        ).then(response => {
          this.pages = response.body.data
        }, response => {
          console.error(response)
        })
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
        })
      },
      requestPages (userId, diaryId, startTime, endTime, pageNum, pageSize) {
        this.$http.post('/tg/api/pages/getByPeriod',
          {
            userId: userId,
            diaryId: diaryId,
            startTime: startTime,
            endTime: endTime,
            pageNum: pageNum,
            pageSize: pageSize
          }
        ).then(response => {
          this.pages = response.body.data
        }, response => {
          console.error(response)
        })
      }
    },
    created () {
      this.requestDiaries('12345678123456781234567812345678', this.$consts.pageNum, this.$consts.pageSize)
    },
    watch: {
      localDiaryId (newValue, oldValue) {
        this.requestPages(
          '12345678123456781234567812345678',
          newValue,
          '',
          '',
          this.$consts.pageNum,
          this.$consts.pageSize)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
