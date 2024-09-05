import styled from "styled-components";

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
    max-width: 70%;
    padding-right: 20px;
  }
`;

export const RightContainer = styled.div`
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 30%;
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

export const DateRangeContainer = styled.div`
  display: flex;
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

export const AdditionalInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const InfoItem = styled.div`
  margin-bottom: 8px;
`;

export const DetailsInfoContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-left: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const DetailsInfoItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 5px;
  width: 95%;
  background: rgba(0, 0, 0, 0.05);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  span {
    font-weight: 700;
    color: #000;
  }
`;

export const DetailsPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #d9534f;
  background: #f0f0f0;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
  width: 95%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const RentButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const RentButton = styled.button`
  width: 100%;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  &:hover {
    background-color: #333;
    transform: translateY(-5px); /* Slight vertical lift on hover */
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
    border-radius: 8px;
    transition: opacity 0.3s ease;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.7;
  }
`;

export const RentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically centers the content */
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

// Styled button for "See more details"
export const SeeDetailsButton = styled.button`
  background-color: transparent; /* Transparent background */
  color: #007bff; /* Button text color */
  border: 2px solid #007bff; /* Outline border */
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff; /* Background color on hover */
    color: white; /* Text color changes to white on hover */
  }

  &:focus {
    outline: none;
  }
`;
