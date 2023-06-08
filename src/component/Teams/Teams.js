import React from "react";
import Header from "../Header";
import Head from "next/head";
import Image from "next/image";
import TeamsHeader from "./Teamsheader/TeamsHeader";
import OurLeader from "./OurLeader";

import OtherInfo from "./OtherInfo";

const Teams = () => {
  return (
    <section className="teams">
      <Head>
        <title>Our Team </title>
        <meta name="description" content="Our Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <TeamsHeader />
      <OurLeader />

      <OtherInfo />
      
    </section>
  );
};

export default Teams;
