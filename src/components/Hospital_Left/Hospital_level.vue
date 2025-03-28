<template>
  <div class="Hospital_level">
    <div style="width: 50px">等级：</div>
    <div class="h_level">
      <div
        class="level"
        :class="{ active: activeFlag == '' }"
        @click="changeLevel('')"
      >
        全部
      </div>
      <div
        class="level"
        v-for="item in level"
        :class="{ active: activeFlag == item.value }"
        :key="item.value"
        @click="changeLevel(item.value)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Hospital_level">
import { ref } from "vue";

// 等级选定状态
let activeFlag = ref<string>("");

defineProps(["level"]);
const emit = defineEmits(["changeLevelToLeft"]);
// 点击等级
const changeLevel = (val: string) => {
  activeFlag.value = val;
  emit("changeLevelToLeft", val);
};
</script>

<style scoped lang="scss">
.Hospital_level {
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
