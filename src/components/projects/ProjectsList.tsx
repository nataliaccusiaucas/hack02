import { useEffect, useState } from 'react'
import { getProjects } from '../../services/projectService'
import type { Project } from '../../types'

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await getProjects()
        setProjects(res.projects)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p>Cargando proyectos...</p>

  return (
    <div className="space-y-3">
      {projects.map((p) => (
        <div
          key={p.id}
          className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 flex items-center justify-between"
        >
          <div>
            <p className="font-medium">{p.name}</p>
            {p.description && <p className="text-xs text-slate-400">{p.description}</p>}
          </div>
          <span className="text-xs px-2 py-1 rounded-full border border-slate-700">
            {p.status}
          </span>
        </div>
      ))}
    </div>
  )
}

