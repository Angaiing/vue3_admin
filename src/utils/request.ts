import axios from 'axios'
import { ElMessage } from 'element-plus'
// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(
  // 在发送请求之前做些什么
  (config) => config,
)

//响应拦截器
request.interceptors.response.use(
  // 对响应数据做点什么
  (response) => {
    // 检查业务状态码
    if (response.data.code === 401) {
      ElMessage({
        type: 'error',
        message: 'token过期',
      })
      return Promise.reject(new Error('token过期'))
    }
    return response.data
  },
  // 对响应错误做点什么
  (error) => {
    //处理网络错误
    let msg = ''
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
