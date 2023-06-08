import React from "react";
import Header from "../Header";
import Head from "next/head";
const ContactUsHeader = () => {
  return (
    <>
     <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <section className="about-header blue-bg ">
    <Header />
      <div className="container wide-block">
        <div className="row align-items-center justify-content-center pt-5">
          <div className="col-lg-8  text-white">
            <h1 className="mb-4 xcv">Contact Us</h1>
            <p>
              Sure, We are here to assist with any questions or information you
              may need. Please feel free to ask anything.
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUsHeader;
