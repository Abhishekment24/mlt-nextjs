import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../Header";
import Heros from "../ExchangeSolution/Hero";

const HeroForm = () => {
  return (
    <div className="Aboutus">
     <Head>
        <title>Referral & Affiliate System for Crypto Exchanges</title>
       
        <meta
          name="description"
          content="Referral System module supporting all our products for boosting the business on the go"
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
                <h1>Referral & Affiliate System for Crypto Exchanges</h1>
                <span>
                  Our platform includes a multilevel affiliate and referral
                  program infrastructure that allows users to earn rewards for
                  referring new users to the platform.
                </span>
                <div class="d-flex  displays">
                  <div class="mt-3 me-5">
                    <div class="p-1">Client</div>
                    <div class="h-t-1">100+</div>
                  </div>
                  <div class=" mt-3 me-5">
                    <div class="p-1">Rewards</div>
                    <div class="h-t-1">$1M+</div>
                  </div>
                  <div class="mt-3 me-5">
                    <div class="p-1">Execution</div>
                    <div class="h-t-1">5s</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  mt-4">
                <Heros />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroForm;
