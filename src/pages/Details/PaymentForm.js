import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const stripePromise = loadStripe(
  "pk_test_51PoJ5zDRjIy3cOKHcVsE3ADvfznPJkp56qeYxy0e8bJaU4wp1Kow0zuLbUoAWrPamZQOhLHa01JWEleDXC5AFLbH00GjtLkwsr"
);

const Layout = styled.div`
  min-height: 65vh;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PaymentButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const StyledCardElement = styled(CardElement)`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;

const PaymentForm = ({ carId, totalPrice, selectedDates, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const db = getFirestore();
  const [error, setError] = useState(null);
  console.log(user, "uservvv");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(carId, "carId");

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      return;
    }

    if (!carId) {
      setError("Car ID is missing.");
      return;
    }

    const rentedPeriod = {
      startDate: selectedDates?.startDate || null,
      endDate: selectedDates?.endDate || null,
      userID: user?.uid || null,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || null,
    };

    // Check for any undefined or null values in rentedPeriod
    for (const [key, value] of Object.entries(rentedPeriod)) {
      if (value === undefined || value === null) {
        setError(`Error: ${key} is missing.`);
        return;
      }
    }

    try {
      const carDocRef = doc(db, "Cars", carId);
      await updateDoc(carDocRef, {
        Rented: arrayUnion(rentedPeriod),
      });

      console.log("Payment successful and car rented.");
      navigate(`/confirmation/${carId}`, {
        state: { carId, totalPrice, selectedDates },
      });
    } catch (error) {
      console.error("Error updating car rental:", error);
      setError(`Failed to process the payment: ${error.message}`);
    }
  };
  return (
    <Layout>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledCardElement />
          <PaymentButton type="submit" disabled={!stripe}>
            Pay {totalPrice} USD
          </PaymentButton>
          {error && <ErrorText>{error}</ErrorText>}
        </StyledForm>
      </FormContainer>
    </Layout>
  );
};

const PaymentPage = () => {
  const location = useLocation();
  const { carId, totalPrice, selectedDates, user } = location.state || {};

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        carId={carId}
        totalPrice={totalPrice}
        selectedDates={selectedDates}
        user={user}
      />
    </Elements>
  );
};

export default PaymentPage;
