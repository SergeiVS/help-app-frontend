import React from 'react';

export interface InputProps {
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    label?: string;
    multiline?: boolean;
    rows?: number;
    style?: React.CSSProperties;
    type?:InputTypes;
    disabled?: boolean
    name:string
}

export enum InputTypes{
    EMAIL="email",
    PASSWORD="password",
    TEXT="text"
}