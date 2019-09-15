<template>
  <div id="list" ref="active">
    <div class="type">
      <div class="list" v-for="(item,index) in Infos" :key="index">
        <p>
          <i></i>
          <span>{{item.cate_name}}</span>
          <i></i>
        </p>
        <ul>
          <router-link
            tag="li"
            v-for="(items,index) in item.infos"
            :key="index"
            :to="{name:'product',params:{product_id:items.product_id,spec_id:items.spec_id}}"
          >
              <a href="#">
              <img :src="items.image_id | getImg()" alt />
              <p>{{items.product_name}}&nbsp;{{items.color_name}}</p>
            </a>
          </router-link>
        </ul>
        <router-link
          tag="li"
          class="check_more"
          :to="{name:'more',params:{id:item.cate_id,title:item.cate_name}}"
        >
          <a href="#">查看更多{{item.cate_name}}></a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { getTypeList } from "@api";

export default {
  name: "cateRight",
  async created() {
    let data = await getTypeList();
    this.Infos = data.data.result;
    this.$observer.$on("handlerClick", value => {
      this.$nextTick(() => {
        let listDiv = this.$refs.active.querySelectorAll(".list")[value];
        this.$refs.active.scrollTop = listDiv.offsetTop - 70;
      });
    });
    let title = this.Infos.map(item => {
      return { title: item.cate_name, id: item.cate_id };
    });
  },
  data() {
    return {
      Infos: []
    };
  },
  filters: {
    getImg(value) {
      return "//oss.static.nubia.cn/" + value;
    }
  },
  methods: {}
};
</script>
<style scoped>
#list {
  float: right;
  width: 70%;
  height: 100%;
  overflow: auto;
}
.type {
  padding-top: 80px;
  padding-bottom: 80px;
}
#list .list > p {
  color: #191919;
  line-height: 50px;
  text-align: center;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

#list .list p i {
  width: 22%;
  display: block;
  border-bottom: 1px solid rgb(170, 170, 170);
}

#list .list p span {
  font-size: 18px;
  margin: 0 10px;
}

#list .list ul {
  display: flex;
  padding: 0 17px;
  flex-wrap: wrap;
  justify-content: space-between;
}

#list .list ul li {
  margin: 5px 0 5px 0;
}

#list .list ul li a img {
  height: 105px;
  width: 105px;
}

#list .list ul li a p {
  color: #666666;
  text-align: center;
  margin: 10px 0 0;
  font-size: 0.1rem;
  width: 105px;
}

#list .list .check_more {
  height: 30px;
  text-align: center
}

#list .list .check_more a {
  color: #9c9c9c;
  font-size: 10px;
  height: 30px;
  line-height: 30px;
}

.img img {
  width: 375px;
  height: 275px;
}
</style>