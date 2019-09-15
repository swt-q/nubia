<template>
  <div class="detailspage">
    <!-- 详情固定底部tabBar -->
    <Detailsfooter></Detailsfooter>
    <!-- 小轮播 -->
    <div class="container">

      <!-- 详情页面顶部轮播左右按钮 -->
      <span class="containerspan1" @click="gobackhander()"></span>
      <span @click="changeaddhandler()" class="containerspan2"></span>


      <!-- vant轮播插件 -->
      <div class="swiper">
        <van-swipe :autoplay="2000" indicator-color="red"  indicator="#ccc">
          <van-swipe-item  v-for="(item,index) in product_images" :key="index">
            <img :src="'https://oss.static.nubia.cn/'+item" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    
      

      <!-- 轮播上的按钮动画 -->
      <div class="changeshowdiv">
        <transition name="changeadd">
          <div v-show="flag" class="changeaddmsg">
            <p @click="msghandler()">
              <img
                src="https://shop-soa-static.nubia.com/images/buy_mobile/message.png?v=1568097633"
                alt
              />
              <span>消息通知</span>
            </p>
            <p @click="homehandler()">
              <img
                src="https://shop-soa-static.nubia.com/images/buy_mobile/home.png?v=1568097633"
                alt
              />
              <span>首页</span>
            </p>
            <p>
              
              <i class="iconfont collect"  @click="collecthandler()">&#xe688;</i>
              <span>我的收藏</span>
            </p>
          </div>
        </transition>
      </div>
    </div>





    <!-- 商品详情信息 -->
    <Detailmsg @containerimghandler="imagehandler"></Detailmsg>



    <!-- 商品详情图片信息  ---------------------------   获取不到数据，假数据 -->
    <div class="detale-img">
      <img src="https://oss.static.nubia.cn/active/5d70b5d18f79897.jpg" alt />
      <img src="https://oss.static.nubia.cn/active/5d70b5d1db40327.jpg" alt />
      <img src="https://oss.static.nubia.cn/active/5d70d45e42dfe33.jpg" alt />
      <img src="https://oss.static.nubia.cn/active/5d70b5d2490de98.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d21b7f361.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d1edaa979.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d0e85a553.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d2044cc20.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d1179c894.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d2e7c4a5.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d17ad7d3.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d775f94a647478.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d17075635.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d19314d70.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d2f254a97.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d2e8ced74.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d25365868.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b5d36056990.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e8065a87.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e7f8b513.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e7f39a16.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e8251537.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e6d67214.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e7f74062.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e9016258.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48ebd55120.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48ebc4ef17.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e979a531.jpg?" alt="">
      <img src="https://oss.static.nubia.cn/active/5d70b48e9d5ba19.jpg?" alt="">
    </div>
    <!-- 回到顶部 -->
    <!-- <div class="go-top" >
      <img src="https://shop-soa-static.nubia.com/images/buy_mobile/toTop.png?v=1566781464" alt />
    </div>-->
  </div>
</template>




<script>
  // vant插件引入
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';

  //使用vue插件         
  Vue.use(Swipe).use(SwipeItem);
  

  //引入详情底部
  import Detailsfooter from "@components/detailfooter";

  //引入详情中间核心信息
  import Detailmsg from "@components/detailcentermsg";

              
  import { mapState } from "vuex";
export default {
  name: "Detailspage",
  
  

  data() {
    return {
      swiperbool:true,
      flag: false,
      clor:"#ccc",
      product_images:[],
      containerImg: ["https://oss.static.nubia.cn/active/5d6cd17e9bfee11.png"],
      swripermag:[
        "https://oss.static.nubia.cn/active/5d48dd2463fc329.png",
        "https://oss.static.nubia.cn/active/5d48dd246e1ca20.png",
        "https://oss.static.nubia.cn/active/5d48dd24a90fc69.png",
        "https://oss.static.nubia.cn/active/5d48dd244d12153.png"
      ],
      changeactive:"",
    };
  },
  computed:{
    ...mapState({
      //商品详情需要的信息，
      //包括城市的一些信息。

    })
  },



  methods: {
    changeaddhandler() {
      this.flag = !this.flag;
    },

    // 详情页面顶部返回上一个页面
    gobackhander(){
      this.$router.back();
    },


    //接受子组件传过开的值
    imagehandler(props){
      this.product_images = props;
    },

    msghandler(){
      this.$router.push("/memberMessage");
    },

    homehandler(){
      this.$router.push("/home");
    },

    collecthandler(){
      
    }
    
  },
  components: {
    Detailsfooter,
    Detailmsg,

  }
};
</script>

<style scoped lang="scss">

.collect{
  display: inline-block;
  font-size:.25rem;
  margin-right:8px;
  margin-left:4px;
}

.detailspage {
  width: 100%;
  height: 6.67rem;
  overflow: auto;
}
/* 详情图片大小设置 */
.detale-img img {
  width: 100%;
}

/* 商品详情顶部小轮播 */
.container {
  width: 100%;
  height: 3.75rem;
  position: relative;
}
.container img {
  width: 100%;
  height: 100%;
}

.containerspan1,
.containerspan2 {
  display: inline-block;
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  z-index: 8;
}
.containerspan1 {
  top: 0.15rem;
  left: 0.15rem;
  background: url(https://shop-soa-static.nubia.com/images/buy_mobile/back.png?v=1566781545),
    no-repeat;
  background-size: 0.3rem 0.3rem;
}
.containerspan2 {
  top: 0.15rem;
  right: 0.15rem;
  background: url(https://shop-soa-static.nubia.com/images/buy_mobile/pulldown.png?v=1566781545),
    no-repeat;
  background-size: 0.3rem 0.3rem;
}

// 小弹框

.changeaddmsg {
  background-color: rgba(255, 255, 255, 0.8);
  width: 1.2rem;
  height: 1rem;
  border-radius: 0.06rem;
  position: absolute;
  right: 0.13rem;
  top: 0.45rem;
  overflow: hidden;
}
.changeaddmsg p {
  margin-bottom: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.changeaddmsg img {
  width: 0.23rem;
  height: 0.23rem;
  margin-left: 6px;
  margin-right: 10px;
}
.changeaddmsg p span {
  display: inline-block;
  font-size: 0.12rem;
  line-height: 1;
  color: rgb(126, 126, 126);
}
.changeadd-enter {
  height: 0;
}
.changeadd-leave-to {
  height: 0;
}
.changeadd-enter-active,
.changeadd-leave-active {
  transition: all 0.3s;
}

// 回到顶部
// .go-top {
//   width: 0.35rem;
//   height: 0.35rem;
//   position: fixed;
//   bottom: 0.8rem;
//   right: 0.1rem;
//   border-radius: 0.2rem;
//   background-color: #fff;
//   opacity: 0.8;
//   box-shadow: 3px #ccc;
// }
// .go-top img {
//   width: 100%;
//   height: 100%;
// }




</style>
