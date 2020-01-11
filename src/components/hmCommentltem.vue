<template>
<div class="commentItem">
    <div class="top">
        <div class="left ">
            <span>{{parent.user.nickname}}</span>
            <span>2分钟前</span>
        </div>
        <span>回复</span>
    </div>
    <div class="bottom">{{parent.content}}</div>
</div>
</template>

<script>
export default {
  props: ['parent']

}
</script>

<style lang='less' scoped>
.commentItem{
    border:1px solid gray;
    padding:5px;
    .top{
        font-size: 12px;
        color: #aaa;
        display: flex;
        justify-content: space-between;
    }
        .bottom{
        font-size: 14px;
        >span{
            line-height: 25px;
    }
        }

}

</style>
