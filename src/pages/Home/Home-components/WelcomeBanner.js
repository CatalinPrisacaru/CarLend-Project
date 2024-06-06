import React from "react";
import { AnimatedDiv } from "../../../hooks/fadeInUpAnimation/animatedDiv";
import { useFadeInUpAnimation } from "../../../hooks/fadeInUpAnimation/fadeInUp";
import styled from "styled-components";

const WelcomeBanner = () => {
  const isVisible = useFadeInUpAnimation();

  return (
    <AnimatedDiv animationduration="1s" style={{ opacity: isVisible ? 1 : 0 }}>
      <Container>
        <h3>Welcome to CarLend</h3>
        <h1>Discover Your Ideal Vehicle, Anytime, Anywhere.</h1>
      </Container>
    </AnimatedDiv>
  );
};

export default WelcomeBanner;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  padding-bottom: 5%;
`;
