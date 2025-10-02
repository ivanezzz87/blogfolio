import React from "react";
import styled from "styled-components";
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>© 2022 Blogfolio</p>
      <p>All rights reserved</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  margin: 20px auto;
  border-top: 1px solid var(--border-color);
  display: flex;
  max-width: 80%;
  align-self: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;
export default Footer;
