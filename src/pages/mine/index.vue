<template>
  <div class="BigBox">
    <router-view></router-view>
    <section class="bgColor" v-if="this.$route.meta.flag">
      <!-- 头部 -->
      <div class="mineHeader commona">
        <div class="mineInfo">
          <p>
            <img src="../../../public/img/message.png" alt />
          </p>

          <!-- 头像以及信息 -->
          <div class="headImg">
            <div class="headImgBox"></div>
            <div class="headInfoBox">
              <router-link
                ref="zhi"
                to="/mine/login"
                tag="div"
                v-if="!isLogin"
                class="headInfoTop"
              >登录/注册</router-link>

              <div v-else class="headInfoTop">
                {{$route.query.userId}}
                <span @click="quit">退出</span>
              </div>

              <div class="headInfoBottom">普通会员</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 优惠券 -->
      <div class="ticket">
        <ul>
          <router-link :to="'/mine/coupon'" tag="li">
            <p class="count">0</p>
            <span class="text">优惠券</span>
          </router-link>
          <router-link :to="'/mine/coupon'" tag="li">
            <p class="count">￥0</p>
            <span class="text">回收代金券</span>
          </router-link>
          <router-link :to="'/mine/coupon'" tag="li">
            <p class="count">0</p>
            <span class="text">收藏</span>
          </router-link>
          <router-link :to="'/mine/coupon'" tag="li">
            <p class="count">0</p>
            <span class="text">积分</span>
          </router-link>
        </ul>
      </div>

      <!-- Mind 订单 -->
      <div class="mineOrder">
        <div class="my_order">
          <div class="myOrderLeft">我的订单</div>
          <div class="myOrderRight">
            <a href>查看详情</a>
          </div>
        </div>
        <ul>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order1.png" alt />
            <span>待付款</span>
          </router-link>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order2.png" alt />
            <span>待收货</span>
          </router-link>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order3.png" alt />
            <span>已完成</span>
          </router-link>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order4.png" alt />
            <span>回收订单</span>
          </router-link>
        </ul>
      </div>

      <!-- Mind 工具 -->
      <div class="mineOrder">
        <div class="my_order">
          <div class="myOrderLeft">我的工具</div>
        </div>
        <ul>
          <li>
            <img src="../../../public/img/tools1.png" alt />
            <span>会员中心</span>
          </li>
          <router-link to="/mine/site" tag="li">
            <img src="../../../public/img/tools2.png" alt />
            <span>收货地址</span>
          </router-link>
          <li>
            <img src="../../../public/img/tools3.png" alt />
            <span>我的预约</span>
          </li>
          <li>
            <img src="../../../public/img/tools4.png" alt />
            <span>NB码</span>
          </li>
          <li>
            <img src="../../../public/img/tools5.png" alt />
            <span>专属勋章</span>
          </li>
        </ul>
      </div>

      <!-- Mind 服务 -->
      <div class="mineOrder">
        <div class="my_order">
          <div class="myOrderLeft">售后服务</div>
          <div class="myOrderRight">
            <a href>查看详情</a>
          </div>
        </div>
        <ul>
          <li>
            <img src="../../../public/img/fuwu1.png" alt />
            <span>售后网点</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu2.png" alt />
            <span>以旧换新</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu3.png" alt />
            <span>真伪查询</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu4.png" alt />
            <span>非保价格查询</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu5.png" alt />
            <span>寄修服务</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu6.png" alt />
            <span>意外报站服务</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu7.png" alt />
            <span>售后订单</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Mine",
  created() {
    let info = this.$route.query.userId;
    // console.log(info)
    if (info) {
      this.isLogin = true;
      localStorage.setItem("quanxian", JSON.stringify(this.userInfo));
    }
    // this.userInfo = info
  },
  data() {
    return {
      userInfo: "1111",
      isLogin: false
    };
  },
  watch: {
    $route(to, from) {
      let info = to.query.userId;
      if (info == undefined) {
        this.isLogin = false;
      } else if (info) {
        this.isLogin = true;
        localStorage.setItem("quanxian", JSON.stringify(this.userInfo));
      }
    }
  },
  methods: {
    isLogina() {
      this.isLogin = true;
    },
    quit() {
      this.$router.push("/mine");
      this.isLogin = false;
      localStorage.removeItem("quanxian");
    }
  }
};
</script>
<style>
.BigBox {
  /* overflow: hidden; */
  height: 6.67rem;
}
.bgColor {
  background: #f5f5f5;
  padding-bottom: 0.56rem;
}
.mineHeader {
  width: 100%;
  height: 1.24rem;
  background: url("../../../public/img/mineHeader.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 0.15rem;
}
.commona {
  background-color: #000;
}
.mineInfo {
  width: 100%;
  height: 0.25rem;
}
.mineInfo p {
  width: 100%;
  height: 0.25rem;
  display: flex;
  justify-content: flex-end;
}
.mineInfo p img {
  width: 0.25rem;
  height: 0.25rem;
}
.headImg {
  width: 100%;
  height: 0.8rem;
  display: flex;
}
.headImgBox {
  width: 0.6rem;
  height: 0.6rem;
  background: url("../../../public/img/HeadImg.png") center center no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.headInfoTop {
  width: 2rem;
  height: 0.2rem;
  font-size: 0.16rem;
  line-height: 0.26rem;
  color: #fff;
}
.headInfoBottom {
  width: 1rem;
  height: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  font-size: 0.12rem;
  padding: 0 0.1rem 0 0.2rem;
  background: url("../../../public/img/xingxing.png") no-repeat left center;
  background-size: 25% 40%;
  line-height: 0.2rem;
  text-align: center;
  color: #fff;
}

/* 优惠券 */
.ticket {
  width: 100%;
  height: 0.74rem;
  padding: 0.14rem 0 0.04rem;
  background: #fff;
}
.ticket ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.ticket ul li {
  width: 0.938rem;
  height: 0.56rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ticket ul li p {
  font-size: 0.18rem;
  text-align: center;
}
.ticket ul li span {
  font-size: 0.12rem;
  text-align: center;
  color: #7f7f7f;
}

/* mine Order */
.mineOrder {
  width: 100%;
  min-height: 1.45rem;
  margin-top: 0.1rem;
  padding: 0.18rem 0 0.13rem;
  background: #fff;
  overflow: hidden;
}
.my_order {
  width: 100%;
  height: 0.2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.22rem;
}
.my_order .myOrderLeft {
  font-size: 0.18rem;
  color: #000;
  line-height: 0.2rem;
  font-weight: 6rem;
}
.myOrderRight {
  font-size: 0.14rem;
  background: url("../../../public/img/right.png") no-repeat center right;
  width: 0.76rem;
  background-size: 0.12rem;
  padding-right: 0.2rem;
}
.myOrderRight a {
  color: #7f7f7f;
}
.mineOrder > ul {
  width: 100%;
  height: 0.64rem;
  font-size: 0.12rem;
  color: #7f7f7f;
  padding: 0.18rem 0 0.13rem;
}
.mineOrder > ul li {
  width: 0.93rem;
  height: 0.64rem;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
}
.mineOrder > ul li img {
  width: 0.4rem;
  height: 0.4rem;
}
.mineOrder > ul li span {
  margin-top: 0.06rem;
  width: 100%;
  text-align: center;
}
</style>