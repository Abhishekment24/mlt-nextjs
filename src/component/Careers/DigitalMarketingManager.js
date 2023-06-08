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
                <h2 className="text-capitalize">Digital Marketing Manager</h2>
                <p className="font-12">Hybrid</p>
                <div>
                  <h3 className="text-capitalize">Job Description:-</h3>

                  <p className="mt-2">
                    The Digital Marketing Manager will be responsible for
                    developing and implementing digital marketing strategies to
                    drive online traffic, increase brand awareness, and improve
                    customer engagement. The role requires a highly skilled
                    individual with a strong technical background in digital
                    marketing and the ability to lead a team.
                  </p>
                </div>
                <h3 className="text-capitalize mt-4">Responsibilities:-</h3>

                <li className="mt-2">
                  Develop and implement digital marketing strategies across
                  multiple channels, including email, social media, search
                  engine optimization, and pay-per-click advertising.
                </li>
                <li className="mt-2">
                  Lead a team of digital marketing professionals to execute
                  campaigns and achieve goals.
                </li>
                <li className="mt-2">
                  Analyze data to measure the success of digital marketing
                  campaigns and optimize strategies for improved results.
                </li>
                <li className="mt-2">
                  Create and manage online advertising campaigns, including
                  display, search, and social media advertising.
                </li>
                <li className="mt-2">
                  Develop and manage email marketing campaigns, including the
                  creation of email templates, managing lists, and analyzing
                  data to improve open and click-through rates.
                </li>
                <li className="mt-2">
                  Manage and update website content to ensure it is optimized
                  for search engine rankings and user experience.
                </li>
                <li className="mt-2">
                  Collaborate with cross-functional teams to identify business
                  requirements and translate them into effective digital
                  marketing strategies.
                </li>
                <li className="mt-2">
                  Stay up to date with the latest trends and best practices in
                  digital marketing.
                </li>
                <h3 className="text-capitalize mt-4">Qualifications:-</h3>

                <li className="mt-2">
                  Bachelor&apos;s or Master&apos;s degree in Marketing, Communications, or
                  related field.
                </li>
                <li className="mt-2">
                  Proven experience in digital marketing, with at least 5 years
                  of experience.
                </li>
                <li className="mt-2">
                  Strong knowledge of digital marketing channels, such as email,
                  social media, SEO, and PPC advertising.
                </li>
                <li className="mt-2">
                  Experience with digital marketing tools, such as Google
                  Analytics, AdWords, and email marketing platforms.
                </li>
                <li className="mt-2">
                  Strong analytical skills and ability to analyze data to
                  improve campaigns.
                </li>
                <li className="mt-2">
                  Excellent communication and collaboration skills.
                </li>
                <li className="mt-2">
                  Ability to work under pressure and manage multiple projects
                  simultaneously.
                </li>
                <li className="mt-2">
                  Creative and strategic thinker with a passion for digital
                  marketing.
                </li>
                <li className="mt-2">
                  Familiarity with website design and development is a plus.
                </li>
                <h3 className="text-capitalize mt-4">Working Conditions:-</h3>
                <p>
                  The Digital Marketing Manager typically works in an office
                  environment during regular business hours, but may need to
                  work outside of normal hours to meet project deadlines. The
                  role may require occasional travel to other company locations.
                </p>
                <p>
                  This job description is intended to convey information
                  essential to understanding the scope of the Digital Marketing
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
