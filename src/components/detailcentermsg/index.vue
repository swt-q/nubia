<template>
  <div calss="detailmsg">
    <!-- 商品详情介绍 -->
    <div class="goodsmsg">
      <div>
        <div class="msg1">
          <p>
            <span>{{goodsname}}</span>
            <span>{{showcolor ? showcolor:product_color[0]}}</span>
            <span>{{goodssizeq ? goodssizeq:goodssize[0]}}</span>
          </p>
          
          <span class="a" type="primary" @click="showPopup()"></span>
          <!--这里还有个小动画-->
        </div>
      </div>
      <p class="msg2" v-html="goodssymbol"></p>
      <p class="msg3">
        <i>￥{{goodselectprice ? goodselectprice:goodspricearr[0]}}.00元</i>
        <span>￥{{oldprice ? oldprice:oldpricearr[0]}}.00元</span>
        <i id="superperson">会员价</i>
      </p>
    </div>


    <!-- 弹出层内容 -->
  <van-popup v-model="showmsgqq" position="bottom"
  :style="{ height: '40%' }">
    <div style="width:100%,height:89px background-color:red">

    </div>
  </van-popup>





    <!-- 促销 -->
    <div class="sale">
      <div class="sale-son">
        <p>{{saletitle}}</p>
      </div>
      <div>

        <p>
          <i>赠品</i>
          <span>送{{goodsname}}水晶触控保护壳</span>
        </p>
        <p>
          <i>赠品</i>
          <span>送{{goodsname}}（{{goodssizeq ? goodssizeq:goodssize[0]}}）副屏屏碎宝体验版（1年内保修1次）</span>
        </p>
        <p>
          <i>分期</i>
          <span>享受花呗3期，6期，12分期</span>
        </p>
        <p>
          <i>积分</i>
          <span>购买即赠积分，积分可抵现</span>
        </p>
        <p>
          <i>包邮</i>
          <span>铜牌及以下满59、银牌满39、金牌包邮</span>
        </p>
      </div>
    </div>
    <!-- 已选 送至-->
    <div class="middles">
      <div class="select" @click.stop="changeBottomHandler($event)" ref="show2">
        <p>已选</p>
        <div>
          <p class="selectgoodsmsg">
            <span>{{showcolor ? showcolor:product_color[0]}}</span>
            <span>{{goodssizeq ? goodssizeq:goodssize[0]}}</span>
            <span>仅手机</span>
            <span>{{numval}}</span>
          </p>
          <p class="iconfont">&#xe610;</p>
        </div>
      </div>

      <div class="tourl" @click="changegourlhandler()">
        <p>{{toUrl.title}}</p>
        <div>
          <p>{{toUrl.url}}</p>
          <p class="iconfont">&#xe610;</p>
        </div>
      </div>
    </div>
    <!-- 概述 参数 -->
    <div class="last">
      <span
        v-for="(item,index) in detailsmsg"
        :key="index"
        :class="indexActive==index ? 'active':''"
        @click="changeHandler(index)"
      >{{item}}</span>
    </div>




    <transition-group name="changebottom">
      <div class="show-top" :key="1" v-show="flag" @click="changeBottomHandler()"></div>
      <div class="selectgoods" v-show="flag" :key="2">
        <div class="detile">
          <div class="detile-1">
            <div class="detile-1-1">
              <img :src="'https://oss.static.nubia.cn/'+changeimg" alt />
            </div>
            <div class="detile-1-2">
              <p>
                <img
                  @click.stop="showdisplay($event)"
                  ref="show1"
                  src="https://shop-soa-static.nubia.com/images/buy_mobile/close.png?v=1566781464"
                  alt
                />
              </p>
              <p>￥{{goodselectprice ? goodselectprice:goodspricearr[0]}}.00元</p>
              <p class="msggoods">
                <span>{{goodsname}}</span>
                <span>{{showcolor ? showcolor:product_color[0]}}</span>
                <span>{{goodssizeq ? goodssizeq:goodssize[0]}}</span>
              </p>
            </div>
          </div>
          <div class="detile-2">
            <div>
              <p>颜色</p>
              <p class="de-c-s">
                <!-- 遍历颜色 -->
                <span
                  v-for="(item,index) in product_color"
                  :key="index"
                  :id="changecolor==index? 'changeactive':''"
                  @click="changecolorhandlers(index)"
                >{{item}}</span>
              </p>
            </div>
            <div>
              <p>规格</p>
              <p >
                <span
                  v-for="(item,index) in goodssize"
                  :key="index"
                  :id="changecolor1==index? 'changeactive1':''"
                  @click="changecolorhandlers1(index)"
                >{{item}}</span>
              </p>
            </div>
            <div>
              <p>套装</p>
              <p>
                <span id="allw">{{allgoods[0]}}</span>
              </p>
            </div>
            <div class="cielprice">
              <p>分期</p>
              <p v-for="(item,index) in paymemony" :key="index">
                <span
                  :id="changecolor2==index? 'changeactive2':''"
                  @click="changecolorhandlers2(index)"
                >
                  <i>{{item.numprice}}</i>
                  <i>{{item.addparce}}</i>
                </span>
              </p>
            </div>
            <div>
              <p>数量</p>
              <p class="changenum">
                <button @click="reducenumhandler()">-</button>
                <input type="text" @input="obervernumhandler($event)" v-model="numval" />
                <button @click="addnumhandler()">+</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 确认按钮 -->
      <div class="f-bn" v-show="flag" :key="3">
        <p @click="bngoodsmsghandler()">确定</p>
        <!--提交商品信息事件，传递参数-->
      </div>
    </transition-group>

    <!-- 送至 show-->
    <transition-group name="gourl">
      <div class="showwrite" v-show="flagself1" @click="changegourlhandler()" :key="4"></div>
      <div class="gourl1" v-show="flagself1" :key="5">
        <div class="selectscoped1">
          <p>选择配送区域</p>
        </div>addurlcity
        <div class="selectscoped2">
          <p :class="addurlprovince ? 'selectscoped2span':''">{{addurlprovince? addurlprovince:defalutselected}}</p>
          <p :class="addurlprovince ? (addurlcity ? 'selectscoped2span':''):''">{{addurlprovince? (addurlcity ? addurlcity:defalutselected):''}}</p>
          <p :class="addurlcity ? (addurlcounty ? 'selectscoped2span':''):''">{{addurlcity? (addurlcounty ? addurlcounty:defalutselected):''}}</p>
        </div>
        <div class="selectscoped3">
          <!------------------------------------ 配送地址选择 ------------------------------------->
          <p v-for="(item,index) in urlarr" :key="index" @click="addurlhandler(index)">{{item}}</p>        <!--接口先留着-->
        </div>
      </div>
      <div class="f-bn" v-show="flagself1" :key="6">
        <p @click="bnmsghandler()">完成</p>
        <!--此处有点击提交信息-->
      </div>
    </transition-group>
  </div>
