import request from '@/utils/request'
import type { loginForm, loginResponseData, userResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录接口方法
export const reqLogin = (data: loginForm) => request.post<loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息方法
export const reqUserInfo = () => request.get<userResponseData>(API.USERINFO_URL)
