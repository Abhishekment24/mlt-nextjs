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
                <h2 className="text-capitalize">Full Stack Developer</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Full Stack Developer will be responsible for developing
                    and maintaining both the server-side and client-side of web
                    applications. The role requires a highly skilled individual
                    with a strong technical background in both frontend and
                    backend development.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Design and develop user interfaces for web applications.
                </li>
                <li className="mt-2">
                  Develop server-side applications using programming languages
                  such as Java, Python, or Node.js.
                </li>
                <li className="mt-2">
                  Design and implement APIs and integrate them with front-end
                  applications.
                </li>
                <li className="mt-2">
                  Collaborate with cross-functional teams to identify business
                  requirements and translate them into technical specifications.
                </li>
                <li className="mt-2">
                  Write high-quality, reusable, and maintainable code.
                </li>
                <li className="mt-2">
                  Optimize application performance and scalability.
                </li>
                <li className="mt-2">
                  Implement security and data protection measures.
                </li>
                <li className="mt-2">
                  Develop and maintain databases and data storage solutions.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s or Master&apos;s degree in Computer Science, Software
                  Engineering, or related field.
                </li>
                <li className="mt-2">
                  Proven experience in full stack development, with at least 2
                  years of experience.
                </li>
                <li className="mt-2">
                  Strong knowledge of both front-end and back-end programming
                  languages, such as HTML, CSS, JavaScript, Java, Python, or
                  Node.js.
                </li>
                <li className="mt-2">
                  Experience with front-end frameworks, such as React, Angular,
                  or Vue.
                </li>
                <li className="mt-2">
                  Experience with web frameworks, such as Spring, Django, or
                  Express.
                </li>
                <li className="mt-2">
                  Strong understanding of databases, data modeling, and data
                  access technologies, such as MySQL, MongoDB, or Redis.
                </li>
                <li className="mt-2">
                  Excellent analytical and problem-solving skills.
                </li>
                <li className="mt-2">
                  Ability to work under pressure and manage multiple projects
                  simultaneously.
                </li>
                <li className="mt-2">
                  Excellent communication and collaboration skills.
                </li>

                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Full Stack Developer typically works in an office
                  environment during regular business hours, but may need to
                  work outside of normal hours to meet project deadlines. The
                  role may require occasional travel to other company locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Full Stack
                  Developer&apos;s position and is not an exhaustive list of skills,
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
