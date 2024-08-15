import React from "react";
import styled from "styled-components";
import { Title } from "../About/Aboutus";

const TermsOfService = () => {
  return (
    <Container>
      <Content>
        <Title>Terms of Service</Title>
        <Section>
          <TermsText>
            <h2>1. Introduction</h2>
            <p>
              Welcome to our website. These Terms of Service govern your use of
              our website and services.
            </p>
            <h2>2. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms of Service.
            </p>
            <h2>3. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in
              accordance with these terms.
            </p>
            <h2>4. Limitation of Liability</h2>
            <p>
              Our liability for any damages arising from the use of our services
              is limited to the fullest extent permitted by law.
            </p>
            <h2>5. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Your
              continued use of the services constitutes acceptance of the
              updated terms.
            </p>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at [email@example.com].
            </p>
          </TermsText>
        </Section>
      </Content>
    </Container>
  );
};

export default TermsOfService;

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 62vh;
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

const TermsText = styled.div`
  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
`;
