import styled from "styled-components";

export const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80");
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  margin: auto;
`;

export const Container = styled.div`
  width: 400px;
  height: 560px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background: linear-gradient(334deg, #6d7880 0%, #4b555a 60%, #2c353a 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 20px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BannerImage = styled.div`
  img {
    background-position: center;
    background-size: cover;
    height: 280px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.255);
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-family: "Righteous", sans-serif;
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 16px;
`;

export const Text = styled.p`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ButtonWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 10px;
`;

export const OutlineButton = styled(Button)`
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  &:hover {
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
  }
`;

export const FillButton = styled(Button)`
  background: transparent;
  border: 1px solid white;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  &:hover {
    transform: scale(1.125);
    filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: fit-content;
  height: 20px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

export const TextContainer = styled.p`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
`;

export const TitleWraper = styled.div`
  display: flex;
`;

export const VehicleType = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Lato", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  align-content: center;
  margin-left: 10px;
`;
