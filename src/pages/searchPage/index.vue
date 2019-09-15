<template>
    <div>
        <div class="header">
            <v-touch @tap="goBack()">
                <span>
                    <svg class="icon"
                         style="font-size:5px"
                         aria-hidden="true">
                        <use xlink:href="#icon-back"></use>
                    </svg>
                </span>
            </v-touch>
            <div class="searchBox">
                <v-touch @tap="hiddenSearch()">
                    <input type="text"
                           placeholder="搜索"
                           id="search"
                           v-model="name" />
                </v-touch>
            </div>
            <v-touch @tap="changeShowList()">
                搜索
            </v-touch>
        </div>

        <div class="hot">
            <h3>热门搜索</h3>
            <ul class="hot_result">
                <router-link tag="li"
                             :to="{name:'mine',params:{product_id:item.product_id,spec_id:0}}"
                             v-for="(item,index) in searchList"
                             :key="index">{{item.product_name}}</router-link>
            </ul>
        </div>
        <!--history-->
        <div class="history">
            <h3>搜索历史</h3>
            <ul>
                <li v-for="historyItem in searchHistory"
                    :key="historyItem.spec_id">{{historyItem}}</li>
            </ul>
            <v-touch @tap="cleanHistorys()">
                <button class="clearHistory"><img alt=""
                         src="//shop-soa-static.nubia.com/images/search_delect.png?v=1568097597">
                    清除历史记录
                </button>
            </v-touch>
        </div>
        <!--history-->
        <!--show_search-->
        <div class="show_search"
             v-if="flag">
            <ul>
                <v-touch @tap="goToList($event)">

                    <router-link tag="li"
                                 :to="{name:'mine',params:{product_id:resultItem.product_id,spec_id:resultItem.spec_id}}"
                                 v-for="resultItem in searchResult"
                                 :key="resultItem.spec_id">{{resultItem.product_name}}
                    </router-link>
                </v-touch>
            </ul>
        </div>
        <!--show_search-->

        <!--show-->
        <!--history-->
        <div class="shopShowList"
             v-if="changeFlag">
            <div class="product">
                <ul>
                    <li>综合</li>
                    <v-touch @tap="sortPrice()">
                        <li class="price">
                            <span>价格</span>
                        </li>
                    </v-touch>
                    <li class="filter">
                        <span>筛选</span>
                    </li>
                    <v-touch @tap="changeViewHandler()">
                        <li class="type  filterli">
                            <p>
                            </p>
                        </li>
                    </v-touch>
                </ul>
            </div>
            <div class="wraplist"
                 v-if="!changeView">
                <div>
                    <ul>
                        <!-- <router-link
                        > -->
                        <router-link tag="li"
                                     :to="{name:'mine',params:{product_id:resultItem.product_id,spec_id:resultItem.spec_id}}"
                                     v-for="resultItem in searchResult"
                                     :key="resultItem.spec_id">
                            <div class="left">
                                <img :src="resultItem.image | addUrl"
                                     alt="">
                            </div>
                            <div class="right">
                                <p class="info">{{resultItem.product_name}}</p>
                                <div class="bottom">
                                    <span>¥</span><span class="price">{{resultItem.price}}</span>
                                </div>
                            </div>
                        </router-link>
                        <!-- </router-link> -->
                    </ul>
                    <div class="bottom">
                        <p>没有更多啦~</p>
                    </div>
                </div>
            </div>
            <!--切换视图-->
            <div class="siftParts_list"
                 v-if="changeView">
                <router-link tag="div"
                             :to="{name:'mine',params:{product_id:resultItem.product_id,spec_id:resultItem.spec_id}}"
                             class="sp_showParts"
                             v-for="resultItem in searchResult"
                             :key="resultItem.spec_id">
                    <a class="sp_showImg"> <img :src="resultItem.image | addUrl"></a>
                    <h3>{{resultItem.product_name}}</h3>
                    <p>
                        ￥<span>{{resultItem.price}}</span>
                    </p>
                </router-link>
            </div>
        </div>
        <!--切换视图-->
    </div>
    <!--history-->
    <!--history-->
