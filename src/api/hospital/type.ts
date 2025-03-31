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

// 验证码ts类型
export interface phoneCode extends ResponseData {
  data: string;
}

//用户登录接口需要携带参数类型
export interface LoginData {
  phone: string;
  code: string;
}

//登录接口返回用户信息数据
export interface UserInfo {
  name: string;
  token: string;
}
//登录接口返回的数据的ts类型
export interface UserLoginResponseData extends ResponseData {
  data: UserInfo;
}

//定义微信扫码登录返回的数据的ts类型
export interface WXLogin {
  redirectUri: string;
  appid: string;
  scope: string;
  state: string;
}

export interface WXLoginResponseData extends ResponseData {
  data: WXLogin;
}

export interface BaseMap {
  workDateString: string;
  releaseTime: string;
  bigname: string;
  stopTime: string;
  depname: string;
  hosname: string;
}

export interface WorkData {
  workDate: string;
  workDateMd: string;
  dayOfWeek: string;
  docCount: number;
  reservedNumber: null;
  availableNumber: number;
  status: number;
}

export type BookingScheduleList = WorkData[];

export interface HospitalWordData extends ResponseData {
  data: {
    total: number;
    bookingScheduleList: BookingScheduleList;
    baseMap: BaseMap;
  };
}

//代表的是一个医生的数据
export interface Doctor {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: string;
  param: {
    dayOfWeek: string;
    depname: string;
    hosname: string;
  };
  hoscode: string;
  depcode: string;
  title: string;
  docname: string;
  skill: string;
  workDate: string;
  workTime: number;
  reservedNumber: number;
  availableNumber: number;
  amount: number;
  status: number;
  hosScheduleId: string;
}

//数组包含全部医生
export type DocArr = Doctor[];
//获取医生排班接口返回的数据
export interface DoctorResponseData extends ResponseData {
  data: DocArr;
}

//代表的是一个就诊人数据ts类型
export interface User {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    certificatesTypeString: string;
    contactsCertificatesTypeString: string;
    cityString: null;
    fullAddress: string;
    districtString: null;
    provinceString: null;
  };
  userId: number;
  name: number;
  certificatesType: string;
  certificatesNo: string;
  sex: number;
  birthdate: string;
  phone: string;
  isMarry: number;
  provinceCode: null;
  cityCode: null;
  districtCode: null;
  address: string;
  contactsName: string;
  contactsCertificatesType: string;
  contactsCertificatesNo: string;
  contactsPhone: string;
  isInsure: number;
  cardNo: null;
  status: string;
}
export type UserArr = User[];
export interface UserResponseData extends ResponseData {
  data: UserArr;
}

//获取某一个挂号医生数据详情

export interface DoctorInfoData extends ResponseData {
  data: Doctor;
}
