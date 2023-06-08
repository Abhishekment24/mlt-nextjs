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
                <h2 className="text-capitalize">Human Resource Executive</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Human Resource Executive will be responsible for
                    assisting with various HR functions, including recruitment,
                    employee relations, training, and compliance. The role
                    requires a detail-oriented individual with excellent
                    communication and organizational skills.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Assist with recruitment processes, including job postings,
                  screening resumes, and scheduling interviews.
                </li>
                <li className="mt-2">
                  Assist with onboarding and training programs to ensure new
                  hires are integrated into the organization.
                </li>
                <li className="mt-2">
                  Support employee relations efforts, including conflict
                  resolution and grievance procedures.
                </li>
                <li className="mt-2">
                  Assist with the development and implementation of compensation
                  and benefits programs.
                </li>
                <li className="mt-2">
                  Maintain and update employee records and HR databases.
                </li>
                <li className="mt-2">
                  Monitor and report on HR metrics to senior management.
                </li>
                <li className="mt-2">
                  Assist with compliance efforts, including maintaining
                  knowledge of employment laws and regulations.
                </li>
                <li className="mt-2">
                  Provide administrative support to the HR department as needed.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s degree in Human Resource Management, Business
                  Administration, or related field.
                </li>
                <li className="mt-2">
                  Proven experience in an HR support role.
                </li>
                <li className="mt-2">
                  Excellent knowledge of HR policies and procedures, employment
                  laws, and compliance requirements.
                </li>
                <li className="mt-2">
                  Strong leadership and communication skills.
                </li>
                <li className="mt-2">
                  AAbility to manage multiple tasks and deadlines.
                </li>
                <li className="mt-2">
                  Proficiency in Microsoft Office Suite, particularly Excel and
                  PowerPoint.Strong analytical and problem-solving skills.
                </li>

                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Human Resource Executive typically works in an office
                  environment during regular business hours. The role may
                  require working outside of normal hours to attend meetings or
                  events, and may require occasional travel to other company
                  locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Human Resource
                  Executive&apos;s position and is not an exhaustive list of skills,
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
