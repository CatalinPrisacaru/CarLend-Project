import React from "react";
import styled from "styled-components";
import useCountUp from "./useCountUp";

const CountUp = ({ targetCount, duration }) => {
  const count = useCountUp(targetCount, duration);

  return <CountUpStyled>{count} Cars Available</CountUpStyled>;
};

export default CountUp;

const CountUpStyled = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-size: 15px;
`;
