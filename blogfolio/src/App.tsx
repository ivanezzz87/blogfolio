import React, { useState } from 'react';
import './App.css'
import './components/Button'
import Button from './components/Button'
import UserInfo from './components/UserInfo';
import Title from './components/Title';
import BurgerMenu from './components/Burger';
function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="root-container">
      <div className='buttons-container'>
        <Button
          content="Primary"
          type="primary"
          state="enabled"
          onClick={() => console.log('Уже нажата')}
        />
        <Button
          content="Secondary"
          type="secondary"
          state="enabled"
          onClick={() => console.log('Уже нажата')}
        />
        <Button
          content="Secondary2"
          type="secondary2"
          state="enabled"
          onClick={() => console.log('Уже нажата')}
        />
      </div>
      <div className="userinfo-container">
        <UserInfo
          firstName="Ivan"
          lastName="Dudko"
        />
      </div>
      <div className="title-container">
        <Title
          text = "SignIn"
        />
      </div>
      <div className="burger-container">
                <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
    </div>
  );
}

export default App
