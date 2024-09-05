import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  min-height: 65vh;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  color: black;
  text-align: center;
`;

const DetailItem = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: black;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
    border-color: #0056b3;
  }
`;

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { carId, totalPrice, selectedDates } = location.state || {};

  const handleBackToHome = () => {
    navigate("/");
  };

  if (!carId || !totalPrice || !selectedDates) {
    return (
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        Error: Missing rental details.
      </div>
    );
  }

  const startDate = new Date(selectedDates.startDate).toLocaleDateString();
  const endDate = new Date(selectedDates.endDate).toLocaleDateString();

  return (
    <ConfirmationContainer>
      <Heading>Thank you for choosing Carlend!</Heading>
      <Heading>Your booking has been confirmed.</Heading>
      <DetailItem>Car ID: {carId}</DetailItem>
      <DetailItem>Start Date: {startDate}</DetailItem>
      <DetailItem>End Date: {endDate}</DetailItem>
      <DetailItem>Total Price: ${totalPrice}</DetailItem>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
