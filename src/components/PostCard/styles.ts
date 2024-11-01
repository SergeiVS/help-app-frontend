import styled from "@emotion/styled"

import { colors } from "../../styles/colors"

export const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 800px;
  background-color: white;
`;

export const StyledContactInfo = styled.div`
  border-radius: 8px;
  padding: 16px;
  font-size: 1.2em;
  display: flex;
  max-width: 30%;
  margin-right: 16px;
`;

export const StyledPostCard = styled.div`
  border-radius: 8px;
  padding: 16px;
  max-width: 70%;
`;

export const StyledHeader = styled.h3`
  font-size: 1.2em;
  align-items: center;
`;

export const StyledDescription = styled.p`
  padding: 16px;
  font-size: 1.2em;
`;
