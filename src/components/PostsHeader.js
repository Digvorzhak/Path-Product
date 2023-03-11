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
      <p>Here you can find available offers worldwide. Users who are subscribed to us gets up to 60% more offers and can confirm or offer an unlimited amount of offers. Please note that our platform is currently under development and some features may not be available yet.</p>
      {/* <p>Please note that our platform is currently under development and some features may not be available yet.</p> */}
      {/* <FlexColumn> */}
      <LinkButton className="with-margin" to="/subscriptions" bg="#FF027A" hoverbg="#EA315B" color="#fff">
        For plan details
      </LinkButton>
      <LinkButton to="/uploadpost">Upload a new post for free</LinkButton>
      {/* </FlexColumn> */}
    </DemoHeader>
  );
};

export default PostsHeader;
