import Link from "next/link";
import React from "react";
import Header from "../Header";

const HeaderCareer = () => {
  return (
    <section className="teamAbout blue-bg about-header">
       <Header />
      <div className="container wide-block">
        <div className="row home-header-content align-items-center justify-content-center my-5 pb-0">
          <div className="col-lg-8 text-center text-white">
            <h1>
              Want to Make a Difference? You have Come to the Right Place.
            </h1>
            <p>Join us in shaping the future</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center pb-5 mb-5">
          <div className="col-lg-4 text-center opening-poistion">
            <Link
              className="schedule-call-modal btnn btnn-primary"
              href="#Open Positions"
            >
              Open positions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCareer;
