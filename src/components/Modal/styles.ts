import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { colors } from "../../styles/colors";

export const StyledModal = styled(Modal)`
  position: absolute;
  bottom: auto;
  left: 100px;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 550px;
  height: 550px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 7px 4px 4px ${colors.DEEPBLUE};
  padding: 8px;
`;
