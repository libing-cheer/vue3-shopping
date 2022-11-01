<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xeb86;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-if="item.imgUrl" />
    <Content :shopName="item.name" />
    <Cart />
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import ShopInfo from "@/components/ShopInfo";
import Content from './Content';
import Cart from './Cart';
// 获取当前商品信息
const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });

  const getItemData = async () => {
    const id = route.params.id;
    const result = await get(`/api/shop/${id}`);
    if (result?.errno && result?.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return { item, getItemData };
};
// 点击回退逻辑
const useBackRouterEfferct = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return handleBackClick;
};
export default {
  name: "Shop",
  components: { ShopInfo, Content, Cart },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const handleBackClick = useBackRouterEfferct();
    getItemData();

    return { item, handleBackClick };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
.wrapper {
  padding: 0 0.18rem;
  .search {
    display: flex;
    margin: 0.14rem 0 0.04rem 0;
    // height: .32rem;
    &__back {
      width: 0.3rem;
      line-height: 0.32rem;
      font-size: 0.2rem;
      color: #b6b6b6;
    }
    &__content {
      display: flex;
      flex: 1;
      line-height: 0.32rem;
      background: $search-bgColor;
      border-radius: 0.16rem;
      &__icon {
        width: 0.44rem;
        text-align: center;
        color: $search-fontColor;
      }
      &__input {
        display: block;
        width: 100%;
        padding-right: 0.2rem;
        border: none;
        outline: none;
        background: none;
        color: $content-font-color;
        font-size: 0.14rem;
        &::placeholder {
          color: $content-font-color;
        }
      }
    }
  }
}
</style>
