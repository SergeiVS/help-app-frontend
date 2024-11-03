// import { ReactNode } from "react";

import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  disabled?: boolean
  isDeleteButton?: boolean
  isRegularButton?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: "button"|"submit"
  children?: ReactNode
  icon?: ReactNode
}

export enum variants {
  TEXT = "text",
  OUTLINED = "outlined",
  CONTAINED = "contained",
}
