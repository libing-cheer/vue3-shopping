import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: {
      // shopId: {
      //   productId: {
      //     _id: "商品id1",
      //     name: "番茄250g/份",
      //     sales: 10,
      //     prices: 33.6,
      //     oldPrices: 39.6,
      //     imgUrl: "https://pic.quanjing.com/v7/d9/QJ8738445721.jpg@!350h",
      //     tab: "all",
      //     count: 1,
      //   },
      // },
    },
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId];
      if (!shopInfo) {
        shopInfo = {};
      }
      let product = shopInfo[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count = product.count + payload.num;
      if (product.count < 0) product.count = 0;

      if (payload.num > 0) {
        product.check = true;
      }
      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo;
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId][productId];
      product.check = !product.check;
    },

    cleanCartProduct(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId] = {};
    },
    setCartItemCheckedt(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId];
      if (products) {
        for (const i in products) {
          const product = products[i];
          product.check = true;
        }
      }
    },
  },
  actions: {},
  modules: {},
});
