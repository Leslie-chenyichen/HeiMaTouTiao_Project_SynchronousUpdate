<template>
  <div class="btn" @click="handlerclick">
    <span class="icon"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['icon'],
  methods: {
    handlerclick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less' scoped>
.btn {
  width: 318 * 100vw/360;
  height: 40px;
  background-color: red;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
  text-align: center;
}
</style>
