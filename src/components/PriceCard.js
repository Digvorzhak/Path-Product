import React, { useState } from "react";
import { Card, Content, PlanCost, PlanTitle, FeatureListItem, ActionButton, BackgroundSquare } from "../components/styles/PriceCard.styled";
import { PriceContainer } from "../components/styles/PriceContainer.styeld";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PriceCard = ({ type, price, features, degs, colorOne, colorTwo }) => {
  const featuresArr = features;
  return (
    <>
      <Card degs={degs} colorOne={colorOne} colorTwo={colorTwo}>
        <BackgroundSquare />
        <Content>
          <PlanTitle>{type}</PlanTitle>
          <PlanCost>
            <span className="currency-sign">$</span>
            {price}
          </PlanCost>
          {featuresArr.map((item) => (
            <FeatureListItem>
              <span>{item}</span>
            </FeatureListItem>
          ))}
          <ActionButton>Buy Now</ActionButton>
        </Content>
      </Card>
    </>
  );
};

export default PriceCard;
