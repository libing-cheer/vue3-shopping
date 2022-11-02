import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    // 异步路由
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/Home"),
  },
  {
    path: "/cartList",
    name: "CartList",
    // 异步路由
    component: () =>
      import(/* webpackChunkName: "cartList" */ "@/views/cartList/CartList"),
  },
  {
    path: "/orderList",
    name: "OrderList",
    // 异步路由
    component: () =>
      import(/* webpackChunkName: "orderList" */ "@/views/orderList/OrderList"),
  },
  {
    path: "/ownPage",
    name: "OwnPage",
    // 异步路由
    component: () =>
      import(/* webpackChunkName: "ownPage" */ "@/views/ownPage/OwnPage"),
  },
  {
    path: "/orderConfirmation/:id",
    name: "OrderConfirmation",
    // 异步路由
    component: () =>
      import(
        /* webpackChunkName: "orderConfirmation" */ "@/views/orderConfirmation/OrderConfirmation"
      ),
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
