import { PostCardProps } from "./types"
import {
  StyledPostCard,
  StyledHeader,
  StyledDescription,
  StyledContactInfo,
  StyledPostContainer,
} from "./styles"

const PostCard = (props: PostCardProps) => {
  const { headline, description, contactInfo, image } = props

  return (
    <StyledPostContainer>
      <StyledContactInfo>
        <p>{contactInfo}</p>
      </StyledContactInfo>

      <StyledPostCard>
        <StyledHeader>{headline}</StyledHeader>
        <img
          src={image}
          alt="Photo"
          style={{ width: "100px", height: "auto" }}
        />
        <StyledDescription>{description}</StyledDescription>
      </StyledPostCard>
    </StyledPostContainer>
  )
}

export default PostCard
