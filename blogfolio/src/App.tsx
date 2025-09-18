import React, { useState } from "react";
import "./App.css";
import "./components/Button";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import Title from "./components/Title";
import BurgerMenu from "./components/Burger";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import TabsComponent from "./components/Tabs";
import PostItem from "./components/Post";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="root-container">
      <div className="buttons-container">
        <Button
          content="Primary"
          type="primary"
          state="enabled"
          onClick={() => console.log("Уже нажата")}
        />
        <Button
          content="Secondary"
          type="secondary"
          state="enabled"
          onClick={() => console.log("Уже нажата")}
        />
        <Button
          content="Secondary2"
          type="secondary2"
          state="enabled"
          onClick={() => console.log("Уже нажата")}
        />
      </div>
      <div className="userinfo-container">
        <UserInfo firstName="Ivan" lastName="Dudko" />
      </div>
      <div className="title-container">
        <Title text="SignIn" />
      </div>
      <div className="burger-container">
        <BurgerMenu $isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <Input
        type="text"
        value="Text"
        label="Text"
        id="input1"
        onChange={() => console.log("text")}
        // isError
        // textError="не заполнено"
      />
      <TextArea placeholder="Text" value="" label="Text" id="input2" />
      <div>
        <TabsComponent />
      </div>
      <PostItem
        image="https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1"
        date="2025-09-18"
        title=" The Brave Pioneers of Space: A Tribute to Astronauts"
        description="Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.

"
      />
    </div>
  );
}

export default App;
