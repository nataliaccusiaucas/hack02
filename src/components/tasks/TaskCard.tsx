import type { Task } from "../../types"

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="p-4 bg-slate-900/40 border border-slate-700 rounded-lg">
      <p className="font-medium">{task.title}</p>
      <p className="text-xs text-slate-400">{task.description}</p>

      <div className="mt-2 text-xs text-slate-500 flex gap-4">
        <span>Estado: {task.status}</span>
        <span>Prioridad: {task.priority}</span>
      </div>
    </div>
  )
}