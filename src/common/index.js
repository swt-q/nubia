import Vue from "vue";

Vue.filter("addUrl", function (value) {
    return "https://oss.static.nubia.cn/blockimage" + value;
})
