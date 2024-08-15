import styled, { keyframes } from "styled-components";
import { scrollAnimation } from "../../components/Button/ScrollDownButton/ScrollDownButton";

export const PageContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #333;
`;

export const Container100vh = styled.div`
  @media screen and (min-height: 1000px) {
    height: 100vh;
  }
`;

export const HeroSection = styled.div`
  background: linear-gradient(to right, #007bff, #6c757d);
  padding: 4rem 0;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const SearchBar = styled.input`
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  font-size: 1rem;
`;

export const FeaturedCars = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export const SectionContainer = styled.div`
  background: #f8f9fa;
  padding: 4rem 0;
  text-align: center;
`;

export const TitleSectionContainer = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: center;
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(334deg, #6d7880 0%, #4b555a 60%, #2c353a 100%);
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
  margin: 0 1rem;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  white-space: normal;
  color: rgba(0, 212, 255, 0.9);
  margin-bottom: 1rem;
`;

export const StepDescription = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;
export const Benefits = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export const Benefit = styled.div`
  margin: 1rem 0;
`;

export const Testimonials = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export const CTASection = styled.div`
  background: #f8f9fa;
  padding: 4rem 0;
  text-align: center;
`;

export const CTAButton = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Offers = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export const Resources = styled.div`
  background: #f8f9fa;
  padding: 4rem 0;
  text-align: center;
`;

export const FAQ = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export const RentYourContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  animation: ${scrollAnimation} 2s infinite;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SearchBarLocation = styled.input`
  padding: 1rem;
  width: calc(100% - 120px); /* Adjust width to leave space for the button */
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 2rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const SearchButton = styled.button`
  padding: 1rem 2rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: white;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem; /* Adjust margin for spacing */
  margin-left: 10px; /* Space between input and button */

  &:hover {
    background-color: #007bff;
    color: white;
    border-color: #0056b3;
  }

  &:focus {
    outline: none;
  }

  .text {
    display: inline;
    font-weight: bold;
  }

  .image {
    display: none; /* Hide image initially */
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }

  &.loading .text {
    display: none;
  }

  &.loading .image {
    display: inline;
    animation: ${fadeIn} 0.3s forwards;
  }
`;
