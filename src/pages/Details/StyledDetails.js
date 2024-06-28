import styled from "styled-components";
import arrowLeft from "../../assests/icons/arrow-narrow-left.svg";

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  height: 600px;
  border-radius: 2%;
  margin-bottom: 20px;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FirstImage = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  img {
    min-height: 300px;
    max-height: 600px;
    width: 100%;
    border-radius: 1%;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    max-width: 50%;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const SecondImage = styled.div`
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    display: grid;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ButtonPhoto = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
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
    border-radius: 5px;
    transition: opacity 0.3s ease;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const LeftContainer = styled.div`
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
    padding-right: 20px;
  }
`;

export const RightContainer = styled.div`
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
    padding-left: 20px;
  }
`;

export const OwnerDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(128, 128, 128, 0.3);
  padding: 20px;
  border-radius: 12px;
`;

export const OwnerImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 70px;
  width: 70px;
  margin: 10px 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OwnerActivity = styled.div`
  color: #667085;
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;

  h3 {
    margin: 7px;
  }
`;

export const BackButton = styled.button`
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

export const DateRangeContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: box-shadow 0.3s ease, transform 0.5s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const RentButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #333;
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
    border-radius: 5px;
    transition: opacity 0.3s ease;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;
