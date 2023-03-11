import React, { useState } from "react";
import { Card, Content, PlanCost, PlanTitle, FeatureListItem, ActionButton, BackgroundSquare } from "../components/styles/PriceCard.styled";
import { PriceContainer } from "../components/styles/PriceContainer.styeld";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
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
  const [featuresStarter] = useState(["Connect or upload up to 3 posts per month", "Money back guarantee", "24/7 Support"]);
  const [featuresComplete] = useState(["Unlimited posts", "Money back guarantee", "24/7 Support", "Get access to latest posts"]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PriceContainer>
        <Card>
          <BackgroundSquare />
          <Content>
            <PlanTitle>STARTER</PlanTitle>
            <PlanCost>$10</PlanCost>
            {featuresStarter.map((item) => (
              <FeatureListItem>
                <span>{item}</span>
              </FeatureListItem>
            ))}
            <ActionButton>Order Now</ActionButton>
          </Content>
        </Card>
      </PriceContainer>
    </ThemeProvider>
  );
};

export default PricingPage;
