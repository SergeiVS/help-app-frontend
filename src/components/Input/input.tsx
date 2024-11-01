import React from "react"
import { InputProps, InputTypes } from "./types"
import { StyledInput } from "./styles"

const Input = ({
  value,
  onChange,
  error,
  placeholder,
  label,
  name,
  type = InputTypes.TEXT,
  disabled = false,
  multiline=false,
  rows
}: InputProps) => {
  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      error={!!error}
      helperText={error}
      fullWidth
      multiline={multiline}
      rows={rows}
      disabled={disabled}
    />
  )
}

export default Input
