export interface NewPostSendRequest {
  userId: number;
  subject: string;
  header: string;
  description: string;
  image: File | undefined;
}

export enum UploadButtonMessage {
  UPLOAD = "Upload Photo",
  REMOVE = "Remove Photo",
}
