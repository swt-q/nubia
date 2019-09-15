<template>
  <div>
    <div class="orderHeader">
      <div class="headerLeft">
         <p>
          <v-touch tag="span" @tap="goback()" class="Headerback"></v-touch>
          <span>编辑收货地址</span>
        </p>
      </div>
    </div>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-postal
      :show-delete="id?true:false"
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script>
import { AddressEdit, AddressList } from "vant";

import { mapMutations, mapState } from "vuex";

import areaList from "../../../public/js/area";

export default {
  created() {
    let { id, index } = this.$route.params;
    this.id = id;
    this.index = index;
    if (sessionStorage.getItem("site")) {
      this.addressInfo = JSON.parse(sessionStorage.getItem("site"))[this.index];
      console.log(this.index);
    } else {
      return {};
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit
  },
  data() {
    return {
      addressInfo: {},
      Info: [],
      areaList,
      id: "",
      index: ""
    };
  },
  computed: {
    ...mapState({
      listAllInfo: state => state.site.list
    })
  },
  methods: {
      goback(){
         this.$router.back();
      },
    onSave(content) {
      if (this.id || this.id == 0) {
        this.Info = JSON.parse(sessionStorage.getItem("site"));
        this.Info[this.index] = {
          id: Number(this.id),
          name: content.name,
          tel: content.tel,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          postalCode: content.postalCode,
          isDefault: content.isDefault,
          address: content.province + content.city + content.addressDetail
        };
        sessionStorage.setItem("site", JSON.stringify(this.Info));
        alert("修改成功");
      } else {
        this.siteAddList(content);
        alert("保存成功");
      }
      this.$router.push({ name: "site" });
    },
    onDelete(content) {
      let list = JSON.parse(sessionStorage.getItem("site"));
      list.splice(this.index, 1);
      sessionStorage.setItem("site", JSON.stringify(list));
      this.listAllInfo.splice(this.index, 1);
      alert("删成功");
      this.$router.push({ name: "site" });
    },
    ...mapMutations({
      siteAddList: "site/addList"
    })
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
  width: 1.5rem;
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