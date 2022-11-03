<template>
  <div>
    <div class="wrapper">
      <StaticPart />
      <Nearby />
    </div>
    <Docker :pageIndex="0" />
    <router-view />
  </div>
</template>
<script>
import StaticPart from "./StaticPart";
import Nearby from "./Nearby";
import Docker from "../../components/Docker";
export default {
  name: "Home",
  components: { StaticPart, Nearby, Docker },
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