</template>

<script>

// 分享弹出层
import Vue from 'vue';
import { Popup } from 'vant';


  //引入详情接口
  import { detailPageApi } from "@api";

Vue.use(Popup);





import {mapState,mapActions,mapMutations} from "vuex";
export default {
  name: "Detailmsg",

  async created(){
      var {product_id,spec_id} = this.$route.params;
        let data = await detailPageApi(product_id,spec_id);
        console.log(data);
        this.product_name = data.data.roduct_name;
        this.product_specs = data.data.product_specs;

        //过滤手机重复颜色
        for(var i=0;i<data.data.product_specs.length;i++){
          if(this.product_color.indexOf(data.data.product_specs[i].color_name) == -1){
            this.product_color.push(data.data.product_specs[i].color_name);
          }
        }

        this.changeimg = data.data.product_specs[0].images[0];



        for(var j=0;j<data.data.product_specs.length;j++){
            this.changecolorimg.push(data.data.product_specs[j].images[0]);
        };


        this.goodsname = data.data.product_name;

        for(var a=0;a<data.data.product_specs.length;a++){
          if(this.goodssize.indexOf(data.data.product_specs[a].spec_value)==-1){
            this.goodssize.push(data.data.product_specs[a].spec_value);
          }
            
        };

        for(var p=0;p<this.goodssize.length;p++){
          this.goodspricearr.push(data.data.product_specs[p].price);
        }

        //返回的是标签！！！！
        this.goodssymbol = data.data.selling_points;
        
        

        for(var p=0;p<this.goodssize.length;p++){
          this.oldpricearr.push(data.data.product_specs[p].origin_price);
        }

        //传父
        this.$emit("containerimghandler",data.data.product_specs[0].images);

         //侦听事件/
        this.$observer.$on("changebuynowhandler",()=>{
          var buynowmsg = {};
          buynowmsg.img = 'https://oss.static.nubia.cn/'+this.changeimg;
          buynowmsg.name = this.goodsname;
          buynowmsg.size = this.goodssizeq ? this.goodssizeq:this.goodssize[0];
          buynowmsg.color = this.showcolor ? this.showcolor:this.product_color[0];
          buynowmsg.price = this.goodselectprice ?  this.goodselectprice:this.goodspricearr[0];
          buynowmsg.num = this.numval;
          sessionStorage.setItem("buynowmsg",JSON.stringify(buynowmsg));
        })
  },





  data() {
    return {
      showmsgqq:false,
      flag: false,
      flagself: false,
      flagself1: false,
      numval: 1,

      //请求的商品名称
      product_name:"",
      product_specs:[],

      product_color:[],
      product_images:[],

      changecolorimg:[],

      goodsname:"",
      showcolor:"",
      changeimg:"",
      goodssizeq:"",
      oldprice:"",

      oldpricearr:[],

      //选中显示的价格
      goodselectprice:"",
      goodssize: [],    
      goodspricearr:[],
      goodssymbol:"",   

      // 配送地址选择
      addurlprovince:"",
      addurlcity:"",
      addurlcounty:"",
      //===================================================待完善，城市数据列表。
      defalutselected:"请选择",


    //==========================================================
      // 购物车传值vuex(公共状态管理)


    //==========================================================

      saletitle: "促销",
     
      selectGoods: {
        title: "已选",
      },

      toUrl: {
        title: "送至",
        url: "广东省 深圳市 南山区"
      },
      detailsmsg: ["概述", "参数"],
      indexActive: 0,
      changecolor: 0,
      changecolor1: 0,
      changecolor2: -1,

      

      allgoods: ["仅手机"],
      paymemony: [
        {
          numprice: "￥1261.36×3期",
          addparce: "含￥85.08手续费"
        },
        {
          numprice: "￥616.50×6期",
          addparce: "含￥0.00手续费"
        },
        {
          numprice: "￥331.37×12期",
          addparce: "含￥277.43手续费"
        }
      ],
      urlarr: [
        "安徽",
        "北京",
        "福建省",
        "甘肃",
        "海南",
        "广东省",
        "广西",
        "河南",
        "贵州",
        "河北省",
        "黑龙江省"
      ]
    };
  },

  // vuex映射的值
  computed:{
    ...mapState({
      //商品详情需要的信息，
      //包括城市的一些信息。
      shoppingcarnum:state=>state.shoppingcarnum,
      productnum:state=>state.productnum,
      goods:state=>state.goods,
      changebool:state=>state.peoductbuynow.bool,
    }),

  },



  methods: {
    changeHandler(index) {
      this.indexActive = index;
    },
    changeBottomHandler() {
      this.flag = !this.flag;
    },
    changecolorhandlers(index) {
      this.changecolor = index;
      this.changeimg = this.changecolorimg[index];
      this.showcolor = this.product_color[index];

    },
    changecolorhandlers1(index) {
      this.changecolor1 = index;
      this.goodssizeq = this.goodssize[index];
      this.goodselectprice = this.goodspricearr[index];
      this.oldprice = this.oldpricearr[index];
    },
    changecolorhandlers2(index) {
      this.changecolor2 = index;
    },
    showdisplay() {
      this.flag = !this.flag;
    },
    changegorlHandler() {
      this.flagself = !this.flagself;
    },
    changegourlhandler() {
      this.flagself1 = !this.flagself1;
    },
    bnmsghandler() {
      this.flagself1 = !this.flagself1;
    },
    bngoodsmsghandler() {
      this.flag = !this.flag;
      this.changegoodsnum(this.numval);
    },
    reducenumhandler() {
      if (this.numval <= 1) {
        this.num = 1;
      } else {
        this.numval--;
      }
    },
    addnumhandler() {
      if (this.numval > 99) {
        this.num = 99;
      } else {
        this.numval++;
      }
    },
    obervernumhandler(e) {
      if (e.target.value > 99) {
        this.numval = 99;
      } else if (e.target.value <= 1) {
        this.numval = 1;
      } else if (isNaN(e.target.value)) {
        this.numval = 1;
      }
    },

    //添加配送地址信息
    addurlhandler(index){
      this.addurlprovince = this.urlarr[index];
    },


    // 分享弹出层
    showPopup(){
      this.showmsgqq = !this.showmsgqq;
    },


    ...mapMutations({
      changegoodsnum:"changegoodsnum",
      addgoodscartmutationshandler:"addgoodscartmutationshandler"
    })
  },


  //=========================购物车数据存储
  watch:{
    shoppingcarnum(){
      var obj = {};
      obj.img = 'https://oss.static.nubia.cn/'+this.changeimg;
      obj.name = this.goodsname;
      obj.size = this.goodssizeq ? this.goodssizeq:this.goodssize[0];
      obj.color = this.showcolor ? this.showcolor:this.product_color[0];
      obj.price = this.goodselectprice ?  this.goodselectprice:this.goodspricearr[0];
      obj.num = this.numval;
      this.addgoodscartmutationshandler(obj);
      obj = null;
    },
    // changebool(){
    //   console.log("我变了");
    //   console.log(this.changebool);
      
    // },
  changebool:{
    handler(){
      console.log("深度监听！！！");
    },
    deep:true,
  }
    

  }
};
</script>

