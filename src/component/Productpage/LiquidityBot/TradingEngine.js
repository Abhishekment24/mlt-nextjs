import React from "react";
import MapImages from "../../../assests/img/exchange-more_lang.svg";
import Image from "next/image";


const NoBank = () => {
  return (
    <>
      <section className="p-y-100 " id="hire-dev-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-white texting-1">
              <div className="trunkey wides onesupport w-t">
                <h2 className="py-4">One Support Team for Multiple Products</h2>
                <p>
                  We are dedicated to providing support and taking
                  responsibility when you need assistance, and will never pass
                  the buck by saying it&apos;s not our issue.
                </p>
                <p>
                  We maintain a comprehensive logging system for all comments
                  and details from our developers across our entire product
                  line, ensuring that we are able to assist you effectively
                  without having to repeatedly ask for information.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6 text-white texting-1">
              <div className="trunkey heighting">
                <h2 className="">Resources & Tutorials</h2>
                <p>
                  Ment Tech places a strong emphasis on delivering exceptional
                  user experience. This is achieved by partnering closely with
                  clients and providing a wealth of tutorials and resources to
                  assist with technical needs. The team is knowledgeable and
                  dedicated to ensuring a seamless experience.
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-white texting-1">
              <div className="trunkey heighting">
                <h2 className="">Instruction</h2>
                <p>
                  At Ment Tech, education is a key part of our service offering.
                  We strive to provide our clients with the knowledge and
                  understanding they need to succeed, which is why we offer
                  video training and demonstrations in addition to a wide range
                  of tutorials and materials. Our goal is to ensure the ultimate
                  user experience for our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 text-white">
              <div className="trunkey heights wides">
                <div className="row py-5">
                  <div className="col-lg-6 text-white ">
                    <h2 className="">A Wide Range of Languages is Supported</h2>
                    <p className="">
                      Our customer service team is knowledgeable and friendly,
                      and they are able to assist you in eight different
                      languages including English, Russian, Chinese, Farsi,
                      Hindi, Spanish, Arabic, and Urdu. We ensure that you will
                      receive the help you need without having to go through
                      multiple questions by logging all comments and details
                      from developers across all our products.
                    </p>
                  </div>

                  <div className="col-lg-6 text-white text-center texting-margin">
                  <Image  className="owls-image" src={MapImages} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoBank;
