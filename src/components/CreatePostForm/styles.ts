import { FormControl, FormLabel, InputLabel } from "@mui/material"
import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { FormsCss } from "../../styles/CommonCss"

export const StyledPostCard = styled.form`
  ${FormsCss}
`
export const StyledLable = styled(FormLabel)`
  color: ${colors.GREY};
  font-size: 22px;
`
export const ButtonWraper = styled.div`
  align-self: center;
  width: 100px;
`

export const DescriptionWrapper= styled.div`
width: 100%;
height: 250px;
`
