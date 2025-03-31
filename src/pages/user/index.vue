<template>
  <el-row>
    <el-col :span="3">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span> / 会员中心</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          @click="changeActive('/user/certification')"
          index="/user/certification"
        >
          <el-icon><icon-menu /></el-icon>
          <span>实名认证</span>
        </el-menu-item>
        <el-menu-item @click="changeActive('/user/order')" index="/user/order">
          <el-icon><Document /></el-icon>
          <span>挂号订单</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/user/patient')"
          index="/user/patient"
        >
          <el-icon><Setting /></el-icon>
          <span>就诊人管理</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/user/profile')"
          index="/user/profile"
        >
          <el-icon><InfoFilled /></el-icon>
          <span>账号信息</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/user/feedback')"
          index="/user/feedback"
        >
          <el-icon><Search /></el-icon>
          <span>意见反馈</span>
        </el-menu-item>
      </el-menu></el-col
    >
    <el-col :span="21" style="padding: 20px 50px">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script setup lang="ts" name="User">
import {
  Document,
  Menu as IconMenu,
  HomeFilled,
  Setting,
  InfoFilled,
  Search,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
let $router = useRouter();
let $route = useRoute();

const changeActive = (path: string) => {
  //跳转到对应二级路由
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
};
onMounted(() => {});
</script>

<style scoped>
.top {
  padding: 10px 23px;
}
</style>
