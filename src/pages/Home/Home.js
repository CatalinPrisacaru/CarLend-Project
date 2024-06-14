import React from "react";
import AuthContext from "../../hooks/userContext";
import { useContext } from "react";
import WelcomeBanner, { Container } from "./Home-components/WelcomeBanner";
import BackgroundImage from "./Home-components/BackgroundImage";
// import carImage from "../../assests/images/test.jpg";

import Carousel from "../../components/Carousel/Carousel";
import useScrollAnimation from "../../hooks/VisibilityObserver/useScrollAnimation.js";
import { Containerrr } from "../../hooks/VisibilityObserver/useScrollAnimation.js";
import { ScrollDownButton } from "../../components/Button/ScrollDownButton/ScrollDownButton.js";
import {
  Benefit,
  Benefits,
  CTAButton,
  CTASection,
  Container100vh,
  FAQ,
  FeaturedCars,
  Footer,
  HeroContent,
  HeroSection,
  HowItWorks,
  Offers,
  PageContainer,
  QuickLinks,
  Resources,
  SearchBar,
  SocialMedia,
  Step,
  Steps,
  Testimonials,
} from "./StyledHome.js";

const HomePage = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const { targetRef: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { targetRef: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { targetRef: ref3, isVisible: isVisible3 } = useScrollAnimation();

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

  return (
    <PageContainer>
      <div>
        <Container100vh>
          <WelcomeBanner />
          <BackgroundImage />
          <ScrollDownButton />
        </Container100vh>

        <Container>
          <h1>Most Recent cars </h1>
        </Container>
        <Containerrr ref={ref1} isVisible={isVisible1}>
          {isVisible1 && <Carousel items={cars} />}
        </Containerrr>

        <h1>Helloo {user?.email}</h1>
        <button
          onClick={() => {
            logoutUser();
          }}
        >
          Logout
        </button>
      </div>

      <Containerrr ref={ref3} isVisible={isVisible3}>
        {isVisible3 && (
          <HeroSection>
            <HeroContent>
              <h1>Rent Your Dream Car Today</h1>
              <p>Drive the Best, Rent the Best</p>
              <SearchBar
                type="text"
                placeholder="Search for cars by location"
              />
            </HeroContent>
          </HeroSection>
        )}
      </Containerrr>

      <Container>
        <h1>SUV </h1>
      </Container>

      <Containerrr ref={ref2} isVisible={isVisible2}>
        {isVisible2 && <Carousel items={cars} />}
      </Containerrr>
      <FeaturedCars>
        <h2>Popular Rentals</h2>
        {/* Display popular cars here */}
      </FeaturedCars>
      <HowItWorks>
        <h2>How It Works</h2>
        <Steps>
          <Step>1. Search for a car</Step>
          <Step>2. Book your car</Step>
          <Step>3. Enjoy your ride</Step>
        </Steps>
      </HowItWorks>
      <Benefits>
        <h2>Why Choose Us?</h2>
        <Benefit>Wide Selection of Cars</Benefit>
        <Benefit>Affordable Prices</Benefit>
        <Benefit>Easy Booking Process</Benefit>
      </Benefits>
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

      <Footer>
        <QuickLinks>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </QuickLinks>
        <SocialMedia>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </SocialMedia>
      </Footer>
    </PageContainer>
  );
};

export default HomePage;
