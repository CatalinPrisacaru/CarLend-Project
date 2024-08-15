import React from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Card from "../Card/Card";

const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  padding-bottom: 50px;
`;

const CarouselItem = styled.div`
  width: 400px;
  height: 600px;
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

const Carousel = ({ isCarousel, items }) => {
  return (
    <CarouselContainer>
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
      >
        {!!items &&
          items
            .filter((item) => item?.status === 1)
            .map((item, index) => (
              <CarouselItem key={index}>
                <Card item={item} isCarousel />
                <GradientOverlay />
              </CarouselItem>
            ))}
      </Flickity>
    </CarouselContainer>
  );
};

export default Carousel;
