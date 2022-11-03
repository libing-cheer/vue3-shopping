<template>
  <div class="order">
    <div class="order__price">
      实付金额：<b>¥ {{ calculations.prices }}</b>
    </div>
    <div class="order__btn" @click="() => handleShowConfirmChange(true)">
      提交订单
    </div>
  </div>
  <div
    class="mask"
    v-show="showConfirm"
    @click="() => handleShowConfirmChange(false)"
  >
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台吗？</h3>
      <div class="mask__content__desc">请尽快完成支付，否则将被取消</div>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="() => handelConfirmOrder(true)"
        >
          取消订单
        </div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="() => handelConfirmOrder(false)"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useCommonCartEffect } from "@/effects/cartEffect";
import { post } from "@/utils/request";
// 下单相关逻辑
const useMakeOrderEffect = (shopId) => {
  const store = useStore();
  const router = useRouter();

  const { shopName, productList } = useCommonCartEffect(shopId);
  const handelConfirmOrder = async (isCanceled) => {
    const products = [];
    for (const i in productList.value) {
      const product = productList.value[i];
      products.push({ id: product._id, num: product.count });
    }
    try {
      const params = {
        shopId,
        shopName: shopName.value,
        products,
        isCanceled,
        addressId: 1,
      };
      const result = await post("/api/order", params);

      if (result?.status) {
        store.commit("clearCartData", { shopId });
        router.push({ name: "OrderList" });
      }
    } catch (e) {
      console.log("下单失败");
    }
  };
  return { handelConfirmOrder };
};
// 蒙层展示相关逻辑
const useShowMaskEffect = () => {
  const showConfirm = ref(false);
  const handleShowConfirmChange = (status) => {
    showConfirm.value = status;
  };

  return { showConfirm, handleShowConfirmChange };
};
export default {
  name: "Order",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { calculations } = useCommonCartEffect(shopId);

    const { handelConfirmOrder } = useMakeOrderEffect(shopId);
    const { showConfirm, handleShowConfirmChange } = useShowMaskEffect();
    return {
      showConfirm,
      calculations,
      handleShowConfirmChange,
      handelConfirmOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variablse.scss";
.order {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.49rem;
  line-height: 0.49rem;
  background: #ffffff;
  border-top: 1px solid $content-bgColor;
  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: $content-font-color;
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: #ffffff;
    text-align: center;
    font-size: 0.14rem;
  }
}
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    border-radius: 0.04rem;
    background: #ffffff;
    text-align: center;
    &__title {
      margin-top: 0.24rem 0 0 0;
      line-height: 0.22rem;
      font-size: 0.18rem;
    }
    &__desc {
      margin: 0.08rem 0 0 0;
      font-size: 0.14rem;
      color: #666666;
    }
    &__btns {
      display: flex;
      margin: 0.24rem 0.58rem 0 0.58rem;
    }
    &__btn {
      flex: 1;
      width: 0.8rem;
      height: 0.32rem;
      font-size: 0.14rem;
      line-height: 0.32rem;
      border-radius: 0.16rem;
      &--first {
        margin-right: 0.12rem;
        border: 0.01rem solid #4fb0f9;
        color: #4fb0f9;
      }
      &--last {
        margin-left: 0.12rem;
        background: #4fb0f9;
        color: #ffffff;
      }
    }
  }
}
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  .order {
    bottom: 0.24rem;
  }
}
</style>
