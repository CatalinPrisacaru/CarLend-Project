import React from "react";
import styled from "styled-components";
import { Title } from "../About/Aboutus";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Content>
        <Title>Privacy Policy</Title>
        <Section>
          <PolicyText>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website and services.
            </p>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email
              address, and phone number when you use our services.
            </p>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our
              services, and to communicate with you.
            </p>
            <h2>4. Disclosure of Your Information</h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with service providers who assist us
              in operating our services.
            </p>
            <h2>5. Security of Your Information</h2>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access or disclosure.
            </p>
            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also object to or restrict our processing of
              your information.
            </p>
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on our
              website.
            </p>
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at [email@example.com].
            </p>
          </PolicyText>
        </Section>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
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

const PolicyText = styled.div`
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
