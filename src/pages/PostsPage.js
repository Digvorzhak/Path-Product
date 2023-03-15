import React from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import { PostsContainer } from "../components/styles/PostsContainer.styled";
// import LinkButton from "../components/LinkButton";
import { useState, useEffect } from "react";
import { PostCard } from "../components/Post";
import PostsHeader from "../components/PostsHeader";
import Footer from "../components/Footer";
import Spinner from "../components/styles/Spinner.Styled";
import { Center } from "../components/styles/Center.styled";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://6400dc59ab6b7399d09ce778.mockapi.io/posts");
        if (!response.statusText === "OK") {
          throw new Error("Could not get posts.");
        }
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <PostsHeader />
        {loading ? (
          <Center>
            <Spinner></Spinner>
          </Center>
        ) : (
          <PostsContainer>
            {posts.map((post) => (
              <PostCard key={post.id} id={post.id} item={post.item} avatar={post.avatar} price={post.price} image={post.image} city={post.city} country={post.country} />
            ))}
          </PostsContainer>
        )}

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default PostPage;
