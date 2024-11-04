import { ReactNode } from "react";

export interface AlertProps{
    isOpen: boolean,
    onClose:()=>void,
    severity:"info" | "success" | "error" | "warning" | undefined,
    children: ReactNode | undefined,
    
}