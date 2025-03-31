import request from "@/utils/request";
import type { HospitalInfo, HospitalDepartment } from "./type";

enum API {
  // 医院信息
  HOSPITAL_REGISTRATION = "/hosp/hospital/",
  // 科室
  HOSPITAL_DEPARTMENT = "/hosp/hospital/department/",
}

export const resHospitalRegistration = (hoscode: string) =>
  request.get<any, HospitalInfo>(API.HOSPITAL_REGISTRATION + hoscode);

export const resHospitalDepartment = (hoscode: string) =>
  request.get<any, HospitalDepartment>(API.HOSPITAL_DEPARTMENT + hoscode);
