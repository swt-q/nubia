<template>
  <div>
    <!-- tabBar -->
    <div class="tabBar">
      <router-link :to="item.path" v-for="(item,index) in tabBars" :key="index" tag="li">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nubia-tabBar",
  data() {
    return {
      tabBars: [
        {
          icon: "&#xe64f;",
          title: "首页",
          path: "/home"
        },
        {
          icon: "&#xe653;",
          title: "分类",
          path: "/cate"
        },
        {
          icon: "&#xe746;",
          title: "发现",
          path: "/discover"
        },
        {
          icon: "&#xe622;",
          title: "购物车",
          path: "/cart"
        },
        {
          icon: "&#xe654;",
          title: "我",
          path: "/mine"
        }
      ]
    };
  }
};
</script>


<style scoped lang="scss">
.tabBar {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  display: flex;
  bottom: 0;
  justify-content: space-around;
  background: #fff;
  border-top: 1px solid #ccc;
}
.tabBar li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ccc;
}
.tabBar li span {
  line-height: 0.2rem;
  font-size: 0.12rem;
  
}
.tabBar .router-link-active{
    color:#ff6060
}
</style>