import React from "react";
import { Company, pdata, Weoffices, It } from "../Data/Data";
import Earth from "../../assests/newcomimg/ilustrator.png";
import Imagesings from "../../assests/newcomimg/banner-04.png";
import { TiTickOutline } from "react-icons/ti";
import Image from "next/image";
const teamjoin = () => {
  return (
    <>
      <section className="blue-bg p-y-100 ares-back">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white offset-md-1">
              {/*<div className="respos">*/}
              <div className="">
                <p className="">Division of Responsibilities</p>
                {/* <h2 className=" text-sizeing">
                  Areas of Responsibility
                </h2>*/}
                <h2 className=" text-sizeing">Areas of Responsibility</h2>
              </div>
              <div className="row py-2">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">
                      Billing and Leaves <br /> Management
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">
                      Employee Happiness and Retentions
                    </span>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing"> Beautiful Office Space</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">Training and Upskilling</span>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">High Config System and</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">Time Tracking</span>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">High Speed Internet</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">HR Management</span>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">Project Management</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">Timeline Management</span>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">
                      Availability for Discussions
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="d-flex">
                    <TiTickOutline className="spansing mt-1" />
                    <span className="spansing">Work Allocation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <Image className="comp-imgs" src={Imagesings} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-y-100" id="hire-dev-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-white ">
              <div className="text-center hires-pading">
                <p className="">
                  Benefits of Hiring Remote Developers from India
                </p>
                <h1 className="">Hire Remote Developers at Affordable Cost</h1>
              </div>
            </div>
          </div>
          <div className="row  ">
            <div className="col-lg-4 text-white">
              <div className="">
                <p className="mt-4">
                  India is a top choice for hiring remote development teams due
                  to its affordable rates, strong quality assurance, and
                  convenient time overlap with major countries. By utilizing
                  these benefits, you can reduce hiring costs and drive the
                  growth of your startup with the help of Ment Tech, a premier
                  web and app development company
                </p>
                <p className="mt-4">
                  India&apos;s IT industry boasts a high employment rate,
                  consistently producing skilled and capable talent. With
                  favorable business policies, India continues to be a top
                  choice for hiring remote dedicated developers
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-white">
              <div className="text-center">
                <Image className="gols-imgs" src={Earth} alt="" />
              </div>
            </div>
            <div className="col-lg-4 text-white">
              <div className="pt-3  titles-trusted">
                <h2 className="mt-4">75%</h2>
                <p className="mt-4">Employment Rate by IT industry</p>
                <h2 className="mt-4">2,000,000+</h2>
                <p className="mt-4">New Trained Professionals Every Year</p>
                <h2 className="mt-4">$500 Billion</h2>
                <p className="mt-4">IT Market Revenue in India (by 2025)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="text-center hires-pading">
                <p className=" text-capitalize">Best Practices</p>
                <h1 className="">
                  Efficient, Smart and Dedicated Professionals
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <h2 className="mt-4">
                  When you hire a developer from Ment Tech, you gain access to
                  the collective experience and expertise of their entire team
                </h2>
                <p className="mt-4">
                  Our closely-knit team provides a solid foundation for every
                  project we work on. Daily scrum calls allow developers to
                  share challenges and receive guidance from other experienced
                  team members
                </p>
              </div>
              <div className="mt-5  titles-trusted">
                <h2 className="mt-4">Advantages</h2>
                <div className="d-flex align-items-center justify-content-around mt-5">
                  <div className="ml-4 d-flex flex-column  align-items-center">
                    <span className="circlesi">01</span>
                    <span className="cir-text"> Certified Developers</span>
                  </div>
                  <div className="ml-3 d-flex flex-column  align-items-center">
                    <span className="circlesi">02</span>
                    <span className="cir-text"> Weekly Tech Workshop</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-around mt-5">
                  <div className="d-flex flex-column  align-items-center">
                    <span className="circlesi">03</span>
                    <span className="cir-text"> Transparent and proactive</span>
                  </div>
                  <div className="d-flex flex-column  align-items-center">
                    <span className="circlesi">04</span>
                    <span className="cir-text"> 9500+ dev community</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="row">
                <div className="col-lg-6 col-md-6 ">
                  <div class="single-servi-item text-center ">
                    <h3 className="">Scalability</h3>
                    <p className="mt-3">
                      We make it simple for you to expand your team at any
                      moment
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div class="single-servi-item text-center ">
                    <h3 className="">Startup Friendly Policies</h3>
                    <p className="mt-3">
                      We understand and support the dynamics of a growing
                      startup
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div class="single-servi-item text-center ">
                    <h3 className="">No Bond</h3>
                    <p className="mt-3">
                      Ment Values Trust More than a Bond. Grow Limitless with Us
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div class="single-servi-item text-center ">
                    <h3 className="">Trackability</h3>
                    <p className="mt-3">
                      Utilize advanced tools to monitor resource time and task
                      progress
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div class="single-servi-item text-center ">
                    <h3 className="">Communication</h3>
                    <p className="mt-3">
                      Our timely and open communication style makes us a
                      reliable partner
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div class="single-servi-item text-center ">
                    <h3 className="">Account Manager</h3>
                    <p className="mt-3">
                      Each client is assigned an Account Manager for all query
                      resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default teamjoin;
