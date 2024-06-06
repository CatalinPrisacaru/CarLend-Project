import React from "react";
import styled from "styled-components";

const LogoText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  text-align: center;
  position: relative;
  place-self: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 40px;
  padding-bottom: 25%;

  @media (max-width: 1700px) {
    padding-bottom: 10%;
  }
`;

const Logo = () => {
  return <LogoText>CARLEND</LogoText>;
};

export default Logo;
