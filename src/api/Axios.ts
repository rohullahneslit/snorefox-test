import axios, { AxiosResponse } from 'axios'
import { baseUrl } from './EndPoints'
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
})

const ResponseInterceptor = (response: AxiosResponse) => {
  return response
}
// Alter defaults after instance has been created
axiosInstance.interceptors.response.use(ResponseInterceptor, error => {
  if (error.response) {
    return Promise.reject(error.response.data)
  } else if (error.request) {
    if (error.request._timedOut) {
      return Promise.reject({ data: 'The request timed out.' })
    }
    if (error?.request?._response.includes('Failed to connect to')) {
      return Promise.reject({ data: 'Could not connect to the server.' })
    }
    if (error?.request?._response.includes('Unable to resolve host')) {
      return Promise.reject({ data: 'No internet connection.' })
    }
    return Promise.reject(error?.request?._response)
  } else {
    return Promise.reject(error.request)
  }
})

export { axiosInstance }
