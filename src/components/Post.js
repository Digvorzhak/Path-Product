import React from "react";
import { PostStyle } from "./styles/Post.styled";
import LinkButton from "../components/LinkButton";

export const PostCard = ({ item, price, name, avatar, country, city, email, image, id }) => {
  return (
    <PostStyle>
      <h3>{item}</h3>
      <img src={image} alt="post" />
      <p>
        {city}, {country}
      </p>
      <p>{price}$</p>
      <LinkButton to={`/edit-product/${id}`} padding="15px 25px">
        Details
      </LinkButton>
    </PostStyle>
  );
};
