import { Post } from "../../pages/AllPosts/types";
export interface UserCardProps {
  post: Post;
  key: string;
  onDelete: (id: number) => void;
}
