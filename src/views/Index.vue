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
      <div class="search" @click="$router.push({name:'Search'})">
        <van-icon name="search" />
        <span>搜索你想要的商品</span>
      </div>
      <!-- 用户头像区域 -->
      <div class="user" @click="$router.push({path:`/personal/${id}`})">
        <van-icon name="manager-o" />
      </div>
    </div>
    <!-- 这里是标签页的结构 -->
    <div class="nav">
      <van-tabs v-model="active" sticky swipeable>
        <van-tab title="关注">内容 1</van-tab>
        <van-tab title="推荐">内容 2</van-tab>
        <van-tab title="黑马视频">内容 3</van-tab>
        <van-tab title="段子">内容 4</van-tab>
        <van-tab title="时尚">内容 5</van-tab>
        <van-tab title="游戏">内容 6</van-tab>
        <van-tab title="教育">内容 7</van-tab>
        <van-tab title="健康">内容 8</van-tab>
        <van-tab title="旅游">内容 9</van-tab>
        <van-tab title="房产">内容 10</van-tab>
        <van-tab title="体育">内容 11</van-tab>
        <van-tab title="财经">内容 12</van-tab>
        <van-tab title="汽车">内容 13</van-tab>
        <van-tab title="男人">内容 14</van-tab>
        <van-tab title="军事">内容 15</van-tab>
        <van-tab title="科技">内容 16</van-tab>
        <van-tab title="手机">内容 17</van-tab>
        <van-tab title="女人">内容 18</van-tab>
      </van-tabs>
    </div>
    <!-- 这里是新闻列表的结构 -->
    <div class="newList"></div>
  </div>
</template>

<script>
import { getCateList } from '@/apis/cate.js'
export default {
  data () {
    return {
      id: '',
      active: 1,
      cateList: []

    }
  },
  async mounted () {
    // 获取用户id
    this.id = JSON.parse(localStorage.getItem('toutiao_41_userInfo') || '{}').id

    // 获取所有栏目数据
    let res = await getCateList()
    console.log(res)
    this.cateList = res.data.data
  }
}
</script>

<style lang='less' scoped>
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
    border-radius: 20px;
    flex: 1;
    background-color: rgba(255, 255, 255, 0.4);
    text-align: center;
    line-height: 40px;
  }
}
</style>
