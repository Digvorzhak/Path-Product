import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ebfbff",
    footer: "#403E41",
  },
  mobile: "798px",
};

const ErrorPage = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <main>
            <h3>Whoops... 404!</h3>
            <p>You have tried to search for a page that does not exist.</p>
            <p>
              Get back to the home page by clicking <Link to="/">here</Link> and path yourself out of trouble!
            </p>
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default ErrorPage;
