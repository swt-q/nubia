import Vue from "vue";
import Vuex from "vuex";
import peoductbuynow from "./productbuynow/index.js";
import site from './site';


Vue.use(Vuex);

const state = {
    // 购物车总数量
    shoppingcarnum: JSON.parse(sessionStorage.getItem("shoppingcarnum")) || 0,

    //选择的数量
    productnum: 1,

    // 购物车数据

    goods: JSON.parse(sessionStorage.getItem("goods")) ? JSON.parse(sessionStorage.getItem("goods")) : [],

};

const actions = {

};

const mutations = {
    //修改
    changegoodsnum(state, props) {
        state.productnum = props;
    },

    //存num
    addgoodscarhandler(state, props) {
        state.shoppingcarnum = state.shoppingcarnum + state.productnum;
        sessionStorage.setItem("shoppingcarnum", JSON.stringify(state.shoppingcarnum));
    },

    //加购----—存
    addgoodscartmutationshandler(state, props) {
      var names = [];
              for (var i = 0; i < state.goods.length; i++) {
                  if (names.indexOf(state.goods[i].name) == -1) {
                      names.push(state.goods[i].name);
                  }
              };
      
              if (names.indexOf(props.name) == -1) {
                  state.goods.push(props);
      
                  sessionStorage.setItem("goods", JSON.stringify(state.goods));
              } else if (names.indexOf(props.name) != -1) {
                  for (var j = 0; j < state.goods.length; j++) {
                      if (props.name == state.goods[j].name) {
                          state.goods[j].num = state.goods[j].num + props.num
                      }
                  };
                  sessionStorage.setItem("goods", JSON.stringify(state.goods));
              }
    },
    handleReducer(state,index){
      var jianCount =0
        if(state.goods[index].num<=1){
          state.goods[index].num = 1;
          
          let session = JSON.parse(sessionStorage.getItem("goods"))

          for(var i = 0;i<session.length;i++){
            session[index].num = 1
          }
          sessionStorage.setItem("goods", JSON.stringify(session));

        }else{
         var jianzhi = state.goods[index].num--
    
          let session = JSON.parse(sessionStorage.getItem("goods"))
        

          for(var i = 0;i<session.length;i++){
            session[index].num = jianzhi-1;
          }
          sessionStorage.setItem("goods", JSON.stringify(session));



          //购物车总数量
          // let zongCount = JSON.parse(sessionStorage.getItem("shoppingcarnum"));
          // zongCount --;
          // if(zongCount<1){
          //   sessionStorage.remove(zongCount)
          // }else{
          //   sessionStorage.setItem("shoppingcarnum", JSON.stringify(zongCount));

          // }

        }
    
      },
      handleAdd(state,index){
      var jiazhi =   state.goods[index].num++;
        let session = JSON.parse(sessionStorage.getItem("goods"))
          for(var i = 0;i<session.length;i++){
            session[index].num = jiazhi+1
          }
          sessionStorage.setItem("goods", JSON.stringify(session));
      },
      handleSc(state,index){
       history.go(0)
        var xiabiao = state.goods[index].num
        // console.log(xiabiao)
        let session = JSON.parse(sessionStorage.getItem("goods"))
        let zongCount = JSON.parse(sessionStorage.getItem("shoppingcarnum"));
        session.splice(1,index)
        var zongjian =   zongCount - Number(xiabiao)
        if(zongjian<=0){
          sessionStorage.removeItem("shoppingcarnum");
          sessionStorage.removeItem("goods")
        }else{
          sessionStorage.setItem("shoppingcarnum", JSON.stringify(zongjian));
          sessionStorage.setItem("goods", JSON.stringify(session));


        }
        // console.log(zongjian)


      }


};
const getters = {
    goodsPrice(state) {
        let goodsCount = 0, goodsPriceSum = 0;
  
        for (var i = 0; i < state.goods.length; i++) {
      
            goodsCount += state.goods[i].num;
            goodsPriceSum += state.goods[i].num * state.goods[i].price;
          
        }
        
        return {
          goodsCount,
          goodsPriceSum
        }
  
  
  
  
      }
};
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        peoductbuynow,
        site
    }
})

export default store;