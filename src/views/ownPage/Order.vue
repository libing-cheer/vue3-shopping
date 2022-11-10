<template>
  <div class="order">
    <div class="order__header">
      <div class="order__header__title">我的订单</div>
      <div class="order__header__all">
        <div>全部</div>
        <div class="iconfont order__header__icon">&#xe6db;</div>
      </div>
    </div>
    <div class="order__content">
      <div class="order__content__item">
        <span class="iconfont order__content__item__icon"> &#xe60a; </span>
        <span class="order__content__item__text">待付款</span>
        <span class="order__content__item__num">{{ obj.needPaid }}</span>
      </div>
      <div class="order__content__item">
        <span class="iconfont order__content__item__icon">&#xe601;</span>
        <span class="order__content__item__text">待发货</span>
        <span class="order__content__item__num">{{ obj.needShipped }}</span>
      </div>
      <div class="order__content__item">
        <span class="iconfont orde__contentr__item__icon">&#xe66a;</span>
        <span class="order__content__item__text">待收货</span>
        <span class="order__content__item__num">{{ obj.needReceived }}</span>
      </div>
      <div class="order__content__item">
        <span class="iconfont order__content__item__icon">&#xe609;</span>
        <span class="orde__contentr__item__text">待评价</span>
        <span class="order__content__item__num">{{ obj.needEvalauted }}</span>
      </div>
      <div class="order__content__item">
        <span class="iconfont order__content__item__icon">&#xe602;</span>
        <span class="order__content__item__text">退款/售后</span>
        <span class="order__content__item__num">{{ obj.needReturn }}</span>
      </div>
    </div>
    <div class="order__pick">
      <div class="order__pick__img">
        <img v-show="obj.recentImgUrl" :src="obj.recentImgUrl" alt="" />
      </div>
      <div class="order__pick__info">
        <div class="order__pick__info__code">
          <div class="order__pick__info__pick">
            取件码：{{ obj.recentPickingCode }}
          </div>
          <div class="order__pick__info__date">{{ obj.recentDate }}</div>
        </div>
        <div class="order__pick__info__message">{{ obj.recentMessage }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Order",
  props: ["obj"],
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.order {
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
        margin: 0.05rem 0;
      }
      &__icon {
        color: rgb(27, 19, 29);
        font-size: 0.16rem;
      }
      &__num {
        position: absolute;
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.2rem;
        color: #ffffff;
        background: rgb(239, 96, 34);
        border: 0.01rem solid #ffffff;
        border-radius: 50%;
        top: -0.08rem;
        right: 0.16rem;
        font-size: 0.1rem;
        transform: scale(0.5);
      }
    }
  }
  &__pick {
    display: flex;
    margin: 0.1rem 0.15rem;
    border-radius: 0.1rem 0.05rem;
    background: rgb(246, 246, 249);
    &__img {
      padding: 0.1rem;
      img {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 0.1rem;
      }
    }
    &__info {
      flex: 1;
      width: 1rem;
      &__code {
        display: flex;
        padding: 0.1rem 0.1rem 0.1rem 0;
      }
      &__pick {
        flex: 1;
      }
      &__date,
      &__message {
        color: rgb(135, 135, 135);
        @include ellipsis;
      }
    }
  }
}
</style>
