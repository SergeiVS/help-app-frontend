import { styled, FormControlLabel } from "@mui/material"

import { colors } from "../../styles/colors"

export const StyledRadioButton = styled(FormControlLabel)`
  & .MuiRadio-colorPrimary {
    color: ${colors.DEEPBLUE};
  }
  & .Mui-checked {
    color: ${colors.DEEPBLUE};
  }
`
