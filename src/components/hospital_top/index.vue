<template>
  <div class="HospitalTop">
    <div class="main">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" class="img" alt="" />
        <div class="txt">尚医通 预约挂号统一平台</div>
      </div>
      <div class="right">
        <div class="help_center">帮助中心</div>
        <div class="login"><span>登录</span>/<span>注册</span></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="HospitalTop">
import { useRouter } from "vue-router";
let $router = useRouter();
function goHome() {
  $router.push({ path: "/home" });
}
</script>

<style scoped lang="scss">
.HospitalTop {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 2px 2px #f6f3f3;
  .main {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      cursor: pointer;
      .img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
      .txt {
        color: #69a4f7;
        font-size: 24px;
      }
    }
    .right {
      color: #ccc;
      display: flex;
      .help_center {
        margin-right: 5px;
      }
      .login {
        cursor: pointer;
      }
    }
  }
}
</style>
