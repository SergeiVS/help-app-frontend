import axios from "axios"

export interface SignInState {
  user: User 
  isPending: boolean
  isLoggedOn: boolean
  error: string | undefined
}

export interface User {
  id: number | 0
  firstName: string |"Firstname"
  lastName: string|"Lastname"
  email: string|"Email"
  phoneNumber: string|"N/A"
  roles: string[]
}
