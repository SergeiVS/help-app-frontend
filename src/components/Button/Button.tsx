import { StyledButton } from "./styles"
import { ButtonProps } from "./types"
import { variants } from "./types"

function Button({
  disabled = false,
  onClick,
  children,
  isDeleteButton= false,
  isRegularButton,
  type = "submit",
  icon
}: ButtonProps) {
  const variant =
    isDeleteButton || !isRegularButton ? variants.OUTLINED : variants.CONTAINED

  return (
    <>
      <StyledButton
        variant={variant}
        onClick={onClick}
        type={type}
        disabled={disabled}
        //RegularButton with variant contained, if false button variant= outlined
        $isRegularButton={isRegularButton}
        //if true: Button variant= outlined, border DELETE_BUTTON
        $isDeleteButton={isDeleteButton}
        endIcon={icon}
      >
        {children}
      </StyledButton>
    </>
  )
}

export default Button
