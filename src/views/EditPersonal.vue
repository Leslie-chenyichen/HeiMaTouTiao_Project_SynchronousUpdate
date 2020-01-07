<template>
  <div class="edit">
    <hmheader title="编辑个人信息">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
    </hmheader>
    <div class="userimg">
      <img :src="currentUser.head_img" alt />
      <van-uploader :after-read="afterRead" />
    </div>
    <hmcell title="昵称" :desc="currentUser.nickname" @click="nickshow=!nickshow"></hmcell>
    <van-dialog v-model="nickshow" title="修改昵称" show-cancel-button @confirm="updateNickname">
      <van-field ref="nick" :value="currentUser.nickname" placeholder="请输入昵称" required label="用户名" />
    </van-dialog>
    <hmcell title="密码" :desc="currentUser.password" type="password" @click="password=!password"></hmcell>
    <van-dialog
      v-model="password"
      title="修改密码"
      show-cancel-button
      @confirm="updatePassword"
      :before-close="beforeClose"
    >
      <van-field ref="originalpass" placeholder="请输入原密码" required label="原密码" />
      <van-field ref="newpassword" placeholder="请输入新密码" required label="新密码" />
    </van-dialog>
    <hmcell title="性别" :desc="currentUser.gender===0?'女':'男'" @click="gendershow=!gendershow"></hmcell>
      <van-dialog v-model="gendershow" title="修改性别" show-cancel-button @confirm="updateGender">
      <van-picker :columns="['女','男']" :default-index="currentUser.gender" @change="onChange" />
    </van-dialog>
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
      currentUser: {},
      nickshow: false,
      password: false,
      gendershow: false,
      gender: ''
    }
  },
  async mounted () {
    let res = await getUserById(this.$route.params.id)
    console.log(res)
    if (res.data.message === '获取成功') {
      this.currentUser = res.data.data
      if (this.currentUser.head_img) {
        this.currentUser.head_img =
          'http://127.0.0.1:3000' + this.currentUser.head_img
      } else {
        this.currentUser.head_img =
          'http://127.0.0.1:3000/uploads/images/default.png'
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
          head_img: res.data.data.url
        })
        console.log(res2)
        if (res2.data.message === '修改成功') {
          this.$toast.success('修改成功')
        } else {
          this.$toast.success('修改失败')
        }
      } else {
        this.$toast.fail('文件上传失败')
      }
    },
    // 用户名
    async updateNickname () {
      let name = this.$refs.nick.$refs.input.value
      // 更新密码
      let res = await updateUserById(this.currentUser.id, { nickname: name })
      if (res.data.message === '修复成功') {
        this.currenUser.nickname = name
        this.$toast.success('修改成功')
      } else {
        this.$toast.fail('修改失败')
      }
    },
    // 更新密码
    updatePassword () {
      let originalpass = this.$refs.originalpass.$refs.input.value

      if (originalpass === this.currentUser.password) {
        let newpassword = this.$refs.newpassword.$refs.input.value
        if (/^\S{3,6}$/.test(newpassword)) {

        }
      }
    },
    // 用户密码
    beforeClose (action, done) {
      // 如果用户单击的的确认，那么就要判断原密码是否正确
      if (action === 'confirm') {
        // 获取到用户输入的原密码
        let originalpass = this.$refs.originalpass.$refs.input.value
        // 获取了原密码后就判断原密码对不对
        if (originalpass === !this.currentUser.password) {
          this.$toast.fail('输入原密码不正确') // 给用户弹出提示
          this.$refs.originalpass.$refs.input.select()// 调出那个弹窗关闭
          this.$refs.originalpass.$refs.input.focus()
          done(false)
        } else if (/^\S{3,6}$/.test(this.$refs.newpassword.$refs.input.value)) {
          this.$toast.fail('请你输入3-16位新的密码')
          done(false)
        }
      } else {
        done()
      }
    },
    // 修改性别
    async updateGender () {
      // console.log(this.gender)
      // 更新性别
      let res = await updateUserById(this.currentUser.id, { gender: this.gender })
      if (res.data.message === '修复成功') {
        this.currenUser.gender = this.gender
        this.$toast.success('修改成功')
      } else {
        this.$toast.fail('修改失败')
      }
    },
    onChange (picker, value, index) {
      console.log(this.currentUser.gender)
      this.$toast(`当前值：${value},当前索引：${index}`)
    }
  }
}
</script>

<style lang='less' scoped>
.userimg {
  height: 150px;
  position: relative;
  > img {
    width: 90/360 * 100vw;
    height: 90/360 * 100vw;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  /deep/.van-uploader__upload {
    width: 90/360 * 100vw;
    height: 90/360 * 100vw;
  }
  /deep/.van-uploader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
