import React, { useEffect, useState } from "react";
import Header from "../Header";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
  FaRedditAlien,
  FaChevronUp,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import CareerDetail from "./CareerDetail";
import Link from "next/link";
const Careerform = () => {
  return (
    <>
      <section className="contactus  career about-header">
        <section className="teamAbout white-header">
          <Header />
          <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5 pb-0">
              <div className="col-lg-8 text-center">
                <h1 className="text-capitalize">
                  Want to Make a Difference? You have Come to the Right Place{" "}
                </h1>
                <p>Create the future with us</p>
              </div>
            </div>
            <div className="row justify-content-center text-capitalize">
              <div className="col-lg-10 col-md-12 col-sm-12 text-center">
                <div className="d-flex justify-content-between blog-left-socail mb-5">
                  <span>Follow</span>
                  <Link href="https://www.instagram.com/menttechlabs/">
                    <BsInstagram />
                  </Link>
                  <Link href="https://www.facebook.com/menttechlabs">
                    <FaFacebookF />
                  </Link>
                  <Link href="https://twitter.com/menttechlabs">
                    <AiOutlineTwitter />
                  </Link>
                  <Link href="https://t.me/menttechlabs">
                    <FaTelegramPlane />
                  </Link>
                  <Link href="https://www.linkedin.com/company/menttechlabs/">
                    <FaLinkedinIn />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UC_3SFkoApivR81hA2PJ9Kyw">
                    <FaYoutube />
                  </Link>
                  <Link href="https://www.reddit.com/user/MentFintech">
                    <FaRedditAlien />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="job-details">
          <div className="container">
            <div className="row text-capitalize">
              <div className="col-lg-7">
                <h2 className="text-capitalize">Quality Assurance Engineer</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Quality Assurance Engineer will be responsible for
                    ensuring the quality of software and technology products
                    through the use of manual and automated testing. The role
                    requires a detail-oriented individual with excellent
                    analytical and communication skills.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Design, develop, and execute test cases for software and
                  technology products.
                </li>
                <li className="mt-2">
                  Perform manual and automated testing to identify and report
                  defects and issues.
                </li>
                <li className="mt-2">
                  Collaborate with cross-functional teams to identify root
                  causes of defects and provide recommendations for
                  improvements.
                </li>
                <li className="mt-2">
                  Develop and maintain test plans, test cases, and test scripts.
                </li>
                <li className="mt-2">
                  Write and execute SQL queries to validate data integrity and
                  ensure accurate reporting.
                </li>
                <li className="mt-2">
                  Identify opportunities to improve the testing process through
                  the use of new tools and techniques.
                </li>
                <li className="mt-2">
                  Provide timely and accurate feedback to stakeholders regarding
                  test results and defect resolution.
                </li>
                <li className="mt-2">
                  Maintain and update testing documentation and knowledge base.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s degree in Computer Science, Software Engineering,
                  or related field.
                </li>
                <li className="mt-2">
                  Proven experience in software testing and quality assurance.
                </li>
                <li className="mt-2">
                  Excellent knowledge of testing methodologies, tools, and
                  techniques.
                </li>
                <li className="mt-2">
                  Strong analytical and problem-solving skills.
                </li>
                <li className="mt-2">
                  Ability to work under pressure and manage multiple projects
                  simultaneously.
                </li>
                <li className="mt-2">
                  Excellent communication and collaboration skills.
                </li>
                <li className="mt-2">
                  Knowledge of SQL and scripting languages, such as Python or
                  Ruby.
                </li>
                <li className="mt-2">
                  Experience with testing automation tools, such as Selenium or
                  Appium.
                </li>
                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Quality Assurance Engineer typically works in an office
                  environment during regular business hours, but may need to
                  work outside of normal hours to meet project deadlines. The
                  role may require occasional travel to other company locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Quality Assurance
                  Engineer&apos;s position and is not an exhaustive list of skills,
                  efforts, duties, responsibilities, or working conditions
                  associated with the role.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="">
                  <CareerDetail />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Careerform;
