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
                <h2 className="text-capitalize">Blockchain Developer</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Blockchain Developer will be responsible for designing,
                    developing, and implementing blockchain-based solutions for
                    the organization. The role requires a highly skilled
                    individual with a strong technical background in blockchain
                    technology and programming.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Design, develop, and implement blockchain-based solutions for
                  the organization.
                </li>
                <li className="mt-2">
                  Build, test, and deploy smart contracts on blockchain
                  platforms.
                </li>
                <li className="mt-2">
                  Develop blockchain-based applications and interfaces.
                </li>
                <li className="mt-2">
                  Collaborate with cross-functional teams to identify business
                  requirements and translate them into technical specifications.
                </li>
                <li className="mt-2">
                  Design and develop blockchain protocols and algorithms.
                </li>
                <li className="mt-2">
                  Identify and mitigate security risks in blockchain
                  applications.
                </li>
                <li className="mt-2">
                  Keep up to date with emerging trends and technologies in
                  blockchain and distributed ledger technology.
                </li>

                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s or Master&apos;s degree in Computer Science, Software
                  Engineering, or related field.
                </li>
                <li className="mt-2">
                  Proven experience in blockchain development, with at least 2
                  years of experience.
                </li>
                <li className="mt-2">
                  Strong knowledge of blockchain technology, architecture, and
                  programming languages, such as Solidity, Golang, or C++.
                </li>
                <li className="mt-2">
                  Experience with blockchain platforms, such as Ethereum,
                  Hyperledger, or Corda.
                </li>
                <li className="mt-2">
                  Strong understanding of cryptography and security principles.
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
                  The Blockchain Developer typically works in an office
                  environment during regular business hours, but may need to
                  work outside of normal hours to meet project deadlines. The
                  role may require occasional travel to other company locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Blockchain
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
