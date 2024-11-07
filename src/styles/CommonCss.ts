import { css } from "@emotion/react";
import { colors } from "./colors";
import styled from "@emotion/styled";

export const FormsCss = css`
 display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 25px;
  padding: 30px;
  padding-bottom: 40px;
  width: 540px;
  height: fit-content;
  background-color: ${colors.LIGHTBLUE};
  border-radius: 9px;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 70px;
`
export const StyledErrorMessage= styled.p`
font-size: larger;
color: red;
`