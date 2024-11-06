import Modal from "../Modal/Modal";

import { PostCardProps } from "./types";
import {
  StyledPostCardWrapper,
  ImageWrapper,
  Image,
  InfoWrapper,
  Title,
  Description,
  Contact,
  SubjectLabel,
} from "./styles";
import exampleImage from "../../assets/logo.png";
import { useState } from "react";

export function PostCard({
  subject,
  image,
  header,
  description,
  contactInfo,
}: PostCardProps) {
  const [isImageOpen, setImageOpen] = useState<boolean>(false);

  const onImageClic = (): void => {
    setImageOpen(true);
  };
  const onImageClose = () => setImageOpen(false);

  const photo = image === "N/A" ? exampleImage : image;

  return (
    <StyledPostCardWrapper>
      <Modal
        isOpen={isImageOpen}
        onClose={onImageClose}
        children={<Image src={photo} alt={header} />}
      />
      <ImageWrapper>
        <button type="button" onClick={onImageClic}>
          <Image src={photo} alt={header} />
        </button>
      </ImageWrapper>
      <InfoWrapper>
        <Title>{header}</Title>
        <Description>{description}</Description>
        <Contact>{contactInfo}</Contact>
      </InfoWrapper>
      <SubjectLabel>{subject}</SubjectLabel>
    </StyledPostCardWrapper>
  );
}

export default PostCard;
