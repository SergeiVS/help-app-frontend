import { PostCardProps } from "./types";
import {
  StyledPostCardWrapper,
  ImageWrapper,
  Image,
  InfoWrapper,
  Title,
  Description,
  Contact,
  SubjectLabel
} from "./styles";
export function PostCard({ subject, image, header, description, contactInfo }: PostCardProps) {
  return (
    <StyledPostCardWrapper>
      <ImageWrapper>
        <Image src={image} alt={header} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{header}</Title>
        <Contact>{contactInfo}</Contact>
        <Description>{description}</Description>
      </InfoWrapper>
      <SubjectLabel>{subject}</SubjectLabel>
    </StyledPostCardWrapper>
  );
}

export default PostCard;
