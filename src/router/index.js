import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const adminAllRouterList = [
  {
    path: "/admin",
    component: resolve => require(["@/components/Index"], resolve)
  },

  {
    path: "/admin/user",
    component: resolve => require(["@/components/admin/User"], resolve)
  },

  {
    path: "/admin/user/list",
    component: resolve => require(["@/components/admin/user/list"], resolve)
  },

  {
    path: "/admin/user/detail",
    component: resolve => require(["@/components/admin/user/detail"], resolve)
  },
  {
    path: "/admin/role",
    component: resolve => require(["@/components/admin/Role"], resolve)
  }
];

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: resolve => require(["@/components/Login"], resolve)
    },
    {
      path: "/register",
      component: resolve => require(["@/components/Register"], resolve)
    }
  ]
});
