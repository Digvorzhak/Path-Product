import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: ${({ padding }) => padding || "15px 45px"};
  margin-top: ${({ margintop }) => margintop || "0"};
  margin-bottom: ${({ marginbottom }) => marginbottom || "0"};
  margin-left: ${({ marginleft }) => marginleft || "0"};
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  transition: background-color 0.8s;

  &:hover {
    opacity: ${({ opa }) => opa || "1"};
    /* transform: scale(0.98); */
    transform: ${({ transform }) => transform || "scale(1)"};
    background-color: ${({ hoverbg }) => hoverbg || "#FF027A"};
    color: ${({ hovercolor }) => hovercolor || "#fff"};
  }

  &.with-margin {
    @media screen and (max-width: 529px) {
      margin-bottom: 10px;
    }
  }
`;
