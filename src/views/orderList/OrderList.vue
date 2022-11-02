<template>
  <Docker :pageIndex="2" />
</template>
<script>
import Docker from "../home/Docker.vue";
export default {
  name: "OrderList",
  components: { Docker },
  setup() {},
};
</script>
