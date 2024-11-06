import { Commet } from "react-loading-indicators";
import { colors } from "../../styles/colors";
import { SpinnerWrapper } from "./styles";

function Spinner() {
  return (
    <>
      <SpinnerWrapper>
        <Commet color={colors.DEEPBLUE} text="Loading..." size="medium" />
      </SpinnerWrapper>
    </>
  );
}

export default Spinner;
