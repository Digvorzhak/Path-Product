import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import LinkButton from "../components/LinkButton";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" alt="" />
          <LinkButton to="/posts">Try it Free</LinkButton>
        </Nav>
        <Flex>
          <div>
            <h1>Ask for every possible item around the world</h1>
            <p>PathProduct connects you to travelers around the world. Ask for a specific item for a small fee or bring a desired one for someone in need.</p>
            <LinkButton to="/posts" bg="#FF027A" hoverbg="#EA315B" color="#fff">
              Get Started For Free
            </LinkButton>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
