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
                <h2 className="text-capitalize">Accounts Manager</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Accounts Manager will be responsible for managing the
                    financial records and accounting systems of the
                    organization. The role requires an experienced professional
                    with excellent organizational and communication skills.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Oversee the day-to-day operations of the accounting
                  department, including accounts payable, accounts receivable,
                  payroll, and general ledger.
                </li>
                <li className="mt-2">
                  Manage the preparation and analysis of financial statements,
                  budgets, and forecasts.
                </li>
                <li className="mt-2">
                  Ensure compliance with accounting standards and regulations,
                  and implement changes as necessary.
                </li>
                <li className="mt-2">
                  Develop and maintain internal controls to safeguard financial
                  assets.
                </li>
                <li className="mt-2">
                  Monitor cash flow and manage banking relationships.
                </li>
                <li className="mt-2">
                  Develop and implement financial policies and procedures to
                  improve efficiency and accuracy.
                </li>
                <li className="mt-2">
                  Work closely with the executive team to provide financial
                  information for decision-making.
                </li>
                <li className="mt-2">Manage and develop accounting staff.</li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s degree in Accounting, Finance, or related field.
                </li>
                <li className="mt-2">
                  Proven experience in accounting, with at least 5 years in a
                  managerial role.
                </li>
                <li className="mt-2">
                  Strong knowledge of accounting principles and practices.
                </li>
                <li className="mt-2">
                  Excellent organizational and time management skills.
                </li>
                <li className="mt-2">
                  Ability to work under pressure and manage multiple projects
                  simultaneously.
                </li>
                <li className="mt-2">
                  Excellent communication and collaboration skills.
                </li>
                <li className="mt-2">
                  Proficiency in accounting software, such as QuickBooks or
                  Xero.
                </li>
                <li className="mt-2">CPA or CMA certification is preferred.</li>
                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Accounts Manager typically works in an office environment
                  during regular business hours, but may need to work outside of
                  normal hours to meet project deadlines. The role may require
                  occasional travel to other company locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Accounts Manager&apos;s
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
