<template>
  <div class="happy">
    <div class="happy__header">
      <div class="happy__header__title">天猫双十一狂欢季</div>
      <div class="happy__header__activity">每满300减50</div>
    </div>
    <div class="happy__content">
      <div class="happy__content__item">
        <img
          v-if="obj.mainImageOne"
          class="happy__content__item__img"
          :src="obj.mainImageOne"
          alt=""
        />
        <span class="happy__content__item__text">主会场</span>
      </div>
      <div class="happy__content__item">
        <img
          v-if="obj.mainImageTwo"
          class="happy__content__item__img"
          :src="obj.mainImageTwo"
          alt=""
        />
        <span class="happy__content__item__text">10亿红包</span>
      </div>
      <div class="happy__content__item">
        <img
          v-if="obj.mainImageThree"
          class="happy__content__item__img"
          :src="obj.mainImageThree"
          alt=""
        />
        <span class="happy__content__item__text">满减不封顶</span>
      </div>
      <div class="happy__content__item">
        <img
          v-if="obj.mainImageFour"
          class="happy__content__item__img"
          :src="obj.mainImageFour"
          alt=""
        />
        <span class="happy__content__item__text">我的双十一</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Happy",
  props: ["obj"],
  setup() {},
};
</script>
<style lang="scss" scoped>
.happy {
  height: 1.5rem;
  margin: 0.1rem;
  border-radius: 0.1rem;
  background: linear-gradient(
    0deg,
    rgba(233, 177, 208, 0.2) 5%,
    rgba(250, 83, 161, 0.2) 80%
  );
  background-repeat: no-repeat;
  background-size: 100% 1.5rem;
  background-origin: left center;
  &__header {
    display: flex;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.1rem;
    &__title {
      flex: 1;
      color: rgb(248, 16, 49);
      font-size: 0.16rem;
      font-weight: bold;
    }
    &__activity {
      margin-right: 0.1rem;
      width: 1rem;
      height: 0.25rem;
      line-height: 0.25rem;
      background: rgb(253, 234, 240);
      color: rgb(223, 87, 133);
      border: 0.01rem solid rgb(253, 234, 240);
      border-radius: 0.15rem;
      text-align: center;
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
      &__img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
      }
      &__text {
        color: rgb(230, 15, 54);
        font-weight: bold;
      }
    }
  }
}
</style>
