import React, { useState } from "react";
import { Card, Content, PlanCost, PlanTitle, FeatureListItem, ActionButton, BackgroundSquare } from "../components/styles/PriceCard.styled";
import { PriceContainer } from "../components/styles/PriceContainer.styeld";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import PriceCard from "../components/PriceCard";
import Footer from "../components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ebfbff",
    footer: "#403E41",
  },
  mobile: "798px",
};

const PricingPage = () => {
  const featuresStarter = ["3 posts per month", "Money back guarantee", "24/7 Support"];
  const featuresComplete = ["Unlimited posts", "Money back guarantee", "24/7 Support", "Get access to latest posts"];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Link to="/">
        <img src="./images/logo.png"></img>
      </Link>
      <PriceContainer>
        <PriceCard type="STARTER" price="2.99" features={featuresStarter}></PriceCard>
        <PriceCard type="COMPLETE" price="9.99" features={featuresComplete} degs={130} colorOne="#544a7d" colorTwo="#ffd452"></PriceCard>
      </PriceContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default PricingPage;
