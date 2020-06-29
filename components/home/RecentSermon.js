import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RecentSermon = (props) => {
  return (
    <Wrapper className="my-3">
      <div className="display-icons bg-secondary rounded-sm">
        <ul>
          <li>
            <i className="fas fa-video"></i>
            <hr />
          </li>
          <li>
            <i className="fas fa-microphone"></i>
            <hr />
          </li>
          <li>
            <i className="fas fa-book-open"></i>
          </li>
        </ul>
      </div>

      <div className="contents">
        <hr />
        <ul>
          <li>The death of Jesus - Part 1</li>
          <li>20.05.28 Pastor John Mark</li>
        </ul>
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  hr {
    margin: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .display-icons {
    /* background: ${(p) => p.theme.colors.indigo}; */
    margin: auto;
    width: 2rem;
    text-align: center;
    /* border-radius: 15px; */
    color: #fff;
    li {
      margin: 0;
     font-size: 1.25rem;
      i {
        font-size: 0.75rem;
      }
    }
    hr {
      background-color: #fff;
      width: 100%;
      max-width: 50%;
      margin: 0.125rem auto;
    }
  }
  .contents {
    width: 100%;
    height: 100%;
    margin: auto;
    margin-left: 1rem;
    ul {
      margin: 0.75rem auto;
      li {
        padding-bottom: 0.5rem;
      }
    }
  }
`;
RecentSermon.propTypes = {};

export default RecentSermon;
