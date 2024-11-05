import styled from "@emotion/styled";

import { colors } from "../../styles/colors";

export const StyledPostCardWrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background-color: white;
  height: 200px;
  gap: 8px;
`;

export const ImageWrapper = styled.div`
  width: 180px;
  height: 100%;
  overflow: hidden;
  margin-right: 16px;
  padding: 5px;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: scale-down;
`;



export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 26px;
`;

export const Contact = styled.span`
  align-self: self-end;
  background-color: #f3f3f3;
  padding: 5px;
  border-radius: 4px;
  font-size: 18px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const SubjectLabel = styled.div`
  position: relative;
  min-height: 35px;
  max-height: fit-content;
  width: 100px;
  left: 50px;
  padding: 8px;
  font-size: 15px;
  background-color: ${colors.SUBJECT_LABEL};
  color: ${colors.GREY};
`;
