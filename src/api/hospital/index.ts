import request from "@/utils/request";
import type {
  HospitalInfo,
  HospitalDepartment,
  phoneCode,
  LoginData,
  UserLoginResponseData,
  WXLoginResponseData,
} from "./type";

enum API {
  // 医院信息
  HOSPITAL_REGISTRATION = "/hosp/hospital/",
  // 科室
  HOSPITAL_DEPARTMENT = "/hosp/hospital/department/",
  //获取验证码接口
  GETUSERCODE_URL = "/sms/send/",
  //用户登录接口
  USERLOGIN_URL = "/user/login",
  //获取微信扫码登录需要参数
  WXLOGIN_URL = "/user/weixin/getLoginParam/",
}

// 获取医院信息
export const resHospitalRegistration = (hoscode: string) =>
  request.get<any, HospitalInfo>(API.HOSPITAL_REGISTRATION + hoscode);

// 获取科室
export const resHospitalDepartment = (hoscode: string) =>
  request.get<any, HospitalDepartment>(API.HOSPITAL_DEPARTMENT + hoscode);

// 获取验证吗接口
export const resPhoneCode = (phone: string) =>
  request.get<any, phoneCode>(API.GETUSERCODE_URL + phone);

//用户登录接口
export const reqUserLogin = (data: LoginData) =>
  request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);

//获取微信扫码登录生成二维码需要参数接口
export const reqWxLogin = (wxRedirectUri: string) =>
  request.get<any, WXLoginResponseData>(
    API.WXLOGIN_URL + `?wxRedirectUri=${wxRedirectUri}`,
  );
