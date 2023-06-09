import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/otc-deal.svg";
import ImgTwo from "../../../assests/img/otc-blazing-speed.svg";
import ImgThree from "../../../assests/img/otc-dollar-shield.svg";

const TheProblem = () => {
  return (
    <section className="p-y-100" id="hire-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h1 className="">What is the Process?</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mt-3">
          <div className="one-setp">
           <Image className="list-img-icons mt-2" src={ImgOne} alt="ImgOne" />
           </div>
            <h3 className="mt-3"> Feel Free to Invite Your Friends</h3>
            <p>
              With this system, your friends can easily invite you to join the
              platform using your own personal QR code or unique referral link.
            </p>
          </div>
          <div className="col-lg-4 text-center mt-3">
          <div className="one-setp">
           <Image className="list-img-icons" src={ImgTwo} alt="ImgTwo" />
           </div>
            <h3 className="">Trade With Them</h3>
            <p>
              You earn a percentage of their escrow fees every time they buy
              Bitcoin on the exchange platform.
            </p>
          </div>
          <div className="col-lg-4 text-center mt-3">
          <div className="one-setp">
           <Image className="list-img-icons" src={ImgThree} alt="ImgThree" />
           </div>
            <h3 className="">Earn Money</h3>
            <p>
              Additionally, the earned funds in your affiliate wallet can be
              easily and conveniently withdrawn to your preferred payment method
              at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
