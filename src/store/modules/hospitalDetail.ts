import { defineStore } from "pinia";
import { ref } from "vue";
import { resHospitalRegistration, resHospitalDepartment } from "@/api/hospital";
import type {
  HospitalInfo,
  HospitalInfoData,
  department,
  HospitalDepartment,
  DepartmentArr,
} from "@/api/hospital/type";

const useDetailStore = defineStore("Detail", () => {
  // 获取医院信息
  let hospitalDetail = ref({} as HospitalInfoData);
  const getHospitalDetail = async (hoscode: string) => {
    let res: HospitalInfo = await resHospitalRegistration(hoscode);
    if (res.code === 200) {
      hospitalDetail.value = res.data;
    }
  };

  // 获取科室
  let hospitalDepartment = ref([] as DepartmentArr);

  const getHospitalDepatment = async (hoscode: string) => {
    let res: HospitalDepartment = await resHospitalDepartment(hoscode);
    if (res.code === 200) {
      hospitalDepartment.value = res.data;
    }
  };
  return {
    hospitalDetail,
    getHospitalDetail,
    hospitalDepartment,
    getHospitalDepatment,
  };
});

export default useDetailStore;
