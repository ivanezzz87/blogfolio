import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeContext';

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <SwitchButton onClick={toggleTheme} theme={theme}>
        <LightIcon theme={theme}>L</LightIcon>
        <DarkIcon theme={theme}>D</DarkIcon>
        <SwitchThumb theme={theme} />
      </SwitchButton>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 1000;
`;

const SwitchButton = styled.button<{ theme: 'light' | 'dark' }>`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: ${props => props.theme === 'light' ? '#f0f0f0' : '#333'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SwitchThumb = styled.span<{ theme: 'light' | 'dark' }>`
  position: absolute;
  top: 2px;
  left: ${props => props.theme === 'light' ? '2px' : '32px'};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${props => props.theme === 'light' ? '#fff' : '#666'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const Icon = styled.span<{ theme: 'light' | 'dark' }>`
  font-size: 14px;
  opacity: ${props => props.theme === 'light' ? 1 : 0.5};
  transition: opacity 0.3s ease;
  z-index: 1;
`;

const LightIcon = styled(Icon)`
  opacity: ${props => props.theme === 'light' ? 1 : 0.3};
`;

const DarkIcon = styled(Icon)`
  opacity: ${props => props.theme === 'dark' ? 1 : 0.3};
`;