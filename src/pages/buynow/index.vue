<template>
  <div id="goshopping">
    <!-- 立即购买头部 -->
    <Goshoppingtop></Goshoppingtop>
    <!-- 添加收获地址 -->
    <div class="adddressbox">
      <P class="adddress" @click="addurlhandler()">添加地址</p>
    </div>
    <!-- 在线支付 -->
    <div class="paylinemoney">
      <p>在线支付</p>
    </div>
    <!-- 配送信息 -->
    <div class="give">
      <div v-for="(item,index) in givegoods" :key="index" class="givemsgs">
        <span class="titles">{{item.title}}</span>
        <p>
          <span>{{item.info}}</span>
          <span v-html="item.icon" class="iconfont"></span>
        </p>
      </div>
    </div>
    <!-- 购物活动 -->
    <div class="goshoppingactive">
      <div v-for="(item,index) in gomsggood" :key="index" class="givemsgs">
        <span class="titles">{{item.title}}</span>
        <p>
          <span>{{item.info}}</span>
          <span v-html="item.icon" class="iconfont"></span>
        </p>
      </div>
    </div>
    <!-- 购买商品信息 -->
    <div class="goshoppingmsg">
      <div class="goshoppingmsg-l">
        <img
          :src="buynowgoodsmsg.img"
          alt
        />
      </div>
      <div class="goshoppingmsg-r">
        <p>
          <span>{{buynowgoodsmsg.name}}</span>
          <span>({{buynowgoodsmsg.size}} {{buynowgoodsmsg.color}})</span>
        </p>
        <p>
          <span>售价：￥{{buynowgoodsmsg.price}}元</span>
          <span>数量：{{buynowgoodsmsg.num}}</span>
        </p>
      </div>
    </div>
    <!-- 商品购买价格介绍 -->
    <div class="pricemsg">
       <p>
        <span>商品金额</span>
        <span>￥{{buynowgoodsmsg.price}}元</span>
      </p>
      <p>
        <span>运费</span>
        <span>￥0.00元</span>
      </p>
      <p>
        <span>订单金额</span>
        <span>￥{{buynowgoodsmsg.price}}元</span>
      </p>
    </div>
    <!-- 支付购买底部确认购买 -->
    <div class="payok">
      <p>提交订单</p>
    </div>

  </div>
  
</template>
<script>
import Goshoppingtop from "@components/buynowtop";
export default {
  name: "Goshopping",
  created(){
    setTimeout(()=>{
      this.buynowgoodsmsg = JSON.parse(sessionStorage.getItem("buynowmsg"));
    },0);
  },
  data() {
    return {
      buynowgoodsmsg:{},
      givegoods: [
        {
          title: "配送时间",
          info: "只工作日送货(假日不配送)",
          icon: "&#xe610;"
        },
        {
          title: "发票类型",
          info: "电子发票",
          icon: "&#xe610;"
        },
        {
          title: "发票信息",
          info: "个人发票",
          icon: "&#xe610;"
        }
      ],
      gomsggood: [
        {
          title: "优惠卷",
          info: "无可用",
          icon: "&#xe610;"
        },
        {
          title: "积分",
          info: "可用0积分抵￥0.00",
          icon: "&#xe610;"
        },
        {
          title: "代金卷",
          info: "可用回收代金券￥0",
          icon: "&#xe610;"
        }
      ]
    };
  },
  components: {
    [Goshoppingtop.name]: Goshoppingtop
  },
  methods:{
    addurlhandler(){
      this.$router.push("/mine/site");
    }
  }
};
</script>

<style lang="scss" scoped>
#goshopping {
  height: 6.67rem;
}
// 添加收获地址
.adddressbox {
  width: 100%;
  height: 0.5867rem;
  box-sizing: border-box;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.adddressbox p {
  width: 3.75rem;
  height: 0.46rem;
  font-size: 0.17rem;
  background-color: #fff;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #515459;
  font-weight: 700;
  background-image: linear-gradient(#f3f4f6, #dfe0e2);
  text-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.02941em 0.11765em 0 inset;
  border-top-color: #d3d4d5;
  border-left-color: #dadbdd;
  border-right-color: #dadbdd;
  border-bottom-color: #dadbdd;
}

// 线上支付
.paylinemoney {
  width: 100%;
  height: 0.5867rem;
  font-size: 0.16rem;
border-left: .05rem solid #ef5f00;

  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.paylinemoney p {
  width: 100%;
  height: 0.5867rem;
  font-size: 0.16rem;
  line-height: 0.46rem;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 0.4rem;
}
// 配送信息

.givemsgs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  padding: 0.15rem 0.2rem;
  background-color: #fff;
}
.titles {
  display: inline-block;
  font-size: 0.16rem;
  color: #000;
  background-color: #fff;
}

.givemsgs p span {
  font-size: 0.16rem;
  color: #8c8c8c;
}
.givemsgs p span:nth-of-type(1) {
  font-size: 0.16rem;
  color: #8c8c8c;
}
.goshoppingactive {
  box-sizing: content-box;
  padding-top: 0.065rem;
  background-color: #f0f0f0;
  padding-bottom: 0.065rem;
}

// 购买商品信息
.goshoppingmsg {
  width: 100%;
  height: 0.98rem;
  background-color: #fff;
  display: flex;
}
.goshoppingmsg img {
  width: 0.68rem;
  height: 0.68rem;
}
.goshoppingmsg-l {
  width: 0.68rem;
  height: 0.68rem;
  margin: 0.15rem 0.05rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goshoppingmsg-r {
  width: 2.8733rem;
  height: 0.98rem;
  margin-right: 0.05rem;
  margin-top: 0.07rem;
}
.goshoppingmsg-r p:nth-of-type(1) {
  font-size: 0.16rem;
  color: #2c2c2c;
  line-height: 1.2;
  margin: 0.16rem 0;
}
.goshoppingmsg-r p:nth-of-type(2) {
  font-size: 0.13rem;
  color: #87888c;
  line-height: 1;
}
.goshoppingmsg-r p:nth-of-type(2) span {
  margin-right: 0.15rem;
}

// 购买商品价格信息
.pricemsg {
  width: 100%;
  height: 0.99rem;
  background: #f0f0f0;
  padding: 0.065rem 0;
  margin-bottom: 0.72rem;
}
.pricemsg p {
  width: 100%;
  height: 0.33rem;
  background-color: #fff;
}
.pricemsg p span {
  display: inline-block;
  text-align: right;
  line-height: 0.33rem;
}
.pricemsg p span:nth-of-type(1) {
  width: 60%;
  color: #2c2c2c;
}
.pricemsg p span:nth-of-type(2) {
  width: 40%;
  color: #e60012;
  box-sizing: border-box;
  padding-right:16px;
}
// 订单详情底部 提交支付
.payok {
  width: 100%;
  height: 0.63rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  border-top: 1px solid #dcdcdc;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -0.05em 0.3em, #fff 0 1px 0 0 inset;
}
.payok p {
  width: 3.3rem;
  height: 0.44rem;
  background-color: #ff4d4d;
  color: #fff;
  border-radius: 0.22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.17rem;
  font-weight: 700;
}
</style>