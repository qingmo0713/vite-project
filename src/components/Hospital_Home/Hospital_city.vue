<template>
  <div class="Hospital_city">
    <div style="width: 50px">等级：</div>
    <div class="h_level">
      <div
        class="level"
        :class="{ active: activeFlag == '' }"
        @click="changeCity('')"
      >
        全部
      </div>
      <div
        class="level"
        v-for="item in city"
        :class="{ active: activeFlag == item.value }"
        :key="item.value"
        @click="changeCity(item.value)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Hospital_city">
import { ref, onMounted } from "vue";

// 地区选定状态
let activeFlag = ref<string>("");

defineProps(["city"]);
const emit = defineEmits(["changeCityToLeft"]);
// 点击等级
const changeCity = (val: string) => {
  activeFlag.value = val;
  emit("changeCityToLeft", val);
};

onMounted(() => {});
</script>

<style scoped lang="scss">
.Hospital_city {
  color: #7f7f7f;
  display: flex;
  margin-top: 20px;
  .h_level {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .level {
      margin-right: 10px;
      cursor: pointer;
      margin-bottom: 5px;
      &:hover {
        color: #55a6fe;
      }
    }
    .active {
      color: #55a6fe;
    }
  }
}
</style>
