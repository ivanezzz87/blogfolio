import React from 'react';
import styled from 'styled-components';

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const BurgerLine = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 3px;
  background: ${props => props.isOpen ? '#fff' : '#fff'};
  border-radius: 5px;
  transition: all 0.3s ease;
  position: absolute;

  &:nth-child(1) {
    top: ${props => props.isOpen ? '50%' : '25%'};
    transform: ${props => props.isOpen ? 'translateY(-50%) rotate(45deg)' : 'none'};
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${props => props.isOpen ? 0 : 1};
  }

  &:nth-child(3) {
    top: ${props => props.isOpen ? '50%' : '75%'};
    transform: ${props => props.isOpen ? 'translateY(-50%) rotate(-45deg)' : 'none'};
  }
`;

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <>
      <BurgerButton isOpen={isOpen} onClick={onClick}>
        <BurgerLine isOpen={isOpen} />
        <BurgerLine isOpen={isOpen} />
        <BurgerLine isOpen={isOpen} />
      </BurgerButton>
    </>
  );
};

export default BurgerMenu;