<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders" v-for="(item, index) in list" :key="index">
      <div class="order">
        <div class="order__title">
          {{ item.shopName }}
          <span class="order__status">{{
            item.isCanceled ? "已取消" : "已下单"
          }}</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
            >
              <img
                v-if="innerIndex <= 3"
                class="order__content__img"
                :src="innerItem.product.imgUrl"
                alt="image"
              />
            </template>
          </div>

          <div class="order__content__info">
            <div class="order__content__info__price">
              &yen; {{ item.totalPrice }}
            </div>
            <div class="order__content__info__count">
              共{{ item.totalNum }}件
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :pageIndex="2" />
</template>
<script>
import { get } from "@/utils/request";
import { reactive, toRefs } from "vue";
import Docker from "../../components/Docker";
// 处理订单列表逻辑
const useOrderListEffect = () => {
  const data = reactive({ list: [] });

  const getOrderList = async () => {
    const result = await get("/api/order");
    if (result?.status && result?.data) {
      data.list = result.data;
      const orderList = result.data;
      let totalPrice = 0;
      let totalNum = 0;
      orderList.forEach((order) => {
        const products = order.products || [];
        products.forEach((productItem) => {
          totalPrice +=
            productItem?.product?.prices * productItem?.orderSales || 0;
          totalNum += productItem?.orderSales || 0;
        });
        order.totalPrice = totalPrice;
        order.totalNum = totalNum;
      });
    }
  };
  getOrderList();
  const { list } = toRefs(data);
  return { list };
};
export default {
  name: "OrderList",
  components: { Docker },
  setup() {
    const { list } = useOrderListEffect();

    return { list };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  background: rgb(248, 248, 248);
}
.title {
  position: sticky;
  top: 0;
  z-index: 2;
  line-height: 0.44rem;
  color: $content-font-color;
  text-align: center;
  font-size: 0.16rem;
  background: $bgColor;
}
.orders {
  .order {
    padding: 0.16rem;
    margin: 0.16rem 0.18rem;
    background: $bgColor;
    &__title {
      margin-bottom: 0.16rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__status {
      float: right;
      line-height: 0.22rem;
      font-size: 0.14rem;
      color: $content-fontColor;
    }
    &__content {
      display: flex;
      &__imgs {
        flex: 1;
      }
      &__img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.12rem;
      }
      &__info {
        width: 0.7rem;
        &__price {
          margin-bottom: 0.04rem;
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: $highlight-fontColor;
          text-align: right;
        }
        &__count {
          line-height: 0.14rem;
          font-size: 0.12rem;
          color: $content-font-color;
          text-align: right;
        }
      }
    }
  }
}
</style>
