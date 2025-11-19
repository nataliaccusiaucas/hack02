import { Link } from 'react-router-dom'
import { LoginForm } from '../components/auth/LoginForm'

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-lg bg-slate-900/70 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-2">TechFlow</h1>
        <p className="text-sm text-slate-300 mb-6">Inicia sesión para gestionar tus proyectos y tareas.</p>
        <LoginForm />
        <p className="mt-4 text-xs text-slate-400">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  )
}