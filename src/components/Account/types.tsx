export interface SignInFormProps{
    onSubmit:()=>void
}

export interface userUpdateRequest{
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}