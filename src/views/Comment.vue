<!-- 唉，请注意看好了：当前是Comment.vue---评论列表页面 ，底部点赞评论的功能-->
<template>
  <div class="comments">
    <myheader title="精彩评论">
      <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
    </myheader>
    <!-- 评论列表的结构 -->
    <div class="lists">
      <div class="item" v-for="comment in commentList" :key="comment.id ">
        <div class="head">
          <img :src="comment.user.head_img" alt />
          <div>
            <p>{{comment.user.nickname}}</p>
            <span>2个小时前</span>
          </div>
          <span>回复</span>
        </div>
        <!-- 这里会有一个报错，要判断一下到底需不需要生成上一级的结构 -->
        <commentItem v-if="comment.parent" :parent="comment.parent"></commentItem>
        <div class="text">{{comment.content}}</div>
      </div>
    </div>
    <!-- 文章区域底部的回复区域 -->
    <hmCommentFooter :post="article" @refresh="refresh" ></hmCommentFooter>
  </div>
</template>
<script>
// 引入公共单组件hmheader.vue
import myheader from '@/components/hmheader.vue'
import commentItem from '@/components/hmCommentltem.vue'
import { getCommentList, getArticleById } from '@/apis/arctile.js'
import hmCommentFooter from '@/components/hmCommentFooter.vue'
export default {
  components: {
    myheader, commentItem, hmCommentFooter
  },
  data () {
    return {
      commentList: [],
      article: {},
      refresh: ''
    }
  },
  async mounted () {
    // 这里被切到hmCommentFooter
    this.init()
    // 打印当前后台返回的数据列表
    console.log(this.commentList)
    // 获取当前文章数据
    let res2 = await getArticleById(this.$route.params.id)
    // console.log(res2)
    this.article = res2.data.data
  },
  methods: {
    async init () {
      // 获取当前的文章评论数据列表区域
      let res = await getCommentList(this.$route.params.id, { pageSize: 30, pageIndex: 1 })
      this.commentList = res.data.data.length > 0 ? res.data.data : this.commentList
      this.commentList = this.commentList.map(value => {
        value.user.head_img = 'http://127.0.0.1:3000' + value.user.head_img
        return value
      })
    }

  },
  refresh () {
    this.init()
    // 让页面划到最高处去
    window.scrollTo(0, 0)
  }
}
</script>
<style lang='less' scoped>
.comments {
  padding-bottom: 50px;
}
.lists {
  border-top: 5px solid #ddd;
  padding: 0 15px;
  .item {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > img {
        width: 50/360 * 100vw;
        height: 50/360 * 100vw;
        display: block;
        border-radius: 50%;
      }
      > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        > span {
          font-size: 12px;
          color: #999;
          line-height: 25px;
        }
      }
      > span {
        color: #999;
        font-size: 13px;
      }
    }
    .text {
      font-size: 14px;
      color: #333;
      padding: 20px 0 10px 0;
    }
  }
}
</style>
