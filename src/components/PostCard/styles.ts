import styled from "@emotion/styled"

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
  height: 180px;
  overflow: hidden;
  margin-right: 16px;
`;
export const Image = styled.img`
  width: 100%;
`

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 26px;
`;

export const Contact = styled.span`
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
  height: 35px;
  width: 90px;
  left: 50px;
  padding: 8px;
  background-color: ${colors.SUBJECT_LABEL};
  color: ${colors.GREY};
`