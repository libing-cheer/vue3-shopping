<template>
  <div class="docker">
    <div
      v-for="item in dockerList"
      :key="item.text"
      :class="{
        docker__item: true,
        'docker__item docker__item--active': currentIndex === item.index,
      }"
      @click="
        () => {
          handleDockerChange(item.index);
        }
      "
    >
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Docker",
  setup() {
    const currentIndex = ref(0);
    const dockerList = [
      { text: "首页", index: 0 },
      { text: "购物车", index: 1 },
      { text: "订单", index: 2 },
      { text: "我的", index: 3 },
    ];
    const handleDockerChange = (index) => {
      currentIndex.value = index;
    };
    return {
      currentIndex,
      dockerList,
      handleDockerChange,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
.docker {
  display: flex;
  position: absolute;
  padding: 0.18rem;
  box-sizing: border-box;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4f7;
    }
  }
  &__title {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
