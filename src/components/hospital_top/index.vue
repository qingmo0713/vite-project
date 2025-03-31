<template>
  <div class="HospitalTop">
    <div class="main">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" class="img" alt="" />
        <div class="txt">尚医通 预约挂号统一平台</div>
      </div>
      <div class="right">
        <div class="help_center">帮助中心</div>
        <div class="login" v-if="!userStore.userInfo.name" @click="goLogin">
          <span>登录</span>/<span>注册</span>
        </div>
        <el-dropdown v-else>
          <span class="el-dropdown-link">
            {{ userStore.userInfo.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goUser('/user/certification')"
                >实名认证</el-dropdown-item
              >
              <el-dropdown-item @click="goUser('/user/order')"
                >挂号订单</el-dropdown-item
              >
              <el-dropdown-item @click="goUser('/user/patient')"
                >就诊人管理</el-dropdown-item
              >
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="HospitalTop">
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user-login";
import { ArrowDown } from "@element-plus/icons-vue";
let userStore = useUserStore();
let $router = useRouter();
function goHome() {
  $router.push({ path: "/home" });
}
const goLogin = () => {
  userStore.visiable = true;
};
//点击顶部下拉菜单进行路由跳转
const goUser = (path: string) => {
  $router.push({ path: path });
};
const logout = () => {
  //通知pinia仓库清除用户相关的信息
  userStore.logout();
  //编程式导航路由跳转到首页
  $router.push({ path: "/home" });
};
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
