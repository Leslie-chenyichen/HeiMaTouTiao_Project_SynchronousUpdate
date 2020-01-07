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
        <div class="search">
          <van-icon name="search" />
          <span>搜索你想要的商品</span>
        </div>
        <!-- 用户头像区域 -->
        <div class="user">
          <van-icon name="manager-o" />
        </div>
      </div>
      <!-- 这里是标签页的结构 -->
      <div class="nav"></div>
      <!-- 这里是新闻列表的结构 -->
      <div class="newList"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.header{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #f00;
  align-items: center;
  color: #fff;
   .logo{
    padding: 0 10px;
    .iconnew{
      font-size: 60px;
    }
  }
  .user{
     font-size: 30px;
     padding: 0 10px;
  }
  .search{
    height: 40px;
    border-radius: 20px;
    flex: 1;
    background-color: rgba(255,255,255,0.4);
    text-align: center;
    line-height: 40px;
  }

}

</style>
