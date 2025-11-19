import { ProjectList } from '../components/projects/ProjectsList'

export function Projects() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Proyectos</h1>
        <button className="rounded bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-900">
          Nuevo proyecto
        </button>
      </div>
      <ProjectList />
    </div>
  )
}


