import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../Header";
import Heros from "../ExchangeSolution/Hero";

const HeroForm = () => {
  return (
    <div className="Aboutus">
      <Head>
        <title> Mining Pool Solution for Crypto Exchanges</title>
       
        <meta
          name="description"
          content=" Start your own mining pool and let people mine cryptocurrencies by connecting their rigs"
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
                <h1>Mining Pool Solution for Crypto Exchanges</h1>
                <span>
                  By using mining solutions, you can provide energy and support
                  to your operating environment, allowing it to run smoothly and
                  efficiently.
                </span>
                <div class="d-flex  displays">
                  <div class="mt-3 me-5">
                    <div class="p-1">Coins Support</div>
                    <div class="h-t-1">100+</div>
                  </div>
                  <div class=" mt-3 me-5">
                    <div class="p-1">Rigs Support</div>
                    <div class="h-t-1">10+</div>
                  </div>
                  <div class="mt-3 me-5">
                    <div class="p-1">Hashrate (PH/s)</div>
                    <div class="h-t-1">2000+</div>
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
