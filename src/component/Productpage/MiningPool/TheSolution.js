import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/otc-mobile-money.svg";
import RightArrowImg from "../../../assests/img/otc-solution-arrow-right.svg";
import LeftArrowImg from "../../../assests/img/otc-solution-arrow-left.svg";
import BottomArrowImg from "../../../assests/img/otc-dot-line-arrow-down.svg";
import BottomLeftArrow from "../../../assests/img/otc-dot-line-arrow-down.svg";
const TheSolution = () => {
  return (
    <>
      <section className="p-y-100" id="hire-dev-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12  text-white">
              <h1 className="text-center">The Solution</h1>
              <div className="CardContainer">
                <div className="Cards">
                  <div className="CardIcon">
                    <Image  className="card-img-icons" src={ImgOne} alt="..." />
                  </div>
                  <div className="CardText">
                    <p className="text-white p-line">
                      By using the platform&apos;s services, users can participate in
                      the process of earning block rewards for a variety of
                      blockchains. They can achieve this by either renting or
                      combining their available hashing power.
                    </p>
                  </div>
                </div>

                <Image className="RightArrow " src={RightArrowImg} alt="..." />

                <Image
                  className="BottomRightArrow"
                  src={BottomArrowImg}
                  alt="..."
                />

                <div className="Cards">
                  <div className="CardText CardText-2" right={true}>
                    <p className="text-white p-line">
                      Our mining pool boasts a strong hashrate, enabling the
                      mining of multiple cryptocurrencies, and provides a
                      reliable, safe, profitable, and secure platform for users.
                    </p>
                  </div>
                  <div className="CardIcon cardsicons CardIcon" right={true}>
                    <Image  className="card-img-icons" src={ImgOne} alt="..." />
                  </div>
                </div>

                <Image className="LeftArrow " src={LeftArrowImg} alt="..." />

                <Image
                  className="BottomRightArrow"
                  src={BottomLeftArrow}
                  alt="..."
                />

                <div className="Cards">
                  <div className="CardText CardText-2" right={true}>
                    <p className="text-white p-line">
                      This innovative feature provides a layer of security to
                      the mining operations, ensuring that the hashrate is
                      protected from potential attacks and ensuring stable
                      mining for all users.
                    </p>
                  </div>
                  <div className="CardIcon cardsicons CardIcon" right={true}>
                    <Image  className="card-img-icons" src={ImgOne} alt="..." />
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

export default TheSolution;
