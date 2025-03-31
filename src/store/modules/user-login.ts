import { defineStore } from "pinia";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/user";
import { resPhoneCode, reqUserLogin } from "@/api/hospital/index";
import type { LoginData, UserLoginResponseData } from "@/api/hospital/type";

const useUserStore = defineStore("User", () => {
  let visiable = false;
  let code = ""; //存储用户的验证码
  let userInfo = JSON.parse(GET_TOKEN() as string) || {};

  //获取验证码的方法
  const getCode = async (phone: string) => {
    let result: any = await resPhoneCode(phone);
    if (result.code == 200) {
      code = result.data;
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  };

  //用户手机号码登录方法
  const userLogin = async (loginData: LoginData) => {
    //登录请求
    let result: UserLoginResponseData = await reqUserLogin(loginData);
    if (result.code == 200) {
      userInfo = result.data;
      //本地存储持久化存储用户信息
      SET_TOKEN(JSON.stringify(userInfo));
      //返回一个成功的Promise
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  };
  //退出登录方法
  const logout = () => {
    //清空仓库的数据
    userInfo = { name: "", token: "" };
    //清空本地存储的数据
    REMOVE_TOKEN();
  };
  //查询微信扫码的接口(看本地存储是否存储数据)
  const queryState = () => {
    //开启定时器每隔一段时间问:本地村是都拥有用户信息
    let timer = setInterval(() => {
      //本地存储已有有数据:扫码成功
      if (GET_TOKEN()) {
        //关闭对话框
        visiable = false;
        userInfo = JSON.parse(GET_TOKEN() as string);
        clearInterval(timer);
      }
    }, 1000);
  };
  return {
    visiable,
    code,
    userInfo,
    getCode,
    userLogin,
    logout,
    queryState,
  };
});

export default useUserStore;
