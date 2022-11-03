<template>
  <Docker :pageIndex="1" />
</template>

<script>
import Docker from "../../components/Docker";
export default {
  name: "CartList",
  components: { Docker },
  setup() {},
};
</script>