<style  scoped lang="scss">
/* 页面tabBar------切换变色 */
.active {
  color: #ff4d4d;
  border-bottom: 3px solid #ff4d4d;
}
#changeactive {
  border-color: #ff5e5e;
  color: #ff5e5e;
}
#changeactive1 {
  border-color: #ff5e5e;
  color: #ff5e5e;
}
#changeactive2 {
  border-color: #ff5e5e;
  color: #ff5e5e;
}
/* 商品详情介绍 */
.goodsmsg {
  width: 100%;
  height: 1.15rem;
  margin-bottom: 1px;
  position: relative;
  font-size: 0.15rem;
  font-weight: bold;
  box-sizing: border-box;
  color: rgb(255, 77, 77);
  padding: 0.1rem 0.2rem;
  line-height: 0.3rem;
  background-color: #fff;
};
.goodsmsg p{
  line-height:1;
}
.msg1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:8px;
};

.msg2 span{
  margin-bottom: 4px;
  
};

.goodsmsg span {
  display: inline-block;
  font-size: 0.18rem;
  color: rgb(25, 25, 25);
};
.msg3{
  display:flex;
  justify-content:flex-start;
  // padding-top:5px;
  align-items:center;
};
.msg3 i,.msg3 span{
  display:flex;
  justify-content: center;
  align-items:center;
  height:.4rem;
}
#superperson{
  display:flex;
  justify-content: center;
  align-items:center;
  width:.44rem;
  height:0.1733rem;
  font-size:.12rem;
  color:#fff;
  background-color:#FF8D00;
  margin-left:5px;
};
.goodsmsg .msg3 span{
  font-size:.14rem;
  color:#999999;
  font-weight:400;
  margin-left:10px;
  text-decoration:line-through;
}
.msggoods span{
  margin-right:10px;
}
.a {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background: url(https://shop-soa-static.nubia.com/images/buy_mobile/share.png),
    no-repeat;
  background-size: 0.2rem 0.2rem;
  border: 1px;
}
.sale {
  width: 100%;
  height: 2.24rem;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.16rem 0.16rem;
  margin-top: 0.048rem;
  display: flex;
  font-size: 0.144rem;
  border-top:3px solid #f8f8f8;
};
.selectgoodsmsg span{
  margin:5px;
}
.sale-son {
  width: 100%;
  height: 100%;
  color: #868686;
}
.sale div:nth-of-type(1) {
  width: 15%;
}
i {
  display: inline-block;
  font-style: normal;
}
.sale div:nth-of-type(2) p {
  display: flex;
  width: 2.9183rem;
  line-height: 0.21rem;
  margin-bottom: 0.064rem;
}
.sale div:nth-of-type(2) i {
  width: 0.4679rem;
  height: 0.2267rem;
  border-radius: 0.16rem;
  border: 1px solid rgb(255, 94, 94);
  color: rgb(255, 94, 94);
  text-align: center;
  margin-right: 0.12rem;
}
.sale div:nth-of-type(2) span {
  display: inline-block;
  width: 2.1888rem;
  text-align: left;
}
.middles {
  padding: 0 0.16rem;
  box-sizing: border-box;
  background-color: #fff;
}
.select,
.tourl {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  border-top: 2px solid rgb(238, 238, 238);
}

.select p:nth-of-type(1),
.tourl p:nth-of-type(1) {
  color: #868686;
}
.select {
  height: 0.5267rem;
}
.select div,
.tourl div {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select div p:nth-of-type(2),
.tourl div p:nth-of-type(2) {
  font-size: 0.1717rem;
}
.select div p:nth-of-type(1),
.tourl div p:nth-of-type(1) {
  color: #393939;
  font-size: 0.1414rem;
}
.tourl div p:nth-of-type(1) {
  font-weight: bold;
}
.tourl {
  height: 0.5846rem;
}
.last {
  width: 100%;
  display: flex;
  margin-top: 0.048rem;
  height: 0.48rem;
  background-color: #fff;
}
.last span {
  width: 50%;
  font-size: 0.16rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detile-1 {
  width: 100%;

  padding: 0.048rem 0.192rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.176rem;

  border-bottom: 3px solid rgb(232, 232, 232);
}
.detile-1-1 {
  width: 30%;
}
.detile-1-2 {
  width: 70%;
}
.detile-1-1 img {
  width: 1.01rem;
  height: 0.935rem;
}

.detile-1-2 img {
  width: 0.2rem;
  height: 0.2rem;
}
.detile-1-2 p:nth-of-type(1) {
  display: flex;
  justify-content: flex-end;
}
.detile-1-2 p:nth-of-type(2) {
  line-height: 1.7;
  color: rgb(255, 77, 77);
}
.detile-1-2 p:nth-of-type(3) {
  font-size: 0.136rem;
  font-weight: 600;
}

.detile-2 {
  background: #fff;
}
.detailspage {
  background: #f8f8f8;
}
.detile-2 div {
  padding-top: 0.2rem;
}
.detile-2 p {
  font-size: 0.168rem;
  padding: 0 0.192rem;
  margin-bottom: 20px;
  display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.detile-2 p {
  display: flex;
}
.detile-2 span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 0.32rem;
  font-size: 0.112rem;
  color: rgb(112, 112, 112);
  border-radius: 0.04rem;
  border: 1px solid #8f8f94;
  margin-bottom:20px;
  margin-right: 10px;
}
#allw,
.cielprice p span {
  display: inline-block;
  width: 100%;
  height: 0.32rem;
  font-size: 0.112rem;
  line-height: 0.32rem;
  box-sizing: border-box;
  padding-left: 20px;
  color: rgb(112, 112, 112);
  border-radius: 0.04rem;
  border: 1px solid #8f8f94;
}
#allw {
  border-color: #ff5e5e;
  color: #ff5e5e;
}
.cielprice p span {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
}

/* 动画部分1  商品选择 -------*/
.show-top {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 100%;
  background-color: #a0a0a0;
  opacity: 0.7;
}
.selectgoods {
  width: 100%;
  position: fixed;
  bottom: 0.5rem;
  height: 75%;
  overflow: auto;
  background-color: #fff;
}
.changenum button,
.changenum input {
  display: inline-block;
  width: 0.33rem;
  height: 0.362rem;
  outline: none;
  background-color: #fff;
  border: 1px solid #ccc;
}
.changenum input {
  border-left: 0;
  border-right: 0;
  text-align: center;
}
.changenum button:nth-of-type(1) {
  border-right: 0;
}
.changenum button:nth-of-type(2) {
  border-left: 0;
}
.f-bn {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  z-index: 9;
}
.f-bn p {
  outline: none;
  display: flex;
  width: 100%;
  height: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 0.16rem;
  background-color: rgb(255, 94, 94);
  color: #fff;
}
.changebottom-enter,
.changebottom-leave-to {
  bottom: -100%;
}
.changebottom-enter-active,
.changebottom-leave-to {
  transition: all 0.3s;
}

/*动画部分2   送货地址*/
.showwrite {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 100%;
  background-color: #a0a0a0;
  opacity: 0.7;
}
.gourl1 {
  width: 100%;
  position: fixed;
  bottom: 0.5rem;
  background-color: #fff;

  height: 50%;
  overflow: auto;
}
.gourl1 p {
  height: 0.4rem;
  line-height: 0.4rem;
}
.selectscoped1 {
  position: fixed;
  bottom: 3.8rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.selectscoped2 {
  position: fixed;
  bottom: 3.4rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  color: #ff4d4d;
  border-bottom: 1px solid #ccc;
};
.selectscoped2span{
  display: flex;
  justify-content: center;
  align-items:center;
  font-size:.15px;
  color:#000000;
}
.selectscoped1 p {
  font-size: 0.12rem;
  color: #999999;
  padding-left: 30px;
  border-bottom: 1px solid #ccc;
}
.selectscoped2 p {
  font-size: 0.15rem;
  
  
  padding-left: 40px;
  padding-right:35px;
}

.selectscoped3 p {
  font-size: 0.15rem;
  color: #000000;

  padding-left: 40px;
}
.gourl-enter,
.gourl-leave-to {
  bottom: -100%;
}
.gourl-enter-active,
.gourl-leave-active {
  transition: all 0.3s;
}
</style>