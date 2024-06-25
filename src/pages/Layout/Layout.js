import React from "react";
import styled from "styled-components";

// Define breakpoints for responsive design
const breakpoints = {
  big: "769px",
  medium: "768px",
  small: "576px",
};

const Main = styled.main`
  max-width: 1640px;
  margin: 32px auto 0 auto;

  @media (max-width: ${breakpoints.medium}) {
    padding: 0 2rem;
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 0 1rem;
  }
  @media (min-width: ${breakpoints.big}) {
    padding: 0 5rem;
  }
`;

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;
