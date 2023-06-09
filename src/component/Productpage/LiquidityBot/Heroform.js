import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../Header";
import Heros from "../ExchangeSolution/Hero";

const HeroForm = () => {
  return (
    <div className="Aboutus">
      <Head>
        <title> Cryptocurrency Liquidity Solution </title>

        <meta
          name="description"
          content="Helping new exchanges to get liquidity from multiple big exchanges in the market"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banking-solution overflow-hidden">
        <section className="com-header comap  blue-bg">
          <Header />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 text-white">
                <h1>Cryptocurrency Liquidity Solution</h1>
                <span>
                  Our exchange platform is powered by real-time infrastructure,
                  providing real-time trading experience to users.
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
