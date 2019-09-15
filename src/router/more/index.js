export default {
  path: "/more/:id/:title",
  name: "more",
  meta: {
    flag: false
  },
  props: true,
  component: () => import("@pages/more")
};
