import request from "@/utils/request";
import type {
  HospitalInfo,
  HospitalDepartment,
  phoneCode,
  LoginData,
  UserLoginResponseData,
  WXLoginResponseData,
  HospitalWordData,
  DoctorResponseData,
  UserResponseData,
  DoctorInfoData,
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
  //获取某一个医院的某一个科室预约挂号数据
  HOSPITALWORK_URL = "/hosp/hospital/auth/getBookingScheduleRule/",
  //获取医院某一个科室某一天相应医生排班的数据
  HOSPITALDOCTOR_URL = "/hosp/hospital/auth/findScheduleList/",
  //获取某一个账号下就诊人的信息
  GETUSER_URL = "/user/patient/auth/findAll",
  //获取挂号医生的信息
  GETDOCTOR_URL = "/hosp/hospital/getSchedule/",
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

//获取预约挂号的数据
export const reqHospitalWork = (
  page: number,
  limit: number,
  hoscode: string,
  depcode: string,
) =>
  request.get<any, HospitalWordData>(
    API.HOSPITALWORK_URL + `${page}/${limit}/${hoscode}/${depcode}`,
  );
//获取医生排班的数据
export const reqHospitalDoctor = (
  hoscode: string,
  depcode: string,
  workDate: string,
) =>
  request.get<any, DoctorResponseData>(
    API.HOSPITALDOCTOR_URL + `${hoscode}/${depcode}/${workDate}`,
  );

//获取某一个账号下就诊人信息
export const reqGetUser = () =>
  request.get<any, UserResponseData>(API.GETUSER_URL);

//获取挂号医生的信息
export const reqDoctorInfo = (scheduleId: string) =>
  request.get<any, DoctorInfoData>(API.GETDOCTOR_URL + scheduleId);
