<template>
  <div class="wrapper">
    <Header :obj="obj" />
    <Favorite :obj="obj" />
    <Order :obj="obj" />
    <Happy :obj="obj" />
    <Benefit :obj="obj" />
  </div>
  <Docker :pageIndex="3" />
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import Docker from "../../components/Docker";
import { get } from "../../utils/request";
import Header from "./Header";
import Favorite from "./Favorite";
import Order from "./Order";
import Happy from "./Happy";
import Benefit from "./Benefit";
export default {
  name: "OrderList",
  components: { Docker, Header, Favorite, Order, Happy, Benefit },
  setup() {
    const data = reactive({ obj: {} });
    const getOwnPageData = async () => {
      const res = await get("/api/ownPage");
      if (res?.status && res.data) {
        data.obj = res.data;
      }
    };
    getOwnPageData();
    const { obj } = toRefs(data);
    return { obj };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  background: rgba(238, 238, 238, 1);
  overflow-y: scroll;
}
</style>
