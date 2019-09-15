<template>
  <div>
    <!-- detailtabBar购物车底部 -->
    <div class="tabBar">
      <li v-for="(item,index) in tabBar" :key="index" 
      :class="changeindex == index ? 'active':''"
      @click="changecolorhandler(index)">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shoppingcarfooter",
  data() {
    return {
        changeindex:3,
      tabBar: [
        {
          icon: "&#xe605;",
          text: "首页"
        },
        {
          icon: "&#xe607;",
          text: "分类"
        },
        {
          icon: "&#xe603;",
          text: "发现"
        },
        {
          icon: "&#xe613;",
          text: "购物车"
        },
        {
          icon: "&#xe604;",
          text: "我"
        }
      ]
    }
  },
  methods:{
      changecolorhandler(index){
          this.changeindex = index;
      }
  }
};
</script>
<style scoped lang="scss">
/* tabBar */
.tabBar {
  width: 100%;
  height: 0.56rem;
  position: fixed;
  display: flex;
  z-index: 999;
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
}
i,span{
    display: inline-block;
    font-weight:700
}
.tabBar li span {
  line-height: 0.2rem;
  font-size: 0.12rem;
  
}
.tabBar li i {
  font-size: 0.2rem !important;
}

/* 点击切换颜色 */
.active{
    color: #ff5000;
}
</style>