export default {
  path: "/mine",
  name: "mine",
  meta: {
    flag: true,
    Auth: false
  },
  component: () => import("@pages/mine"),
  children: [
    {
      path: "order",
      name: "order",
      meta: {
        flag: false,
        Auth: true
      },
      component: () => import("@components/orderAll")
    },
    {
      path: "login",
      name: "login",
      meta: {
        flag: false,
        Auth: false
      },
      component: () => import("@components/login"),
      children: [
        {
          path: "regist",
          name: "regist",
          meta: {
            flag: false,
            Auth: false
          },
          component: () => import("@components/regist")
        }
      ]
    },
    {
      path: "site",
      name: "site",
      meta: {
        flag: false
      },
      component: () => import("@components/site")
    },
    //编辑城市信息
    {
      path: "compile/:id/:index",
      name: "compile",
      meta: {
        flag: false,
        Auth: true
      },
      component: () => import("@components/compile")
    },
    {
      name: "coupon",
      path: "coupon",
      meta: {
        flag: false,
        Auth: false
      },
      component: () => import("@components/coupon")
    }
  ]
};
