import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'
import { getTasks } from '../services/taskService'
import type { Task } from '../types'

export function Dashboard() {
  const [totalProjects, setTotalProjects] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const proj = await getProjects(1, 100)
        setTotalProjects(proj.projects.length)

        const t = await getTasks({ page: 1, limit: 200 })
        setTasks(t.tasks)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="p-6">Cargando dashboard...</div>

  const completed = tasks.filter((t) => t.status === 'COMPLETED').length
  const pending = tasks.filter((t) => t.status !== 'COMPLETED').length

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">Proyectos</p>
          <p className="mt-2 text-2xl font-semibold">{totalProjects}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">Tareas completadas</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-400">{completed}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">Tareas pendientes</p>
          <p className="mt-2 text-2xl font-semibold text-amber-400">{pending}</p>
        </div>
      </div>
    </div>
  )
}