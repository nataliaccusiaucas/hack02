import { createContext, useEffect, useState } from 'react'
import type { ReactNode} from 'react'
import type { User } from '../types'
import { getProfile, loginRequest, registerRequest } from '../services/authService'

interface AuthContextValue {
  user: User | null
  token: string | null
  loading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      try {
        if (!token) {
          setLoading(false)
          return
        }
        const profile = await getProfile()
        setUser(profile)
      } catch {
        setUser(null)
        setToken(null)
        localStorage.removeItem('token')
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [token])

  async function login(email: string, password: string) {
    const { token, user } = await loginRequest(email, password)
    setToken(token)
    setUser(user)
    localStorage.setItem('token', token)
  }

  async function register(name: string, email: string, password: string) {
    await registerRequest(name, email, password)
    await login(email, password)
  }

  function logout() {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user && !!token,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

