<template>
  <div id="cateMore">
    <div class="message">
      <p >
        <v-touch tag="span" @tap="goback()" class="return"></v-touch>
        <span class="tz">{{title}}</span>
      </p>
    </div>
    <div class="product">
      <v-touch tag="ul" @tap="handlerRed($event)">
        <v-touch tag="li" @tap="handlerZH()" ref="one" class="one">综合</v-touch>
        <v-touch tag="li" class="price" @tap="handlerTap()" :class="Color">
          <span>价格</span>
        </v-touch>
        <v-touch class="filter" @tap="handlerVertical()" tag="li">
          <span>筛选</span>
        </v-touch>
        <li class="type">
          <p></p>
        </li>
      </v-touch>
    </div>
    <ZYDBscroll ref="scroll">
      <div id="wraplist" ref="wrap">
        <div>
          <ul>
            <router-link
              tag="li"
              :to="{name:'product',params:{product_id:item.id,spec_id:item.sid}}"
              v-for="(item,index) in list"
              :key="index"
            >
              <div class="left">
                <img :src="item.image | getImg()" alt />
              </div>
              <div class="right">
                <p
                  class="info"
                >{{item.product_name}}&nbsp;{{item.color_name}}&nbsp;{{item.spec_value}}</p>
                <div class="bottom">
                  <span>¥</span>
                  <span
                    class="price"
                    v-html="member_price[index].status==0?item.price:member_price[index].price"
                  ></span>
                  <span class="member_1" v-html="member_price[index].status==0?'':'￥'">¥</span>
                  <span class="member_2" v-html="member_price[index].status==0?'':item.price"></span>
                  <span
                    :class="member_price[index].status==0?'':'vip'"
                    v-html="member_price[index].status==0?'':'会员价'"
                  ></span>
                </div>
              </div>
            </router-link>
          </ul>
          <div class="bottom">
            <p>向上滑动加载更多~</p>
          </div>
        </div>
      </div>
    </ZYDBscroll>
    <v-touch tag="div" @tap="handlerVertical()" v-if="active" class="positionColor"></v-touch>
    <transition name="move">
      <vertical v-show="active" class="box" @changed="handlerVertical" />
    </transition>
  </div>
</template>
<script>
import { getMoreList, getTypeList } from "@api";
import vertical from "@components/vertical";
export default {
  name: "More",
  components: {
    [vertical.name]: vertical
  },
  async created() {
    if (this.id != this.cateid || !sessionStorage.getItem("cateMore")) {
      let list = await getMoreList(this.num, this.id, this.type);
      this.list = list.data.result;
      list.data.result.forEach(item => {
        this.member_price.push(JSON.parse(item.member_price));
      });
      sessionStorage.setItem("cateMore", JSON.stringify(list.data.result));
      this.cateid = this.id;
    } else {
      this.list = JSON.parse(sessionStorage.getItem("cateMore"));
      this.list.forEach(item => {
        this.member_price.push(JSON.parse(item.member_price));
      });
    }
  },
  data() {
    return {
      list: [],
      member_price: [],
      type: 0,
      flag: false,
      Color: "",
      cateid: 1,
      cateMoreUpID: 1,
      cateMoreDownID: 1,
      active: false,
      num: 1
    };
  },
  props: {
    id: {},
    title: {
      type: String
    }
  },
  filters: {
    getImg(value) {
      return "//oss.static.nubia.cn/" + value;
    }
  },
  methods: {
    async handlerTap() {
      this.num = 0;
      if (!this.flag) {
        this.type = 3;
        this.Color = "sortUp";
        if (
          this.id != this.cateMoreUpID ||
          !sessionStorage.getItem("cateMoreUp")
        ) {
          let list = await getMoreList(this.num, this.id, this.type);
          this.list = list.data.result;
          list.data.result.forEach(item => {
            this.member_price.push(JSON.parse(item.member_price));
          });
          sessionStorage.setItem(
            "cateMoreUp",
            JSON.stringify(list.data.result)
          );
          this.cateMoreUpID = this.id;
        } else {
          this.list = JSON.parse(sessionStorage.getItem("cateMoreUp"));
          this.list.forEach(item => {
            this.member_price.push(JSON.parse(item.member_price));
          });
        }
      } else {
        this.type = 4;
        this.Color = "sortDown";
        if (
          this.id != this.cateMoreDownID ||
          !sessionStorage.getItem("cateMoreDown")
        ) {
          let list = await getMoreList(this.num, this.id, this.type);
          this.list = list.data.result;
          list.data.result.forEach(item => {
            this.member_price.push(JSON.parse(item.member_price));
          });
          sessionStorage.setItem(
            "cateMoreDown",
            JSON.stringify(list.data.result)
          );
          this.cateMoreDownID = this.id;
        } else {
          this.list = JSON.parse(sessionStorage.getItem("cateMoreDown"));
          this.list.forEach(item => {
            this.member_price.push(JSON.parse(item.member_price));
          });
        }
      }
      this.flag = !this.flag;
    },
    handlerRed(e) {
      this.$refs.one.$el.style.color = "#333333";
      if (this.temp) {
        this.temp.style.color = "#333333";
      }
      this.temp = e.target;
      this.temp.style.color = "red";
    },
    handlerZH() {
      this.list = JSON.parse(sessionStorage.getItem("cateMore"));
      this.list.forEach(item => {
        this.member_price.push(JSON.parse(item.member_price));
      });
    },
    handlerVertical() {
      this.active = !this.active;
    },
    goback() {
      this.$router.back();
    }
  },
  mounted() {
    this.$refs.scroll.handlepullingUp(async () => {
      this.num++;
      var data = await getMoreList(this.num, this.id, this.type);
      if (data.code == 0) {
        var Member_price = [];
        this.list = [...this.list, ...data.data.result];
        this.list.forEach(item => {
          Member_price.push(JSON.parse(item.member_price));
          this.member_price = Member_price;
        });
      }
    });
  },
  updated() {
    this.$refs.scroll.handlefinishPullUp();
  }
};
</script>
<style scoped>
.box {
  width: 65%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0px;
  background: white;
  padding: 0.25rem 0.15rem;
}
.move-enter,
.move-leave-to {
  right: -65%;
}
.move-enter-active,
.move-leave-active {
  transition: all 0.3s;
}
body {
  font-family: Arial, Verdana, Sans-serif;
}
.message {
  height: 0.5rem;
  border-bottom: 1px solid #ccc;
}
#cateMore .message p{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  width: 100%;
  height: 0.264rem;
  line-height: 0.264rem;
  font-size: 0.2rem;
  font-weight: normal;
  margin-left: 0.04rem;
}
#cateMore {
  height: 100%;
}
.product {
  height: 0.4rem;
  width: 100%;
}
.position {
  position: absolute;
  z-index: 10;
}
.product ul {
  display: flex;
  justify-content: start;
}
.product li {
  height: 0.4rem;
  width: 0.8rem;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.15rem;
}
.product ul li span {
  width: 0.168rem;
}
.product .type {
  flex: 1;
}

