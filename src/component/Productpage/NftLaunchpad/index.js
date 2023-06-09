import React from "react";
import Head from "next/head";
import Nft from "../../../assests/n2.svg";
import Header from "../../Header";
import Image from "next/image";
import Nftmarkets from "./nftmarkets";
import Keyfeature from "./Keyfeature";
import LetsTalks from "../../LetsTalk/LetsTalk";
import NFTmarketplace from "./nftimages";
import Faqs from "./faqs";
const Nftlaunchpad = () => {
  return (
    <div>
      <div className="Aboutus">
      <Head>
      <title>NFT LaunchPad</title>
        <meta name="description" content="NFT LaunchPad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
        <section className="about-header  blue-bg">
        <Header />
          <div className="container">
        
              <div className="row align-items-center">
                <div className="col-lg-6 text-white">
                  <h1>NFT LaunchPad Development</h1>
                  <span>
                    With our expertise in NFT launchpad development, we can
                    assist your business in gaining a competitive advantage in
                    the NFT market and uncovering new business opportunities. A
                    strong NFT launchpad platform can establish your business as
                    a reputable player in the NFT community. Contact our experts
                    now to bring your NFT vision to reality
                  </span>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="nft-mar">
                    <Image className="img-fluid" src={Nft} alt="Nft" />
                  </div>
                </div>
              </div>
            </div>
         
        </section>
        <Nftmarkets />
        <Keyfeature />

        <NFTmarketplace />
        <Faqs />
        <LetsTalks />
      
      </div>
    </div>
  );
};

export default Nftlaunchpad;
