<template>
  <div>
    <div class="message">
      <div @click="goback()">
        <span class="return"></span>
        <span class="tz">消息通知</span>
      </div>
    </div>
    <ul class="nav">
      <li>活动</li>
      <li>物流</li>
      <li>通知</li>
    </ul>
    <div class="contentWrap">
      <div>
        <div>
          <img src="https://oss.static.nubia.cn/active/5c515b88a6d8236.png" alt />
          <p>你还没有任何记录</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "message",
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.message {
  height: 0.5rem;
  border-bottom: 1px solid #ccc;
}
.message div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 1.06rem;
  margin-left: 0.11rem;
}
.message .return {
  display: inline-block;
  background: url("../../../public/img/返回.png") no-repeat;
  width: 0.2rem;
  height: 0.2rem;
  background-size: 0.2rem 0.2rem;
  padding: 0.04rem 0.06rem 0.04rem 0;
  font-size: 0.1rem;
}
.message .tz {
  color: #464646;
  display: inline-block;
  width: 0.8rem;
  height: 0.264rem;
  line-height: 0.264rem;
  font-size: 0.2rem;
  font-weight: 550;
  margin-left: 0.04rem;
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
  height: 0.48rem;
  line-height: 0.48rem;
}
.contentWrap {
  position: absolute;
  top: 0.98rem;
  bottom: 0;
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
}
.contentWrap > div img {
  width: 0.6864rem;
  height: 0.6864rem;
}
</style>