import { useState, type FormEvent } from "react"
import type { TaskPriority } from "../../types"
import { createTask } from "../../services/taskService"

export function TaskForm() {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<TaskPriority>("LOW")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    createTask({
      title,
      projectId: "alguno",
      priority,
    })

    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="w-full bg-slate-800 p-2 rounded"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full bg-slate-800 p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
      >
        <option value="LOW">Baja</option>
        <option value="MEDIUM">Media</option>
        <option value="HIGH">Alta</option>
        <option value="URGENT">Urgente</option>
      </select>

      <button className="bg-cyan-500 px-4 py-2 rounded text-black font-bold">
        Crear tarea
      </button>
    </form>
  )
}