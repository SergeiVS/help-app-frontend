import { ReactNode } from "react"

export interface AlertSliceState {
  isOpen: boolean
  children: ReactNode | undefined
  severity: "info" | "success" | "error" | "warning" | undefined
}
