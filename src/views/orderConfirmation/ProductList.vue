<template>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">
        <div v-for="item in productList" :key="item._id" class="products__item">
          <img class="products__item__img" :src="item.imgUrl" alt="" />
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
                <span class="products__item__price__yen"> &yen; </span>
                {{ item.prices }} x {{ item.count }}
              </span>
              <span class="products__item__price__total">
                <span class="products__item__price__yen"> &yen; </span>
                {{ (item.prices * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "@/effects/cartEffect";
export default {
  name: "ProductList",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { shopName, productList } = useCommonCartEffect(shopId);

    return { shopName, productList };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.products {
  margin: 0.16rem 0.18rem 0rem 0.18rem;
  background: $bgColor;
  &__title {
    padding: 0.16rem;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-font-color;
  }
  &__wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 2.66rem;
    bottom: 0.6rem;
    overflow-y: scroll;
    margin: 0 0.18rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;
    &__detail {
      flex: 1;
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
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $highlight-fontColor;
      &__total {
        flex: 1;
        color: $dark-fontColor;
        text-align: right;
      }
      &__yen {
        font-size: 0.12rem;
      }
    }
  }
}
</style>
