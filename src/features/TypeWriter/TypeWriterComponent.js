import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styled from "styled-components";

// Styled-components
const TypeWriterContainer = styled.h1`
  width: 50%;
  padding: 0 15%;
  top: 25%;
  left: 10%;
  height: 100px;
  position: absolute;
  z-index: 1;
  opacity: 0.9;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 100;
  font-style: normal;
  font-size: 50px;
  letter-spacing: 3px;
  color: white;

  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 1300px) {
    padding: 0px;
  }
`;

export const TypeWriterComponent = () => {
  const [text] = useTypewriter({
    words: [
      "Rent the Perfect Ride",
      "Your Car, Your Terms",
      "Discover Unique Cars",
      "Drive in Style",
      "Convenient Car Rentals",
      "Your Adventure Awaits",
      "Luxury Rides Available",
      "Affordable Car Rentals",
      "Rent from Local Owners",
      "Find Your Next Ride",
      "Explore New Roads",
      "Hassle-Free Rentals",
      "Travel with Ease",
      "Drive Your Dream Car",
      "Flexible Rental Options",
      "Comfort and Convenience",
      "Book Your Ride Today",
      "Experience Freedom",
      "Your Journey Starts Here",
      "Rent a Car, Hit the Road",
    ],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <TypeWriterContainer>
      <span style={{ fontWeight: "bold" }}>{text}</span>
      <Cursor />
    </TypeWriterContainer>
  );
};
