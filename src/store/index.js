import { createStore } from "vuex";

const setLocallCartList = (state) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString;
};

const getLocallCartList = () => {
  try {
    return JSON.parse(localStorage.cartList);
  } catch {
    return {};
  }
};
export default createStore({
  state: {
    // { shopId: { shopName: '', productList: { productId: {} } }}
    cartList: getLocallCartList(),
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

      setLocallCartList(state);
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;

      setLocallCartList(state);
    },

    cleanCartProduct(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};

      setLocallCartList(state);
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
      setLocallCartList(state);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {},
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;

      setLocallCartList(state);
    },
    clearCartData(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};

      setLocallCartList(state);
    },
  },
  actions: {},
  modules: {},
});
