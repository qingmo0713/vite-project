<template>
  <div class="HospitalBottom">
    <div class="main">
      <div class="left">京ICP备 13018369号 电话挂号010-56253825</div>
      <div class="right">
        <div class="contact_us mr10">联系我们</div>
        <div class="cooperative_partner mr10">合作伙伴</div>
        <div class="user_agreement mr10">用户协议</div>
        <div class="privacy_agreement">隐私协议</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="HospitalBottom"></script>

<style scoped lang="scss">
.HospitalBottom {
  width: 100%;
  height: 70px;
  background-color: #e5e7ea;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 2px 2px #f6f3f3;
  .main {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      display: flex;
    }
    .mr10 {
      margin-right: 10px;
    }
  }
}
</style>
