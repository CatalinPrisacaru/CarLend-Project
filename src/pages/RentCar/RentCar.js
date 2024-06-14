import React from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";
// import carImage from "../../assests/images/test.jpg";

const RentCar = () => {
  return (
    <div>
      RentCar
      <div>
        <Container>
          {cars.map((item, index) => (
            <Card item={item} />
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
const cars = [
  {
    image:
      // carImage,
      "https://loremflickr.com/200/300/car?t=1",
    title: "2020 Tesla Model S",
    price: "$120/day",
    description:
      "A luxury electric car with autopilot features and a range of 370 miles.",
    location: "Suceava",
  },
  {
    image:
      // carImage,
      "https://loremflickr.com/200/300/car?t=2",
    title: "2019 BMW 5 Series",
    price: "$100/day",
    description:
      "A stylish and powerful sedan with advanced technology and comfort.",
    location: "Botosani",
  },
  {
    image:
      // carImage,
      "https://loremflickr.com/200/300/car?t=3",
    title: "2021 Ford Mustang",
    price: "$150/day",
    description:
      "A classic American muscle car with a powerful V8 engine and modern amenities.",
    location: "Cluj-Napoca",
  },
  {
    image:
      // carImage,
      "https://loremflickr.com/200/300/car?t=4",
    title: "2018 Honda Civic",
    price: "$60/day",
    description:
      "A reliable and fuel-efficient compact car with a spacious interior.",
    location: "Bucuresti",
  },
  {
    image:
      // carImage,
      "https://loremflickr.com/200/300/car?t=5",
    title: "2022 Audi Q7",
    price: "$200/day",
    description:
      "A luxury SUV with a powerful engine, advanced safety features, and ample cargo space.",
    location: "Constanta",
  },
];
