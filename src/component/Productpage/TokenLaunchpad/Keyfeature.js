import React from "react";
import Tbenofits from "../../../assests/Aboutusimg/threes.png";
import Tokenocn1 from "../../../assests/tl-1.png";
import Tokenocn2 from "../../../assests/tl-2.png";
import Tokenocn4 from "../../../assests/tl-4.png";
import Tokenocn7 from "../../../assests/tl-7.png";
import Tokenocn8 from "../../../assests/tl-8.png";
import Tokenocn10 from "../../../assests/tl-10.png";
import Tokenocn11 from "../../../assests/tl-11.png";
import WhyTokenImg from "../../../assests/why-t-dev.png";
import { Bdata, Tecdata } from "../../Data/Data";
import Image from "next/image";
import Link from "next/link";
const Keyfeature = () => {
  return (
    <div>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h1 className="">
                  Benefits for Users from Token Launchpad Platform
                </h1>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <Image src={Tbenofits} alt="Tbenofits" />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4">
              <div className="token-benifit-box mb-4">
                <h2 className="">Easy-to-Use</h2>
                <p className="mb-0">
                  A token launchpad is designed to be user-friendly and easy to
                  use. One of its key features is that it does not require
                  coding knowledge, which means that users can create tokens,
                  launchpads, and sale events for their projects with just a few
                  clicks.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="token-benifit-box mb-4">
                <h2 className="">Exchange Support</h2>
                <p className="mb-0">
                  A token launchpad can assist crypto projects in listing their
                  tokens on various centralized and decentralized exchange
                  platforms, if they decide to sell their tokens externally.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="token-benifit-box mb-4">
                <h2 className="">General Support</h2>
                <p className="mb-0">
                  Projects that use a Token launchpad can easily get technical
                  and marketing support from the platform&apos;s certified community
                  members, which can help them to raise more funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-black-bg p-y-100 ">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-12 text-white text-center">
              <h1>Remunerative Streams for Ventures Using the Platform </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn1} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Token Minting Fees</h2>
                  <p>
                    For minting various kinds of project tokens (Standard,
                    Liquidity Generator, Baby, and Buyback Baby).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn2} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Launchpad Fees</h2>
                  <p>
                    For creating launchpads for token sales. A proportion of
                    sales is levied in addition to a base fee.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn8} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Airdrop Fees</h2>
                  <p>
                    For conducting airdrops using the solution’s ecosystem. Fees
                    are levied similar to earlier cases.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn10} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Anti-bot Fees</h2>
                  <p>
                    For employing solutions that blacklist sniper bots in
                    centralized and decentralized exchange listings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn4} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Fair Launch Fees</h2>
                  <p>
                    For setting up a fair launch on the Token launchpad. A fee
                    is charged similarly to the launchpad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn7} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Private Sales Fees</h2>
                  <p>
                    For setting up a private token sale on the token launchpad.
                    The fee mechanism is the same as earlier.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ven-block mb-4">
                <div className="b-icon-img">
                  <Image src={Tokenocn11} alt="" />
                </div>
                <div className="b-icon-text text-white">
                  <h2>Native Token Sales</h2>
                  <p>
                    Profits can be yielded through making the platform worthy to
                    invest in. This can be done by launching legitimate projects
                    to the community after strict vetting.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-white-bg p-y-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Why Choose Us to Develop A Token Launchpad ?</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p>
                Ment is a company that specializes in developing web3
                applications. They have a large team of experienced employees
                and have completed a significant number of projects.
                Additionally, they stay current with industry trends by
                introducing new solutions, such as a token launchpad.
              </p>
              <ul className="why-t-ul">
                <li>Adept Blockchain Developers</li>
                <li>On-time Delivery</li>
                <li>Customizable Solutions</li>
                <li>Advanced Tech Stacks</li>
                <li>Expert Consultants</li>
                <li>Round-the-Clock Support</li>
              </ul>
              <p>
                If you are interested in creating a Token launchpad, Blockchain
                App Factory offers expert consultation to help you get started
                with your Web3 business. You can schedule a meeting with one of
                their experts today to discuss your project.
              </p>
              <Link href="/contact-us" className="btn btn-primary">
                Talk To Experts
              </Link>
            </div>
            <div className="col-lg-5 text-center">
              <Image src={WhyTokenImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="keyinnovations p-y-100">
        <div className="container">
          <div className="row ">
            <div class="col-lg-12  text-left text-white">
              <div class="title-block"></div>

              <h1 className="titles-trusted"> Blockchains We Build On</h1>
            </div>
          </div>
          <div class="row">
            {Tecdata.map((person) => {
              return (
                <div className="col-lg-2 col-sm-6 mt-4 text-center text-white" key={person.id}>
                  <div className="services-teams justify-content-center ">
                    <Image src={person.imgscr} className="block-img" alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Keyfeature;
