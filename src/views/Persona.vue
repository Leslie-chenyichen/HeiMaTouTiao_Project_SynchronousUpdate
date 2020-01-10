<!-- 唉，请注意看好了：当前是Persona.vue---用户信息展示页面 -->
<template>
  <div class="persona">
    <router-link :to="{path:`/editPersonal/${curentUser.id}`}">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="curentUser.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{curentUser.nickname}}
          </div>
          <div class="time">{{curentUser.create_date}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
      <hmcell title="我的关注" desc="关注的用户" @click="$router.push({name: 'MyFollow'})"></hmcell>
      <hmcell title="我的跟帖" desc="跟帖/回复"></hmcell>
      <hmcell title="我的收藏" desc="文章/视频"></hmcell>
      <!-- <hmcell title="设置"></hmcell> -->
    </router-link>
      <hmbutton @click="exit">退出</hmbutton >
  </div>
</template>

<script>
import hmcell from '@/components/hmcell.vue'
import hmbutton from '@/components/hmbutton.vue'
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
      this.curentUser.head_img = 'http://127.0.0.1:3000' + this.curentUser.head_img
    } else if (res.data.message === '用户信息验证失败') {
      this.$router.push({ name: 'Login' })
    }
  },
  methods: {
    exit () {
      // 首先是清除了token的数据
      localStorage.removeItem('toutiao_41_token')
      // 退出到首页界面上去
      this.$router.push({ name: 'Index' })
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
