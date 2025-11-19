import { Link } from 'react-router-dom'
import { RegisterForm } from '../components/auth/RegisterForm'

export function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-lg bg-slate-900/70 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-2">Crear cuenta</h1>
        <p className="text-sm text-slate-300 mb-6">Únete a TechFlow para organizar tu equipo.</p>
        <RegisterForm />
        <p className="mt-4 text-xs text-slate-400">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}