<template>
  <div class="docker">
    <div v-for="item in dockerList" :key="item.text" class="docker__item">
      <router-link :to="item.to">
        <div
          class="docker__title"
          :class="{
            'docker__item docker__item--active': pageIndex === item.index,
          }"
        >
          {{ item.text }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Docker",
  props: ["pageIndex"],
  setup() {
    const dockerList = [
      { text: "首页", index: 0, to: { name: "Home" } },
      { text: "购物车", index: 1, to: { name: "CartList" } },
      { text: "订单", index: 2, to: { name: "OrderList" } },
      { text: "我的", index: 3, to: { name: "OwnPage" } },
    ];
    return {
      dockerList,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../style/variablse.scss";
.docker {
  display: flex;
  position: absolute;
  padding: 0.18rem;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4f7;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
  a {
    color: $content-font-color;
    text-decoration: none;
  }
}
</style>
