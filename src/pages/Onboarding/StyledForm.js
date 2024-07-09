// styledComponents.js
import styled from "styled-components";
// import backgroundImage from "../../assests/images/gifbackground.gif";
import backgroundImage from "../../assests/images/loginImage.jpg";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: black;
`;

export const ImageContainer = styled.div`
  flex: 2;
  background-image: url(${backgroundImage}) !important;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding-top: 50%;
  z-index: 2;

  @media (min-width: 1200px) {
    padding-top: 10%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.1em;
`;

export const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f7f7f7;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: #eaeaea;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  position: relative;
  padding: 1rem 2rem;
  font-size: 1rem;
  background: linear-gradient(135deg, #000000, #444444);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #222222, #000000);
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top right,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 5px;
    transition: opacity 0.3s ease;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;
export const FancyText = styled.p`
  font-size: 16px;
  color: #333333;
  text-align: center;
  margin-top: 60px;
`;

export const FancyLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #000000;
    text-decoration: underline;
  }
`;
