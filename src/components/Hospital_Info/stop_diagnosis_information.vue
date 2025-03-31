<template>
  <div class="stop_diagnosis_information">
    <div class="title">{{ hospitalDetail.hospital.hosname }}听诊信息</div>
    <el-empty description="暂无信息" />
  </div>
</template>

<script setup lang="ts" name="stop_diagnosis_information">
import useDetailStore from "@/store/modules/hospitalDetail";
import { storeToRefs } from "pinia";
let queryCancelStore = useDetailStore();
let { hospitalDetail } = storeToRefs(queryCancelStore);
</script>

<style scoped lang="scss">
.stop_diagnosis_information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 30px;
  }
}
</style>
