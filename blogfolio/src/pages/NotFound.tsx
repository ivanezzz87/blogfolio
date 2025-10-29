import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
const NotFound : React.FC = () => {
  return (
    <StyledNotFound>
      <Title text="Oooops! Page not found" />
    </StyledNotFound>
  );
};
const StyledNotFound = styled.div`
  text-align: center;
`;
export default NotFound;  