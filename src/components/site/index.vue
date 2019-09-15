<template>
  <div>
    <div class="orderHeader">
      <div class="headerLeft">
        <p>
          <v-touch tag="span" @tap="goback()" class="Headerback"></v-touch>
          <span>收货地址</span>
        </p>
      </div>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      add-button-text="添加地址"
    />
  </div>
</template>
<script>
import { AddressList } from "vant";
import { mapMutations, mapState } from "vuex";

export default {
  name: "site",
  created() {
    this.list = JSON.parse(sessionStorage.getItem("site"));
  },
  components: {
    [AddressList.name]: AddressList
  },
  data() {
    return {
      chosenAddressId: "1",
      list: []
    };
  },
  methods: {
    goback() {
      this.$router.back();
    },
    onAdd() {
      this.$router.push({ name: "compile" });
    },
    onEdit(item, index) {
      console.log(item.id);
      this.$router.push({
        name: "compile",
        params: { id: item.id, index: index }
      });
    }
  }
};
</script>
<style>
.orderHeader {
  width: 100%;
  height: 0.5rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.headerLeft {
  width: 1.06rem;
  height: 0.5rem;
}
.headerLeft p {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  color: #464646;
  margin-left: 0.07rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.headerLeft p .Headerback {
  display: block;
  float: left;
  width: 0.2rem;
  height: 0.2rem;
  /* vertical-align: middle; */
  background: url("../../../public/img/left.png") no-repeat center;
}
.headerLeft span {
  display: block;
}
</style>