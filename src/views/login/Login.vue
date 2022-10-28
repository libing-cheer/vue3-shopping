<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper__input">
      <input
        v-model="data.username"
        class="wrapper__input__content"
        placeholder="请输入用户名"
      />
    </div>
    <div class="wrapper__input">
      <input
        v-model="data.password"
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import axios from "axios";
import { reactive } from "vue";

axios.defaults.headers.post["Content-Type"] = "application/json";
export default {
  name: "Login",
  setup() {
    const data = reactive({
      username: "",
      password: "",
    });
    const router = useRouter();
    const handleLogin = () => {
      const { username, password } = data;
      const params = { username, password };
      const loginAPIUrl = `https://www.fastmock.site/mock/ea53b90d8b9f8c211a7a05410b478c97/elemo/api/user/login`;
      axios
        .post(loginAPIUrl, params)
        .then(() => {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        })
        .catch(() => {
          console.log("登录失败");
        });
    };
    const handleRegisterClick = () => {
      router.push({ name: "Register" });
    };
    return {
      data,
      handleLogin,
      handleRegisterClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variablse.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    box-sizing: border-box;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0.06rem;
    &__content {
      width: 100%;
      border: none;
      outline: none;
      line-height: 0.48rem;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    line-height: 0.48rem;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 245, 255, 0.32);
    border-radius: 0.04rem;
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
