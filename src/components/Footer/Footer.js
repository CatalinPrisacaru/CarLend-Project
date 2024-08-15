import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <FooterContainer>
      <QuickLinks>
        <Button href="/about">About Us</Button>
        <Button href="/contact">Contact</Button>
        <Button href="/terms">Terms of Service</Button>
        <Button href="/privacypolicy">Privacy Policy</Button>
      </QuickLinks>
      <SocialMedia>
        <Button href="/" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </Button>
        <Button href="/" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </Button>
        <Button href="/" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </Button>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.footer`
  width: 80%;
  margin: 5% auto 0;
  background: #343a40;
  padding: 2rem 0;
  color: #fff;
  text-align: center;
`;

export const QuickLinks = styled.div`
  margin-bottom: 2rem;
`;

export const SocialMedia = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: #495057;
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #6c757d;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #80bdff;
  }

  i {
    margin: 0.5rem;
  }
`;
