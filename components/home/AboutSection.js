import React from "react";

const AboutSection = () => {
  return (
    <section className="about_us">
      <div className="wrapper">
        <div className="bg-primary main_div">
          <div className="text-content text-center ">
            <p className="display-4">
              We connect people to their divine heritage in Christ
            </p>
            <div className="line text-center"></div>
          </div>
        </div>
        <div className=" secondary_div ">
          <div className="item  ">
            <div className="row">
              <div className="col-md-6 text_area ">
                <div className="text-content container p-2">
                  <h2 className="text-center font-weight-bolder">About Us</h2>
                  <div className="px-2 text-center">
                    <p>
                      Joint Heirs was started June 2006 by God through his
                      servant Apostle Edirhin Eta.
                    </p>
                    <p>
                      Since the commencement of the church, Joint Heirs has
                      remained committed to her mission namely:
                    </p>
                    <ul>
                      <li>
                        To reach out and reconcile the people to God through
                        Christ,
                      </li>
                      <li>
                        To reach in and develop the people to spiritual
                        emotional, and social maturity
                      </li>
                      <li>
                        To reach up in intercession for the people and the
                        nation
                      </li>
                      <li>To reach down in love and help those in need</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 image_area">
                <img src="/daddynmummy.jpg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
