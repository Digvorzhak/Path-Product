import React from "react";
import { DemoHeader } from "./styles/DemoHeader.styled";
// import { FlexColumn } from "./styles/FlexColumn.styled";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

const PostsHeader = () => {
  return (
    <DemoHeader>
      <Link to="/">
        <img src="./images/logo.png"></img>
      </Link>
      <p>Here you can find available offers worldwide. Please note that users who are subscribed to us gets up to 65% more offers and can accept up to 3 offers at the same time.</p>
      {/* <FlexColumn> */}
      <LinkButton to="/subscriptions" bg="#FF027A" hoverbg="#EA315B" color="#fff">
        For plan details
      </LinkButton>
      <LinkButton to="/uploadpost">Upload a new post for free</LinkButton>
      {/* </FlexColumn> */}
    </DemoHeader>
  );
};

export default PostsHeader;
