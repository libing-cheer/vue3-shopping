<template>
  <div class="benefit">
    <div class="benefit__header">
      <div class="benefit__header__title">我的权益</div>
      <div class="benefit__header__all">
        <div>全部</div>
        <div class="iconfont benefit__header__icon">&#xe6db;</div>
      </div>
    </div>
    <div class="benefit__content">
      <div class="benefit__content__item">
        <span class="benefit__content__item__icon">
          &yen; {{ obj.redEnevelopes }}</span
        >
        <span class="benefit__content__item__text"> 红包 </span>
      </div>
      <div class="benefit__content__item">
        <span class="benefit__content__item__icon"> {{ obj.coupon }} 张</span>
        <span class="benefit__content__item__text">优惠券</span>
      </div>
      <div class="benefit__content__item">
        <span class="benefit__content__item__icon">
          开卡享 &yen; {{ obj.activeCardMoney }}</span
        >
        <span class="benefit__content__item__text">淘宝省钱卡</span>
      </div>
      <div class="benefit__content__item">
        <span class="benefit__content__item__icon">
          &yen; {{ obj.goldRushCoin }}</span
        >
        <span class="benefit__content__item__text">淘金币可抵</span>
        <span class="benefit__content__item__num">{{ obj.needReturn }}</span>
      </div>
    </div>
    <div class="benefit__sport">
      <div class="benefit__sport__text">
        <span class="iconfont benefit__sport__iconfont">&#x1008c;</span>
        您有{{ obj.sportCoupon }}元户外券待领取
      </div>
      <div class="iconfont benefit__sport__all">
        <div>去领取</div>
        <div class="iconfont benefit__sport__icon">&#xe6db;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Benefit",
  props: ["obj"],
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.benefit {
  margin: 0 0.1rem;
  padding-bottom: 0.1rem;
  border-radius: 0.1rem;
  background: $bgColor;
  &__header {
    display: flex;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.1rem;
    &__title {
      flex: 1;
      font-size: 0.14rem;
      color: rgb(10, 10, 10);
    }
    &__all {
      display: flex;
      margin-right: 0.1rem;
      font-size: 0.12rem;
      color: rgb(135, 135, 135);
    }
    &__icon {
      transform: rotate(180deg);
      font-size: 0.12rem;
    }
  }
  &__content {
    display: flex;
    overflow: hidden;
    &__item {
      position: relative;
      flex: 1;
      text-align: center;
      span {
        display: block;
        flex-wrap: wrap;
        margin: 0.1rem 0;
      }
      &__num {
        position: absolute;
        display: inline-block;
        width: 0.4rem;
        height: 0.2rem;
        line-height: 0.2rem;
        color: #ffffff;
        background: rgb(239, 96, 34);
        border: 0.01rem solid #ffffff;
        border-radius: 0.2rem;
        top: -0.1rem;
        right: -0.08rem;
        font-size: 0.1rem;
        transform: scale(0.5);
      }
    }
  }
  &__sport {
    display: flex;
    margin: 0 0.1rem;
    line-height: 0.3rem;

    background: rgb(255, 233, 231);
    border-radius: 0.1rem;
    &__text {
      flex: 1;
      font-size: 0.12rem;
      color: rgb(53, 42, 35);
    }
    &__all {
      display: flex;
      margin-right: 0.1rem;
      font-size: 0.12rem;
      color: rgb(226, 112, 65);
      font-weight: bold;
    }
    &__icon {
      transform: rotate(180deg);
      font-size: 0.12rem;
    }
    &__iconfont {
      margin: 0rem 0 0 0.1rem;
      position: relative;
      top: 0.01rem;
      color: red;
    }
  }
}
</style>
