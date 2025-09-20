import React from "react";
import styled from "styled-components";

interface IInput {
  type: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  isError?: boolean;
  textError?: string
  onChange: (value: string) => void;
}
const Input: React.FC<IInput> = ({
  type,
  placeholder,
  value,
  disabled,
  label,
  id,
  isError = false,
  textError,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <InputContainer>
      {label && (
        <StyledLabel htmlFor={id} $disabled={disabled}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        $isError={isError}
      />
      {isError && textError && (
        <Error>
          {textError}
        </Error>
      )}
    </InputContainer>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  padding: 10px;
`;
const StyledLabel = styled.label<{ $disabled?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: ${(props) => (props.$disabled ? "#999" : "#333")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;
const Error = styled.span`
  font-size: 12px;
  color: red;
  text-align: left;
  margin-top: -2px;
`;

const StyledInput = styled.input<{ $isError: boolean }>`
  width: 450px;
  padding: 12px 16px;
  border: 2px solid #fff;
  border-radius: 1px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  outline: none;

  &:focus {
    border-color: #999;
    border-color: ${(props) => (props.$isError ? "red" : "#999")};
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #999;
  }
`;
export default Input;
