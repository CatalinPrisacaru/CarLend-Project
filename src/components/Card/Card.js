// import React from "react";
// import styled from "styled-components";

// export const CardTest = () => {
//   const cars = [
//     {
//       image: "https://source.unsplash.com/400x300/?tesla", // Specific query for Tesla
//       title: "2020 Tesla Model S",
//       price: "$120/day",
//       description:
//         "A luxury electric car with autopilot features and a range of 370 miles.",
//     },
//     {
//       image: "https://source.unsplash.com/400x300/?bmw", // Specific query for BMW
//       title: "2019 BMW 5 Series",
//       price: "$100/day",
//       description:
//         "A stylish and powerful sedan with advanced technology and comfort.",
//     },
//     {
//       image: "https://source.unsplash.com/400x300/?mustang", // Specific query for Mustang
//       title: "2021 Ford Mustang",
//       price: "$150/day",
//       description:
//         "A classic American muscle car with a powerful V8 engine and modern amenities.",
//     },
//     {
//       image: "https://source.unsplash.com/400x300/?honda-civic", // Specific query for Honda Civic
//       title: "2018 Honda Civic",
//       price: "$60/day",
//       description:
//         "A reliable and fuel-efficient compact car with a spacious interior.",
//     },
//     {
//       image: "https://source.unsplash.com/400x300/?audi-q7", // Specific query for Audi Q7
//       title: "2022 Audi Q7",
//       price: "$200/day",
//       description:
//         "A luxury SUV with a powerful engine, advanced safety features, and ample cargo space.",
//     },
//   ];
//   return (

//     {cars.map((car, index) => (
//       <StyledCard key={index}>
//         <img src={car.image} alt={car.title} />
//         <CardContent>
//           <h2>{car.title}</h2>
//           <p>{`${car.description.substring(0, 70)}...`}</p>
//           <CardFooter>
//             <p className="price">{car.price}</p>
//             <ActionButton>Book Now</ActionButton>
//           </CardFooter>
//         </CardContent>
//       </StyledCard>
//     ))}
//   )

// };

// const breakpoints = {
//   medium: "768px",
//   small: "576px",
// };

// const CardFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .price {
//     font-size: 20px;
//     color: #333;
//     font-weight: bold;
//   }
// `;

// export const ActionButton = styled.button`
//   color: #000000;
//   padding: 0.7em 1.7em;
//   font-size: 18px;
//   border-radius: 0.5em;
//   background: transparent;
//   cursor: pointer;
//   border: 2px solid #000000;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: #000000;
//     transition: all 0.3s ease;
//     z-index: -1;
//     transform: scaleX(0);
//     transform-origin: left;
//   }

//   &:hover:before {
//     transform: scaleX(1);
//     background: #000000;
//   }

//   &:hover {
//     color: #ffffff;
//     box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
//     transform: translateY(-3px) scale(1.05);
//   }

//   &:active {
//     transform: translateY(1px);
//   }

//   &:focus {
//     outline: none;
//   }

//   @media (max-width: ${breakpoints.medium}) {
//     padding: 0.6em 1em;
//   }

//   @media (max-width: ${breakpoints.small}) {
//     padding: 0.4em 0.8em;
//   }
// `;

// const StyledCard = styled.div`
//   width: 350px;
//   height: 500px;
//   margin: 15px;
//   background-color: #ffffff;
//   border-radius: 15px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   position: relative;
//   display: flex;
//   flex-direction: column;

//   /* border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s, box-shadow 0.3s;

//   img {
//     max-height: 350px;
//     width: 100%;
//     object-fit: cover;
//   } */

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
//   }
// `;

// const CardContent = styled.div`
//   padding: 20px;
//   background-color: #f8f8f8;
//   border-bottom-left-radius: 16px;
//   border-bottom-right-radius: 16px;
//   height: 500px;
//   /* max-height: 200px; */

//   h2 {
//     font-size: 22px;
//     margin-bottom: 10px;
//     color: #333;
//   }

//   p {
//     font-size: 16px;
//     color: #555;
//     margin-bottom: 10px;
//   }

//   .price {
//     font-size: 20px;
//     color: #333;
//     font-weight: bold;
//   }
// `;
import React from "react";
import styled from "styled-components";

// Styled Components

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
    /* background-image: url("https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"); */
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
  return (
    <Background>
      <Container>
        <Wrapper>
          <BannerImage>
            <img src={item?.image} alt="masini" />
          </BannerImage>
          <Title>{item?.title}</Title>
          <Text>{item?.description}</Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>{item?.location}</Text>
            <Text>{item?.price}</Text>
          </div>
          <ButtonWrapper>
            <OutlineButton>DETAILS</OutlineButton>
            <FillButton>BOOK NOW</FillButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Card;
