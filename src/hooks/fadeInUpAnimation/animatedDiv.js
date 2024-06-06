// AnimatedDiv.js
import styled, { keyframes } from "styled-components";

// Define keyframes for the animation
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: perspective(1200px) translateX(0px) translateY(100px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }
`;

// Styled component with the fadeInUp animation
export const AnimatedDiv = styled.div`
  animation: ${fadeInUp} ${({ animationduration }) => animationduration || "1s"}
    ease-in forwards;
`;
