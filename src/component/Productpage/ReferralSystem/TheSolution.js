import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/otc-mobile-money.svg";
import RightArrowImg from "../../../assests/img/otc-solution-arrow-right.svg";
import LeftArrowImg from "../../../assests/img/otc-solution-arrow-left.svg";
import BottomArrowImg from "../../../assests/img/otc-dot-line-arrow-down.svg";
import BottomLeftArrow from "../../../assests/img/otc-dot-line-arrow-down.svg";

const TheSolution = () => {
  return (
    <section className="p-y-100" id="hire-dev-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12  text-white">
            <h1 className="text-center"> Make Referrals & Affiliates Easy</h1>
            <div className="CardContainer">
              <div className="Cards">
                <div className="CardIcon">
                 <Image className="card-img-icons" src={ImgOne} alt="..." />
                </div>
                <div className="CardText">
                  <p className="text-white p-line">
                    on their referral progress and rewards, ensuring they always
                    stay up to date with their earnings and referral
                    performance.
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
                    With this system, payments can be made either in
                    cryptocurrency or through traditional fiat methods, and
                    support for mass payments is also available.
                  </p>
                </div>
                <div className="CardIcon cardsicons CardIcon" right={true}>
                 <Image className="card-img-icons" src={ImgOne} alt="..." />
                </div>
              </div>

              <Image className="LeftArrow " src={LeftArrowImg} alt="..." />

              <Image
                className="BottomRightArrow"
                src={BottomLeftArrow}
                alt="..."
              />
              <div className="Cards">
                <div className="CardIcon CardIcon">
                 <Image className="card-img-icons" src={ImgOne} alt="..." />
                </div>
                <div className="CardText">
                  <p className="text-white p-line">
                    Additionally, you can keep track of statistics, including
                    the number of referrals and affiliates, on a monthly basis
                    and per user with our Affiliate & Referral system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;
