import React from "react";
import MapImages from "../../../assests/img/exchange-more_lang.svg";
import DownloadApp from "./DownloadApp";
import MapImage from "../../../assests/img/aws.png";
import Image from "next/image";
const NoBank = () => {
  return (
    <>
      <section className="p-y-100 " id="hire-dev-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-white ">
              <div className="trunkey aws">
                <h1 className="">
                  AWS Exchange Hosting is Scalable & Reliable
                </h1>
                <div className="row ">
                  <div className="col-lg-4 text-white text-center">
                  <Image className="owls-image" src={MapImage} alt="..." />
                  </div>
                  <div className="col-lg-8 text-white mt-5">
                    <p>
                      The hosting solutions used by Ment Tech are designed to be
                      scalable, allowing them to adapt to the growing needs of
                      their clients as their projects become more demanding and
                      highly loaded. This helps ensure that their clients
                      receive a reliable and efficient service.
                    </p>
                    <p>
                      AWS is a popular cloud computing platform known for its
                      high levels of reliability, scalability, and performance.
                      The preference for AWS hosting by your company highlights
                      the importance placed on ensuring that the hosting
                      solutions can meet the demands of highly loaded projects
                      and can respond dynamically to client growth. The
                      complexity of managing and administering AWS is being
                      handled in-house, reflecting the expertise and capability
                      of your company in this area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row py-5">
            <div className="col-lg-6 text-white ">
              <div className="trunkey heihts ">
                <div className="text-center token-img">
                  <img src={FirstImg} alt="..." />
                </div>
                <h3 className="py-4 texting"> Tokens for Utility (Loyalty)</h3>
                <p className="texting">
                  A utility token is a digital asset that represents a specific
                  utility or function within a certain platform or ecosystem. It
                  can be used to access certain services or products, pay for
                  fees or commissions, or receive discounts and benefits. The
                  issuance of a utility token and its specific functionalities
                  are defined by the platform or company issuing it.
                </p>
                <div className="listed">
                  <span>
                    <span>
                      Your exchange's capitalization will increase if your token
                      is professionally designed and correctly developed.
                    </span>
                  </span>
                  <span>
                    <span>Users will find it appealing.</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-white texting">
              <div className="trunkey heihts">
                <div className="text-center token-img">
                  <img src={SecondImg} alt="..." />
                </div>
                <h3 className="py-4">
                  Designed to Work Together, All Products are Interconnected
                </h3>
                <p>
                  It's great to have a well-coordinated and efficient
                  development process. It helps in delivering high-quality and
                  well-integrated products to the users. This can lead to
                  customer satisfaction and trust in your company and products.
                </p>
                <p>
                  This ensures that the software is functioning correctly and
                  can be relied upon to perform as intended. Regular testing
                  helps to identify and fix any potential issues before they
                  have a chance to cause problems, reducing the risk of downtime
                  or errors and improving overall performance and stability.
                </p>
              </div>
            </div>
          </div>*/}
          <div className="row pt-5">
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
                  <Image className="owls-image" src={MapImages} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadApp />
    </>
  );
};

export default NoBank;
