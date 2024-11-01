import { FormLabel } from "@mui/material"
import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { FormsCss } from "../../styles/CommonCss"

export const StyledForm = styled.form`
  ${FormsCss}
`

export const StyledLable = styled(FormLabel)`
  color: ${colors.GREY};
  font-size: 22px;
`

export const ButtonContainer = styled.div`
  align-self: center;
  width: 100px;
`
