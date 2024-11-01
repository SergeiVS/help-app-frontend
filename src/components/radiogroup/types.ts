import { ReactNode } from "react"

export interface RadioGroupProps {
  row: boolean
  name: string
  defaultValue?: string
  children: ReactNode
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
