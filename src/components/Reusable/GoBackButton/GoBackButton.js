import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowLeft from "../../../assests/icons/arrow-narrow-left.svg";

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  background-color: transparent;
  border: none;
  padding-bottom: 20px;
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #000;
    transform: translateX(-2px);
  }

  &:active {
    transform: translateX(1px);
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background-image: url(${arrowLeft});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(100%);
  }
`;

const BackButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <StyledBackButton onClick={handleClick}>
      <div className="icon" />
      Go back
    </StyledBackButton>
  );
};

export default BackButton;
