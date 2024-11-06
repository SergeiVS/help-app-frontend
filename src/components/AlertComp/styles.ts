import styled from "@emotion/styled";
import { Alert, Modal } from "@mui/material";

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 20%;
  width: 450px;
  min-height: 120px;
  max-width: fit-content;
  border-radius: 9px;
`;

export const StyledAlert = styled(Alert)`
  align-items: center;
  width: 100%;
  height: 80px;
  word-wrap: normal;
  font-size: larger;
`;
