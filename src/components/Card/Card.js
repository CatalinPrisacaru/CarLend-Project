import React from "react";
import { useNavigate } from "react-router-dom";

import automatic from "../../assests/icons/automatic-gear.svg";
import manual from "../../assests/icons/gear.svg";
import person from "../../assests/icons/person.svg";
import {
  Background,
  BannerImage,
  ButtonWrapper,
  Container,
  FillButton,
  HeaderContainer,
  Icon,
  IconContainer,
  OutlineButton,
  Text,
  TextContainer,
  Title,
  TitleWraper,
  VehicleType,
  Wrapper,
} from "./StyleCard";

const Card = ({ item, handleSelectedCar }) => {
  const navigate = useNavigate();

  const isAutomatic = item.gear === "Automatic" ? true : false;
  const imageSrc = isAutomatic ? automatic : manual;

  return (
    <Background>
      <Container>
        <Wrapper>
          <TitleWraper>
            <Title>{item?.title}</Title>{" "}
            <VehicleType>| {item.vehicleType}</VehicleType>
          </TitleWraper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <HeaderContainer>
              <IconContainer>
                <Icon
                  src={imageSrc}
                  alt={isAutomatic ? "AUTOMATIC" : "MANUAL"}
                />
              </IconContainer>
              <TextContainer>
                {isAutomatic ? "AUTOMATIC" : "MANUAL"}
              </TextContainer>
            </HeaderContainer>
            <HeaderContainer>
              <IconContainer>
                <Icon src={person} alt="person" />
              </IconContainer>
              <TextContainer>{item.persons}</TextContainer>
            </HeaderContainer>
          </div>
          <BannerImage>
            <img
              src={
                !!item?.images
                  ? item?.images[0]
                  : "https://loremflickr.com/200/300/car?t=4"
              }
              alt="masini"
            />
          </BannerImage>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <HeaderContainer>
              <Text>{item?.location}</Text>
            </HeaderContainer>
            <HeaderContainer>
              <Text>{item?.price}$/day</Text>
            </HeaderContainer>
          </div>
          <ButtonWrapper>
            <OutlineButton
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              DETAILS
            </OutlineButton>
            <FillButton onClick={() => handleSelectedCar(item)}>
              BOOK NOW
            </FillButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Card;
