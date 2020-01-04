<template>
  <input type="text" class="hminput" :class="{'success':statu,'error':!statu}"
  @input="handleinput" @blur="handleBlur"/>
</template>

<script>
export default {
  props: ['rules', 'msg'],
  data () {
    return {
      // 标记一下用户的输入合不合法
      statu: ''
    }
  },
  methods: {
    handleinput (event) {
      let value = event.target.value
      console.log(value)
      // 正则的匹配方法
      // test侧重的是匹配
      if (this.rules && this.rules.test(value)) {
        this.statu = true
      } else {
        this.statu = false
      }
      //
      this.$emit('input', value)
    },
    handleBlur () {
      let value = event.target.value
      if (this.rules && !this.rules.test(value)) {
        console.log(this.msg || '输入不正确')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.hminput {
  width: 318/360 * 100vw;
  height: 60px;
  outline: none;
  border: none;
  border-bottom: 3px solid #ccc;
  font-size: 16px;
  line-height: 60px;
}
.success {
  border-bottom-color: green;
}
.error {
  border-bottom-color: red;
}
</style>
