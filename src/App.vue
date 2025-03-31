<template>
  <div class="continer">
    <HospitalTop />
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom />
    <Login />
  </div>
</template>

<script setup lang="ts" name="">
import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBottom from "@/components/hospital_bottom/index.vue";
import Login from "@/components/Login/index.vue";
</script>

<style scoped lang="scss">
.continer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 73px;
    min-height: calc(100vh - 145px);
    width: 1200px;
    padding-bottom: 20px;
  }
}
</style>
