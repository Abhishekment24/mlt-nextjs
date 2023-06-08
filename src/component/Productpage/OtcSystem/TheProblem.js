import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/binary-code.svg";
import ImgTwo from "../../../assests/img/otc-hotel.svg";
import ImgThree from "../../../assests/img/otc-binoculars.svg";
import ImgFour from "../../../assests/img/otc-universe.svg";
import ImgFive from "../../../assests/img/otc-teamwork.svg";
import ImgSix from "../../../assests/img/otc-slow-motion.svg";

const TheProblem = () => {
  return (
    <>
      <section className="p-y-100" id="hire-dev-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center text-white">
              <h1 className="">A Dated Process is at Fault</h1>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-6 text-center">
              <div className="otc-boxes">
               <Image className="Absence-img-icons" src={ImgOne} alt="..." />
                <h3 className="mt-3">Vulnerability</h3>
                <p>
                  The existing exchange platforms such as WhatsApp, Telegram,
                  and Skype are prone to security risks as they are vulnerable
                  to hacking attacks which can result in the loss of millions.
                </p>
              </div>
            </div>
            <div className="col-lg-6  text-center">
              <div className="otc-boxes">
               <Image className="Absence-img-icons" src={ImgTwo} alt="..." />
                <h3 className="mt-2">Absence of Discovery</h3>
                <p>
                  Lack of discovery tools makes it difficult for small and
                  medium-sized funds to be identified, hindering growth and
                  causing stagnation in the industry as larger players receive
                  all the attention.
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 text-center">
              <div className="otc-boxes">
               <Image className="Absence-img-icons" src={ImgThree} alt="..." />
                <h3 className="mt-3">Openness</h3>
                <p>
                  OTC trading anonymizes traders, resulting in the lack of
                  valuable data collection about them.
                </p>
              </div>
            </div>
            <div className="col-lg-6  text-center">
              <div className="otc-boxes">
               <Image className="Absence-img-icons" src={ImgFour} alt="..." />
                <h3 className="mt-2">Listed</h3>
                <p>
                  It can be challenging to keep track of all the platforms due
                  to the sheer number of them.
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6  text-center">
              <div className="otc-boxes">
               <Image className="Absence-img-icons" src={ImgFive} alt="..." />
                <h3 className="mt-3"> There is no all-Inclusive Solution</h3>
                <p>
                  The lack of a comprehensive solution on any current platform
                  is a challenge.
                </p>
              </div>
            </div>
            <div className="col-lg-6  text-center">
              <div className="otc-boxes">
               <Image className="Absence-img-icons" src={ImgSix} alt="..." />
                <h3 className="mt-3">Efficiency is Low</h3>
                <p>
                  The current trading process on platforms is slow and
                  inefficient, with trades taking hours or even days to process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheProblem;
