import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="bgimg-1 w3-display-container " id="home">
          <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
            <span
              className="w3-center w3-padding-large w3-xlarge w3-wide w3-animate-opacity"
              id="headline"
              style={{ color: "white" }}
            >
              MAKE AN IMPRESSION.
            </span>
          </div>
          <div
            className="w3-display-middle"
            style={{ whiteSpace: "nowrap", marginTop: "80px" }}
          >
            <span
              className="w3-center w3-padding-large w3-wide w3-animate-opacity"
              id="headline2"
              style={{ color: "white" }}
            >
              BETTER PRINTING. BEST PRICE.
            </span>
          </div>
        </div>
        <div className="w3-content w3-container w3-padding-64" id="about">
          <h3 className="title w3-center">ABOUT US</h3>
          <p className="w3-center">
            <em>We love printing</em>
          </p>
          <p>
            We have created a fictional "personal" website/blog, and our
            fictional character is a hobby photographer. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="w3-row">
            <div className="w3-col m6 w3-center w3-padding-large">
              <br />
              <img
                src={require("../../static/css/images/aboutus1.jpg")}
                className="w3-round w3-image "
                alt="Photo of Us"
                width="500"
                height="333"
              />
            </div>

            <div className="w3-col m6 w3-hide-small w3-padding-large">
              <p>
                Welcome to my website. I am lorem ipsum consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="w3-row w3-center w3-dark-grey w3-padding-16">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">14+</span>
            <br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span>
            <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span>
            <br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span>
            <br />
            Meetings
          </div>
        </div>

        <div className="bgimg-2 w3-display-container">
          <div className="w3-display-middle">
            <span className="title w3-xxlarge w3-text-white w3-wide">
              PORTFOLIO
            </span>
          </div>
        </div>

        <div className="w3-content w3-container w3-padding-64" id="portfolio">
          <h3 className="title w3-center">OUR WORK</h3>
          <p className="w3-center">
            <em>Here is some of our latest work and projects.</em>
          </p>
          <br />

          <div className="w3-row-padding w3-center">
            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port1.jpg")}
                style={{ width: "100%" }}
                alt="The mist over the mountains"
              />
            </div>

            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port2.jpg")}
                style={{ width: "100%" }}
                alt="Coffee beans"
              />
            </div>

            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port4.jpg")}
                style={{ width: "100%" }}
                alt="Bear closeup"
              />
            </div>

            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port3.jpg")}
                style={{ width: "100%" }}
                alt="Quiet ocean"
              />
            </div>
          </div>

          <div className="w3-row-padding w3-center w3-section">
            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port5.jpg")}
                style={{ width: "100%" }}
                alt="The mist"
              />
            </div>

            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port6.jpg")}
                style={{ width: "100%" }}
                alt="My beloved typewriter"
              />
            </div>

            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port7.jpg")}
                style={{ width: "100%" }}
                alt="Empty ghost train"
              />
            </div>

            <div className="w3-col m3">
              <img
                src={require("../../static/css/images/port8.jpg")}
                style={{ width: "100%" }}
                alt="Sailing"
              />
            </div>
          </div>
        </div>

        <div
          id="modal01"
          className="w3-modal w3-black"
          onclick="this.style.display='none'"
        >
          <span
            className="w3-button w3-large w3-black w3-display-topright"
            title="Close Modal Image"
          >
            <i className="fa fa-remove" />
          </span>
          <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" className="w3-image" />
            <p id="caption" className="w3-opacity w3-large" />
          </div>
        </div>

        <div className="bgimg-3 w3-display-container ">
          <div className="w3-display-middle">
            <span className="title w3-xxlarge w3-text-white w3-wide">
              CONTACT
            </span>
          </div>
        </div>

        <div className="w3-content w3-container w3-padding-64" id="contact">
          <h3 className="title w3-center">WHERE WE WORK</h3>
          <p className="w3-center">
            <em>We'd love your feedback!</em>
          </p>

          <div className="w3-row w3-padding-32 w3-section">
            <div className="w3-col m4 w3-container">
              <div
                id="googleMap"
                className="w3-round-large"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div className="w3-col m8 w3-panel">
              <div className="w3-large w3-margin-bottom">
                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right" />{" "}
                Rancho Bernardo, CA<br />
                <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right" />{" "}
                Phone: 858 675-0770<br />
                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right" />{" "}
                Email: mikeg@rbprintpros.com<br />
              </div>
              <p>Swing by for a quote, or leave a note:</p>
              <form action="/action_page.php" target="_blank">
                <div
                  className="w3-row-padding"
                  style={{ margin: "0 -16px 8px -16px" }}
                >
                  <div className="w3-half">
                    <input
                      className="w3-input w3-border"
                      type="text"
                      placeholder="Name"
                      required
                      name="Name"
                    />
                  </div>
                  <div className="w3-half">
                    <input
                      className="w3-input w3-border"
                      type="text"
                      placeholder="Email"
                      required
                      name="Email"
                    />
                  </div>
                </div>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Message"
                  required
                  name="Message"
                />
                <button
                  className="w3-button w3-black w3-right w3-section"
                  type="submit"
                >
                  <i className="fa fa-paper-plane" /> SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
