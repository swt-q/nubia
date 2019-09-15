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
                </span></v-touch>发现

        </div>
        <div class="nav">
            <router-link v-for="(item,index) in routerList" :key="index"
                :to="item.path"
                tag="li"
            >
            <a>{{item.title}}</a>

            </router-link>
        </div>
        <!-- find -->
        <div>
            <router-view></router-view>
        </div>
        <!-- find -->

        <!-- find -->
    </div>
</template>
<script>
export default {
    name: "Find",
    data() {
        return {
            routerList: [
                { path: "hotReview", title: "产品热评" },
                { path: "experience", title: "体验店" },
                { path: "newsCenter", title: "新闻中心" },
                { path: "video", title: "视频长廊" },
            ]
        };
    },
    methods: {
        goBack() {
            this.$router.push("/");
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
    font-size: 0.2rem;
    border-bottom: 1px solid #ccc;
}
.header span {
    width: 0.4rem;
    height: 0.51rem;
    font-size: 0.2rem;
    display: inline-block;
    padding-left: 0.06rem;
}
.nav {
    height: 0.4rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav li {
    width: 25%;
    height: 0.4rem;
    display: block;
    font-size: 0.144rem;
    line-height: 0.4rem;
    text-align: center;
}
.nav a:hover {
    color: red;
}
.icon {
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: -8px;
    fill: currentColor;
    overflow: hidden;
}
</style>