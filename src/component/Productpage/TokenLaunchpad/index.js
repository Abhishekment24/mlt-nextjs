import React from "react";
import Nft from "../../../assests/Aboutusimg/first.png";
import Image from "next/image";
import Head from "next/head";
import Header from "../../Header";
import Nftmarkets from "./nftmarkets";
import Keyfeature from "./Keyfeature";
import LetsTalks from "../../LetsTalk/LetsTalk";


const TokenLaunchpad = () => {
  return (
    <div>
      <div className="Aboutus">
      <Head>
        <title>Token LaunchPad</title>
        <meta name="description" content="Token LaunchPad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        
        <section className="about-header  blue-bg">
          <Header />
          <div className="container">
            <div>
              <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                  <div className="nft-mar">
                    <Image className="bitc-img" src={Nft} alt="Nft" />
                  </div>
                </div>
                <div className="col-lg-6 text-white">
                  <h1>Token Launchpad Platform</h1>
                  <span>
                    Our Ment Token launchpad can be used by ventures to assist
                    fundraising campaigns. No coding knowledge is required,
                    making the platform launchpad among the masses!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Nftmarkets />
        <Keyfeature />
        <LetsTalks />
       
      </div>
    </div>
  );
};

export default TokenLaunchpad;
