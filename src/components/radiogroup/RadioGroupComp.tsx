import { FormControl } from "@mui/material"
import type { RadioGroupProps } from "../../components/radiogroup/types" 
import { StyledRadioGroup } from "../../components/radiogroup/Styles" 

function RadioGroupComp({ row, name, defaultValue, children, onCange}: RadioGroupProps) {
  return (
    <>
      <FormControl>
        <StyledRadioGroup
          row={row}
          name={name}
          onChange={onCange}
          defaultValue={defaultValue}
        >{children}
            {/* //Here will be placed <FormControlLabel/> with all needed props
            example <FormControlLable value="NEED HELP" 
            control={<Radio/>} lable="Need Help" size="large"/> */}
        </StyledRadioGroup>
      </FormControl>
    </>
  )
}

export default RadioGroupComp
