import { computed } from "vue";
import { useStore } from "vuex";
export const useCommonCartEffect = (shopId) => {
  const store = useStore();
  const { cartList } = store.state;

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit("changeCartItemInfo", {
      shopId,
      productId,
      productInfo,
      num,
    });
  };

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {};
    const notEmptyProductList = {};

    for (const i in productList) {
      const product = productList[i];
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList;
  });

  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || "";
    return shopName;
  });

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList;
    const result = { total: 0, prices: 0, allChecked: true };

    if (productList) {
      for (const i in productList) {
        const product = productList[i];
        result.total += product.count;

        if (product.check) {
          result.prices += product.count * product.prices;
        }

        if (product.count > 0 && !product.check) {
          result.allChecked = false;
        }
      }
    }
    result.prices = result.prices.toFixed(2);
    return result;
  });
  return { cartList, changeCartItemInfo, productList, shopName, calculations };
};
