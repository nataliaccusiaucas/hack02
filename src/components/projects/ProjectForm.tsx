import { useState, type FormEvent } from "react"
import { createProject } from "../../services/projectService"
import type { ProjectStatus } from "../../types"

export function ProjectForm({ onCreated }: { onCreated?: () => void }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<ProjectStatus>("ACTIVE")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await createProject({ name, description, status })

    setName("")
    setDescription("")
    setStatus("ACTIVE")

    onCreated?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Nombre del proyecto</label>
        <input
          className="w-full bg-slate-800 p-2 text-sm rounded mt-1"
          placeholder="Ej: Rediseño del dashboard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">Descripción</label>
        <textarea
          className="w-full bg-slate-800 p-2 text-sm rounded mt-1"
          rows={3}
          placeholder="Descripción breve..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Estado</label>
        <select
          className="w-full bg-slate-800 p-2 text-sm rounded mt-1"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as ProjectStatus)
          }
        >
          <option value="ACTIVE">Activo</option>
          <option value="COMPLETED">Completado</option>
          <option value="ON_HOLD">En pausa</option>
        </select>
      </div>

      <button className="w-full bg-cyan-500 py-2 rounded font-semibold text-sm text-black">
        Guardar proyecto
      </button>
    </form>
  )
}