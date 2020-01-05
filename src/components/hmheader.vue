<template>
  <div class="header">
    <div name="left"></div>
    <div>{{title}}</div>
    <div name="right"></div>
  </div>
</template>

<script>

export default {
  props: ['title']
}
</script>
<style lang="less" scoped>
.header{
    width: 100%;
    border-bottom: 1px solid #ccc;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div:nth-child(2),div:nth-child(3){
        padding: 0 10px;
    }
    > div:nth-child(2){
        text-align: center;
    }

}
</style>
