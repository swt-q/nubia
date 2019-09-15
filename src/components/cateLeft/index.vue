<template>
  <div>
    <div class="nav_left">
      <ul>
        <li
          v-for="(item,index) in list"
          :class="Colorindex==index?'active':''"
          @click="clickHandler(index)"
          :key="index"
        >
          <a href="#">{{item.cate_name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getTypeList } from "@api";
export default {
  name: "cateLeft",
  async created() {
    let data = await getTypeList();
    console.log(data.data);
    this.list = data.data.result;
  },
  data() {
    return {
      list: "",
      Colorindex: 0
    };
  },
  methods: {
    clickHandler(index) {
      this.Colorindex = index;
      this.$observer.$emit("handlerClick",index)
    }
  }
};
</script>
<style scoped>
.nav_left {
  position: fixed;
  width: 30%;
  height: 100%;
  padding: 0 0 0 20px;
  left: 0px;
  top: 80px;
  font-size: 16px;
}

.nav_left ul li {
  height: 48px;
  padding-top: 5px;
}

.nav_left a {
  color: black;
  font-weight: 500;
  width: 100%;
  display: inline-block;
}
.active > a {
  color: #ff5e5e;
  border-right: 2px solid #ff5e5e;
}
</style>