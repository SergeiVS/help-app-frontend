import { StyledModal } from "./styles";
import type { ModalProps } from "./types";

function Modal({ children, onClose, isOpen }: ModalProps) {
  return (
    <>
      <StyledModal open={isOpen} onClose={onClose}>
        {children}
      </StyledModal>
    </>
  );
}

export default Modal;
