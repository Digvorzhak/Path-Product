import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import { PostsContainer } from "../components/styles/PostsContainer.styled";
import LinkButton from "../components/LinkButton";
import { useState, useEffect } from "react";
import { getAllPosts } from "../utils/api";
import { PostCard } from "../components/Post";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ebfbff",
    footer: "#2D2A2E",
  },
  mobile: "798px",
};

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts);
  }, [posts]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Posts</h1>
        <LinkButton to="/" bg="#FF027A">
          Home
        </LinkButton>
        <PostsContainer>
          {posts.map((post) => (
            <PostCard key={post.id} id={post.id} item={post.item} avatar={post.avatar} price={post.price} image={post.image} city={post.city} country={post.country} />
          ))}
        </PostsContainer>
      </>
    </ThemeProvider>
  );
};

export default PostPage;
