import axios from 'axios'
import { ErrorResponse } from './types'

axios.interceptors.request.use(
  config => {
    let token: string | null = null

    if (window && localStorage.getItem('accessToken')) {
      token = `Bearer ${localStorage.getItem('accessToken')}`
    }

    config.headers.Authorization = token

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    'success'

    return response.data
  },
  error => {
    if (error.response) {
      const customError: ErrorResponse = error.response.data.error

      if (!customError) {
        return Promise.reject(error)
      }

      return Promise.reject(customError)
    }

    if (error.request) {
      // redirect to error page
    }

    return Promise.reject(error)
  }
)
