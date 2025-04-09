<template>
  <div v-if="$route.query.orderId"><orderDetail /></div>
  <div v-else class="order">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>挂号订单</span>
        </div>
      </template>
      <el-form :model="formInline" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="就诊人">
              <el-select
                v-model="formInline.patient"
                placeholder="请选择就诊人"
                clearable
                @change="patientChange"
              >
                <el-option label="请选择全部就诊人" :value="''" />
                <el-option
                  v-for="item in patientList"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="订单状态">
              <el-select
                v-model="formInline.orderStatus"
                placeholder="请选择订单状态"
                clearable
                @change="orderChange"
              >
                <el-option label="全部订单" :value="''" />
                <el-option
                  v-for="item in orderList"
                  :label="item.comment"
                  :value="item.status"
                />
              </el-select> </el-form-item
          ></el-col>
        </el-row>
      </el-form>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="reserveDate" label="就诊时间" />
        <el-table-column prop="hosname" label="医院" />
        <el-table-column prop="depname" label="科室" />
        <el-table-column prop="title" label="医生" />
        <el-table-column prop="amount" label="服务费" />
        <el-table-column prop="patientName" label="就诊人" />
        <el-table-column prop="param.orderStatusString" label="订单状态" />
        <el-table-column fixed="right" label="操作">
          <template #="{ row }">
            <el-button link type="primary" size="small" @click="goDetail(row)">
              详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="width: 100%; margin-top: 10px"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :background="true"
        layout=" prev, pager, next, jumper,->, sizes,total"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts" name="order">
import orderDetail from "./orderDetail.vue";
import { ref, onMounted } from "vue";
// 引入接口
import { reqAllUser, reqOrderState, reqUserOrderInfo } from "@/api/user";
// 引入ts类型
import type {
  AllUserResponseData,
  AllUser,
  AllOrderState,
  AllOrderStateResponseData,
  UserOrderInfoResponseData,
  Records,
} from "@/api/user/type";
import { useRouter } from "vue-router";
//获取路由器对象
let $router = useRouter();

// 条件筛选
let formInline = ref({
  patient: "",
  orderStatus: "",
});
// 表格数据
let tableData = ref<Records>([]);
// 分页
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);
// 分页

// 就诊人
let patientList = ref<AllUser>([]);
// 订单状态
let orderList = ref<AllOrderState>([]);
// 获取就诊人数据
const getAllUser = async () => {
  let res: AllUserResponseData = await reqAllUser();
  patientList.value = res.data;
};
// 获取订单状态数据
const getOrderState = async () => {
  let res: AllOrderStateResponseData = await reqOrderState();
  orderList.value = res.data;
};

//详情按钮的回调
const goDetail = (row: any) => {
  $router.push({ path: "/user/order", query: { orderId: row.id } });
};

// 参数类型声明
interface Params {
  page: number;
  limit: number;
  patientId: string;
  orderStatus: string;
}

// 表格数据接口
const getUserOrderInfo = async () => {
  let params: Params = {
    page: currentPage.value,
    limit: pageSize.value,
    patientId: formInline.value.patient,
    orderStatus: formInline.value.orderStatus,
  };
  let res: UserOrderInfoResponseData = await reqUserOrderInfo(params);
  tableData.value = res.data.records;
  total.value = res.data.total;
};

// 分页设置
const handleSizeChange = () => {
  currentPage.value = 1;
  getUserOrderInfo();
};
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  getUserOrderInfo();
};
// 分页设置

// 就诊人下拉
const patientChange = (val: string) => {
  formInline.value.patient = val;
  getUserOrderInfo();
};
// 订单状态下拉
const orderChange = (val: string) => {
  formInline.value.orderStatus = val;
  getUserOrderInfo();
};

onMounted(() => {
  getAllUser();
  getOrderState();
  getUserOrderInfo();
});
</script>

<style scoped lang="scss"></style>