.product ul .price span::after {
  content: " ";
  position: relative;
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  background: url(//shop-soa-static.nubia.com/images/sortNone.png) 0 center
    no-repeat;
  background-size: 0.15rem 0.15rem;
}
.product ul .sortUp span::after {
  background: url(//shop-soa-static.nubia.com/images/sortUp.png) 0 center
    no-repeat;
  background-size: 0.15rem 0.15rem;
}
.product ul .sortDown span::after {
  background: url(//shop-soa-static.nubia.com/images/sortDown.png) 0 center
    no-repeat;
  background-size: 0.15rem 0.15rem;
}
.product ul .filter span::after {
  content: " ";
  display: inline-block;
  height: 0.15rem;
  width: 0.15rem;
  background: url(//shop-soa-static.nubia.com/images/filter.png) 0 center
    no-repeat;
  background-size: 0.15rem 0.15rem;
}
.product ul .type p {
  width: 0.55rem;
  height: 100%;
  background: url(//shop-soa-static.nubia.com/images/listChange2.png) no-repeat
    right 14px center;
  background-size: 0.22rem;
  float: right;
}
.activeRight {
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  top: -0.4rem;
}
#wraplist ul li {
  height: 1.12rem;
  width: 100%;
  display: flex;
  justify-content: start;
}
#wraplist .left {
  width: 1.12rem;
  height: 1.12rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#wraplist .left img {
  width: 0.95rem;
  height: 0.95rem;
}
#wraplist .right {
  flex: 1;
  height: 100%;
  padding: 0.176rem 0;
  position: relative;
}
#wraplist .right .info {
  font-size: 0.1625rem;
  color: #000000;
  font-weight: 700;
  line-height: 0.224rem;
  padding-right: 0.16rem;
  position: absolute;
  top: 0.176rem;
}
#wraplist .right span {
  color: rgb(255, 94, 94);
  font-size: 0.12rem;
}
#wraplist .right .price {
  font-size: 0.165rem;
}
#wraplist .right .bottom {
  position: absolute;
  bottom: 0.176rem;
}
#wraplist .right .bottom .member_1 {
  color: rgb(139, 139, 139);
}
#wraplist .right .bottom .member_2 {
  color: rgb(139, 139, 139);
  font-size: 0.165rem;
}
#wraplist .right .bottom .vip {
  background: #ff8d00;
  color: #ffffff;
  padding: 2px 4px;
  border-radius: 3px;
  position: relative;
  bottom: 3px;
}
#wraplist > div > .bottom {
  height: 0.3rem;
  width: 100%;
  text-align: center;
  line-height: 0.3rem;
  color: #9c9c9c;
  background: #eeeeee;
}
.product .one {
  color: red;
}
.positionColor {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
}
</style>