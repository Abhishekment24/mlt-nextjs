import React from "react";
import Heros from "../ExchangeSolution/Hero";
import Head from "next/head";
import Image from "next/image";
import Header from "../../Header";

const HeroForm = () => {
  return (
    <div className="Aboutus">
      <Head>
        <title> OTC Platform Turnkey </title>

        <meta
          name="description"
          content="P2P trading platform with multiple payment gateway support and strongest moderation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banking-solution overflow-hidden">
        <section className="com-header comap blue-bg ">
          <Header />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 text-white ">
                <h1>OTC Platform Turnkey</h1>
                <span>
                  This ensures that you can mine efficiently and with maximum
                  output.
                </span>
                <div class="d-flex  displays">
                  <div class="mt-3 me-5">
                    <div class="p-1">Market Pair</div>
                    <div class="h-t-1">100+</div>
                  </div>
                  <div class=" mt-3 me-5">
                    <div class="p-1">Liquidity Venues</div>
                    <div class="h-t-1">5</div>
                  </div>
                  <div class="mt-3 me-5">
                    <div class="p-1">Execution From</div>
                    <div class="h-t-1">5ms</div>
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
