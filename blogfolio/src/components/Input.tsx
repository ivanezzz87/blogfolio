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
  textError?: string;
  onChange: (value: string) => void;
}
const Input: React.FC<IInput> = ({
  type,
  placeholder,
  value,
  disabled = false,
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
      {isError && textError && <Error>{textError}</Error>}
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
  color: var(--text-color);
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
  border: ${(props) => (props.$isError ? "1px solid red" : "none")};
  border-radius: 1px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 2px solid ${(props) => (props.$isError ? "red" : "#dadada")};
  }
  &:active {
    background-color: #dadada;
    border: none;
  }
  &:disabled {
    background-color: #dadada;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #dadada;
  }
`;
export default Input;
