<template>

    <!-- 商品详情底部 -->


    <div class="footer">
        <div class="footer-l">
            <p>
                <i class="iconfont" >&#xe609;</i>
                <span>客服</span>
            </p>
            <p>
                <i  class="iconfont collect" :class="changeactive ? 'active':''"  @click="collecthandler()">&#xe688;</i>
                <span>收藏</span>
            </p>
            <p>
                <i class="iconfont" >&#xe600;</i>
                <router-link 
                tag="span"
                to="/cart"
                >购物车</router-link>
            </p>
            <span class="changenum" v-show="cartnum ? true:false">{{cartnum}}</span>
        </div>
        <div class="footer-r">
            <span @click="addgoodscarhandler(productnum)" class="span1">加入购物车</span>

            <router-link 
            class="span2"
            tag="span"
            to="/buynow"
            @click.native="buynowhandler()"
            >立即购买</router-link>

        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex";
    export default {
        name:"Detailsfooter",

        data(){
            return{
               changeactive:"",
            }
        },
        computed:{
            ...mapState({
                productnum:state=>state.productnum,
                cartnum:state=>state.shoppingcarnum,
            })
        },
        methods:{
            ...mapMutations({
                addgoodscarhandler:"addgoodscarhandler",
            }),

            buynowhandler(){
                this.$observer.$emit("changebuynowhandler");
            },

            collecthandler(){
                if(this.changeactive == ""){
                    this.changeactive = "active"
                }else if(this.changeactive == "active"){
                    this.changeactive = ""
                }
            }
           

        }
    }
</script>

<style scoped lang="scss">
    .active{
        color:#ff995f;
    };
    .footer{
        width:100%;
        height:0.5rem;
        position:fixed;
        bottom:0;
        z-index:1;
        font-size:.15rem;
        display:flex;
        background-color:#fff;
        border-top: 1px solid #e9e9e9;
    };
    
    .footer-l{
        width:44%;
        height:100%;
        display: flex;
        justify-content:space-around;
        align-items:center;
    };
    .footer-r{
        width:56%;
        height:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
    };
    .footer-l p i{
        display: inline-block;
        font-size:.255rem;
    };
    .footer-l p span{
        display: inline-block;
        font-size:.113rem;
        color:rgb(156,156,156);
    };
    .footer-l{
        position:relative;
    }
    .footer div p{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    };
    .footer-r span{
        width:50%;
        height:100%;
        color:#ffffff;
        display:flex;
        justify-content:center;
        align-items:center;
    };
    .footer-r .span1{
        background-color:#ff995f;
    };
    .footer-r .span2{
        background-color:#ff5d5d;
    };



    // 显示购物车数量的

    .changenum{
        display: flex;
        justify-content:center;
        align-items:center;
        width:.15rem;
        height:.15rem;
        padding:.02rem;
        border-radius:.075rem;
        font-size:.11rem;
        background-color:#ff5e5e;
        
        color:#fff;
        position:absolute;
        z-index: 9;
        bottom:.3rem;
        left:1.4rem;
    }
    
</style>