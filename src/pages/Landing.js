import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "../components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import content from "../content";
import Footer from "../components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#2D2A2E",
  },
  mobile: "798px",
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default LandingPage;
