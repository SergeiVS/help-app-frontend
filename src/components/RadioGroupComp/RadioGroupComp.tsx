import { FormControl } from "@mui/material"
import type { RadioGroupProps } from "./types" 
import { StyledRadioGroup } from "./Styles" 

function RadioGroupComp({ row, name, defaultValue, children, onChange}: RadioGroupProps) {
  return (
    <>
      <FormControl>
        <StyledRadioGroup
          row={row}
          name={name}
          onChange={onChange}
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
