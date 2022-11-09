<template>
  <div class="wrapper">
    <div class="title">我的购物车</div>
    <div class="products">
      <div class="products__list">
        <div v-for="item in list" :key="item._id" class="products__list__main">
          <div class="products__title">{{ item.shopName }}</div>
          <div class="products__item">
            <img class="products__item__img" :src="item.imgUrl" alt="" />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__price__yen"> &yen; </span>
                  {{ item.prices }} x {{ item.sales }}
                </span>
                <span class="products__item__price__total">
                  <span class="products__item__price__yen"> &yen; </span>
                  {{ (item.prices * item.sales).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :pageIndex="1" />
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import Docker from "../../components/Docker";
import { get } from "../../utils/request";

const useCartListEffect = () => {
  const data = reactive({ list: [] });

  const getCartList = async () => {
    const result = await get("/api/cartList");
    if (result?.status && result?.data) {
      data.list = result.data;
    }
  };
  getCartList();

  const { list } = toRefs(data);

  return { list };
};
export default {
  name: "CartList",
  components: { Docker },
  setup() {
    const { list } = useCartListEffect();

    return { list };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.wrapper {
  overflow-y: scroll;
  position: absolute;
  top: 0;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
}
.title {
  position: sticky;
  top: 0;
  z-index: 2;
  line-height: 0.44rem;
  color: $content-font-color;
  text-align: center;
  font-size: 0.16rem;
  background: $bgColor;
}
.products {
  margin: 0.16rem 0.18rem 0rem 0.18rem;
  background: $bgColor;
  &__title {
    padding: 0.16rem;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-font-color;
  }
  &__list {
    padding: 0rem 0rem;
    // margin: 0 0.18rem;
    background: rgb(248, 248, 248);
    &__main {
      margin: .16rem 0;
      background: $bgColor;
    }
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
