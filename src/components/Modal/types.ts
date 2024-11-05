import { ReactElement } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}
