import type { Project } from "../../types"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <span className="text-xs px-2 py-1 rounded-full border border-slate-700">
          {project.status}
        </span>
      </div>

      {project.description && (
        <p className="text-sm text-slate-400">{project.description}</p>
      )}
    </div>
  )
}