import React from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import AuthContext from "../../hooks/userContext";
import { useContext } from "react";

const RentCar = () => {
  const { cars } = useContext(AuthContext);

  return (
    <div>
      RentCar
      <div>
        <Container>
          {cars.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default RentCar;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  padding: 20px;
  justify-items: center;
`;
