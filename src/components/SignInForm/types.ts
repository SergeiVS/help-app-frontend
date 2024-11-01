import { FormEventHandler } from "react"

export interface SignInFormProps {
  onSubmit:  (event:FormEventHandler<HTMLFormElement>| undefined)=> void
}

export interface LogIn {
  email: string
  password: string
}
