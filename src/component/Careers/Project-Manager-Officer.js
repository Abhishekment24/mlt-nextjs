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
                <h2 className="text-capitalize">Agile Project Manager</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Agile Project Manager will be responsible for leading
                    cross-functional teams in the development and implementation
                    of agile methodologies to improve project delivery. The role
                    requires a strong leader with excellent communication and
                    problem-solving skills.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Lead cross-functional teams in the adoption and implementation
                  of agile methodologies to improve project delivery.
                </li>
                <li className="mt-2">
                  Facilitate and lead agile ceremonies, including sprint
                  planning, daily stand-ups, sprint reviews, and retrospectives.
                </li>
                <li className="mt-2">
                  Identify and manage project dependencies and critical paths in
                  an agile environment.
                </li>
                <li className="mt-2">
                  Collaborate with stakeholders to ensure successful delivery of
                  projects.
                </li>
                <li className="mt-2">
                  Ensure effective communication between team members,
                  stakeholders, and senior management.
                </li>
                <li className="mt-2">
                  Develop and maintain project plans and schedules using agile
                  methodologies.
                </li>
                <li className="mt-2">
                  Monitor project progress and make necessary adjustments to
                  ensure successful completion.
                </li>
                <li className="mt-2">
                  Foster a culture of continuous improvement through the use of
                  metrics and data analysis.
                </li>
                <li className="mt-2">
                  Coach team members in agile methodologies and best practices.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s degree in Project Management, Business
                  Administration, or related field.
                </li>
                <li className="mt-2">
                  Proven experience in agile project management, with a track
                  record of successful project delivery.
                </li>
                <li className="mt-2">
                  Strong leadership and communication skills.
                </li>
                <li className="mt-2">
                  Excellent knowledge of agile methodologies, including Scrum
                  and Kanban.
                </li>
                <li className="mt-2">
                  Ability to work under pressure and manage multiple projects
                  simultaneously.
                </li>
                <li className="mt-2">
                  Strong analytical and problem-solving skills.
                </li>
                <li className="mt-2">
                  Proficiency in agile project management tools, such as JIRA or
                  Trello.
                </li>
                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Agile Project Manager typically works in an office
                  environment during regular business hours, but may need to
                  work outside of normal hours to meet project deadlines or
                  attend meetings with international stakeholders. The role may
                  require occasional travel to other company locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Agile Project
                  Manager&apos;s position and is not an exhaustive list of skills,
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
