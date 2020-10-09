import Router from "vue-router";

let routes = [
  {
    // 默认页面
    path: "/",
    component: () => import("../views/index.vue"),
    redirect: "/index",
    children: [],
  },
];
export default routes;
