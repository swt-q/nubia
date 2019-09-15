<template>
  <div>
    <div class="shoppingcar" v-if="!isHave">
      <!-- 固定头部 -->
      <div class="shoppingcar-header">
        <p>
          <img src="https://static.nubia.cn/mobile/images/m_logo.png" alt />
        </p>
        <p>
          <span class="iconfont" v-html="headermsg[0]"></span>
          <!--点击跳转我的页面-->
          <span class="iconfont" v-html="headermsg[1]"></span>
          <!--点击跳转本购物车-->
        </p>
      </div>

      <!-- 中间空购物车部分 -->
      <div class="nullshoppingcar">
        <div class="shoppingimg">
          <img src="https://static.nubia.cn/mobile/images/emptycart.png" alt />
        </div>
        <div class="text1">
          <h3>购物车还是空的</h3>
        </div>
        <div class="text2">
          <p>现在就去选购吧</p>
        </div>
        <div>
          <router-link tag="button" to="/home">去逛逛</router-link>
          <!---点击跳转努比亚首页--->
        </div>
      </div>

      <!-- 固定底部 -->
      <!-- <Shoppingcarfooter></Shoppingcarfooter> -->
       <!-- <Nubia-tabBar v-if="this.$route.meta.flag"/> -->
    </div>

    <section class="bgColor" v-else>
      <div class="cartHeader">
        <div class="headerLeft"></div>购物车
        <!-- <div class="cartTittle">购物车

        </div>-->
        <div class="cartMenu iconfont icon-wode"></div>
      </div>

      <div class="orderProTop" v-for="(item,index) in goods" :key="index">
        <div class="orderProtopLeft">
          <img :src="item.img" alt />
        </div>
        <div class="orderProtopRight">
          <div class="cartProRT">
            <div class="cartRTT">
              <div class="cartRTTL">{{item.name}}({{item.size}}{{item.color}})</div>
              <div class="cartRTTR" @click="handleSc(index)">
                <img src="../../../public/img/close_btn.png" alt />
              </div>
            </div>
            <div class="catrRTB">
              售价:￥
              <span>{{item.price}}</span>元
            </div>
          </div>

          <div class="cartProRB">
            <div class="cartProRBL">
              <button @click="handleReducer(index)">-</button>
              <input type="text" :value="item.num" />
              <button @click="handleAdd(index)">+</button>
            </div>
            <div class="cartProRBR">
              小计:￥
              <span>{{item.num * item.price}}</span>元
            </div>
          </div>
        </div>
      </div>

      <div class="sumPrice">
        金额合计:
        <div class="sumPR">
          ￥
          <span>{{goodsPrice.goodsPriceSum}}</span>
        </div>
      </div>

      <div class="tuijian">为您推荐</div>
      <div class="zhifu">
        <div class="zhifuBtn">去结算</div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import TabBar from '@components/tabBar';


export default {
   created() {
    let Have =  JSON.parse(sessionStorage.getItem("shoppingcarnum"))
    if (Have) {
      this.isHave = true;
    
    }
  },
  data() {
    return {
      headermsg: ["&#xe608;", "&#xe613;"],
      isHave:false
    };
  },
  components: {
    [TabBar.name]:TabBar
  },
  computed: {
    ...mapState({
      goods: state => state.goods
    }),
    ...mapGetters({
      goodsPrice: "goodsPrice"
    })
  },
  methods: {
    ...mapMutations({
      handleGoodsChange: "handleGoodsChange",
      handleReducer: "handleReducer",
      handleAdd: "handleAdd",
      handleSc:"handleSc"
    })
  }
};
</script>
<style scoped>
/* 固定头部 */
.shoppingcar-header {
  width: 100%;
  height: 0.5rem;

  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.2rem;
}
.shoppingcar-header p {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shoppingcar-header img {
  width: 1.4rem;
  height: 0.22rem;
}
.shoppingcar-header span {
  font-size: 0.24rem;
}
.shoppingcar-header span:nth-of-type(1) {
  margin-right: 20px;
}
/* 中间空购物车部分 */
.nullshoppingcar {
  position: fixed;
  top: 0.51rem;
  width: 100%;
  height: 100%;
  background: rgb(236, 236, 236);
}
.nullshoppingcar div {
  display: flex;
  justify-content: center;
  font-size: 0.17rem;
}
.shoppingimg {
  width: 100%;
  display: flex;
  justify-content: center;
}
.shoppingimg img {
  margin-top: 0.7rem;
  margin-bottom: 0.3rem;
  width: 1.8rem;
  height: 1.68rem;
}
.text1 {
  color: #50555b;
  margin-bottom: 0.07rem;
}
.text2 p {
  font-size: 0.125rem;
  margin-bottom: 0.09rem;
  color: #87888c;
}
button {
  width: 1.7rem;
  height: 0.46rem;
  font-size: 0.17rem;
  font-weight: 700;
  text-align: center;
  line-height: 0.46rem;
  color: #515459;
  text-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
}

.bgColor {
  width: 100%;
  height: 6.67rem;
  background: #f5f5f5;
  padding-bottom: 0.7rem;
  overflow: auto;
}
.cartHeader {
  width: 100%;
  height: 0.51rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.2rem;
}
.headerLeft {
  width: 0.2rem;
  height: 0.2rem;
  margin-left: 0.1rem;

  background: url("../../../public/img/left.png") no-repeat center;
}
.cartMenu {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.1rem;
  font-size: 0.2rem;
  line-height: 0.3rem;
  /* vertical-align: middle; */
}
.orderProTop {
  width: 100%;
  height: 1.09rem;
  border-bottom: 1px soid #ccc;
  background: #fff;
  overflow: hidden;
  display: flex;
}
.orderProtopLeft {
  width: 0.9rem;
  height: 100%;
}
.orderProtopLeft img {
  width: 0.68rem;
  height: 0.68rem;
  display: block;
  margin: 0.08rem;
}
.orderProtopRight {
  flex: 1;
  height: 100%;
}
.cartProRT {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
.cartProRB {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cartRTT {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cartRTTL {
  font-size: 0.14rem;
  color: #434343;
}
.cartRTTR {
  width: 0.28rem;
  height: 0.28rem;
  margin: 0.06rem 0.06rem 0 0;
}
.cartRTTR img {
  width: 100%;
  height: 100%;
}
.catrRTB {
  font-size: 0.14rem;
  color: #87888c;
  line-height: 0.35rem;
}
.cartProRBL {
  width: 1.43rem;
  height: 0.5rem;
  font-size: 0.13rem;
  color: #2c2c2c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cartProRBL button,
input {
  background: #fff;
  border: 1px solid #ccc;
  outline: none;
}
.cartProRBL button {
  width: 0.3rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
}
.cartProRBL input {
  width: 0.4rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
}
.cartProRBR {
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.13rem;
  margin-right: 0.1rem;
}
.sumPrice {
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.18rem;
  text-align: center;
  float: left;
  background: #fff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.sumPR {
  width: 1rem;
  float: right;
  margin-right: 0.2rem;
  color: #e60012;
}
.tuijian {
  width: 100%;

  padding-left: 0.1rem;
  color: #000;
  font-size: 0.16rem;
  line-height: 0.5rem;
  background: #fff;
}
.zhifu {
  width: 100%;
  height: 0.7rem;
  position: fixed;
  bottom: 0;

  border-top: #ccc 1px solid;
  background: #fff;
}
.zhifuBtn {
  width: 3.3rem;
  height: 0.44rem;
  background: #ff4d4d;
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.17rem;
  color: #fff;
  margin: 0.1rem auto;
  border-radius: 0.44rem;
}
</style>