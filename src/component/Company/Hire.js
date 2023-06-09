import React from "react";
import Teamjoin from "../Teamjoin/teamjoin";
import Skill from "./Skill";
import Companines from "./Companines";
import ConfigurationCode from "../Home/ConfigurationCode";
import Header from "../Header";
import Blockchians from "../Home/Blockchians";
import Compan from "../../assests/newcomimg/coms.png";
import HireDetail from "./Hiredetails";
import "react-phone-input-2/lib/style.css";
import LetsTalks from "../LetsTalk/LetsTalk";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Hire = () => {
  return (
    <div>
      <>
        <div>
          <Head>
            <title>For Companies</title>
            <meta name="description" content="For Companies" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="banking-solution overflow-hidden">
            <section className="com-header comap blue-bg">
              <Header />
              <div className="">
                <div className="container">
                  <div className="row  align-items-center">
                    <div className="col-lg-12 text-white text-center">
                      <p className="mt-4 text-capitalize">For Companines </p>
                      <h1>We Are Your Cavalary</h1>
                      <span>
                        Ment provides high-performing, on-demand teams of
                        developers for the world&apos;s leading brands
                      </span>
                      <div className="mt-4">
                        <button type="button" class="btn btn-primary">
                          Join Team
                        </button>
                      </div>
                      <Image className="img-fluid" src={Compan} alt="Compan" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <HireDetail />

            <ConfigurationCode />
            <section className="bg-blues py-5">
              <div className="container">
                <div className="hirs-flex align-items-center">
                  <div className=" text-white">
                    <h3 className="fw-bold  text-center">
                      Are You Looking to Hire Remote Developers for Your
                      Project?
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
          </div>
        </div>

        <Companines />
        <Teamjoin />
        <Blockchians />
        <Skill />
        <LetsTalks />
      </>
    </div>
  );
};

export default Hire;
