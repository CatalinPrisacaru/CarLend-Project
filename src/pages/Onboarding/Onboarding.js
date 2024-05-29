import React from "react";
import StyledOnboarding from "./StyledOnboarding";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { useLocation } from "react-router-dom";

const Onboarding = () => {
  const location = useLocation().pathname;

  return (
    <StyledOnboarding>
      {location === "/login" && <LoginForm />}
      {location === "/register" && <RegisterForm />}
    </StyledOnboarding>
  );
};

export default Onboarding;
