import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../hooks/userContext";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const RentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RentItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CarRents = () => {
  const { getCarById } = useContext(AuthContext);
  const { carId } = useParams();

  const [rents, setRents] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const carData = await getCarById(carId);
      setRents(carData);
    };

    fetchCar();
  }, [carId, getCarById]);

  if (!rents) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Title>Rents for Car {rents.title}</Title>
      <RentList>
        {rents.Rented?.map((rent, index) => (
          <RentItem key={index}>
            <strong>Name: </strong> {rent.userName} <br />
            <strong>Email: </strong> {rent.userEmail} <br />
            <strong>Start Date:</strong>{" "}
            {new Date(rent.startDate.seconds * 1000).toLocaleDateString()}
            <br />
            <strong>End Date:</strong>{" "}
            {new Date(rent.endDate.seconds * 1000).toLocaleDateString()}
          </RentItem>
        ))}
      </RentList>
    </Container>
  );
};

export default CarRents;
