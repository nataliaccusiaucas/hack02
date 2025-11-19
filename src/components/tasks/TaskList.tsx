import { useEffect, useState } from 'react'
import { getTasks } from '../../services/taskService'
import type { Task } from '../../types'

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await getTasks()
        setTasks(res.tasks)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p>Cargando tareas...</p>

  if (!tasks.length) return <p className="text-sm text-slate-400">No hay tareas por ahora.</p>

  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <div
          key={t.id}
          className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1"
        >
          <div className="flex items-center justify-between">
            <p className="font-medium">{t.title}</p>
            <span className="text-xs px-2 py-1 rounded-full border border-slate-700">
              {t.status}
            </span>
          </div>
          {t.description && <p className="text-xs text-slate-400">{t.description}</p>}
          <div className="flex gap-3 text-[11px] text-slate-400 mt-1">
            <span>Prioridad: {t.priority}</span>
            {t.dueDate && <span>Vence: {new Date(t.dueDate).toLocaleDateString()}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}