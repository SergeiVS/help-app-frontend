import { styled } from "@mui/material/styles"
import { TextField } from "@mui/material"

export const StyledInput = styled(TextField)`
  border-radius: 9px;
  background-color: white;
  & .Mui-multiline{
    height: 150px;
  }
`

