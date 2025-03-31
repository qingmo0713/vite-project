<template>
  <el-row>
    <el-col :span="3">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          @click="changeActive('/hospital/registration')"
          index="/hospital/registration"
        >
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/hospital/hospital_details')"
          index="/hospital/hospital_details"
        >
          <el-icon><Document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/hospital/appointment_notice')"
          index="/hospital/appointment_notice"
        >
          <el-icon><Setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/hospital/stop_diagnosis_information')"
          index="/hospital/stop_diagnosis_information"
        >
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item
          @click="changeActive('/hospital/query_cancel')"
          index="/hospital/query_cancel"
        >
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu></el-col
    >
    <el-col :span="21" style="padding: 20px 50px">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script setup lang="ts" name="hospital">
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
import useDetailStore from "@/store/modules/hospitalDetail";
let $router = useRouter();
let $route = useRoute();

let detailStore = useDetailStore();

const changeActive = (path: string) => {
  //跳转到对应二级路由
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
};
onMounted(() => {
  detailStore.getHospitalDetail($route.query.hoscode as string);
  detailStore.getHospitalDepatment($route.query.hoscode as string);
});
</script>

<style scoped>
.top {
  padding: 10px 23px;
}
</style>
