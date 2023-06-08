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
                <h2 className="text-capitalize">
                  Business Development Executive
                </h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Business Development Executive will be responsible for
                    generating leads, contacting potential clients, and securing
                    new business. The role requires a sales-oriented individual
                    with excellent communication and relationship-building
                    skills.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Conduct market research to identify potential new business
                  opportunities and target markets.
                </li>
                <li className="mt-2">
                  Generate leads through various channels, including cold
                  calling, email marketing, and networking.
                </li>
                <li className="mt-2">
                  Contact potential clients to introduce the company&apos;s products
                  or services and identify their business needs.
                </li>
                <li className="mt-2">
                  Conduct sales presentations and negotiations to secure new
                  business deals.
                </li>
                <li className="mt-2">
                  Build and maintain relationships with clients and ensure
                  customer satisfaction.
                </li>
                <li className="mt-2">
                  Work with cross-functional teams to ensure successful
                  implementation of new business initiatives.
                </li>
                <li className="mt-2">
                  Stay current with industry trends and competitive landscape to
                  identify potential risks and opportunities.
                </li>
                <li className="mt-2">
                  Prepare and present regular sales and performance reports to
                  senior management.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s degree in Business Administration, Marketing, or
                  related field.
                </li>
                <li className="mt-2">
                  Proven experience in business development or sales, with a
                  track record of achieving revenue targets.
                </li>
                <li className="mt-2">
                  Excellent communication, negotiation, and sales skills.
                </li>
                <li className="mt-2">
                  Strong analytical and strategic thinking skills.
                </li>
                <li className="mt-2">
                  Ability to build and maintain relationships with clients,
                  partners, and industry influencers.
                </li>
                <li className="mt-2">
                  Knowledge of sales and marketing principles and techniques.
                </li>
                <li className="mt-2">
                  Proficiency in Microsoft Office Suite, particularly Excel and
                  PowerPoint.
                </li>
                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Business Development Executive typically works in an
                  office environment during regular business hours, but may
                  occasionally need to travel to meet with clients and attend
                  industry events. The role may require working outside of
                  normal hours to meet deadlines or attend meetings with
                  international clients.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Business
                  Development Executive&apos;s position and is not an exhaustive list
                  of skills, efforts, duties, responsibilities, or working
                  conditions associated with the role.
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
