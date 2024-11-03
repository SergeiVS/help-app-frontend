
import { Radio } from "@mui/material"
import {StyledRadioButton} from "./styles"
import {StyledRadioButtonProps} from "./types"
import { colors } from "../../styles/colors"

function RadioButton({value, label}:StyledRadioButtonProps){
    return(
    <>
    <StyledRadioButton control={<Radio/>} color={colors.DEEPBLUE} labelPlacement="end" value={value} label={label}/>
    </>)
}

export default RadioButton