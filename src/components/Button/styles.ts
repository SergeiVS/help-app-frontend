import { styled } from "@mui/material/styles"
import MuiButton from "@mui/material/Button"
import { colors } from "../../styles/colors"

interface StyledButtonProps {
  $isDeleteButton?: boolean | undefined
  $isRegularButton?: boolean | undefined
}

const getBorderColor = (isDeleteButton: boolean | undefined) => {
  if (isDeleteButton) {
    return colors.DELETE_BUTTON
  } 
  else {
    return colors.DEEPBLUE
  }
}

const getBackgroundColor = (isRegularButton: boolean | undefined) => {
  return isRegularButton ? colors.DEEPBLUE : "transparent"
}

export const StyledButton = styled(MuiButton)<StyledButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 14px;
  background-color: ${({ $isRegularButton }) =>
    getBackgroundColor($isRegularButton)};
  border: 2px solid ${({ $isDeleteButton }) => getBorderColor($isDeleteButton)};
  & :disabled {
    background-color: ${colors.DELETE_BUTTON};
  }
`
