import styled from "@emotion/styled"

import { colors } from "../../styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  height: 460px;
  background-color: ${colors.LIGHTBLUE};
  justify-content: left;
  padding-left: 130px;
  padding-right: 130px;
  gap: 100px;
`

export const AboutUs = styled.div `
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  gap: 30px;
  padding-top: 30px;
`

export const AboutUsTitle = styled.h1`
  font-size: 38px;
  color: ${colors.GREY};
`

export const AboutUsText = styled.p`
  font-size: 22px;
  color: ${colors.GREY};
`

export const PictureControl = styled.div`
  width: 700px;
  padding-top: 30px;
`

export const Picture = styled.img `
  width: 100%;
`

export const ButtonContainer = styled.div`
 width: 100px;
`