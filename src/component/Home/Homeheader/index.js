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
                    "Blockchain Development",
                    "Financial Software Development",
                    "Crypto Banking Solution",
                    "Crypto Exchange Turnkey",
                    "Consulting Service",
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
                Simple Solutions for Crypto Businesses
              </h2>
              <span className="tiles-spans">
                At every level of business and scale, we offer our clients
                cutting-edge solutions.
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
