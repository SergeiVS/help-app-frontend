import LinearProgress from "@mui/material/LinearProgress";
import { StyledModal, StyledAlert } from "./styles";
import { AlertProps } from "./types";

function AlertComp({
  isOpen,
  severity,
  onClose,
  progress,
  children,
}: AlertProps) {
  return (
    <StyledModal open={isOpen} onClose={onClose}>
      <StyledAlert severity={severity} onClose={onClose}>
        {children}
        <LinearProgress variant="determinate" value={progress} />
      </StyledAlert>
    </StyledModal>
  );
}
export default AlertComp;
