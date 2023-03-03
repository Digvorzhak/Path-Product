import SocialIcons from "./styles/SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import React from "react";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="/images/logowhite.png" alt="" />
        <Flex>
          <ul>
            <li>Lorem10</li>
            <li>+1-543-123-4567</li>
            <li>example@pathproduct.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2023 PathProduct. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