</template>
<script>
import { searchApi } from "@api";
import { searchResultApi } from "@api";
import { throttle } from "@utils/throttle";
export default {
    name: "Search",
    data() {
        return {
            name: "",
            searchList: [],
            searchResult: [],
            searchHistory: [],
            flag: false,
            changeFlag: false,
            changeView: false,
            tabBars: [
                {
                    icon: "&#xe64f;",
                    title: "首页",
                    path: "/home"
                },
                {
                    icon: "&#xe653;",
                    title: "分类",
                    path: "/cate"
                },
                {
                    icon: "&#xe746;",
                    title: "发现",
                    path: "/discover"
                },
                {
                    icon: "&#xe622;",
                    title: "购物车",
                    path: "/cart"
                },
                {
                    icon: "&#xe654;",
                    title: "我",
                    path: "/mine"
                }
            ]
        };
    },
    async created() {
        let data = await searchApi();
        // console.log(data.data.search_list);
        this.searchList = data.data.search_list;
        this.searchFunc = throttle(async newVal => {
            let Searchdata = await searchResultApi(this.name);
            console.log(Searchdata);
            if (Searchdata.data.search_list) {
                this.searchResult = Searchdata.data.search_list;
                console.log(this.searchResult);
            }
        });
    },
    methods: {
        hiddenSearch(e) {
            this.flag = true;
            this.changeFlag = true;
            if (this.name) {
                this.flag = true;
                let n = this.searchHistory.indexOf(this.name);
                console.log(n);
                if (n != -1) return;
                this.searchHistory.push(this.name);
            } else {
                this.flag = false;
                this.changeFlag = !this.changeFlag;
            }
        },
        changeShowList() {
            this.changeFlag = true;
            this.flag = false;
        },
        changeViewHandler() {
            this.changeView = !this.changeView;
        },
        goToList(e) {
            console.log("1");
        },
        goBack() {
            this.$router.back();
        },
        cleanHistorys() {
            localStorage.removeItem("todoList");
            this.searchHistory.length = 0;
        },
        sortPrice() {
            console.log(1);
        }
    },
    watch: {
        name(newVal, oldVal) {
            if (newVal == oldVal) return;
            this.searchFunc(newVal);
            this.hiddenSearch();
        }
    }
};
</script>
<style scoped>
.header {
    height: 0.51rem;
    line-height: 0.51rem;
    display: flex;
    color: #464646;
    font-size: 0.15rem;
    border-bottom: 1px solid #ccc;
    align-items: center;
}
.header span {
    width: 0.4rem;
    height: 0.51rem;
    font-size: 0.2rem;
    display: inline-block;
    padding-left: 0.06rem;
}
.icon {
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: -8px;
    fill: currentColor;
    overflow: hidden;
}
.searchBox {
    width: 2.8rem;
    height: 0.35rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    display: flex;
    align-items: center;
}
#search {
    width: 100%;
    height: 0.35rem;
    border-radius: 20px;
    font-size: 0.14rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    background: rgb(248, 248, 248)
        url(https://oss.static.nubia.cn/active/5c73876ac212759.png) no-repeat
        12px center;
    background-size: 20px;
    /* line-height: 35px; */
    color: rgb(115, 115, 115);
    outline: none;
    border: none;
}
.hot {
    padding: 0.25rem 0.2rem 0 0.2rem;
}
.hot h3 {
    color: rgb(156, 156, 156);
    font-size: 0.15rem;
    margin-bottom: 0.16rem;
    font-weight: normal;
}
.hot_result {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
}
.hot_result li {
    font-size: 0.15rem;
    padding: 0.08rem;
    background: rgb(244, 244, 244);
    color: rgb(30, 30, 30);
    border-radius: 8px;
    margin-right: 8px;
    margin-bottom: 4.8px;
}
.history {
    padding: 0.25rem 0.2rem 0.9rem 0.2rem;
}
.history h3 {
    color: rgb(156, 156, 156);
    font-size: 0.15rem;
    margin-bottom: 0.16rem;
    font-weight: normal;
}
.history ul {
    width: 100%;
}
.history li {
    width: 100%;
    padding: 0.096rem 0;
    border-bottom: 1px solid rgb(230, 230, 230);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(120, 120, 120);
    font-size: 0.15rem;
}
.show_search {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0.51rem;
    background: #fff;
    padding-bottom: 0.563rem;
    z-index: 6;
    /* overflow: hidden; */
}
.show_search li {
    height: 0.466rem;
    border-bottom: 1px solid rgb(240, 240, 240);
    padding: 0.128rem 0.08rem 0.128rem 0.224rem;
    font-size: 0.15rem;
}
.clearHistory {
    margin: 0 auto;
    width: 50%;
    height: 0.32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(120, 120, 120);
    border: 1px solid rgb(200, 200, 200);
    border-radius: 1rem;
    background: inherit;
    margin-top: 0.32rem;
}
.clearHistory img {
    width: 13.5%;
    margin-right: 0.03rem;
}
.product {
    height: 0.4rem;
    width: 100%;
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
.filterli {
    width: 1.3rem !important;
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
    background: url(https://shop-soa-static.nubia.com/images/sortNone.png) 0
        center no-repeat;
    background-size: 0.15rem 0.15rem;
}
.product ul .filter span::after {
    content: " ";
    display: inline-block;
    height: 0.15rem;
    width: 0.15rem;
    background: url(https://shop-soa-static.nubia.com/images/filter.png) 0
        center no-repeat;
    background-size: 0.15rem 0.15rem;
}
.product ul .type p {
    width: 0.55rem;
    height: 100%;
    background: url(https://shop-soa-static.nubia.com/images/listChange2.png)
        no-repeat right 14px center;
    background-size: 0.22rem;
    float: right;
}
.wraplist {
    padding-bottom: 0.563rem;
    background: #fff;
}
.wraplist ul li {
    height: 1.12rem;
    width: 100%;
    display: flex;
    justify-content: start;
}
.wraplist .left {
    width: 1.12rem;
    height: 1.12rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wraplist .left img {
    width: 0.95rem;
    height: 0.95rem;
}
.wraplist .right {
    flex: 1;
    height: 100%;
    padding: 0.176rem 0;
    padding-left: 0;
    position: relative;
}
.wraplist .right .info {
    font-size: 0.1625rem;
    color: #000000;
    font-weight: 700;
    line-height: 0.224rem;
    padding-right: 0.16rem;
    position: absolute;
    top: 0.176rem;
    padding-left: 0;
}
.wraplist .right span {
    color: rgb(255, 94, 94);
    font-size: 0.12rem;
}
.wraplist .right .price {
    font-size: 0.165rem;
}
.wraplist .right .bottom {
    position: absolute;
    bottom: 0.176rem;
}
.wraplist .right .bottom .member_1 {
    color: rgb(139, 139, 139);
}
.wraplist .right .bottom .member_2 {
    color: rgb(139, 139, 139);
    font-size: 0.165rem;
}
.wraplist .right .bottom .vip {
    background: #ff8d00;
    color: #ffffff;
    padding: 2px 4px;
    border-radius: 3px;
    position: relative;
    bottom: 3px;
}
.wraplist > div > .bottom {
    height: 0.3rem;
    width: 100%;
    text-align: center;
    line-height: 0.3rem;
    color: #9c9c9c;
    background: #eeeeee;
}
.shopShowList {
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: absolute;
    top: 0.51rem;
    z-index: 5;
    padding-bottom: 0.563rem;
}
.siftParts_list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    margin: 0;
    padding-bottom: 0.563rem;
    background: #fff;
}
.sp_showParts {
    width: 49%;
    height: 2.88rem;
}
.sp_showImg {
    height: 1.95rem;
    padding: 0.05rem 0;
}
.sp_showImg img {
    height: 1.85rem;
    background: rgb(244, 243, 239);
}
.sp_showParts h3 {
    height: 0.216rem;
    line-height: 0.216rem;
    font-weight: 700;
    font-size: 0.11rem;
    padding-left: 0.1rem;
    margin-top: 0.1rem;
    margin-bottom: 0.17rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.sp_showParts p {
    height: 0.208rem;
    line-height: 0.208rem;
    font-size: 0.128rem;
    color: rgb(255, 103, 0);
    padding-left: 0.1rem;
    margin-top: 0.04rem;
}
.sp_showParts span {
    font-size: 0.16rem;
}
</style>