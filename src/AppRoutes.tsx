import { Routes, Route } from "react-router-dom"

import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Dashboard } from "./pages/DashBoard"
import { Projects } from "./pages/Projects"
import { Tasks } from "./pages/Tasks"

import { ProtectedRoute } from "./routes/ProtectedRoute"

export function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PRIVATE */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>

      {/* DEFAULT */}
      <Route path="*" element={<Login />} />
    </Routes>
  )
}