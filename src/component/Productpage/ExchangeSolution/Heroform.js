import React from "react";

import Head from "next/head";
import Image from "next/image";
import Header from "../../Header";
import Heros from "./Hero";
import Link from "next/link";
import Ts1 from "../../../assests/nftlaunchimg/Group 1816 (1).png";

import Tick from "../../../assests/nftlaunchimg/tick.png";

import Nfts2 from "../../../assests/nftlaunchimg/wallet-step-2.png";

import Featus from "../../../assests/nftlaunchimg/Cryptocurrency Exchange Turnkey.png";

const HeroForm = () => {
  return (
    <div className="Aboutus">
      <Head>
        <title> Cryptocurrency Exchange Turnkey Solution </title>
       
        <meta
          name="description"
          content="A Centralised Exchange Ecosystem ready to launch with regulatory norms"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
      <div className="banking-solution overflow-hidden">
        <section className="com-header comap blue-bg">
        <Header />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 text-white">
                <h1 className="">Cryptocurrency Exchange Turnkey Solution</h1>
                <span className="">
                  The core business of Ment Tech Group is offering white-label
                  exchange solutions. Detailed information about the product
                  portfolio, risk management systems, relevant teams, and
                  deployment processes can be found on this website.
                </span>
              </div>
              <div className="col-lg-4  mt-4">
                <Heros />
              </div>
            </div>
          </div>
        </section>
        <section className="p-y-100" id="hire-dev-background">
          <div className="container">
            <div className="step-padding">
              <div className="row">
                <div className="col-lg-12 text-white texting">
                  <h1 className="fort-steps">
                    Cryptocurrency Exchange SaaS (Software-as-a-Service)
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 text-white pt-3">
                <p>
                  Anyone interested in owning a cryptocurrency or a digital
                  asset needs to think long and hard about where to buy them
                  safely, securely, and for a fair price.
                </p>

                <p>
                  Cryptocurrency exchanges allow the trading of multiple digital
                  assets such as Bitcoin (BTC), Ethereum (ETH), Ripple (XRP),
                  and many others.
                </p>

                <p>
                  These cryptocurrencies can have trading pairs associated with
                  fiat currencies like the US dollar, UK pound sterling, the
                  EU&apos;s euro or Japanese yen, or other digital assets.
                </p>

                <p>
                  Many crypto exchanges also support secondary markets for
                  trading security tokens issued under Initial Coin Offerings by
                  private companies (ICOs).
                </p>
              </div>
              <div className="col-lg-7 text-white text-center">
                <div className="vs">
                <Image  className="owls-image" src={Featus} alt="" />
                </div>
              </div>
            </div>

            <div className="step-padding">
              <div className="row">
                <div className="col-lg-12 text-white texting">
                  <h1 className="fort-steps">
                    What is Digital Assets Exchange?
                  </h1>
                </div>
              </div>
            </div>
            <div className="row  ">
              <div className="col-lg-6 text-white text-center ">
                <div className="vs">
                <Image className="owls-image" width="" src={Ts1} alt="" />
                </div>
              </div>
              <div className="col-lg-6 text-white pt-5">
                <p>
                  A digital asset exchange (DAX), or digital currency exchange
                  (DCE), is an online business that allows customers to trade
                  cryptocurrencies or digital currencies for other assets, such
                  as conventional government-issued fiat money or other digital
                  currencies.
                </p>

                <p>
                  Crypto exchanges usually strive to have diverse financial
                  options for funds depositing and withdrawal - they may accept
                  PayPal and credit card payments, bank wire transfer deposits
                  and withdrawals, or other forms of charge in exchange for
                  cryptocurrencies or digital assets.
                </p>

                <p>
                  A cryptocurrency exchange can also take on a market maker&apos;s
                  role that takes the bid-ask spreads as a transaction
                  commission for its service or charges fees for the bid-ask
                  matching services.
                </p>
              </div>
            </div>

            <div className="step-padding">
              <div className="row">
                <div className="col-lg-12 text-white texting">
                  <h1>
                    What can you do with the Cryptocurrency Exchange Software?
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 text-white">
                <p className=" py-3">
                  You can operate the next-generation online marketplace to
                  facilitate trading of stocks, digital assets,
                  cryptocurrencies, and security tokens:
                </p>
              
                  <div className="d-flex align-items-center my-3">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Send and receive any existing cryptocurrencies.
                    </span>
                  </div>
               

               
                  <div className="d-flex align-items-center">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Plug-in external payment systems and options for deposits
                      and withdrawals of cryptocurrencies and fiat money.
                    </span>
                  </div>
                
               
                  <div className="d-flex align-items-center my-3">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Perform customer verification (KYC) through the
                      out-of-the-box interface or completely outsource it
                      through API connections.
                    </span>
                  </div>
               
               
                  <div className="d-flex align-items-center">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Issue and manage new tokens to digitalize assets - create,
                      mint/burn, and freeze/unfreeze.
                    </span>
                  </div>
                
               
                  <div className="d-flex align-items-center my-3">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Create trading pairs between different cryptocurrencies
                      and fiat money.
                    </span>
                  </div>
                
                
                  <div className="d-flex align-items-center">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Execute orders to buy and sell represented assets through
                      created trading pairs.
                    </span>
                  </div>
                
                
                  <div className="d-flex align-items-center my-3">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Watch the market charts to monitor prices and market
                      activity for other market pairs, powered by TradingView,
                      or any other trading chart API.
                    </span>
                  </div>
               
               
                  <div className="d-flex align-items-center">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Explore the transaction history and blocks on the chain
                      via different interfaces.
                    </span>
                  </div>
                
               
                  <div className="d-flex align-items-center my-3">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2">
                      Customize the customer and administrative User Interfaces
                      with React libraries to take any form and shape.
                    </span>
                  </div>
                
                
                  <div className="d-flex align-items-center">
                  <Image className="" src={Tick} alt="" />
                    <span className="ms-2 ">
                      Design and develop more tools and libraries to improve and
                      enhance your OpenDAX-powered cryptocurrency exchange.
                    </span>
                  </div>
               
              </div>
              <div className="col-lg-5 text-white text-center">
                <div className="vs">
                <Image className="owls-image" src={Nfts2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroForm;
