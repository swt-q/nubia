import Vue from "vue";

Vue.filter("addUrl", function (value){
    return "//oss.static.nubia.cn/"+value;
})

