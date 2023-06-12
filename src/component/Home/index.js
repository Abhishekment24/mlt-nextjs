import React, { useState, useEffect } from "react";
import Head from "next/head";
import Homeheader from "./Homeheader";
import OneStopSolution from "./OneStopSolution";
import Productionready from "./Productionready";
import Keyinnovation from "./Keyinnovation";
import Blockchians from "./Blockchians";
import MentSolutions from "./MentSolutions";
import ConfigurationCode from "./ConfigurationCode";
import LetsTalk from "../LetsTalk/LetsTalk";
const Home = () => {
  return (
    <>
      <Head>
        <title>
          Blockchain & AI Development for Startups and Enterprises | Ment Tech
        </title>
        
        <link rel="canonical" href="https://www.ment.tech/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blockchain & AI Development for Startups and Enterprises | Ment Tech"
        />
        <meta
          property="og:description"
          content="Revolutionize Your Business with Ment Tech's Blockchain & AI Solutions for Innovation and Growth. Unlock the power of rapid development and deployment through our expert Blockchain & AI development services, empowering your business to achieve its goals."
        />
        <meta property="og:url" content="https://www.ment.tech/" />
        <meta
          property="og:site_name"
          content="Ment Tech - Blockchain & AI Development Company"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/menttechlabs/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@menttechlabs" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="29 minutes" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home overflow-hidden">
        <Homeheader />
        <OneStopSolution />
        <Productionready />
        <Keyinnovation />
        <Blockchians />
        <MentSolutions />
        <ConfigurationCode />
        <LetsTalk />
      </div>
    </>
  );
};

export default Home;
