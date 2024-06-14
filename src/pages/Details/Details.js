import React from "react";
import styled from "styled-components";

const car = {
  images: [
    "https://loremflickr.com/200/300/car?t=1",
    "https://loremflickr.com/200/300/car?t=2",
    "https://loremflickr.com/200/300/car?t=3",
    "https://loremflickr.com/200/300/car?t=4",
    "https://loremflickr.com/200/300/car?t=5",
  ],
  title: "2020 Tesla Model S",
  price: "$120/day",
  description:
    "A luxury electric car with autopilot features and a range of 370 miles.",
  location: "Suceava",
};

// Styled Components
const ImagesContainer = styled.div`
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

const FirstImage = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  img {
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

const SecondImage = styled.div`
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

const ButtonPhoto = styled.button`
  z-index: 1;
  position: absolute;
  right: 20px;
  bottom: 20px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const LeftContainer = styled.div`
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
    padding-right: 20px;
  }
`;

const RightContainer = styled.div`
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
    padding-left: 20px;
  }
`;

const OwnerDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(128, 128, 128, 0.3);
  padding: 20px;
  border-radius: 12px;
`;

const OwnerImage = styled.div`
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

const OwnerActivity = styled.div`
  color: #667085;
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
  h3 {
    margin: 7px;
  }
`;

const Details = () => {
  return (
    <div>
      <ImagesContainer>
        <FirstImage>
          <img src={car.images[0]} alt="Main Car" />
        </FirstImage>

        <SecondImage>
          {car.images.slice(1, 5).map((src, index) => (
            <img key={index} src={src} alt={`Thumbnail ${index + 2}`} />
          ))}
        </SecondImage>
        <ButtonPhoto>Show all photos</ButtonPhoto>
      </ImagesContainer>

      <Container>
        <LeftContainer>
          <h1>{car.title}</h1>
          <h3>{car.price}</h3>
          <hr />
          <p>{car.description}</p>
          <p>{car.location}</p>
        </LeftContainer>
        <RightContainer>
          <OwnerDetails>
            <OwnerImage>
              <img src={car.images[0]} alt="Main Car" />
            </OwnerImage>
            <OwnerActivity>
              <h3>Joined on June 2024</h3>
              <h3>Response rate: 90%</h3>
              <h3>Response time: 1h</h3>
            </OwnerActivity>
          </OwnerDetails>
        </RightContainer>
      </Container>
    </div>
  );
};

export default Details;
