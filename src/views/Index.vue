<template>
  <el-col :span="19">
    <div>
      <div>
        <div style="margin-bottom: 10px">
          <el-input style="width: 60%" v-model="key" placeholder="请输入搜索内容"></el-input>
          <el-button type="success">搜索</el-button>
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
        <li>
          <h2>标题</h2>
          <div>
            <span>创建人：武思</span>&nbsp;&nbsp;
            <span>创建时间：2017年4月12日</span>
          </div>
          <p>内容，各种记录</p>
        </li>
        <li>
          <h2>标题</h2>
          <div>
            <span>创建人：武思</span>&nbsp;&nbsp;
            <span>创建时间：2017年4月12日</span>
          </div>
          <p>内容，各种记录</p>
        </li>
        <li>
          <h2>标题</h2>
          <div>
            <span>创建人：武思</span>&nbsp;&nbsp;
            <span>创建时间：2017年4月12日</span>
          </div>
          <p>内容，各种记录</p>
        </li>
        <li>
          <h2>标题</h2>
          <div>
            <span>创建人：武思</span>&nbsp;&nbsp;
            <span>创建时间：2017年4月12日</span>
          </div>
          <p>内容，各种记录</p>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        queryParams: {
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
      diaryId: 'localDiaryId'
    }),
    methods: {
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
        this.$http.post('/tg/api/diaries',
          {
            userId: userId,
            diaryId: diaryId,
            startTime: startTime,
            endTime: '2017-04-08T10:00:00.000Z',
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
      this.requestDiaries('12345678123456781234567812345678', 1, 100)
    },
    watch: {
      localDiaryId (newValue, oldValue) {
        console.log(newValue)
        this.requestPages(
          '12345678123456781234567812345678',
          '1c2946252b5241d2b95126bc438510b2',
          '2017-04-03T08:50:00.000Z',
          '2017-04-08T10:00:00.000Z',
          0,
          10)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
