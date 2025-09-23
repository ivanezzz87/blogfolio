import React from "react";
import styled from "styled-components";

interface ITextArea {
  placeholder?: string;
  value: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  rows?: number;
}

const TextArea: React.FC<ITextArea> = ({
  placeholder,
  value,
  disabled,
  label,
  id,
  rows,
}) => {
  return (
    <TextAreaContainer>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledTextArea
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        rows={rows}
      />
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-align: left;
`;
const StyledTextArea = styled.textarea`
  width: 500px;
  min-height: 100px;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #999;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: #999;
  }

  &::placeholder {
    color: #999;
  }
`;
export default TextArea;
