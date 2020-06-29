import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FrontHeader = (props) => {
  return (
    <Wrapper className="navbar navbar-expand-lg container d-flex justify-content-between align-items-center">
      <div className="navbar-brand" href="#">
        <img src="/logo1.png" alt="logo" />
        <div className="text-content">
          <p className="p1">Joint Heirs Assembly</p>
          <p className="p2">International</p>
        </div>
      </div>
      {/* <button className="btn btn-secondary">Join us</button> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-light">
          <i className="fas fa-bars "></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Location
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Give
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Join us
            </a>
          </li>

          {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
        </ul>
      </div>
    </Wrapper>
  );
};

FrontHeader.propTypes = {};

export default FrontHeader;

const Wrapper = styled.nav`
  display: flex;
  justify-items: space-between;
  .navbar-collapse {
    flex-grow: 0;
  }
  li {
    text-transform: uppercase;
    a {
      font-weight: 500;
      color: inherit;
    }
  }
  .navbar-brand {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
    }
    .text-content {
      margin-left: 0.5rem;
      p {
        margin: 0;
        padding: 0;
        line-height: 1.2rem;
      }
      .p1 {
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .navbar-brand {
      font-size: 1rem;
      img {
        width: inherit;
        max-width: 2rem;
        height: 2rem;
      }
    }
    .navbar-collapse {
      li {
        .nav-link {
          font-size: 90%;
        }
      }
    }
  }
`;
