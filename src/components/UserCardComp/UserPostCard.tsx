import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import PostCard from "../PostCard/PostCard";
import Button from "../Button/Button";

import exampleImage from "../../assets/logo.png";

import { CardWrapper, ButtonConraiver, ButtonsContainer } from "./styles";
import { UserCardProps } from "./types";

export default ({ post, onDelete }: UserCardProps) => {
  return (
    <CardWrapper>
      <PostCard
        subject={post.subject.name}
        header={post.header}
        description={post.description}
        contactInfo={`${post.user.firstName} ${post.user.lastName}, ${post.user.email}`}
        image={post.photoLink || exampleImage}
      />
      <ButtonsContainer>
        <ButtonConraiver>
          <Button
            isDeleteButton
            children={<DeleteForeverIcon color="error" />}
            type="button"
            onClick={() => onDelete(post.postId)}
          />
        </ButtonConraiver>
        <ButtonConraiver>
          <Button children={<EditIcon />} type="button" onClick={() => {}} />
        </ButtonConraiver>
      </ButtonsContainer>
    </CardWrapper>
  );
};
