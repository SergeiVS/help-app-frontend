
export interface ResponseCard{
  postId: number,
  subject: subject,
  header:string,
  description: string,
  photoLink:string,
  user: user
}

export interface subject{
name: string
}

export interface user{
  firstName:string,
  lastName:string,
  email:string,
  phoneNumber:string
}
