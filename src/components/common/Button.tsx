import type { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded font-medium text-sm transition-colors disabled:opacity-50"

  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-black hover:bg-cyan-400"
      : "bg-slate-800 text-slate-50 hover:bg-slate-700"

  return (
    <button />)}
