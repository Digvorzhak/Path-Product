import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { PostStyle } from "./styles/Post.styled";
import LinkButton from "../components/LinkButton";

export const PostCard = ({ item, price, name, avatar, country, city, email, image }) => {
  return (
    <PostStyle>
      <h3>{item}</h3>
      <img src={image} alt="post" />
      <p>
        {city}, {country}
      </p>
      <p>{price}$</p>
      <LinkButton>Details</LinkButton>
    </PostStyle>
  );
};
