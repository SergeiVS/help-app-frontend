import CloseIcon from "@mui/icons-material/Close";

import { StyledModal, StyledAlert } from "./styles";
import { AlertProps } from "./types";
import IconButton from "@mui/material/IconButton";

function AlertComp({ isOpen, severity, onClose, children }: AlertProps) {
  return (
    <StyledModal open={isOpen} onClose={onClose}>
      <StyledAlert severity={severity}>
        {children}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </StyledAlert>
    </StyledModal>
  );
}
export default AlertComp;
