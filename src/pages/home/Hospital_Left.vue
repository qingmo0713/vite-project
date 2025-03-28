<template>
  <div class="Hospital_Left">
    <!-- 等级地区 -->
    <div class="hospital_selection">
      <div>医院</div>
      <Hospital_level
        :level="level"
        @changeLevelToLeft="changeLevel"
      ></Hospital_level>
      <Hospital_city
        :city="city"
        @changeCityToLeft="changeCityToLeft"
      ></Hospital_city>
    </div>
    <!-- card -->
    <div class="hospital_card" v-if="cardList.length > 0">
      <Hospital_card
        v-for="item in cardList"
        :key="item.id"
        :cardList="item"
      ></Hospital_card>
    </div>
    <el-pagination
      style="width: 100%"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout=" prev, pager, next, jumper,->, sizes,total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts" name="Hospital_Left">
import { ref, onMounted, reactive } from "vue";
import Hospital_level from "@/components/Hospital_Left/Hospital_level.vue";
import Hospital_city from "@/components/Hospital_Left/Hospital_city.vue";
import Hospital_card from "@/components/Hospital_Left/Hospital_card.vue";

import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
  Content,
  HospitalResponseData,
} from "@/api/type";

import { reqHospitalLevelAndRegion, reqHospital } from "@/api";

// 等级数据
let level = ref<HospitalLevelAndRegionArr>([]);
// 地区
let city = ref<HospitalLevelAndRegionArr>([]);

let cardList = ref<Content>([]);

// 分页设置
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(10);

//存储医院的等级相应数据
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");
// 分页设置
const handleSizeChange = () => {
  currentPage.value = 1;
  getHospitalInfo();
};
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  getHospitalInfo();
};
// 分页设置

// 等级
const changeLevel = (val: any) => {
  hostype.value = val;
  getHospitalInfo();
};
// 地区
const changeCityToLeft = (val: any) => {
  districtCode.value = val;
  getHospitalInfo();
};

// 获取等级数据
const getHospitalLevel = async () => {
  let res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "HosType",
  );
  if (res.code === 200) {
    level.value = res.data;
  }
};
// 获取地区数据
const getHospitalRegion = async () => {
  let res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "Beijin",
  );
  if (res.code === 200) {
    city.value = res.data;
  }
};

//获取已有的医院的数据
const getHospitalInfo = async () => {
  let res: HospitalResponseData = await reqHospital(
    currentPage.value,
    pageSize.value,
    hostype.value,
    districtCode.value,
  );
  if (res.code === 200) {
    cardList.value = res.data.content;

    total.value = res.data.totalElements;
  }
};
onMounted(() => {
  getHospitalLevel();
  getHospitalRegion();
  getHospitalInfo();
});
</script>

<style scoped lang="scss">
.Hospital_Left {
  color: #7f7f7f;
  .hospital_card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
