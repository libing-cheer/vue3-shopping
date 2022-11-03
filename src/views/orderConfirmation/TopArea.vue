<template>
  <div class="top">
    <div class="top__header">
      <div class="iconfont top__header__back" @click="handleBackClick">
        &#xe6db;
      </div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">瑶妹（先生）</span>
        <span class="top__receiver__info__name">18340009900</span>
      </div>
      <div class="iconfont top__receiver__icon">&#xe6db;</div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  name: "TopArea",
  setup() {
    const router = useRouter();
    const handleBackClick = () => {
      router.back();
    };

    return { handleBackClick };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
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
    color: $bgColor;
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
    background: $bgColor;
    border-radius: 0.04rem;
    &__title {
      padding: 0.16rem 0 0.14rem 0.16rem;
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__address {
      padding: 0 0.4rem 0 0.16rem;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-font-color;
    }
    &__info {
      padding: 0.06rem 0 0 0.16rem;
      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        color: $content-border-color;
        font-size: 0.12rem;
      }
    }
    &__icon {
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: $content-border-color;
      font-size: 0.2rem;
      transform: rotate(180deg);
    }
  }
}
</style>
