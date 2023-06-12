import React from "react";
import Header from "../../Header";
import CountUp from "react-countup";
//import Navigation from "../Navigation/Navigation";
import Typewriter from "typewriter-effect";

const HomeHeader = () => {
  return (
    <section className="headerhome" id="headerhome">
      <Header />
      <div className="container wide-block">
        <div className="row home-header-content align-items-center text-white">
          <div className="col-lg-12 text-center mt-5">
            <h1 className="mt-4">
              <Typewriter
                options={{
                  strings: [
                    "Blockchain Development Company",
                    "AI Development Company",
                    "Crypto Banking Solution",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </h1>

            <div className="">
              <h2 className="fur tilites-heads">
                Enabling Innovation and Rapid Development
              </h2>
              <span className="tiles-spans">
                Building Revolutionary Software Solutions for Blockchain and
                AI-Based Startups and Enterprises
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-4">
            <div className="header-numbers-bg">
              <ul>
                <li>
                  <h3>
                    <CountUp start={0} end={20} duration={2} />+
                  </h3>
                  <p>Countries and Regions</p>
                </li>
                <li>
                  <h3>
                    <CountUp start={0} end={50} duration={2} />+
                  </h3>
                  <p>Industry Partner Support</p>
                </li>
                <li>
                  <h3>
                    <CountUp start={0} end={150} duration={2} />+
                  </h3>
                  <p>Top-level Technicians</p>
                </li>
                <li>
                  <h3>
                    <CountUp start={0} end={50} duration={2} />+
                  </h3>
                  <p>Products and Services</p>
                </li>
                <li>
                  <h3>
                    <CountUp start={0} end={500} duration={2} />+
                  </h3>
                  <p>Client Services Experience Worldwide</p>
                </li>
                <li>
                  <h3>
                    <CountUp start={0} end={2000} duration={2} />+
                  </h3>
                  <p>Security Maintenance Hours</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
