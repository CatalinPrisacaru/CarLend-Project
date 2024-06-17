import styled from "styled-components";

export const Display = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15%;
  height: 100px;
  z-index: 99;
  opacity: 1;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 0 5%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 10px 5%;
  }
`;

export const Logo = styled.div`
  display: flex;
  font-family: "Space Grotesk", sans-serif;
  padding: 1% 0;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
  align-items: center;

  @media (max-width: 480px) {
    padding: 10px 0;
    flex-direction: column;
  }
`;

export const NavbarButtons = styled.div`
  display: flex;
  gap: 10px;
  z-index: 999;
  font-family: "Bebas Neue", sans-serif;
  white-space: nowrap;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5%;
  align-self: center;
  height: 50px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 22px;
  padding: 5px 10px;
  transition: transform 0.2s ease;
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
  }
`;

export const VerticalLineStyled = styled.div`
  width: 1px;
  height: 70px;
  background-color: black;
  margin: auto 30px;
  opacity: 0.3;

  @media (max-width: 480px) {
    width: 160px;
    height: 1px;
  }
`;
