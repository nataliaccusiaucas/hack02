export interface User {
  id: string
  name: string
  email: string
  createdAt?: string
}

export type ProjectStatus = 'ACTIVE' | 'COMPLETED' | 'ON_HOLD'

export interface Project {
  id: string
  name: string
  description?: string
  status: ProjectStatus
}

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED'
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: string
  projectId: string
  assignedTo?: string
}

export interface PaginatedProjects {
  projects: Project[]
  totalPages: number
  currentPage: number
}

export interface PaginatedTasks {
  tasks: Task[]
  totalPages: number
}
