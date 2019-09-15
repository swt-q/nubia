<template>
  <div>
    <div class="message">
      <p @click ="goback()">
        <span class="return"></span>
      </p>
      <span class="sale">我的优惠劵</span>
    </div>
    <ul class="nav">
      <v-touch tag="li" @tap="clickHnadler(index)" v-for="(item,index) in message" :key="index" :class="index==colorIndex?'active':''" >{{item}}</v-touch>
    </ul>
    <div class="contentWrap">
      <div>
        <div>
          <img src="https://oss.static.nubia.cn/active/5c515b88a6d8236.png" alt />
          <p>你还没有任何优惠劵</p>
        </div>
      </div>
    </div>
    <div class="numCoupon">
      <input type="text" name class="input" placeholder="请输入优惠劵号码" />
      <input type="submit" value="绑定" class="submit" />
    </div>
  </div>
</template>
<script>
export default {
    name:"coupon",
    data() {
      return {
        message:["未使用(0)","已使用(0)","已失效(0)"],
        colorIndex:0
      }
    },
    methods: {
      clickHnadler(index){
        this.colorIndex = index
      },
      goback(){
        this.$router.back()
      }
    },
};
</script>
<style scoped>
.active{
  color: red
}
html {
  font-size: 26.67vw;
}
body {
  background: #f5f5f5;
}
.message {
  display: flex;
  height: 0.5rem;
  font-size: 0.2rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.message p {
  display: block;
  width: 0.35rem;
  height: 0.49rem;
  text-align: center;
  line-height: 0.49rem;
}
.message p span {
  display: inline-block;
  background: url("../../../public/img/返回.png") no-repeat;
  width: 0.2rem;
  height: 0.2rem;
  background-size: 0.2rem 0.2rem;
  padding: 0.04rem 0.06rem 0.04rem 0;
  text-align: center;
  line-height: 0.49rem;
}
.nav {
  display: flex;
  justify-content: space-around;
  font-size: 0.16rem;
  height: 0.48rem;
  background: #fff;
  padding: 0 0.5rem 0 0.5rem;
}
.nav li {
  width: 0.76rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.message .sale {
  font-size: 0.2rem;
  line-height: 0.49rem;
}
.contentWrap {
  position: absolute;
  top: 0.98rem;
  height: 5.1rem;
  width: 100%;
  background: rgb(245, 245, 245);
}
.contentWrap > div {
  width: 100%;
  padding: 0 0.4rem 0 0.4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.007rem;
  color: #9c9c9c;
  font-size: 0.18rem;
  text-align: center;
}
.contentWrap > div img {
  display: inline-block;
  width: 0.6864rem;
  height: 0.6864rem;
}
.numCoupon {
  position: fixed;
  bottom: 0;
  height: 0.6rem;
  padding: 0.1rem;
  width: 100%;
  display: flex;
}
.numCoupon .input {
  background: #d8d8d8;
  height: 100%;
  border: 0;
  width: 70%;
  font-size: 0.16rem;
  outline: none;
}
.numCoupon .submit {
  color: #fff;
  flex: 1;
  height: 0.4rem;
  padding: 0.02rem 0.06rem;
  border: 0;
  outline: none;
  background: #ff5e5e;
  font-size: 0.16rem;
}
</style>