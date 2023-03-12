import React from "react";
import styled, { css } from "styled-components";

const gradient = (degs, colorOne, colorTwo) => css`
  background: linear-gradient(${degs || 130}deg, ${colorOne || "#00dbde 0%"}, ${colorTwo || "#fc00ff 100%"});
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  /* width: 300px; */
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  margin: 20px;
  color: white;
  ${(props) => gradient(props.degs, props.colorOne, props.colorTwo)};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025), 0 9px 46px 8px rgba(0, 0, 0, 0.25), 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  flex: 1 0 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    ${(props) => gradient(-50, props.colorOne, props.colorTwo)};
    transition: opacity 0.75s;
  }
  &:hover::after {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* Adjust styles for smaller screens */
    padding: 2rem 1rem;
    margin: 10px;
    flex-basis: calc(50% - 20px);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

export const PlanTitle = styled.div`
  font-size: 1.75rem;
  margin-bottom: 10px;
`;

export const PlanCost = styled.div`
  font-size: 3rem;
  .currency-sign {
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;

export const FeatureListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.325rem;
  & > i {
    font-size: 20px;
    margin-right: 0.5rem;
  }
`;

export const ActionButton = styled.button`
  flex: 0 0 auto;
  height: 40px;
  padding: 0 2rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  transition: background 0.25s;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const BackgroundSquare = styled.div`
  position: absolute;
  z-index: 2;
  top: 52%;
  left: 0%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(-3deg);
`;
