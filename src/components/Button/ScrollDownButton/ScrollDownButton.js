import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import scrollDown from "../../../assests/images/scrollDown.png";
import { AnimatedDiv } from "../../../hooks/fadeInUpAnimation/animatedDiv";
import { useFadeInUpAnimation } from "../../../hooks/fadeInUpAnimation/fadeInUp";

export const ScrollDownButton = () => {
  const [showButton, setShowButton] = useState(false);
  const isVisible = useFadeInUpAnimation();

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerHeight > 1000);
    };

    const handleScroll = () => {
      setShowButton(window.innerHeight > 1000);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <AnimatedDiv
        animationduration="2s"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <ScrollButtonContainer onClick={scrollToBottom}>
          <h3>Scroll Down</h3>
          <img src={scrollDown} alt="scroll down" />
        </ScrollButtonContainer>
      </AnimatedDiv>
    )
  );
};

const scrollAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

// Styled components for the scroll button container
const ScrollButtonContainer = styled.div`
  width: 100%;
  transform: translateX(-50%);
  text-align: center;
  cursor: pointer;
  animation: ${scrollAnimation} 2s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0;
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
  }

  img {
    height: 200px;
  }
`;

export default ScrollDownButton;
