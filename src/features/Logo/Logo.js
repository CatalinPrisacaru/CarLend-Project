import React from "react";
import styled from "styled-components";
import carLogo from "./carLogo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  text-align: center;
  position: relative;
  place-self: center;
`;

const LogoText = styled.h1`
  font-family: "Arial Black", sans-serif;
  font-size: 20px;
  color: #8b4513;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={carLogo} alt="Car Logo" />
      <LogoText>CarLend</LogoText>
    </LogoContainer>
  );
};

export default Logo;
