<template>
  <div>
    <div class="position">北京理工大学国防科技园2号楼10层</div>
    <div class="search">
      <span class="search__icon iconfont">&#xeb86;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="https://pic.ntimg.cn/file/20221005/32998011_120000395105_2.jpg"
        alt=""
      />
    </div>
    <div class="icons">
      <div class="icons__item" v-for="item in staticPartList.data" :key="item.id">
        <img class="icons__item__img" :src="item.imgUrl" alt="" />
        <p class="icons__item__desc">{{ item.title }}</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>
<script>
import { get } from "@/utils/request";
import { reactive } from 'vue';
export default {
  name: "StaticPart",
  setup() {
    const staticPartList = reactive({ data: [] });
    const getStaticList = async () => {
      const res = await get(`/api/staticList`);
      if (res?.status && res.result) {
        staticPartList.data = res.result || [];
      }
    };
    getStaticList();
    return {
      staticPartList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
.position {
  margin-right: 0.24rem;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-font-color;
  @include ellipsis;
}
.search {
  position: relative;
  margin-bottom: 0.12rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  .search__icon {
    position: absolute;
    font-size: 0.16rem;
    display: inline-block;
    padding: 0 0.1rem 0.16rem;
  }
  &__text {
    position: absolute;
    left: .3rem;
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 28%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-font-color;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
