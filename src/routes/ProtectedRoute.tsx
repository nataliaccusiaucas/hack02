import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div className="flex h-screen items-center justify-center">Cargando...</div>

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <Outlet />
}