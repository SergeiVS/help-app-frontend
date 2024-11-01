export interface SignInFormProps{
    onSubmit:()=>void
}

export interface newUser{
    firstName: string
    lastname: string
    phoneNumber: string | undefined
    email: string
    password: string
}