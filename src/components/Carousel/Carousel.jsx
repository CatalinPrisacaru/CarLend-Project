import React from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { ActionButton } from "../Card/Card";

const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  padding-bottom: 50px;
`;

const CarouselItem = styled.div`
  width: 350px;
  height: 500px;
  margin: 0px 15px 30px 15px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Content = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.4em;
  color: #333333;
`;

const Price = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #ff6347;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666666;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(transparent, rgba(255, 255, 255, 0.8));
  z-index: -1;
`;

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  prevNextButtons: true,
  autoPlay: true,
};

const Carousel = ({ items }) => {
  const handleBookNow = (title) => {
    alert(`Book Now: ${title}`);
  };

  return (
    <CarouselContainer>
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Image src={item.image} alt={item.title} />
            <Content>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Content>
            <ButtonContainer>
              <Price>{item.price}</Price>
              <ActionButton onClick={() => handleBookNow(item.title)}>
                Book Now
              </ActionButton>
            </ButtonContainer>
            <GradientOverlay />
          </CarouselItem>
        ))}
      </Flickity>
    </CarouselContainer>
  );
};

export default Carousel;
