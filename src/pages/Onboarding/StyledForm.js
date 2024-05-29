// styledComponents.js
import styled from "styled-components";
import backgroundImage from "./trafficJam.gif";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #f7d9c4, #ffb07c);
`;

export const ImageContainer = styled.div`
  flex: 2;
  background-image: url(${backgroundImage});
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
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  color: #8b4513;
  font-size: 2rem;
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
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #feb47b, #ff7e5f);
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
  color: #8b4513;
  text-align: center;
  margin-top: 60px;
`;

export const FancyLink = styled(Link)`
  color: #8b4513;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
