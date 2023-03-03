import React from "react";
import LinkButton from "../components/LinkButton";
import { Link } from "react-router-dom";

const PostPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <LinkButton to="/" bg="#FF027A">
        Home
      </LinkButton>
    </div>
  );
};

export default PostPage;
