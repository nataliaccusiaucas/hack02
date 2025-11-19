import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      className={w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm ${className}}
      {...rest}
    />
  )
}