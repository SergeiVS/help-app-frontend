export interface PostCardProps {
  id?:number
  image: string;
  subject: string;
  header:string;
  description: string;
  isTop?: boolean;
  contactInfo?:string;
}