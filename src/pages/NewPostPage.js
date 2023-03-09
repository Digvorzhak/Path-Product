import React from "react";
import AddForm from "../components/AddForm";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ebfbff",
    footer: "#403E41",
  },
  mobile: "798px",
};

const UploadPost = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AddForm></AddForm>
    </ThemeProvider>
  );
};

export default UploadPost;
