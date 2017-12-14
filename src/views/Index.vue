<template>
  <el-col :span="19">
    <div>
      <div>
        <div style="margin-bottom: 10px">
          <el-button @click="toDiaryCreate()" type="primary" icon="edit">创建日记</el-button>
          <el-button @click="toPageCreate()" type="primary" icon="edit">创建记录</el-button>
        </div>
        <div style="margin-bottom: 10px">
          <el-input @keyup.native.enter="search(keyword)" style="width: 60%" v-model="keyword"
                    placeholder="所有记录内容全局搜索"></el-input>
          <el-button @click="search(keyword)" type="success">搜索</el-button>
        </div>
        <div>
          <el-date-picker
            v-model="queryParams.startTime"
            type="date"
            format="yyyy-MM-dd"
            placeholder="选择起始时间">
          </el-date-picker>
          <span>-</span>
          <el-date-picker
            v-model="queryParams.endTime"
            type="date"
            format="yyyy-MM-dd"
            placeholder="选择结束时间">
          </el-date-picker>
          <el-button @click="queryBy(queryParams.startTime, queryParams.endTime)" type="success">
            搜索
          </el-button>
        </div>
      </div>
      <ul style="list-style: none">
        <li v-for="(page, index) in pages"
            :key="index"
            :class="[index%2==0 ? 'back-ground' : '']"
            class="index_page">
          <router-link :to="{ name: 'pageDetail', params: { pageId: page.id }}"
                       v-html="page.name"
                       tag="h3"
                       style="cursor: pointer">
          </router-link>
          <div>
            <!--<span>创建人：{{}}</span>&nbsp;&nbsp;-->
            <span class="el-icon-date">&nbsp;&nbsp;{{page.createTime}}</span>
          </div>
          <p v-show="isShowContent" v-html="page.content"></p>
        </li>
      </ul>
    </div>
    <div v-if="total > $consts.pageSize">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total=total>
      </el-pagination>
    </div>
  </el-col>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        total: 0,
        keyword: '',
        queryParams: {
          userId: '',
          startTime: '',
          endTime: ''
        },
        pages: [],
        key: ''
      }
    },
    computed: mapGetters({
      // 映射 this.localDiaryId 为 store.getters.diaryId
      localDiaryId: 'diaryId',
      flushPages: 'flushPages',
      isShowContent: 'isShowContent',
      currentStrategy: 'currentStrategy',
      // 映射 this.isLogin 为 store.getters.isLogin
      isLogin: 'isLogin'
    }),
    methods: {
      clear () {
        this.keyword = ''
      },
      handleCurrentChange (currentPage) {
        // 根据不同的策略，分页调用不用的api
        if (this.currentStrategy === 'diary') {
          this.requestPages(
            '',
            this.localDiaryId,
            this.queryParams.startTime,
            this.queryParams.endTime,
            currentPage,
            this.$consts.pageSize)
        } else if (this.currentStrategy === 'search') {
          this.requestSearch(this.keyword, (currentPage - 1) * this.$consts.pageSize, this.$consts.pageSize)
        } else if (this.currentStrategy === 'searchByPeriod') {
          this.requestBy(
            '',
            currentPage,
            this.$consts.pageSize,
            this.localDiaryId,
            this.queryParams.startTime,
            this.queryParams.endTime)
        }
      },
      toDiaryCreate () {
        if (!this.isLogin) {
          this.$notify({
            title: '温馨提示',
            message: '请先登录',
            type: 'success'
          })
          this.$router.push({name: 'login'})
          return
        }
        this.$router.push({name: 'diaryCreate'})
      },
      toPageCreate () {
        if (!this.isLogin) {
          this.$notify({
            title: '温馨提示',
            message: '请先登录',
            type: 'success'
          })
          this.$router.push({name: 'login'})
          return
        }
        this.$router.push({name: 'pageCreate'})
      },
      search (keyword) {
        this.requestSearch(keyword, 0, 10)
      },
      queryBy (startTime, endTime) {
        this.requestBy('', 0, 10, this.localDiaryId, startTime, endTime)
      },
      requestBy (userId, pageNum, pageSize, diaryId, startTime, endTime) {
        this.$store.dispatch('setCurrentStrategy', 'searchByPeriod')
        this.clear()
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
          this.$store.dispatch('setIsShowContent', false)
        }, response => {
        })
      },
      requestSearch (keyword, from, size) {
        this.$store.dispatch('setCurrentStrategy', 'search')
        this.$http.post('/tg/api/search',
          {
            keyword: keyword,
            from: from,
            size: size
          }
        ).then(response => {
          this.total = response.body.total
          this.pages = response.body.data
          this.$store.dispatch('setIsShowContent', true)
        }, response => {
        })
      },
      requestPages (userId, diaryId, startTime, endTime, pageNum, pageSize) {
        this.$store.dispatch('setCurrentStrategy', 'diary')
        this.clear()
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
          this.total = response.body.total
          this.pages = response.body.data
          this.$store.dispatch('setIsShowContent', false)
        }, response => {
        })
      }
    },
    created () {
      this.clear()
    },
    activated () {
      // 显示边框栏
      this.$store.dispatch('setShowDiaries', true)
      // 分发mutation setShowDiaries, 这个状态在 SideBar.vue中 mapGetters用到
      // this.$store.dispatch('setFlushDiaries', true)
      // 请求记录数据
      if (this.localDiaryId || '') {
        this.requestPages(
          '',
          this.localDiaryId,
          '',
          '',
          this.$consts.pageNum,
          this.$consts.pageSize)
      }
    },
    watch: {
      // 检测到  diaryId 发生变化后请求记录列表
      localDiaryId (newValue, oldValue) {
        this.requestPages(
          '',
          newValue,
          '',
          '',
          this.$consts.pageNum,
          this.$consts.pageSize)
      },
      flushPages (newValue, oldValue) {
        if (newValue && (this.localDiaryId || '')) {
          this.requestPages(
            '',
            this.localDiaryId,
            '',
            '',
            this.$consts.pageNum,
            this.$consts.pageSize)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .back-ground {
    background-color: #E5E9F2;
  }
</style>
