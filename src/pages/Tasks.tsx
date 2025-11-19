import { TaskList } from '../components/tasks/TaskList'

export function Tasks() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tareas</h1>
        <button className="rounded bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-900">
          Nueva tarea
        </button>
      </div>
      <TaskList />
    </div>
  )
}