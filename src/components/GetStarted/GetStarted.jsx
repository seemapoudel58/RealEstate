import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homzy</span>
          <span className="secondaryText">
            Subscribe and find the attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:seemakpoudel6@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
