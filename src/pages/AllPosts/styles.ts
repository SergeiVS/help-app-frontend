import styled from "@emotion/styled"

import { colors } from "../../styles/colors"


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: left;
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 70px;

`

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 50px;
  gap: 50px;
  background-color: ${colors.LIGHTBLUE};
`
