import api from './api'
import type { User } from '../types'

interface LoginResponse {
  token: string
  user: User
}

export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/auth/login', { email, password })
  return data
}

export async function registerRequest(name: string, email: string, password: string) {
  const { data } = await api.post('/auth/register', { name, email, password })
  return data
}

export async function getProfile(): Promise<User> {
  const { data } = await api.get<User>('/auth/profile')
  return data
}