<template>
  <div>
    <div class="sideBar">
      <div class="filtBox">
        <p>服务</p>
        <ul>
          <v-touch tag="li" @tap="changePro()" :class="por?'active':''">促销</v-touch>
          <v-touch tag="li" @tap="changejust()" :class="just?'active':''">仅看有货</v-touch>
        </ul>
      </div>
      <div>
        <p>规格</p>
        <ul class="filtTab">
          <v-touch tag="li" v-for="(item,index) in message" :key="index" :class="index==colorIndex?'active':''" @tap="changerActive(index)">{{item}}</v-touch>
        </ul>
      </div>
      <v-touch class="sideBarActive" tag="div" @tap="handlerDiv()">
        <div class="rest">重置</div>
        <div class="confirm">确定</div>
      </v-touch>
    </div>
  </div>
</template>
<script>
export default {
  name: "vertical",
  data() {
    return {
      message: [
        "6GB+64GB",
        "6GB+128GB",
        "8GB+128GB",
        "梵高星空典藏版",
        "8GB+256GB",
        "8GB+512GB",
        "蓝金版8+256GB",
        "10GB+256GB",
        "RNG六周年纪念版8+128GB",
        "1G+8G",
        "12GB+256GB"
      ],
      colorIndex:-1,
      flag:false,
      por:false,
      just:false
    };
  },
  methods: {
    handlerDiv(){
      this.$emit("changed")
    },
    changerActive(index){
      this.colorIndex = index;
    },
    changeFlag(){
      this.flag = true
    },
    changePro(){
      this.por = !this.por
    },
    changejust(){
      this.just =!this.just
    }
  },
};
</script>
<style scoped>

.sideBar {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0px;
   background: white;
  padding: 0.25rem 0.15rem;
}
.filtTab {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.filtTab li {
  padding: 0 5px;
  box-sizing: border-box;
  height: 0.25rem;
  width: 30.5%;
  text-align: center;
  background: rgb(244, 244, 244);
  border-radius: 4px;
  margin-right: 2%;
  margin-bottom: 0.06rem;
  line-height: 0.25rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 0.05rem
}
.filtBox {
  width: 100%;
  display: inline-block;
  text-align: left;
  margin-bottom: 0.2rem;
}
.filtBox p {
  margin: 0px;
  margin-bottom: 0.1em;
  color: rgb(153, 153, 153);
}
.filtBox ul {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.filtBox ul li {
  padding: 0 5px;
  height: 0.25rem;
  width: 30.5%;
  text-align: center;
  background: rgb(244, 244, 244);
  border-radius: 4px;
  margin-right: 0.35%;
  margin-bottom: 0.06rem;
  line-height: 0.25rem;
  overflow: hidden;
}
.sideBarActive {
  width: 100%;
  height: 0.35rem;
  position: absolute;
  bottom: 0rem;
  left: 0px;
}
.sideBarActive div {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  font-size: 0.12rem;
}
.sideBarActive .reset {
  background: rgb(242, 242, 242);
  color: rgb(102, 102, 102);
}
.sideBarActive .confirm {
  background: rgb(255, 94, 94);
  color: #fff;
}
.sideBar .active{
  background: rgb(255,94,94);
  color: #fff
}
</style>