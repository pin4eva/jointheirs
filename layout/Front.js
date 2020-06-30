import React, { Fragment } from "react";
import FrontHeader from "../components/FrontHeader";
import PropTypes from "prop-types";
import Head from "next/head";
import styled from "styled-components";
import FrontFooter from "../components/FrontFooter";

const Front = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="The Official website of Joint Heirs Assembly International"
        />
        <title>JHAI | {title} </title>
      </Head>
      <Wrapper id="front_layout">
        <header>
          <FrontHeader />
        </header>
        <main>{children}</main>
        <FrontFooter />
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.section`
  height: 100%;
`;

Front.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
export default Front;
