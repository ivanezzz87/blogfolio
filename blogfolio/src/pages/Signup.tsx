import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
export const Signup: React.FC = () => {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (field: string, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <div>
      <HeaderContainer>
        <BackToHome href="/">Back to home</BackToHome>
        <Title text="Sign in" />
      </HeaderContainer>
      <Container>
        <Input
          type="text"
          value={formData.name}
          placeholder="Your name"
          label="Email"
          id="email"
          onChange={(value) => handleInputChange("email", value)}
        />
        <Input
          type="email"
          value={formData.email}
          placeholder="Your email"
          label="Email"
          id="email"
          onChange={(value) => handleInputChange("email", value)}
        />
        <Input
          type="password"
          value={formData.password}
          placeholder="Your password"
          label="Password"
          id="password"
          onChange={(value) => handleInputChange("password", value)}
        />
        <a href="#">Forgot password?</a>
        <Button
          content="Sign up"
          type="primary"
          state="enabled"
          onClick={handleSubmit}
        />
        <span>
          Already have account? <StyledLink to="/">Sign in</StyledLink>
        </span>
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--link-color);
  cursor: pointer;
  
  &:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
`;