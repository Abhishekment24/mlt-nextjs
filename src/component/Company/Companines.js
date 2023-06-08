import React from "react";
import { Company, pdata, Weoffices, It } from "../Data/Data";
import seri from "../../assests/seri.svg";
import aut from "../../assests/aut.svg";
import auts from "../../assests/auts.svg";
import global from "../../assests/images/AboutUs/globals.svg";
import { Disclosure } from "@headlessui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
const Companines = () => {
  const data = [
    {
      id: 1,
      question: "Fixed Dedicated Developers",
      answer: `When you hire a dedicated remote developer, they will exclusively work on your project and not be shared with other clients, ensuring continuity and reducing the risk of losing a developer`,
    },
    {
      id: 2,
      question: "Direct Access to Developers",
      answer: `With a dedicated remote developer, you have unrestricted and direct access to the developer, allowing you to manage the contract just like an in-house employee, without any intermediary involvement`,
    },
    {
      id: 3,
      question: "Hiring from Market",
      answer: `If the dedicated remote developer is unable to fulfill any of your requirements, Ment Tech will hire additional resources specifically for your project from the market, ensuring all your needs are met`,
    },

    {
      id: 4,
      question: "Dedicated HR Account Manager",
      answer: `When you hire a dedicated remote developer, you will also receive complimentary access to an HR manager who can assist with communication and cultural issues, provide deeper insight into your team, and help improve overall team dynamics`,
    },
  ];
  return (
    <>
      <section className="blue-bg p-y-100">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-12 text-white text-center">
              <p className="text-capitalize">Our Process</p>
              <h1 className="">
                Quick And Transparent Process to the Hire{" "}
                <span className="text-color">Remote Developers</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-white">
              <div class="single-services-item px-3 py-3">
                <div className="remots">1</div>
                <div className="py-3">
                  <h3>
                    MENT TECH conducts a through screening process to select the
                    best candidates (8 hours)
                  </h3>
                  <p className="mt-3">
                    Screen and select developers with the necessary skills and
                    qualifications
                  </p>
                  <p className="mt-3">
                    We filter and select the best based on their work and
                    experience
                  </p>
                  <p className="mt-3">
                    Verify their availability for the project start date
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <div class="single-services-item px-3 py-3">
                <div className="remots">2</div>
                <div className="py-3">
                  <h3>Conduct the first round of interviews (8 hours)</h3>
                  <p className="mt-3">
                    The MENT team conducts the first round of interviews to
                    assess skills and qualifications
                  </p>
                  <p className="mt-3">
                    A chart is created with the candidate&apos;s skillset and a
                    rating out of 10 is assigned
                  </p>
                  <p className="mt-3">
                    Resumes are updated with the rating and shared with the
                    client
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <div class="single-services-item px-3 py-3">
                <div className="remots">3</div>
                <div className="py-3">
                  <h3>Conduct the onboarding process (8 hours)</h3>
                  <p className="mt-3">
                    Share developer contact information, such as email and
                    Skype, with the client
                  </p>
                  <p className="mt-3">
                    Provide the client with access to time tracking and project
                    management tools
                  </p>
                  <p className="mt-3">
                    Assign a dedicated account manager for maintaining a smooth
                    working relationship
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <div class="single-services-item px-3 py-3">
                <div className="remots">4</div>
                <div className="py-3">
                  <h3>Conduct requirements gathering (3.5 hours)</h3>
                  <p className="mt-3">
                    Understand the product and identify the features that need
                    to be implemented
                  </p>
                  <p className="mt-3">
                    Create a list of the essential skills required for the
                    project&apos;s execution
                  </p>
                  <p className="mt-3">
                    Make recommendations and suggestions for appropriate
                    third-party tools
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <div class="single-services-item px-3 py-3">
                <div className="remots">5</div>
                <div className="py-3">
                  <h3>Schedule an interview with the client (8 hours)</h3>
                  <p className="mt-3">
                    Obtain the client&apos;s availability schedule for a one-day
                    interview
                  </p>
                  <p className="mt-3">
                    Clients only interview the most qualified and appropriate
                    candidates.
                  </p>
                  <p className="mt-3">
                    Efficiency is increased by reducing the time spent on
                    reviewing and filtering candidates
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-white">
              <div class="single-services-item singles-itesm px-3 py-3">
                <div className="remots remotes-back">6</div>
                <div className="py-3">
                  <h3>The process of signing a contract takes 8 hours</h3>
                  <p className="mt-3">
                    The client is provided with the Non-Disclosure Agreement and
                    Contract for review.
                  </p>
                  <p className="mt-3">
                    The responsibilities and conditions are clearly outlined in
                    the document
                  </p>
                  <p className="mt-3">
                    The client returns a signed copy of the Non-Disclosure
                    Agreement and Contract
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blues py-5">
        <div className="container">
          <div className="hirs-flex align-items-center">
            <div className=" text-white">
              <h3 className="fw-bold  text-center">
                Are You Looking to Hire Remote Developers for Your Project?
              </h3>
            </div>
            <div className="">
              <Link
                href="/contact-us"
                type="submit"
                className="btn btn-dark float-right button-darks"
              >
                Get in Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-y-100" id="teams-mang">
        <div className="overslays"></div>
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-12 text-white text-center comp-indexs">
              <p className="text-capitalize">Cost Comparision</p>
              <h1 className="">
                Hire Highly Qualified <span className="text-color">Team </span>{" "}
                With Incredible Cost
              </h1>
            </div>
          </div>

          <div className="row pt-5 align-items-center">
            <div className="col-lg-12  text-white comp-indexs">
              <div className="teams-mang-flex tables-boreds">
                <h3 className="text-white pading-left costing">Cost</h3>

                <h3 className="costing">Inhouse Developer</h3>

                <h3 className="costing">Ment Contact Resourse</h3>
              </div>

              <div className="teams-mang-flex pt-5 pb-3  position-relative">
                <p className="text-capitalize text-left ps-titles">
                  Employee Salary
                </p>
                <p className="text-capitalize margi-right p-t ps-titles">
                  $ 12,500
                </p>
                <p className="text-capitalize ps-titles">$2,000</p>
              </div>
              <div className="teams-mang-flex py-3  ">
                <p className="text-capitalize ps-titles">HR Cost</p>
                <p className="text-capitalize p-t ps-titles">$ 100</p>
                <p className="text-capitalize  margi-left ps-titles">
                  Included
                </p>
              </div>
              <div className="teams-mang-flex py-3  position-relative">
                <p className="text-capitalize Recruitment ps-titles">
                  Recruitment Cost
                </p>
                <p className="text-capitalize rects-1 p-t ps-titles">$ 2500</p>
                <p className="text-capitalize inc-1 ps-titles">Included</p>
              </div>
              <div className="teams-mang-flex py-3">
                <p className="text-capitalize space ps-titles">
                  Office Space and System Cost
                </p>
                <p className="text-capitalize spc-1 p-t ps-titles">$ 350</p>
                <p className="text-capitalize spc-2 ps-titles">Included</p>
              </div>
              <div className="teams-mang-flex py-3">
                <p className="text-capitalize upskill ps-titles">
                  Upskilling and Learning
                </p>
                <p className="text-capitalize upskill-1 p-t ps-titles">$ 100</p>
                <p className="text-capitalize upskill-2 ps-titles">Included</p>
              </div>
              <div className="teams-mang-flex pt-3">
                <p className="text-capitalize works ps-titles">
                  Work Culture Maintenance
                </p>
                <p className="text-capitalize works-1 p-t ps-titles">$ 50</p>
                <p className="text-capitalize works-2 ps-titles">Included</p>
              </div>
              <div className="padding-tops">
                <div className="  bg-blues tables-boreds teams-mang-flex">
                  <h3 className="text-white total-1">Total Estimated Cost</h3>

                  <h3 className="total-2">$ 15,500</h3>

                  <h3 className="total-3">$2,000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="text-capitalize"> Key Comparision</p>
                <h1 className="">
                  Difference Between Offshore Development Center vs Outsourcing
                </h1>
              </div>
              <div className="pt-5">
                <div className="">
                  {data.map((faq) => (
                    // eslint-disable-next-line react/jsx-key
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" disclosed  pt-4 pb-2 d-flex justify-content-between w-full text-black   text-left">
                            <span className="text-black">{faq.question}</span>
                            <div className="">
                              {open ? <BiMinus /> : <BsPlusLg />}
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className="ml-2  pb-2 text-black">
                            {faq.answer}
                          </Disclosure.Panel>
                          <div className="dis-1 ml-2"></div>
                          {/* <div className="pt-2 border-b border-slate-800"></div>*/}
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companines;
