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
            <h1 className="text-center">How to Fix it</h1>
            <div className="CardContainer">
              <div className="Cards">
                <div className="CardIcon">
                 <Image className="card-img-icons" src={ImgOne} alt="..." />
                </div>
                <div className="CardText">
                  <p className="text-white p-line">
                    Streamlining the trading process and reducing the time it
                    takes to execute trades. This leads to a more efficient and
                    faster trading experience for traders.
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
                    Our platform provides advanced analytics and audience search
                    capabilities tailored to meet the specific needs of your
                    business, allowing you to make informed decisions and reach
                    your target audience effectively.
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
                    Our platform brings together verified traders and trading
                    desks from all over the world, offering access to a diverse
                    and global pool of trading partners.
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
