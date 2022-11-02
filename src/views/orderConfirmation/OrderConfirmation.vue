<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back" @click="handleBackClick">
          &#xe6db;
        </div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">
          北京理工大学国防科技园2号楼10层
        </div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（先生）</span>
          <span class="top__receiver__info__name">18340009900</span>
        </div>
        <div class="iconfont top__receiver__icon">&#xe6db;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">{{ shopName }}</div>
      <div class="products__list" v-for="item in productList" :key="item._id">
        <div class="products__item">
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
                {{ item.prices * item.count }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order__price">
        实付金额：<b>¥ {{ calculations.prices }}</b>
      </div>
      <div class="order__btn">提交订单</div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { useCommonCartEffect } from "@/effects/cartEffect";
export default {
  name: "OrderConfirmation",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const shopId = route.params.id;
    const { shopName, productList, calculations } = useCommonCartEffect(shopId);

    const handleBackClick = () => {
      router.back();
    };

    return { shopName, productList, calculations, handleBackClick };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eeeeee;
  overflow-y: scroll;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 55%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    line-height: 0.24rem;
    padding-top: 0.26rem;
    color: #ffffff;
    text-align: center;
    font-size: 0.16rem;
    &__back {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #ffffff;
    border-radius: 0.04rem;
    &__title {
      padding: 0.16rem 0 0.14rem 0.16rem;
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: #333333;
    }
    &__address {
      padding: 0 0.4rem 0 0.16rem;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333333;
    }
    &__info {
      padding: 0.06rem 0 0 0.16rem;
      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        color: #666666;
        font-size: 0.12rem;
      }
    }
    &__icon {
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666666;
      font-size: 0.2rem;
      transform: rotate(180deg);
    }
  }
}

.products {
  margin: 0.16rem 0.18rem 0rem 0.18rem;
  background: #ffffff;;
  &__title {
    padding: 0.16rem 0.16rem 0 0.16rem;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: #333333;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.16rem;
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
      color: #e93b3b;
      &__total {
        flex: 1;
        color: #000000;
        text-align: right;
      }
      &__yen {
        font-size: 0.12rem;
      }
    }
  }
}
.order {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.49rem;
  line-height: 0.49rem;
  background: #ffffff;
  border-top: 1px solid $content-bgColor;
  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: #333333;
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: #ffffff;
    text-align: center;
    font-size: 0.14rem;
  }
}
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  .order {
    bottom: 0.24rem;
  }
}
</style>
