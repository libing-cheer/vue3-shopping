<template>
  <div class="favorite">
    <div class="favorite__item">
      <span class="iconfont favorite__item__icon">&#xeca7;</span>
      <span class="favorite__item__text">收藏</span>
    </div>
    <div class="favorite__item">
      <span class="iconfont favorite__item__icon">&#xe683;</span>
      <span class="favorite__item__text">订阅店铺</span>
    </div>
    <div class="favorite__item">
      <span class="iconfont favorite__item__icon">&#xe614;</span>
      <span class="favorite__item__text">足迹</span>
    </div>
    <div class="favorite__item">
      <span class="iconfont favorite__item__icon">&#xe73d;</span>
      <span class="favorite__item__text">零钱 &yen;0.00</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Favorite",
  props: ["obj"],
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.favorite {
  position: relative;
  top: -0.15rem;
  display: flex;
  overflow: hidden;
  border-radius: 0.2rem 0.2rem 0 0;
  background: rgba(238, 238, 238, 1);
  color: rgb(27, 19, 29);
  font-size: 0.12rem;
  &__item {
    flex: 1;
    padding: 0.15rem 0 0 0;
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
  }
}
</style>
