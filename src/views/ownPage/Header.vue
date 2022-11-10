<template>
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
          <span class="header__right__account__qrcode iconfont">&#xe600;</span>
        </div>
        <div class="header__right__info">
          <div class="header__right__info__follow">关注：{{ obj.follow }}</div>
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
</template>
<script>
export default {
  name: "Header",
  props: ["obj"],
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
@import "../../style/mixin.scss";
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
</style>
