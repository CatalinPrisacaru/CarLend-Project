import React from "react";
import styled from "styled-components";
import { Title } from "../About/Aboutus";

const ContactUs = () => {
  return (
    <Container>
      <Content>
        <Title>Contact Us</Title>
        <Section>
          <ContactInfo>
            <h2>Our Office</h2>
            <Address>
              <p>Strada Stațiunii, Suceava</p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </Address>
            <h2>Contact Us 24/7</h2>
            <PhoneNumbers>
              <p>Phone: +40 123 456 789</p>
              <p>Phone: +40 987 654 321</p>
              <p>Phone: +40 456 789 123</p>
            </PhoneNumbers>
          </ContactInfo>
        </Section>
      </Content>
    </Container>
  );
};

export default ContactUs;

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

const Section = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const ContactInfo = styled.div`
  h2 {
    margin-top: 1rem;
    color: #333;
  }
`;

const Address = styled.div`
  margin-bottom: 1rem;
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333;
  }
`;

const PhoneNumbers = styled.div`
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333;
  }
`;
