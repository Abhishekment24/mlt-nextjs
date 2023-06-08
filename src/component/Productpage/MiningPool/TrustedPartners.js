import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/Crypto-Mainframe-Logo-FINAL-white.svg";
import ImgTwo from "../../../assests/img/freedomexchange.svg";
import ImgThree from "../../../assests/img/iza-logo.svg";
import ImgFour from "../../../assests/img/QUBIT_exchange-color-Q-1.svg";
import ImgFive from "../../../assests/img/tradecoinx.svg";

const TrustedPartners = () => {
  return (
    <>
      <section className="p-y-100" id="hire-dev-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 text-white text-center">
              <div className="">
                <h1 className="text-center">Partners We Trust</h1>
                <p className="">
                  Our goal is to create cutting-edge Ment Tech products and
                  solutions that lead the industry and set a new standard for
                  excellence.
                </p>
                <div className="cards-flex">
                  <div className="ImgContainer">
                  <Image  className="owls-image" src={ImgOne} alt="..." />
                  </div>
                  <div className="ImgContainer">
                  <Image  className="owls-image" src={ImgTwo} alt="..." />
                  </div>
                  <div className="ImgContainer">
                  <Image  className="owls-image" src={ImgThree} alt="..." />
                  </div>
                  <div className="ImgContainer">
                  <Image  className="owls-image" src={ImgFour} alt="..." />
                  </div>
                  <div className="ImgContainer">
                  <Image  className="owls-image" src={ImgFive} alt="..." />
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

export default TrustedPartners;
