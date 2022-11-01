<template>
  <div class="mask" v-if="showCart" @click="handleCartShowChange"></div>
  <div class="cart">
    <div class="products" v-if="showCart">
      <div class="products__header">
        <div class="products__header__all">
          <span
            class="products__header__icon iconfont"
            v-html="allChecked ? '&#xe69b;' : '&#xe619;'"
            @click="() => setCartItemChecked(shopId)"
          ></span
          >全选
        </div>
        <div class="products__header__clear">
          <span
            class="products__header__clear__btn"
            @click="() => cleanCartProduct(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div v-if="item.count" class="products__item">
          <div
            class="products__item__checked iconfont"
            v-html="item.check ? '&#xe69b;' : '&#xe619;'"
            @click="() => changeCartItemCheck(shopId, item._id)"
          ></div>
          <img class="products__item__img" :src="item.imgUrl" alt="" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span class="products__item__price__yen">&yen;</span
              >{{ item.prices }}
              <span class="products__item__price__origin"
                >&yen;{{ item.oldPrices }}</span
              >
            </p>
          </div>
          <div class="products__number">
            <span
              class="products__number__minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="products__number__plus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          alt=""
          class="check__icon__img"
          @click="handleCartShowChange"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{ totalPrice }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{ name: 'Home' }">去结算</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "./commonCartEffect";
// 获取购物车信息逻辑
const useCartComputedEffect = (shopId) => {
  const store = useStore();
  const cartList = store.state.cartList;
  const total = computed(() => {
    const productList = cartList[shopId]?.productList;
    let count = 0;
    if (productList) {
      for (const i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });
  const totalPrice = computed(() => {
    const productList = cartList[shopId]?.productList;
    let prices = 0;
    if (productList) {
      for (const i in productList) {
        const product = productList[i];
        if (product.check) {
          prices += product.count * product.prices;
        }
      }
    }
    return prices.toFixed(2);
  });
  const allChecked = computed(() => {
    const productList = cartList[shopId];
    let result = true;

    if (productList) {
      for (const i in productList) {
        const product = productList[i];
        if (product.count > 0 && !product.check) {
          result = false;
        }
      }
    }
    return result;
  });
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList;
    return productList;
  });

  const changeCartItemCheck = (shopId, productId) => {
    store.commit("changeCartItemCheck", {
      shopId,
      productId,
    });
  };

  const cleanCartProduct = (shopId) => {
    store.commit("cleanCartProduct", { shopId });
  };

  const setCartItemChecked = (shopId) => {
    store.commit("setCartItemChecked", { shopId });
  };
  return {
    total,
    totalPrice,
    allChecked,
    productList,
    changeCartItemCheck,
    cleanCartProduct,
    setCartItemChecked,
  };
};

// 展示隐藏购物车逻辑
const useToggleCartEffect = () => {
  const showCart = ref(false);

  const handleCartShowChange = () => {
    showCart.value = !showCart.value;
  };
  return { showCart, handleCartShowChange };
};

export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const {
      total,
      totalPrice,
      allChecked,
      productList,
      changeCartItemCheck,
      cleanCartProduct,
      setCartItemChecked,
    } = useCartComputedEffect(shopId);
    const { changeCartItemInfo } = useCommonCartEffect();
    const { showCart, handleCartShowChange } = useToggleCartEffect();

    return {
      shopId,
      showCart,
      total,
      totalPrice,
      allChecked,
      productList,
      handleCartShowChange,
      changeCartItemInfo,
      changeCartItemCheck,
      cleanCartProduct,
      setCartItemChecked,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.products {
  flex: 1;
  max-height: 2.87rem;
  overflow-y: scroll;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 1px solid $content-bgColor;
    color: $content-font-color;
    font-size: 0.14rem;
    &__all {
      width: 0.64rem;
      margin-left: 0.16rem;
    }
    &__icon {
      display: inline-block;
      margin-right: 0.08rem;
      vertical-align: top;
      color: $checkd-iconColor;
      font-size: 0.2rem;
    }
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: $checkd-iconColor;
      font-size: 0.2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $highlight-fontColor;
      &__yen {
        font-size: 0.12rem;
      }
      &__origin {
        margin-left: 0.06rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: $content-fontColor;
        text-decoration: line-through;
      }
    }
    .products__number {
      position: absolute;
      right: 0;
      bottom: 0.26rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        font-size: 0.2rem;
        text-align: center;
        border-radius: 50%;
      }
      &__minus {
        margin-right: 0.05rem;
        border: 0.01rem solid $content-border-color;
        color: $content-border-color;
      }
      &__plus {
        margin-left: 0.05rem;
        background: $checkd-iconColor;
        color: $bgColor;
      }
    }
  }
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background: $highlight-fontColor;
      border-radius: 0.1rem;
      color: $bgColor;
      font-size: 0.12rem;
      text-align: center;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-font-color;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: $highlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: $bgColor;
    font-size: 0.14rem;
    text-align: center;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
