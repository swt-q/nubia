<template>
    <div class="goshoppingtop">
        <span class="iconfont" v-html="icon1" @click="gobackhandler()"></span>
        <span>我的订单</span>
        <span class="iconfont" v-html="icon2"></span>
    </div>
</template>
<script>
export default {
    name:"Goshoppingtop",
    data(){
        return{
            icon1:"&#xe60a;",
            icon2:"&#xe615;"
        }
    },
    methods:{
        gobackhandler(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped>
    .goshoppingtop{
        width:100%;
        height:.5rem;
        border-bottom: 1px solid #ccc;
        position: relative;
        top:0;
        left:0;
        display:flex;
        justify-content: space-between;
        align-items:center;
        box-sizing: border-box;
        padding:0 15px;
    };
    .goshoppingtop span{
        font-size:.2rem;
    }
</style>