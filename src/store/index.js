import { createStore } from "vuex";

export default createStore({
  state: {
    // { shopId: { shopName: '', productList: { productId: {} } }}
    cartList: {},
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      console.log(payload, "payload");
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };

      let product = shopInfo.productList[productId];

      if (!product) {
        product = productInfo;
        product.count = 0;
      }

      product.count = product.count + payload.num;
      product.count < 0 && (product.count = 0);
      payload.num > 0 && (product.check = true);
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
    },

    cleanCartProduct(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
    },
    setCartItemChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId].productList;
      if (products) {
        for (const i in products) {
          const product = products[i];
          product.check = true;
        }
      }
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {},
});
