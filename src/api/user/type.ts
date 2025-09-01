// 登录接口需要携带参数类型
export interface loginForm {
  username: string
  passward: string
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: {
    token: string
  }
}

// 服务器返回用户相关信息数据类型
export interface userResponseData {
  code: number
  data: {
    userId: number
    avatar: string
    username: string
    password: string
    desc: string
    roles: string[]
    buttons: string[]
    routes: string[]
    token: string
  }
}
