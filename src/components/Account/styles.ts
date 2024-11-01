import { FormLabel } from "@mui/material"
import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { FormsCss } from "../../styles/CommonCss"

export const StyledAccount = styled.form`
   ${FormsCss}
`
export const StyledLable = styled(FormLabel)`
  color: ${colors.GREY};
  font-size: 22px;
`

export const ButtonContainer = styled.div`
padding: 10px;
  width: 120px;
`
export const ButtonsWrapper = styled.div`
display: flex;
gap: 20px;
width: 100%;
justify-content: center;
`