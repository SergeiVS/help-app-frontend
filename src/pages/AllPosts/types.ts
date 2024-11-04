export interface Post {
    postId: number;
  subject: {
    name: string; 
  };
  header: string; 
  user: {
    id: number; 
    firstName: string; 
    lastName: string; 
    email: string; 
    phoneNumber?: string; 
  };
  description: string; 
  photoLink?: string; 
  }
  
export type Posts = Post[];