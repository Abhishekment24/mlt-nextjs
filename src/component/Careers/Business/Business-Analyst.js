import React, { useEffect, useState } from "react";
import Header from "../../Header";
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
import CareerDetail from "../CareerDetail";
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
                  <Link  href="https://www.facebook.com/menttechlabs">
                    <FaFacebookF />
                  </Link>
                  <Link  href="https://twitter.com/menttechlabs">
                    <AiOutlineTwitter />
                  </Link>
                  <Link  href="https://t.me/menttechlabs">
                    <FaTelegramPlane />
                  </Link>
                  <Link href="https://www.linkedin.com/company/menttechlabs/">
                    <FaLinkedinIn />
                  </Link>
                  <Link  href="https://www.youtube.com/channel/UC_3SFkoApivR81hA2PJ9Kyw">
                    <FaYoutube />
                  </Link>
                  <Link  href="https://www.reddit.com/user/MentFintech">
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
                <h2 className="text-capitalize">Business Analyst</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Business Analyst will work with various departments to
                    identify business needs and develop solutions to improve
                    operations and increase profitability. The role requires a
                    strong analytical mindset, excellent communication and
                    problem-solving skills.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Collaborate with stakeholders to understand business needs and
                  requirements.
                </li>
                <li className="mt-2">
                  Analyze data and create reports to identify trends and
                  opportunities for improvement.
                </li>
                <li className="mt-2">
                  Develop strategies and recommendations to increase
                  profitability and efficiency.
                </li>
                <li className="mt-2">
                  Facilitate communication between different departments to
                  ensure successful implementation of projects.
                </li>
                <li className="mt-2">
                  Participate in the design, development, and testing of new
                  systems and processes.
                </li>
                <li className="mt-2">
                  Manage project timelines and ensure deliverables are met.
                </li>
                <li className="mt-2">
                  Train end-users on new processes and systems.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s degree in Business Administration, Information
                  Systems, or related field.
                </li>
                <li className="mt-2">
                  Proven experience as a business analyst or similar role.
                </li>
                <li className="mt-2">
                  Strong analytical skills and experience with data analysis
                  tools.
                </li>
                <li className="mt-2">
                  Excellent communication and interpersonal skills.
                </li>
                <li className="mt-2">
                  Ability to work independently and as part of a team.Ability to
                  work independently and as part of a team.
                </li>
                <li className="mt-2">
                  Knowledge of project management methodologies and tools.
                </li>
                <li className="mt-2">
                  Proficiency in Microsoft Office Suite, particularly Excel and
                  PowerPoint.
                </li>
                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Business Analyst typically works in an office environment
                  during regular business hours, but may occasionally need to
                  work outside of normal hours to meet project deadlines. Travel
                  may also be required to meet with stakeholders and team
                  members at other locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Business Analyst&apos;s
                  position and is not an exhaustive list of skills, efforts,
                  duties, responsibilities, or working conditions associated
                  with the role.
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
