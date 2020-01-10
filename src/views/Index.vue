<!-- 唉，请注意看好了：当前是Index.vue首页展示页面 -->
<template>
  <div class="index">
    <!-- 这里是头部的结构 -->
    <div class="header">
      <!-- logo商标区域 -->
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <!-- 搜索区域 -->
      <div class="search" @click="$router.push({ name: 'Search' })">
        <van-icon name="search" />
        <span>搜索你想要的商品</span>
      </div>
      <!-- 用户头像区域 -->
      <div class="user" @click="$router.push({ path: `/personal/${id}` })">
        <van-icon name="manager-o" />
      </div>
    </div>
    <!-- 这里是标签页的结构 v-model="active" sticky -->
 <div class="nav">
      <!-- 整个标签页 -->
      <van-tabs v-model="active" sticky swipeable>
        <!-- 单击标签项及内容面板 -->
        <!-- 生成栏目数据 -->
        <van-tab :title="cate.name" v-for="cate in cateList" :key="cate.id">
          <van-list v-model="cate.loading" :finished="cate.finished" finished-text="没有更多了"  @load="onLoad"
            :immediate-check="false" :offset="10">
            <van-pull-refresh v-model="cate.isLoading" @refresh="onRefresh">
              <!-- 生成当前栏目的文章列表数据 -->
              <hmarticleblock v-for="item in cateList[active].postList" :key="item.id" :post="item" @click="$router.push({path:`/articleDetail/${item.id}`})"></hmarticleblock>
            </van-pull-refresh>
          </van-list>
        </van-tab>
      </van-tabs>
  </div>
</div>
</template>

<script>
import { getCateList } from '@/apis/cate.js'
import { getPostList } from '@/apis/arctile.js'
import hmarticleblock from '@/components/hmarticleBlock.vue'
export default {
  data () {
    return {
      id: '',
      active: localStorage.getItem('toutiao_41_token') ? 1 : 0,
      cateList: []
    }
  },
  watch: {
    active () {
      console.log(this.active)
      if (this.cateList[this.active].postList.length === 0) {
        this.init()
      }
    }
  },
  components: {
    hmarticleblock
  },
  async mounted () {
    // 获取用户id
    this.id = JSON.parse(
      localStorage.getItem('toutiao_41_userInfo') || '{}'
    ).id

    // 获取所有栏目数据
    let res = await getCateList()
    // console.log(res)
    this.cateList = res.data.data
    // console.log(res)
    // 这个是对数据的改造
    this.cateList = this.cateList.map(value => {
      return {
        ...value, // 这个是展示所有的对象，要拿到这个对象的所有的成员
        postList: [], // 这个是栏目的新闻列表数据
        pageSize: 10, // 这个是栏目每页所显示的记录数
        pageIndex: 1, // 这个是栏目当前的页码
        loading: false, // 这个是发起异步的的时候更的数据
        finished: false, // 这个数据全部已加载完毕了
        isLoading: false // 这个是正在加载中的的
      }
    })
    console.log(this.cateList)
    this.init()
  },
  methods: {
    // 注意了！！！methods方法是必须有一一定的触发条件下才能执行
    // 下拉加载下面的内容
    onRefresh () {
      this.cateList[this.active].pageIndex = 1
      // 清空了当前的数据
      this.cateList[this.active].postList.length = 0
      // 这里是发异步的请求
      setTimeout(() => {
        this.init()
      }, 2000)

      // 然后这里就可以重置它的
      this.cateList[this.active].isLoading = false
    },
    onLoad () {
      // 重置页面，让页码回到第1页去
      if (this.cateList[this.active].isLoading === false) {
        this.cateList[this.active].pageIndex++
        setTimeout(() => {
          this.init()
        }, 2000)// 加载缓冲的时间
      }
    },

    async init () {
      let id = this.cateList[this.active].id
      let res2 = await getPostList({
        pageSize: this.cateList[this.active].pageSize,
        pageIndex: this.cateList[this.active].pageIndex,
        category: id
      })
      console.log(res2)
      if (this.cateList[this.active].loading) {
        this.cateList[this.active].loading = false
      }
      if (this.cateList[this.active].isLoading) {
        this.cateList[this.active].isLoading = false
      }
      // console.log(res2.data)
      if (res2.data.data.length < this.cateList[this.active].pageSize) {
        this.cateList[this.active].finished = true
      }
      // 将数据存储到当前栏目的postList中
      this.cateList[this.active].postList.push(...res2.data.data)
    }
  }
}
</script>

<style lang="less" scoped>
/* 这里的这个是index的样式 */
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #f00;
  align-items: center;
  color: #fff;
  .logo {
    padding: 0 10px;
    .iconnew {
      font-size: 60px;
    }
  }
  .user {
    font-size: 30px;
    padding: 0 10px;
  }
  .search {
    height: 40px;
    border-radius: 10;
    flex: 1;
    background-color: rgba(255, 255, 255, 0.4);
    text-align: center;
    line-height: 40px;
  }
}
</style>
