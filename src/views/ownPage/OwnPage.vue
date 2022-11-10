<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__container">
        <div class="header__left">
          <img
            v-show="obj.avatar"
            class="header__left__img"
            :src="obj.avatar"
            alt=""
          />
        </div>

        <div class="header__right">
          <div class="header__right__name">{{ obj.name }}</div>
          <div class="header__right__account">
            账号名：{{ obj.accountName }}
            <span class="header__right__account__qrcode iconfont"
              >&#xe600;</span
            >
          </div>
          <div class="header__right__info">
            <div class="header__right__info__follow">
              关注：{{ obj.follow }}
            </div>
            <div class="header__right__info__fans">粉丝：{{ obj.fans }}</div>
            <div class="header__righ__infot__friends">
              好友：{{ obj.friends }}
            </div>
          </div>
          <div class="header__right__setting">
            <div class="header__right__setting__icon iconfont">&#xe8b7;</div>
            <div class="header__right__setting__text">设置</div>
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__bottom__vip">会员中心</div>
        <div class="header__bottom__package">88积分抽红包,中奖率100%</div>
        <div class="header__bottom__quick">马上抢</div>
      </div>
    </div>
    <div class="favorite">
      <div class="favorite__item">
        <span class="iconfont favorite__item__icon">&#xeca7;</span>
        <span class="favorite__item__text">收藏</span>
      </div>
      <div class="favorite__item">
        <span class="iconfont favorite__item__icon">&#xe683;</span>
        <span class="favorite__item__text">订阅店铺</span>
      </div>
      <div class="favorite__item">
        <span class="iconfont favorite__item__icon">&#xe614;</span>
        <span class="favorite__item__text">足迹</span>
      </div>
      <div class="favorite__item">
        <span class="iconfont favorite__item__icon">&#xe73d;</span>
        <span class="favorite__item__text">零钱 &yen;0.00</span>
      </div>
    </div>
    <div class="order">
      <div class="order__header">
        <div class="order__header__title">我的订单</div>
        <div class="order__header__all">
          <div>全部</div>
          <div class="iconfont order__header__icon">&#xe6db;</div>
        </div>
      </div>
      <div class="order__content">
        <div class="order__content__item">
          <span class="iconfont order__content__item__icon"> &#xe60a; </span>
          <span class="order__content__item__text">待付款</span>
          <span class="order__content__item__num">{{ obj.needPaid }}</span>
        </div>
        <div class="order__content__item">
          <span class="iconfont order__content__item__icon">&#xe601;</span>
          <span class="order__content__item__text">待发货</span>
          <span class="order__content__item__num">{{ obj.needShipped }}</span>
        </div>
        <div class="order__content__item">
          <span class="iconfont orde__contentr__item__icon">&#xe66a;</span>
          <span class="order__content__item__text">待收货</span>
          <span class="order__content__item__num">{{ obj.needReceived }}</span>
        </div>
        <div class="order__content__item">
          <span class="iconfont order__content__item__icon">&#xe609;</span>
          <span class="orde__contentr__item__text">待评价</span>
          <span class="order__content__item__num">{{ obj.needEvalauted }}</span>
        </div>
        <div class="order__content__item">
          <span class="iconfont order__content__item__icon">&#xe602;</span>
          <span class="order__content__item__text">退款/售后</span>
          <span class="order__content__item__num">{{ obj.needReturn }}</span>
        </div>
      </div>
      <div class="order__pick">
        <div class="order__pick__img">
          <img v-show="obj.recentImgUrl" :src="obj.recentImgUrl" alt="" />
        </div>
        <div class="order__pick__info">
          <div class="order__pick__info__code">
            <div class="order__pick__info__pick">
              取件码：{{ obj.recentPickingCode }}
            </div>
            <div class="order__pick__info__date">{{ obj.recentDate }}</div>
          </div>
          <div class="order__pick__info__message">{{ obj.recentMessage }}</div>
        </div>
      </div>
    </div>
    <div class="happy">
      <div class="happy__header">
        <div class="happy__header__title">天猫双十一狂欢季</div>
        <div class="happy__header__activity">每满300减50</div>
      </div>
      <div class="happy__content">
        <div class="happy__content__item">
          <img
            v-if="obj.mainImageOne"
            class="happy__content__item__img"
            :src="obj.mainImageOne"
            alt=""
          />
          <span class="happy__content__item__text">主会场</span>
        </div>
        <div class="happy__content__item">
          <img
            v-if="obj.mainImageTwo"
            class="happy__content__item__img"
            :src="obj.mainImageTwo"
            alt=""
          />
          <span class="happy__content__item__text">10亿红包</span>
        </div>
        <div class="happy__content__item">
          <img
            v-if="obj.mainImageThree"
            class="happy__content__item__img"
            :src="obj.mainImageThree"
            alt=""
          />
          <span class="happy__content__item__text">满减不封顶</span>
        </div>
        <div class="happy__content__item">
          <img
            v-if="obj.mainImageFour"
            class="happy__content__item__img"
            :src="obj.mainImageFour"
            alt=""
          />
          <span class="happy__content__item__text">我的双十一</span>
        </div>
      </div>
    </div>
    <div class="benefit">
      <div class="benefit__header">
        <div class="benefit__header__title">我的权益</div>
        <div class="benefit__header__all">
          <div>全部</div>
          <div class="iconfont order__header__icon">&#xe6db;</div>
        </div>
      </div>
      <div class="benefit__content">
        <div class="benefit__content__item">
          <span class="benefit__content__item__icon">
            &yen; {{ obj.redEnevelopes }}</span
          >
          <span class="benefit__content__item__text"> 红包 </span>
        </div>
        <div class="benefit__content__item">
          <span class="benefit__content__item__icon"> {{ obj.coupon }} 张</span>
          <span class="benefit__content__item__text">优惠券</span>
        </div>
        <div class="benefit__content__item">
          <span class="benefit__content__item__icon">
            开卡享 &yen; {{ obj.activeCardMoney }}</span
          >
          <span class="benefit__content__item__text">淘宝省钱卡</span>
        </div>
        <div class="benefit__content__item">
          <span class="benefit__content__item__icon">
            &yen; {{ obj.goldRushCoin }}</span
          >
          <span class="benefit__content__item__text">淘金币可抵</span>
          <span class="benefit__content__item__num">{{ obj.needReturn }}</span>
        </div>
      </div>
      <div class="benefit__sport">
        <div class="benefit__sport__text">
          <span class="iconfont benefit__sport__iconfont">&#x1008c;</span>
          您有{{ obj.sportCoupon }}元户外券待领取
        </div>
        <div class="iconfont benefit__sport__all">
          <div>去领取</div>
          <div class="iconfont benefit__sport__icon">&#xe6db;</div>
        </div>
      </div>
    </div>
  </div>
  <Docker :pageIndex="3" />
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import Docker from "../../components/Docker";
import { get } from "../../utils/request";
export default {
  name: "OrderList",
  components: { Docker },
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
.header {
  height: 1.6rem;
  background-image: url("https://img.tukuppt.com/bg_grid/00/17/91/ptZL657je2.jpg!/fh/350");
  background-repeat: no-repeat;
  background-size: 100% 1.6rem;
  &__container {
    display: flex;
    height: 1rem;
  }
  &__left {
    &__img {
      width: 0.6rem;
      height: 0.6rem;
      padding: 0.2rem;
      border-radius: 50%;
    }
  }
  &__right {
    position: relative;
    flex: 1;
    &__name {
      padding: 0.2rem 0 0.05rem 0;
      color: $bgColor;
      font-size: 0.16rem;
    }
    &__account {
      padding: 0rem 0 0.05rem 0;
      color: $bgColor;
      font-size: 0.12rem;
      &__qrcode {
        font-size: 0.12rem;
      }
    }
    &__info {
      display: flex;
      font-size: 0.1rem;
      color: $bgColor;
      div {
        display: inline-block;
        padding: 0 0.1rem 0 0;
        margin: 0 0.1rem 0 0;
      }
      &__follow,
      &__fans {
        border-right: 0.01rem solid $bgColor;
      }
    }
    &__setting {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      color: $bgColor;
      text-align: center;
      &__icon {
        font-size: 0.16rem;
      }
      &__text {
        padding-top: 0.05rem;
        font-size: 0.12rem;
      }
    }
  }
  &__bottom {
    display: flex;
    margin: 0 0.2rem;
    padding: 0.14rem 0;
    background-image: linear-gradient(
      0deg,
      rgba(244, 238, 216, 1) 4%,
      rgba(254, 221, 213, 1) 55%
    );
    background-repeat: no-repeat;
    border-radius: 0.2rem 0.2rem 0 0;

    &__vip {
      width: 0.6rem;
      height: 0.2rem;
      line-height: 0.2rem;
      padding: 0 0.05rem 0 0.1rem;
      color: rgb(214, 71, 42);
      font-size: 0.14rem;
      border-right: 0.01rem solid rgb(214, 71, 42);
    }
    &__package {
      flex: 1;
      padding: 0 0 0 0.1rem;
      line-height: 0.2rem;
      color: rgb(211, 85, 46);
    }
    &__quick {
      width: 0.6rem;
      height: 0.2rem;
      margin: 0 0.1rem;
      line-height: 0.2rem;
      text-align: center;
      background: rgb(242, 85, 32);
      color: rgb(254, 236, 211);
      border-radius: 0.1rem;
    }
  }
}

.favorite {
  position: relative;
  top: -0.15rem;
  display: flex;
  overflow: hidden;
  border-radius: 0.2rem 0.2rem 0 0;
  background: rgba(238, 238, 238, 1);
  color: rgb(27, 19, 29);
  font-size: 0.12rem;
  &__item {
    flex: 1;
    padding: 0.15rem 0 0 0;
    text-align: center;
    span {
      display: block;
      flex-wrap: wrap;
      margin: 0.05rem 0;
    }
    &__icon {
      color: rgb(27, 19, 29);
      font-size: 0.16rem;
    }
  }
}

.order {
  margin: 0 0.1rem;
  padding-bottom: 0.1rem;
  border-radius: 0.1rem;
  background: $bgColor;
  &__header {
    display: flex;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.1rem;
    &__title {
      flex: 1;
      font-size: 0.14rem;
      color: rgb(10, 10, 10);
    }
    &__all {
      display: flex;
      margin-right: 0.1rem;
      font-size: 0.12rem;
      color: rgb(135, 135, 135);
    }
    &__icon {
      transform: rotate(180deg);
      font-size: 0.12rem;
    }
  }
  &__content {
    display: flex;
    overflow: hidden;
    &__item {
      position: relative;
      flex: 1;
      text-align: center;
      span {
        display: block;
        flex-wrap: wrap;
        margin: 0.05rem 0;
      }
      &__icon {
        color: rgb(27, 19, 29);
        font-size: 0.16rem;
      }
      &__num {
        position: absolute;
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.2rem;
        color: #ffffff;
        background: rgb(239, 96, 34);
        border: 0.01rem solid #ffffff;
        border-radius: 50%;
        top: -0.08rem;
        right: 0.16rem;
        font-size: 0.1rem;
        transform: scale(0.5);
      }
    }
  }
  &__pick {
    display: flex;
    margin: 0.1rem 0.15rem;
    border-radius: 0.1rem 0.05rem;
    background: rgb(246, 246, 249);
    &__img {
      padding: 0.1rem;
      img {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 0.1rem;
      }
    }
    &__info {
      flex: 1;
      width: 1rem;
      &__code {
        display: flex;
        padding: 0.1rem 0.1rem 0.1rem 0;
      }
      &__pick {
        flex: 1;
      }
      &__date,
      &__message {
        color: rgb(135, 135, 135);
        @include ellipsis;
      }
    }
  }
}

.happy {
  height: 1.5rem;
  margin: 0.1rem;
  border-radius: 0.1rem;
  background: linear-gradient(
    0deg,
    rgba(233, 177, 208, 0.2) 5%,
    rgba(250, 83, 161, 0.2) 80%
  );
  background-repeat: no-repeat;
  background-size: 100% 1.5rem;
  background-origin: left center;
  &__header {
    display: flex;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.1rem;
    &__title {
      flex: 1;
      color: rgb(248, 16, 49);
      font-size: 0.16rem;
      font-weight: bold;
    }
    &__activity {
      margin-right: 0.1rem;
      width: 1rem;
      height: 0.25rem;
      line-height: 0.25rem;
      background: rgb(253, 234, 240);
      color: rgb(223, 87, 133);
      border: 0.01rem solid rgb(253, 234, 240);
      border-radius: 0.15rem;
      text-align: center;
    }
  }
  &__content {
    display: flex;
    overflow: hidden;
    &__item {
      position: relative;
      flex: 1;
      text-align: center;
      span {
        display: block;
        flex-wrap: wrap;
        margin: 0.05rem 0;
      }
      &__img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
      }
      &__text {
        color: rgb(230, 15, 54);
        font-weight: bold;
      }
    }
  }
}

