import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import "../styles/index.scss";
import Head from "next/head";
const MyApp = ({ Component, PageProps }) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/js/bootstrap.min.js"></script>
      </Head>
      <ThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <Component {...PageProps} />
        </StyledProvider>
      </ThemeProvider>
    </Fragment>
  );
};

MyApp.propTypes = {
  PageProps: PropTypes.any,
  Component: PropTypes.any,
};

export default MyApp;
