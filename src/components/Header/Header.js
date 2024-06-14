import { useNavigate } from "react-router-dom";
import {
  Button,
  Display,
  Logo,
  NavbarButtons,
  VerticalLineStyled,
} from "./StyledHeader";
import { AnimatedDiv } from "../../hooks/fadeInUpAnimation/animatedDiv";
import { useFadeInUpAnimation } from "../../hooks/fadeInUpAnimation/fadeInUp";
import CountUp from "../../hooks/CountUpEffect/countUpComponent";
import { useContext } from "react";
import AuthContext from "../../hooks/userContext";

export const Header = () => {
  const navigate = useNavigate();
  const isVisible = useFadeInUpAnimation();
  const { logoutUser } = useContext(AuthContext);

  return (
    <AnimatedDiv style={{ opacity: isVisible ? 1 : 0 }}>
      <Display>
        <Logo>
          <h3>CARLEND</h3>
          <VerticalLineStyled />
          <CountUp targetCount={54} duration={1000} />
        </Logo>
        <NavbarButtons>
          <Button onClick={() => navigate("/home")}>Home</Button>
          <Button onClick={() => navigate("/rentcar")}>Rent-car</Button>
          <Button onClick={() => navigate("/details")}>Details</Button>
          <Button onClick={() => navigate("/images")}>Contact</Button>
          <Button
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </Button>
        </NavbarButtons>
      </Display>
    </AnimatedDiv>
  );
};
