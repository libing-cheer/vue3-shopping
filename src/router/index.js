import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    // 异步路由
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/Home"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "@/views/shop/Shop"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/Login"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/register/Register"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = name === "Login" || name === "Register";
  isLogin || isLoginOrRegister ? next() : next({ name: "Login" });
  // console.log(to, from);
});

export default router;
