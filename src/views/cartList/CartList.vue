<template>
  <Docker :pageIndex="1" />
</template>

<script>
import Docker from "../home/Docker.vue";
export default {
  name: "CartList",
  components: { Docker },
  setup() {},
};
</script>
