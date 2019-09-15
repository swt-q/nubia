<template>
    <div class="shoppingcar">
        <!-- 固定头部 -->
        <div class="shoppingcar-header">
            <p>
                <img src="https://static.nubia.cn/mobile/images/m_logo.png" alt="">
            </p>
            <p>
                <span class="iconfont" v-html="headermsg[0]"></span>   <!--点击跳转我的页面-->
                <span class="iconfont" v-html="headermsg[1]"></span>    <!--点击跳转本购物车-->
            </p>
        </div>

        <!-- 中间空购物车部分 -->
        <div class="nullshoppingcar">
            <div class="shoppingimg">
                <img src="https://static.nubia.cn/mobile/images/emptycart.png" alt="">
            </div>
            <div class="text1">
                <h3>购物车还是空的</h3>
            </div>
            <div class="text2">
                <p>现在就去选购吧</p>
            </div>
            <div>
                <router-link 
                tag="button"
                to="/home"
                >去逛逛</router-link>      <!---点击跳转努比亚首页--->
            </div>
        </div>


        <!-- 固定底部 -->
        <Shoppingcarfooter></Shoppingcarfooter>
        
    </div>
</template>
<script>
import Shoppingcarfooter from "@components/goshoppingfooter";
    export default {
        name:"Shoppingcar",
        data(){
            return{
                headermsg:["&#xe608;","&#xe613;"],
            }
        },
        components:{
            Shoppingcarfooter,
        }
    }
</script>
<style scoped lang="scss">
    
    /* 固定头部 */
    .shoppingcar-header{
        width:100%;
        height:.5rem;
        
        border-bottom:3px solid #ccc;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-sizing: border-box;
        padding:0 .2rem;
    };
    .shoppingcar-header p{
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shoppingcar-header img{
        width:1.4rem;
        height:.22rem;
    };
    .shoppingcar-header span{
        font-size:.24rem;

    };
    .shoppingcar-header span:nth-of-type(1){
        margin-right:20px;
        
    };
    /* 中间空购物车部分 */
    .nullshoppingcar{
        position:fixed;
        top:.51rem;
        width:100%;
        height:100%;
        background: rgb(236, 236, 236);
    };
    .nullshoppingcar div{
        display: flex;
        justify-content: center;
        font-size:.17rem;
    }
    .shoppingimg{
        width:100%;
        display:flex;
        justify-content:center;

    }
    .shoppingimg img{
        margin-top:.7rem;
        margin-bottom:.3rem;
        width:1.8rem;
        height:1.68rem;
    };
    .text1{
        color:#50555b;
        margin-bottom:.07rem;
    };
    .text2 p{
        font-size:.125rem;
        margin-bottom:.09rem;
        color: #87888c;
    };
    button{
        width:1.7rem;
        height:.46rem;
        font-size:.17rem;
        font-weight:700;
        text-align:center;
        line-height:.46rem;
        color:#515459;
        text-shadow: rgba(0,0,0,0.1) 0 1px 0;
    }
    
</style>