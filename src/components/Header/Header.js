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
  const { logoutUser, cars, isAdmin } = useContext(AuthContext);

  const carsAvailable = cars.filter((car) => car.status === 1).length;

  return (
    <AnimatedDiv style={{ opacity: isVisible ? 1 : 0 }}>
      <Display>
        <Logo>
          <h3 onClick={() => navigate("/")}>CARLEND</h3>
          <VerticalLineStyled />
          {carsAvailable !== 0 && (
            <CountUp targetCount={carsAvailable} duration={1000} />
          )}
        </Logo>
        <NavbarButtons>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/rentcar")}>Rent a car</Button>
          {isAdmin ? (
            <Button onClick={() => navigate("/pendings")}>Pendings cars</Button>
          ) : (
            <Button onClick={() => navigate("/mycars")}>My cars</Button>
          )}
          <Button onClick={() => navigate("/form")}>Rent Your Car</Button>
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
