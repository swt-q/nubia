<template>
  <div class="wrap">
    <div class="search">
      <router-link class="find" to="/search" tag="div">红魔3S</router-link>
      <router-link :to="{name:'memberMessage'}">
        <img src="//shop-soa-static.nubia.com/images/buy_mobile/message.png" alt />
      </router-link>
    </div>
    <cateLeft />
    <cateRight />
  </div>
</template>
<script>
import CateLeft from "@components/cateLeft";
import CateRight from "@components/cateRight";

export default {
  name: "Cate",
  components: {
    [CateLeft.name]: CateLeft,
    [CateRight.name]: CateRight
  }
};
</script>
<style scoped>
.wrap {
  height: 100%;
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  border-bottom: 1px solid rgb(240, 240, 240);
  position: fixed;
  top: 0px;
  background: white;
  z-index: 100;
}

.find {
  width: 78%;
  padding-left: 40px;
  border-radius: 20px;
  color: #737373;
  height: 35px;
  line-height: 35px;
  background: rgb(248, 248, 248)
    url("https://oss.static.nubia.cn/active/5c73876ac212759.png") no-repeat 12px
    center;
  background-size: 20px;
}

.search a {
  display: block;
}

.search a img {
  width: 24px;
  height: 24px;
}
</style>