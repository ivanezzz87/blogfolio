import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
export const SignIn: React.FC = () => {
  const [formData, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Sign in:", formData);
  };

  return (
    <div>
      <Header />
      <HeaderContainer>
        <BackToHome href="/">Back to home</BackToHome>
        <Title text="Sign in" />
      </HeaderContainer>
      <Container>
        <Input
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          label="Email"
          id="email"
          onChange={(value) => handleInputChange("email", value)}
        />
        <Input
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          label="Password"
          id="password"
          onChange={(value) => handleInputChange("password", value)}
        />
        <a href="#">Forgot password?</a>
        <Button
          content="Sign in"
          type="primary"
          state="enabled"
          onClick={handleSubmit}
        />
        <span>Don't have an account? <a href="#">Sign up</a></span>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  margin: 0 auto;
  height: 500px;
  width: 500px;
  border: 1px solid lightgray;
`;
const BackToHome = styled.a`
  text-decoration: none;
  color: var(--link-color);
  font-size: 16px;
  margin-left: 10%;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
`;
