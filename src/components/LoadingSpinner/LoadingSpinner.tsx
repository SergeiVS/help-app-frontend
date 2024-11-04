import {Commet} from "react-loading-indicators"
import {colors} from "../../styles/colors"

function LoadingSpinner(){
    return(
        <>
        <Commet
        color={colors.DEEPBLUE}
        text="Loading..."
        size="medium"
        />
        </>
    )
}

export default LoadingSpinner