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

export const Header = () => {
  const navigate = useNavigate();
  const isVisible = useFadeInUpAnimation();

  return (
    <AnimatedDiv style={{ opacity: isVisible ? 1 : 0 }}>
      <Display>
        <Logo>
          <h3>CARLEND</h3>
          <VerticalLineStyled />
        </Logo>
        <NavbarButtons>
          <Button onClick={() => navigate("/home")}>Home</Button>
          <Button onClick={() => navigate("/rentcar")}>Explore</Button>
          <Button onClick={() => navigate("/culture")}>Articles</Button>
          <Button onClick={() => navigate("/images")}>Contact</Button>
        </NavbarButtons>
      </Display>
    </AnimatedDiv>
  );
};