.benefit {
  margin: 0 0.1rem;
  padding-bottom: 0.1rem;
  border-radius: 0.1rem;
  background: $bgColor;
  &__header {
    display: flex;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0.1rem 0 0.1rem 0.1rem;
    &__title {
      flex: 1;
      font-size: 0.14rem;
      color: rgb(10, 10, 10);
    }
    &__all {
      display: flex;
      margin-right: 0.1rem;
      font-size: 0.12rem;
      color: rgb(135, 135, 135);
    }
    &__icon {
      transform: rotate(180deg);
      font-size: 0.12rem;
    }
  }
  &__content {
    display: flex;
    overflow: hidden;
    &__item {
      position: relative;
      flex: 1;
      text-align: center;
      span {
        display: block;
        flex-wrap: wrap;
        margin: 0.1rem 0;
      }
      &__num {
        position: absolute;
        display: inline-block;
        width: 0.4rem;
        height: 0.2rem;
        line-height: 0.2rem;
        color: #ffffff;
        background: rgb(239, 96, 34);
        border: 0.01rem solid #ffffff;
        border-radius: 0.2rem;
        top: -0.1rem;
        right: -0.08rem;
        font-size: 0.1rem;
        transform: scale(0.5);
      }
    }
  }
  &__sport {
    display: flex;
    margin: 0 0.1rem;
    line-height: 0.3rem;

    background: rgb(255, 233, 231);
    border-radius: 0.1rem;
    &__text {
      flex: 1;
      font-size: 0.12rem;
      color: rgb(53, 42, 35);
    }
    &__all {
      display: flex;
      margin-right: 0.1rem;
      font-size: 0.12rem;
      color: rgb(226, 112, 65);
      font-weight: bold;
    }
    &__icon {
      transform: rotate(180deg);
      font-size: 0.12rem;
    }
    &__iconfont {
      margin: 0rem 0 0 0.1rem;
      position: relative;
      top: 0.01rem;
      color: red;
    }
  }
}
</style>
