<template>
  <div class="hospital_home">
    <!-- 轮播图 -->
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          class="carousel_img"
          src="../../assets/images/web-banner-1.png"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索框 -->
    <div class="hospital_search">
      <el-autocomplete
        v-model="hospitalName"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        :debounce="500"
        class="inline-input w-50"
        style="width: 500px; margin-right: 10px"
        placeholder="请输入医院名称"
        @select="handleSelect"
      />
      <el-button :icon="Search" type="primary" @click="search">搜索</el-button>
    </div>

    <el-row>
      <!-- 左侧医院 -->
      <el-col :span="19">
        <Hospital_Left />
      </el-col>
      <!-- 右侧全部科室公告 -->
      <el-col :span="5">
        <Hospital_Right></Hospital_Right>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="Home">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import Hospital_Left from "@/pages/home/Hospital_Left.vue";
import Hospital_Right from "@/pages/home/Hospital_Right.vue";
import type { HospitalInfo } from "@/api/home/type";
import { reqHospitalInfo } from "@/api/home/index";
let hospitalName = ref("");
let $router = useRouter();

const querySearch = async (queryString: string, cb: any) => {
  let results: HospitalInfo = await reqHospitalInfo(queryString);
  let showData = results.data.map((item) => {
    return {
      value: item.hosname,
      hoscode: item.hoscode,
    };
  });

  cb(showData);
};

const search = () => {
  console.log("搜索input", hospitalName.value);
};

// 搜索选项点击
const handleSelect = (item: Record<string, any>) => {
  $router.push({
    path: "/hospital/registration",
    query: { hoscode: item.hoscode },
  });
};

onMounted(() => {});
</script>

<style scoped lang="scss">
.hospital_search {
  text-align: center;
  margin: 20px 0;
}
.carousel_img {
  width: 100%;
  height: 100%;
}
</style>
