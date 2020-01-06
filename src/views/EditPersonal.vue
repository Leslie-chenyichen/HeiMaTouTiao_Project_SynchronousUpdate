<template>
  <div class="edit">
    <hmheader title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
    </hmheader>
    <div class="userimg">
      <img src="http://127.0.0.1:3000/uploads/image/leslie_ILove.jpg" alt />
      <van-uploader :after-read="afterRead" />
    </div>
    <hmcell title="昵称" desc="我是谁"></hmcell>
    <hmcell title="密码" desc="123456"></hmcell>
    <hmcell title="性别" desc="男"></hmcell>
  </div>
</template>

<script>
import hmheader from '@/components/hmheader.vue'
import hmcell from '@/components/hmcell.vue'
import { uploaFile } from '@/apis/upload.js'
export default {
  components: {
    hmheader,
    hmcell
  },
  methods: {
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      let formdata = new FormData()
      formdata.append('file', file.file)
      let res = await uploaFile(formdata)
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.userimg{
    height: 150px;
    position: relative;
    > img {
        width: 90/360*100vw;
        height: 90/360*100vw;
        display: block;
        border-radius: 50%;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    /deep/.van-uploader__upload{
        width: 90/360*100vw;
        height: 90/360*100vw;
    }
    /deep/.van-uploader{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        opacity: 0;
    }
}
</style>
