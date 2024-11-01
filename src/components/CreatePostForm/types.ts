export interface NewPostSendRequest {
  userId: number;
  subject: string;
  header: string;
  description: string;
  image: File | undefined;
}
