//定义首页模块ts数据类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface Param {
  hostypeString: string;
  fullAddress: string;
}

export interface BookingRule {
  cycle: number;
  releaseTime: string;
  stopTime: string;
  quitDay: number;
  quitTime: string;
  rule: string[];
}

export interface Hospital {
  id: string;
  createTime: Date;
  updateTime: Date;
  isDeleted: number;
  param: Param;
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: null;
  route: string;
  status: number;
  bookingRule: null;
}

export interface HospitalInfoData {
  bookingRule: BookingRule;
  hospital: Hospital;
}

export interface HospitalInfo extends ResponseData {
  data: HospitalInfoData;
}

// 科室
export interface department {
  depcode: string;
  depname: string;
  children?: DepartmentArr[];
}

export type DepartmentArr = department[];

export interface HospitalDepartment extends ResponseData {
  data: DepartmentArr;
}
// 科室
