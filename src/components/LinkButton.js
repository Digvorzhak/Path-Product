import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles/Button.styled";

const LinkButton = ({ to, children, ...rest }) => (
  <Link to={to}>
    <Button {...rest}>{children}</Button>
  </Link>
);

export default LinkButton;
