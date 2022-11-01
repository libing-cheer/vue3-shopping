<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" alt="" />
    <div
      :class="{
        shop__content: true,
        'shop__content--bordered': !hideBorder,
      }"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">
          <span class="shop__content__text">月售：{{ item.sales }}</span>
          <span class="shop__content__text">起送：{{ item.expressLimit }}</span>
          <span class="shop__content__text"
            >基础运费：{{ item.expressPrice }}</span
          >
        </span>
      </div>
      <p class="shop__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
};
</script>
<style lang="scss" scoped>
@import "../style/variablse.scss";
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
    border-radius: 0.28rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-font-color;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__text {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
