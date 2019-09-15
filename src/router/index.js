import Vue from "vue";
import VueRouter from 'vue-router';
import home from './home';
import cate from './cate';
import discover from './discover';
import cart from './cart';
import mine from './mine';
import search from "./searchPage";

import product from "./product";
import buynow from "./buynow";
import nullcart from "./nullcart";
import message from './message';
import more from './more';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: '/',
            redirect: "/home"
        },
        home,
        cate,
        discover,
        cart,
        mine,
        search,
        product,
        buynow,
        nullcart,
        message,
        more
    ]
})

export default router