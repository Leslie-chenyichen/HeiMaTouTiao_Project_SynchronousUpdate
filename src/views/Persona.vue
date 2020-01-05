<template>
  <div class="persona">
    <router-link to="/edit_profile">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img src="http://img1.imgtn.bdimg.com/it/u=3757784226,1202878475&fm=26&gp=0.jpg" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{curentUser.nickname}}
          </div>
          <div class="time">{{curentUser.create_date}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
      <hmcell title="我的关注" desc="关注的用户"></hmcell>
      <hmcell title="我的跟帖" desc="跟帖/回复"></hmcell>
      <hmcell title="我的收藏" desc="文章/视频"></hmcell>
      <hmcell title="设置"></hmcell>
      <hmbutton class="btn">退出</hmbutton >
    </router-link>
  </div>
</template>

<script>
import hmcell from '@/components/hmcell.vue'
import hmbutton from '@/components/hmbutton'
import { getUserById } from '@/apis/user.js'
export default {
  components: {
    hmcell, hmbutton
  },
  data () {
    return {
      curentUser: {}
    }
  },
  async mounted () {
    let res = await getUserById(this.$route.params.id)
    if (res.data.message === '获取成功') {
      this.curentUser = res.data.data
    } else if (res.data.message === '用户信息验证失败') {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang='less' scoped>
.persona {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
.btn{
   margin: 20px auto;
   background-color: #fd0000;
}
</style>
