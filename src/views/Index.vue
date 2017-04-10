<template>
  <el-col :span="19">
    <div class="grid-content bg-purple">

    </div>
  </el-col>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: mapGetters({
      // 映射 this.doneCount 为 store.getters.diaryId
      diaryId: 'diaryId'
    }),
    methods: {
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
          this.diaries = response.body.data
        }, response => {
          console.error(response)
        })
      }
    },
    created () {
    },
    watch: {
      diaryId (newValue, oldValue) {
        this.requestPages('', '1c2946252b5241d2b95126bc438510b2', '2017-04-03T08:50:00.000Z')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
