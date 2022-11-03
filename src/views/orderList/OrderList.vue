<template>
  <div class="wrapper">orderList</div>
  <Docker :pageIndex="2" />
</template>
<script>
import Docker from "../../components/Docker";
export default {
  name: "OrderList",
  components: { Docker },
  setup() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.3rem 0.18rem;
}
</style>
