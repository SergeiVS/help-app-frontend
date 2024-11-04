export interface PostCardProps {
  id?:number
  image: string;
  subject: string;
  header:string;
  description: string;
  firstName: string;
  lastName:string;
  email: string;
  phoneNumber:string;
  isTop?: boolean;
  contactInfo?:string;
}