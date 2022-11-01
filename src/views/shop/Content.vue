<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab,
        }"
        v-for="item in categories"
        :key="item.tab"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="products">
      <div class="products__item" v-for="item in list" :key="item._id">
        <img class="products__item__img" :src="item.imgUrl" alt="" />
        <div class="products__item__detail">
          <h4 class="products__item__title">{{ item.name }}</h4>
          <p class="products__item__sales">月售{{ item.sales }}份</p>
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
                changeCartItem(shopId, item._id, item, -1, shopName);
              }
            "
            >-</span
          >
          {{ getProductCartCount(shopId, item._id) }}
          <span
            class="products__number__plus"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, 1, shopName);
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from "vue";
import { get } from "@/utils/request";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useCommonCartEffect } from "./commonCartEffect";
const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];
// Tab 切换相关逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};
// 列表内容相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] });
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno && result?.data) {
      content.list = result.data.filter(
        (item) => item.tab === currentTab.value
      );
    }
  };

  watchEffect(() => {
    getContentData();
  });

  const { list } = toRefs(content);
  return { list };
};
// 购物车相关逻辑
const useCartEffect = () => {
  const store = useStore();
  const { cartList, changeCartItemInfo } = useCommonCartEffect();

  const changeShopName = (shopId, shopName) => {
    store.commit("changeShopName", { shopId, shopName });
  };
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num);
    changeShopName(shopId, shopName);
  };

  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0;
  };
  return { cartList, changeCartItem, getProductCartCount };
};
export default {
  name: "Content",
  props: ["shopName"],
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);

    const { cartList, changeCartItem, getProductCartCount } = useCartEffect();
    return {
      shopId,
      categories,
      currentTab,
      list,
      handleTabClick,
      cartList,
      changeCartItem,
      getProductCartCount,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  width: 0.76rem;
  height: 100%;
  overflow-y: scroll;
  background: $search-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: $content-font-color;
    &--active {
      background: $bgColor;
    }
  }
}
.products {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: $content-font-color;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
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
      bottom: 0.12rem;
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
        background: #0091ff;
        color: $bgColor;
      }
    }
  }
}
</style>
