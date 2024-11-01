import { ReactNode } from "react"

export interface alertSliceState {
  isOpen: boolean
  children: ReactNode | undefined
  severity: "info" | "success" | "error" | "warning" | undefined
}
