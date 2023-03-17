import axios from 'axios'

import { endpoints } from '../requests.consts'
import { ErrorResponse } from '../types'

export interface SignupResponse {
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    name: string
  }
  error?: ErrorResponse
}

export interface SignupRequestPayload {
  username: string
  name: string
  email: string
  password: string
}

export const requestRegister = (payload: SignupRequestPayload) => {
  return axios.post<{ data: SignupResponse }>(endpoints.auth.register, payload)
}
