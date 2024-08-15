import React from "react";
import styled from "styled-components";

// Styled components
const AboutContainer = styled.div`
  padding: 60px;
  color: #333;
  line-height: 1.8;
`;

export const Title = styled.h1`
  text-align: center;
  cursor: default;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 3px;
  color: #212121;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SectionTitle = styled.h2`
  color: #212121;
  margin-bottom: 15px;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  color: #555;
  font-size: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: #666;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>

      <Section>
        <SectionTitle>Welcome to Carlend!</SectionTitle>
        <Paragraph>
          At Carlend, we believe in providing a seamless and flexible car rental
          experience for everyone. Whether you're a car owner looking to earn
          extra income by renting out your vehicle, or a traveler seeking a
          convenient ride for your next journey, our platform is designed to
          meet your needs.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          Our mission is to revolutionize the car rental industry by connecting
          car owners and renters through a user-friendly, secure, and efficient
          platform. We aim to make car rentals more accessible, affordable, and
          personalized for all.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <Paragraph>
          <strong>For Car Owners:</strong>
        </Paragraph>
        <List>
          <ListItem>
            <strong>List Your Car:</strong> It's quick and easy to list your car
            on our platform. Just provide some details, set your availability,
            and you're ready to start earning.
          </ListItem>
          <ListItem>
            <strong>Earn Money:</strong> Once your car is listed, renters can
            book it directly through our app. You'll earn money every time
            someone rents your vehicle.
          </ListItem>
          <ListItem>
            <strong>Manage Bookings:</strong> Our platform provides all the
            tools you need to manage your bookings, communicate with renters,
            and keep track of your earnings.
          </ListItem>
        </List>
        <Paragraph>
          <strong>For Renters:</strong>
        </Paragraph>
        <List>
          <ListItem>
            <strong>Browse Cars:</strong> Search through a wide variety of
            vehicles available for rent, from compact cars to luxury SUVs.
          </ListItem>
          <ListItem>
            <strong>Book Instantly:</strong> Choose the car that suits your
            needs, check availability, and book it instantly through our secure
            platform.
          </ListItem>
          <ListItem>
            <strong>Enjoy Your Ride:</strong> Once booked, pick up the car and
            enjoy your journey. Our app makes it easy to manage your rental,
            extend your booking, and communicate with the car owner.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <List>
          <ListItem>
            <strong>Wide Selection of Vehicles:</strong> We offer a diverse
            range of vehicles to suit every occasion, from daily commutes to
            special events.
          </ListItem>
          <ListItem>
            <strong>Affordable Rates:</strong> By connecting directly with car
            owners, you can find great deals on rentals without the traditional
            markup.
          </ListItem>
          <ListItem>
            <strong>Trust & Safety:</strong> Your safety is our priority. We
            have strict vetting processes in place for both car owners and
            renters, and all transactions are handled securely.
          </ListItem>
          <ListItem>
            <strong>24/7 Support:</strong> Our dedicated customer support team
            is available around the clock to assist with any questions or
            concerns.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <Paragraph>
          We envision a future where car ownership is more flexible and
          accessible. By making it easier for people to rent and share vehicles,
          we hope to reduce the environmental impact of traditional car
          ownership and foster a community-driven approach to mobility.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Join Us Today!</SectionTitle>
        <Paragraph>
          Whether you're looking to rent a car or list your own, Carlend is here
          to help you every step of the way. Join our growing community of car
          owners and renters today, and experience the freedom of flexible
          mobility.
        </Paragraph>
      </Section>
    </AboutContainer>
  );
};

export default About;
