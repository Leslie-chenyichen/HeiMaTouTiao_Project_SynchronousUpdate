<template>
  <div class="edit">
    <hmheader title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
    </hmheader>
    <div class="userimg">
      <img src="http://127.0.0.1:3000/uploads/image/IMG1569381163794.jpeg" alt="">
      <hmcell title="昵称" desc='我是谁'></hmcell>
      <hmcell title="密码" desc='123456'></hmcell>
      <hmcell title="性别" desc='男'></hmcell>
    </div>
  </div>
</template>

<script>
import hmheader from '@/components/hmheader.vue'
import hmcell from '@/components/hmcell.vue'
export default {
  components: {
    hmheader, hmcell
  }
}
</script>

<style lang='less' scoped>
.userimg{
  padding: 20px 0;
  > img{
    width:90/360*100vw;
    height: 90/360*100vw;
    display: block;
    margin: 15px auto;
    border-radius: 50%;
    background: green;
  }
}
</style>
