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
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" overflow-hidden">
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
