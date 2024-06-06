import React from "react";
import styled from "styled-components";
import { AnimatedDiv } from "../../../hooks/fadeInUpAnimation/animatedDiv";
import imag from "../../../assests/images/test222.avif";
import { useFadeInUpAnimation } from "../../../hooks/fadeInUpAnimation/fadeInUp";

const BackgroundImage = () => {
  const isVisible = useFadeInUpAnimation();

  return (
    <CarImage>
      <AnimatedDiv
        animationduration="2s"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <img src={imag} className="image" alt="car" />
      </AnimatedDiv>
    </CarImage>
  );
};

export default BackgroundImage;

export const CarImage = styled.div`
  cursor: pointer;
  z-index: 2;

  .image {
    max-height: 500px;
    width: 100%;
    height: auto;
    padding-bottom: 5%;
  }
`;
