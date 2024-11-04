export interface Post {
    postID: number,
    subject: object,
    header: string,
    user: object,
    description: string
    photoLink: string
  }
  
export type Posts = Post[];