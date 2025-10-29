import React, { useState } from "react";
import styled from "styled-components";
import BurgerMenu from "./Burger";
import UserInfo from "./UserInfo";
import searchIcon from "../assets/search.svg";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContainer>
      <BurgerMenu $isOpen={isMenuOpen} onClick={toggleMenu} />
      <RighContainer>
      <ActionButton>
        <ActionIcon src={searchIcon} alt="Поиск" />
      </ActionButton>
      <UserInfo firstName="Ivan" lastName="Dudko" />
      </RighContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2231aa;
`;
const RighContainer = styled.div`
  display: flex;
  align-items: right;
`;
const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
  }
`;

const ActionIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;
export default Header;
