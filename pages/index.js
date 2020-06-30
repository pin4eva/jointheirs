import React from "react";
import styled from "styled-components";
import RecentSermon from "../components/home/RecentSermon";
import Front from "../layout/Front";
import { fellowshipCards } from "../utils/home";
import { Grid } from "theme-ui";
import AboutSection from "../components/home/AboutSection";
// import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <Front title="Home">
      <Wrapper id="home_page">
        <section className="hero-section">
          <div className="container ">
            <div className="text-right">{/* <Menu /> */}</div>
            <div className=" text-content ">
              <div className=" w-100">
                <p className="latest_sermon bg-dark ">Latest Sermon</p>
                <h1 className=" display-3  ">The Resurrection of Jesus</h1>
                <ul className="d-flex">
                  <li>
                    <button className="btn btn-primary">Watch sermon</button>
                  </li>
                  <li>
                    <button className="btn btn-primary">
                      <i className="fas fa-microphone"></i>
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-primary">
                      <i className="fas fa-book-open"></i>
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">
                      View More sermon
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="recent_sermons">
          <div className="container my-4">
            <div className="row">
              <div className="col-md-6 item_list">
                <h2 className="text-center">Recent Sermons</h2>
                <RecentSermon />
                <RecentSermon />
                <RecentSermon />

                <div className="my-4 text-center  ">
                  <i className="fas fa-arrow-down bg-secondary text-light p-2 rounded-sm"></i>
                </div>
              </div>
              <div className="col-md-6">
                <div className=" image_wrapper ">
                  <img src="/man-with-bible.png" alt="" />
                  <div className="text_content">
                    <p className="display-4">Daily Bible Reading</p>
                    <button className="btn btn-secondary">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="prayer">
          <div className="container ">
            <div className="row">
              <div className="col-md-4 p-2 text-center text-light">
                <h3 className="display-3 font-weight-bold">Need Prayers ?</h3>
                <button className="btn btn-primary">Request</button>
              </div>
            </div>
          </div>
        </section>

        <section className="fellowship">
          <div className="container">
            <Grid columns={[1, null, 2]} gap={3}>
              {fellowshipCards.map((card, i) => (
                <div
                  className="grid_item "
                  style={{
                    background: `url(${card.image})`,
                  }}
                  key={i + 1}
                >
                  <div className="text-content ">
                    <h3 className="display-2 font-weight-bolder text-light">
                      {card.name}
                    </h3>
                  </div>
                </div>
              ))}
            </Grid>
          </div>
        </section>
        <section className="testimony">
          <div className="container">
            <div className="wrapper d-flex m-auto ">
              <div className="image ">
                <img
                  src="/miracle.jpg"
                  alt=""
                  style={{ width: "196px", height: "196px" }}
                  className="rounded-pill"
                />
              </div>
              <div className="text_content">
                <p>
                  Gods promises never fail. I was diagonised of a deadly
                  dieseases, the doctor said i had few months to live. To God be
                  the glory. I was healed and restored
                </p>
                <p>
                  <strong>Glory James</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <section className="contact_us bg-light">
          <div
            className="image"
            style={{
              background: `url("/contact.png") no-repeat`,
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="text-center">
              <h3
                className="display-4 font-weight-bolder text-light"
                style={{ padding: "4rem 0" }}
              >
                Contact Us
              </h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-7 contact_form">
                <h4 className="text-center text-uppercase mt-2 mb-4">
                  Send a message
                </h4>
                <form>
                  <div className="form-row mb-3">
                    <div className="col">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row mb-3">
                    <div className="col">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                      <label>Location</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="10"></textarea>
                  </div>
                </form>
              </div>
              <div className="col-md-5 bg-dark mb-2 text-light contact_details ">
                <div className="wrapper d-flex flex-column justify-content-center h-100 py-3">
                  <ul className="d-flex flex-column justify-content-center w-100 mx-auto">
                    <li className="d-flex align-items-center">
                      <i
                        className="fas fa-map-marker-alt my-1 "
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                      <div className="my-0 ml-3">
                        <h4 className="font-weight-bold ">Head Quarters</h4>
                        <p>22 Ordu Avenue, Rumuodara Port Harcourt</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-baseline">
                      <i
                        className="fas fa-phone my-1 "
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                      <div className="my-0 ml-3">
                        <p>+234 7062275085</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-baseline">
                      <i
                        className="fas fa-envelope my-1 "
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                      <div className="my-0 ml-3">
                        <p>info@jointheirsassembly.org</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="d-flex justify-content-around my-2">
                    <li>
                      <i className="fab fa-facebook-f text-primary"></i>
                    </li>
                    <li>
                      <i className="fab fa-twitter text-info"></i>
                    </li>
                    <li>
                      <i className="fab fa-instagram"></i>
                    </li>
                    <li>
                      <i className="fab fa-youtube text-danger"></i>
                    </li>
                    <li>
                      <i className="fab fa-whatsapp text-success"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </Front>
  );
};

const Wrapper = styled.section`
  font-family: Montserrat;
  overflow-x: hidden;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
export default HomePage;
