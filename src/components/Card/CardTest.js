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
