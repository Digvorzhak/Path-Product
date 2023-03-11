import React from "react";
import EditForm from "../components/EditForm";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import Footer from "../components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ebfbff",
    footer: "#403E41",
  },
  mobile: "798px",
};

const PostInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditForm />
      <Footer />
    </ThemeProvider>
  );
};

export default PostInfo;
