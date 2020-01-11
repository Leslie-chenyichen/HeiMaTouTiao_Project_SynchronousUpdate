<template>
  <div class="cate">
    <myheader title="频道管理">
      <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
    </myheader>
    <div class="mycate">
      <p>点击删除频道</p>
      <span v-for="(item,index) in cateList" :key="item.id" @click="removeCate(index)">{{item.name}}</span>
    </div>
    <div class="mycate">
      <p>点击删除频道</p>
      <span v-for="(item,index) in unaddCateList" :key="item.id" @click="addCate(index)">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import myheader from '@/components/hmheader.vue'
import { getCateList } from '@/apis/cate.js'
export default {
  components: {
    myheader
  },
  data () {
    return {
      cateList: []
    }
  },
  async mounted () {
    let res = await getCateList()
    console.log(res)
    this.cateList = res.data.data
    if (localStorage.getItem('toutiao_41_token')) {
      this.cateList = this.cateList.splice(2)
    } else {
      this.cateList = this.cateList.splice(1)
      console.log(this.cateList)
    }
  }
}
</script>

<style lang='less' secdep>
.mycate {
  padding: 15px;
  clear: both;
  > p {
    font-size: 16px;
    color: #888;
    line-height: 30px;
  }
  > span {
    float: left;
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin-left: 12px;
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>
