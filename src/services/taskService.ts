import api from './api'
import type { PaginatedTasks, Task, TaskPriority, TaskStatus } from '../types/'

interface TaskFilters {
  projectId?: string
  status?: TaskStatus
  priority?: TaskPriority
  assignedTo?: string
  page?: number
  limit?: number
}

export async function getTasks(filters: TaskFilters = {}): Promise<PaginatedTasks> {
  const { page = 1, limit = 20, ...rest } = filters
  const { data } = await api.get<PaginatedTasks>('/tasks', {
    params: { page, limit, ...rest },
  })
  return data
}

export async function getTaskById(id: string): Promise<Task> {
  const { data } = await api.get<Task>(`/tasks/${id}`)
  return data
}

export async function createTask(payload: {
  title: string
  description?: string
  projectId: string
  priority: TaskPriority
  dueDate?: string
  assignedTo?: string
}): Promise<Task> {
  const { data } = await api.post<Task>('/tasks', payload)
  return data
}

export async function updateTask(id: string, payload: Partial<Task>): Promise<Task> {
  const { data } = await api.put<Task>(`/tasks/${id}`, payload)
  return data
}

export async function updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  const { data } = await api.patch<Task>(`/tasks/${id}/status`, { status })
  return data
}

export async function deleteTask(id: string) {
  await api.delete(`/tasks/${id}`)
}
