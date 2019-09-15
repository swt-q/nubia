<template>
  <div>
    <section class="order">
      <div class="orderHeader">
        <div class="headerLeft">
          <p>
            <v-touch tag="span" @tap="goback()" class="Headerback"></v-touch>
            <span>全部订单</span>
          </p>
        </div>
      </div>

      <div class="orderCenter">
        <ul>
          <li>全部</li>
          <li>待付款</li>
          <li>待收货</li>
          <li>已完成</li>
        </ul>
      </div>

      <div class="orderList">
        <div class="orderItem">
          <div class="orderItem-id">
            <div class="orderId">订单号:M190981551577815762</div>
            <div class="orderstate">未确认</div>
          </div>
          <div class="orderProduct">
            <div class="orderProTop">
              <div class="orderProtopLeft"></div>
              <div class="orderProtopRight">
                <p class="pro-title">红魔3</p>
                <p class="pro-info">6GB+128GB 玄铁黑</p>
                <p class="pro-price">
                  售价:￥
                  <span class="pro-jiage1">2399</span>
                  x
                  <span class="pro-jiage2">1</span>
                </p>
              </div>
            </div>

            <div class="orderProCenter">
                    共计1件
                    <span class="toogle">￥2399</span>
                    (含运费￥0)
            </div>
            <div class="orderProBottom">
                <div class="failOrder">取消订单</div>
                <div class="succOrder">立即支付</div>
            </div>
           
          </div>
        </div>
      </div>


      
       <div class="nomore">
                
                没有更多了~
            </div>
    </section>
  </div>
</template>
<script>
export default {

  name:"order",
  methods: {
    goback(){
      this.$router.back()
    }
  },
};
</script>
<style scoped>
.order {
  width: 100%;
  height: 6.67rem;
  background: #f5f5f5;
}
.orderHeader {
  width: 100%;
  height: 0.5rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.headerLeft {
  width: 1.06rem;
  height: 0.5rem;
}
.headerLeft p {
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  color: #464646;
  margin-left: 0.07rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.headerLeft p .Headerback {
  display: block;
  float: left;
  width: 0.2rem;
  height: 0.2rem;
  /* vertical-align: middle; */
  background: url("../../../public/img/left.png") no-repeat center;
}
.headerLeft span {
  display: block;
}

.orderCenter {
  width: 100%;
  height: 0.41rem;
  background: #fff;
}
.orderCenter ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.orderCenter ul li {
  font-size: 0.14rem;
  height: 100%;
  width: 0.56rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}
.orderCenter ul li:nth-child(1) {
  border-bottom: 2px solid #ff4d4d;
}

.orderList {
  width: 100%;
  min-height: 0.3rem;
}
.orderItem {
  width: 3.5rem;
  height: 2.17rem;
  margin: 0.128rem;
  padding: 0 0.16rem 0.128rem;
  background: #fff;
}
.orderItem-id {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orderId {
  width: 2rem;
  font-size: 0.12rem;
  color: #ccc;
}
.orderstate {
  font-size: 0.16rem;
  color: #ff4d4d;
}
.orderProduct {
  width: 100%;
  height: 1.21rem;
}
.orderProTop {
  width: 100%;
  height: 0.78rem;
  display: flex;
}
.orderProtopLeft {
  width: 0.78rem;
  height: 0.78rem;
  background: url("../../../public/img/fuwu4.png") center center no-repeat;
  background-size: 100% 100%;
}
.orderProtopRight {
  height: 0.78rem;
  float: left;
  flex: 1;
  margin-left: 0.1rem;
}
.orderProtopRight p {
  display: block;
  width: 100%;

  margin-top: 0.08rem;
  font-size: 0.13rem;
  color: #333;
}
.orderProCenter{
    width: 100%;
    height: 0.35rem;
    font-size:0.13rem;
    margin: 0.08rem 0 0;
    line-height: 0.35rem;
    text-align: right;


}
.toogle{
    font-size: 0.18rem;
    color:#ff4d4d;
}
.orderProBottom{
    width:100%;
    height: 0.5rem;
    display: flex;
    justify-content: flex-end
}
.orderProBottom div{
    width: 1rem;
    height: 0.35rem;
    border: 1px solid #ccc;
    margin-left: 0.05rem;
    font-size: 0.13rem;
    line-height: 0.35rem;
    text-align: center;
    color:#ccc;
    border-radius: 0.03rem;

}
 .orderProBottom .succOrder{
    color: #ff4d4d;
    border-color:#ff4d4d;
}

.nomore{
    width: 100%;
    height: 0.48rem;
    font-size:0.13rem;
    text-align: center;
    color: #9c9c9c; 
    line-height: 0.48rem;
}
</style>