import React from "react";
import EditForm from "../components/EditForm";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#403E41",
  },
  mobile: "798px",
};

const PostDetails = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditForm />
    </ThemeProvider>
  );
};

export default PostDetails;
