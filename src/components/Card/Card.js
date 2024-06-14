import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 550px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background: linear-gradient(
    334deg,
    rgb(98 140 149) 0%,
    rgba(11, 3, 45, 1) 100%
  );
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 25px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BannerImage = styled.div`
  img {
    background-position: center;
    background-size: cover;
    height: 280px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.255);
  }
`;

const Title = styled.h1`
  font-family: "Righteous", sans-serif;
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 20px;
`;

const Text = styled.p`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
`;

const Button = styled.button`
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0px 10px;
`;

const OutlineButton = styled(Button)`
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  &:hover {
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
  }
  margin: 0px 10px;
`;

const FillButton = styled(Button)`
  background: transparent;
  border: 1px solid white;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  &:hover {
    transform: scale(1.125);
    filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  }
`;

const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80");
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
`;

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <Wrapper>
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
          <Title>{item?.title}</Title>
          <Text>{item?.description}</Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>{item?.location}</Text>
            <Text>{item?.price}$/day</Text>
          </div>
          <ButtonWrapper>
            <OutlineButton
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              DETAILS
            </OutlineButton>
            <FillButton>BOOK NOW</FillButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Card;
