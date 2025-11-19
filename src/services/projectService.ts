import api from './api'
import type { PaginatedProjects, Project, ProjectStatus } from '../types'

export async function getProjects(page = 1, limit = 10, search = ''): Promise<PaginatedProjects> {
  const { data } = await api.get<PaginatedProjects>('/projects', {
    params: { page, limit, search },
  })
  return data
}

export async function getProjectById(id: string): Promise<Project> {
  const { data } = await api.get<Project>(`/projects/${id}`)
  return data
}

export async function createProject(payload: {
  name: string
  description?: string
  status?: ProjectStatus
}): Promise<Project> {
  const { data } = await api.post<Project>('/projects', payload)
  return data
}

export async function updateProject(id: string, payload: Partial<Project>): Promise<Project> {
  const { data } = await api.put<Project>(`/projects/${id}`, payload)
  return data
}

export async function deleteProject(id: string) {
  await api.delete(`/projects/${id}`)
}