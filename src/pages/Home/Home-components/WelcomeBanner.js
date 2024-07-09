import React, { useContext } from "react";
import { AnimatedDiv } from "../../../hooks/fadeInUpAnimation/animatedDiv";
import { useFadeInUpAnimation } from "../../../hooks/fadeInUpAnimation/fadeInUp";
import styled from "styled-components";
import AuthContext from "../../../hooks/userContext";

const WelcomeBanner = () => {
  const isVisible = useFadeInUpAnimation();
  const { user } = useContext(AuthContext);

  return (
    <AnimatedDiv animationduration="1s" style={{ opacity: isVisible ? 1 : 0 }}>
      <Container>
        <h3>Welcome to CarLend {user?.displayName}</h3>
        <h1>Discover Your Ideal Vehicle, Anytime, Anywhere.</h1>
      </Container>
    </AnimatedDiv>
  );
};

export default WelcomeBanner;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  padding-bottom: 5%;
  width: 100%;

  h3 {
    font-size: 1rem;
    margin: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      margin: 0.75rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
      margin: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    margin: 0.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
      margin: 0.75rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
      margin: 1rem;
    }
  }
`;
