import React, { useState } from "react";
import AuthContext from "../../hooks/userContext";
import { useContext } from "react";
import WelcomeBanner, { Container } from "./Home-components/WelcomeBanner";
import BackgroundImage from "./Home-components/BackgroundImage";
import carGif from "../../assests/images/cargif.gif";

import Carousel from "../../components/Carousel/Carousel";
import useScrollAnimation from "../../hooks/VisibilityObserver/useScrollAnimation.js";
import { Containerrr } from "../../hooks/VisibilityObserver/useScrollAnimation.js";
import { ScrollDownButton } from "../../components/Button/ScrollDownButton/ScrollDownButton.js";
import {
  CTAButton,
  CTASection,
  Container100vh,
  FAQ,
  FeaturedCars,
  HeroContent,
  HeroSection,
  Offers,
  PageContainer,
  RentYourContainer,
  Resources,
  SearchBarLocation,
  SearchButton,
  SectionContainer,
  StepCard,
  StepDescription,
  StepTitle,
  Steps,
  Testimonials,
  TitleSectionContainer,
} from "./StyledHome.js";
import { Button } from "../../components/Header/StyledHeader.js";
import { AnimatedDiv } from "../../hooks/fadeInUpAnimation/animatedDiv.js";
import { useFadeInUpAnimation } from "../../hooks/fadeInUpAnimation/fadeInUp.js";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const { cars } = useContext(AuthContext);
  const isVisible = useFadeInUpAnimation();

  const { targetRef: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { targetRef: ref2, isVisible: isVisible2 } = useScrollAnimation();

  const suvCars = cars.filter((car) => car.vehicleType === "SUV");

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      setIsLoading(true);

      // Simulate loading time
      setTimeout(() => {
        navigate(`/rentcar?location=${encodeURIComponent(searchTerm.trim())}`);
      }, 3000); // Adjust the duration to match the loading effect
    }
  };

  const popularRental = cars
    .filter((car) => Array.isArray(car.Rented))
    .sort((a, b) => b.Rented.length - a.Rented.length)
    .slice(0, 10);

  return (
    <PageContainer>
      <div>
        <Container100vh>
          <RentYourContainer>
            <AnimatedDiv
              animationduration="2s"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              <Button onClick={() => navigate("/form")}>Rent your car</Button>
            </AnimatedDiv>
          </RentYourContainer>

          <WelcomeBanner />
          <BackgroundImage />
          <ScrollDownButton />
        </Container100vh>

        <Container>
          <h1>Most Recent cars </h1>
        </Container>
        <Containerrr ref={ref1} isVisible={isVisible1}>
          {isVisible1 && <Carousel isCarousel items={cars} />}
        </Containerrr>
      </div>

      <HeroSection>
        <HeroContent>
          {isLoading ? (
            <>
              <img src={carGif} alt="Loading" className="image" />
              <h1>Searching for your dream car</h1>
            </>
          ) : (
            <>
              <h1>Rent Your Dream Car Today</h1>
              <p>Drive the Best, Rent the Best</p>
              <form
                onSubmit={handleSearch}
                style={{ display: "flex", alignItems: "center" }}
              >
                <SearchBarLocation
                  type="text"
                  placeholder="Search for cars by location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton
                  type="submit"
                  className={isLoading ? "loading" : ""}
                >
                  <span className="text">Search</span>
                  <img src={carGif} alt="Loading" className="image" />
                </SearchButton>
              </form>
            </>
          )}
        </HeroContent>
      </HeroSection>

      <Container>
        <h1>SUV </h1>
      </Container>
      <Containerrr ref={ref2} isVisible={isVisible2}>
        {isVisible2 && <Carousel items={suvCars} />}
      </Containerrr>

      <SectionContainer>
        <TitleSectionContainer>How It Works</TitleSectionContainer>
        <Steps>
          <StepCard>
            <StepTitle>Step 1</StepTitle>
            <StepDescription>Search for a car</StepDescription>
          </StepCard>
          <StepCard>
            <StepTitle>Step 2</StepTitle>
            <StepDescription>Book your car</StepDescription>
          </StepCard>
          <StepCard>
            <StepTitle>Step 3</StepTitle>
            <StepDescription>Enjoy your ride</StepDescription>
          </StepCard>
        </Steps>
      </SectionContainer>

      <FeaturedCars>
        <Container>
          <h1>Popular Rentals</h1>
        </Container>
        <Containerrr ref={ref2} isVisible={isVisible2}>
          {isVisible2 && <Carousel items={popularRental} />}
        </Containerrr>
      </FeaturedCars>

      <SectionContainer>
        <TitleSectionContainer>Why Choose Us?</TitleSectionContainer>
        <Steps>
          <StepCard>
            <StepTitle>Wide Selection of Cars</StepTitle>
            <StepDescription>
              Choose from a diverse range of vehicles including sedans, SUVs,
              luxury cars, and more.
            </StepDescription>
          </StepCard>
          <StepCard>
            <StepTitle>Affordable Prices</StepTitle>
            <StepDescription>
              Enjoy competitive and budget-friendly pricing options for every
              budget.
            </StepDescription>
          </StepCard>
          <StepCard>
            <StepTitle>Easy Booking Process</StepTitle>
            <StepDescription>
              Streamlined booking process with intuitive interface and secure
              payments.
            </StepDescription>
          </StepCard>
        </Steps>
      </SectionContainer>

      <Testimonials>
        <h2>What Our Users Say</h2>
        {/* Display user reviews here */}
      </Testimonials>
      <CTASection>
        <CTAButton>Sign Up</CTAButton>
        <CTAButton>List Your Car</CTAButton>
      </CTASection>
      <Offers>
        <h2>Special Offers</h2>
      </Offers>
      <Resources>
        <h2>Blog and Resources</h2>
        {/* Link to blog posts and guides */}
      </Resources>
      <FAQ>
        <h2>Frequently Asked Questions</h2>
        {/* Display FAQs here */}
      </FAQ>
    </PageContainer>
  );
};

export default HomePage;
