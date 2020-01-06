<template>
  <div class="edit">
    <hmheader title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
    </hmheader>
    <div class="userimg">
      <img :src="currentUser.head_img" alt />
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
import { getUserById, updateUserById } from '@/apis/user.js'
import { uploaFile } from '@/apis/upload.js'

export default {
  components: {
    hmheader,
    hmcell
  },
  data () {
    return {
      currentUser: {

      }
    }
  },
  async mounted () {
    let res = await getUserById(this.$route.params.id)
    console.log(res)
    if (res.data.message === '获取成功') {
      this.currentUser = res.data.data
      if (this.currentUser.head_img) {
        this.currentUser.head_img = 'http://127.0.0.1:3000' + this.currentUser.head_img
      } else {
        this.currentUser.head_img = 'http://127.0.0.1:3000/uploads/images/default.png'
      }
    }
  },
  methods: {
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      let formdata = new FormData()
      formdata.append('file', file.file)
      let res = await uploaFile(formdata)
      // console.log(res)
      if (res.data.message === '文件上传成功') {
        this.currentUser.head_img = 'http://127.0.0.1:3000' + res.data.data.url
        let res2 = await updateUserById(this.currentUser.id, {
          head_img: res.data.data.url })
        console.log(res2)
        if (res2.data.message === '修改成功') {
          this.$toast.success('修改成功')
        } else {
          this.$toast.success('修改失败')
        }
      } else {
        this.$toast.fail('文件上传失败')
      }
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
