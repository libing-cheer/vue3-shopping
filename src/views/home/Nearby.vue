<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      :to="`/shop/${item.id}`"
      v-for="item in nearbyList.data"
      :key="item.id"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>
<script>
import ShopInfo from "@/components/ShopInfo";
import { get } from "@/utils/request";
import { reactive } from "vue";
export default {
  name: "Nearby",
  components: { ShopInfo },
  setup() {
    const nearbyList = reactive({ data: [] });
    const getShopList = async () => {
      const res = await get(`/api/list`);
      if (res?.status && res.result) {
        nearbyList.data = res.result || [];
        console.log(nearbyList);
      }
    };
    getShopList();
    return {
      nearbyList,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-font-color;
  }
  a {
    text-decoration: none;
  }
}
</style>
