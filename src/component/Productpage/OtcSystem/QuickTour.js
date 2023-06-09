import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/kyc-cryptocurrency_prod1.svg";
import ImgTwo from "../../../assests/img/banking-cryptocurrency_prod1.svg";
import ImgThree from "../../../assests/img/exchange-cryptocurrency_prod1.svg";
import ImgFour from "../../../assests/img/transaction-cryptocurrency_prod1.svg";

const QuickTour = () => {
  return (
    <>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h1 className="">An Overview of the Product</h1>
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="col-lg-7">
              <h4 className="">01</h4>
              <p className="">
                This integration allows you to have complete control over your
                user base and ensure that only approved and verified individuals
                have access to your platform. It helps to improve the overall
                security and reduce the risk of malicious activity.
                <br />
                <br />
                KYC (Know Your Customer) is a customer identification process
                used by businesses to verify the identity of their customers and
                prevent fraud. In the context of OTC trading, it can help ensure
                that the assets being traded are fully controlled by the traders
                and eliminate fraudulent activity from the trading process. By
                allowing traders to link their custody wallets to the platform,
                the company can provide proof to other traders that the posted
                assets are fully controlled by their customers.
              </p>
            </div>
            <div className="col-lg-5 text-center">
               <Image className="otc-imd owls-image" src={ImgOne} alt="..." />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-7 text-center">
               <Image className="otc-imd owls-image" src={ImgTwo} alt="..." />
            </div>
            <div className="col-lg-5 texting-margin">
              <h4 className="">02</h4>
              <p className="">
                In OTC deals, there is a 30-second lock in the asset price while
                the negotiations are completed. The trader can, therefore,
                refund, re-price, validate, or cancel the order.
                <br />
                <br />
                Our Over-the-counter (OTC) trading service provides institutions
                and high-net-worth individuals with extra liquidity and
                individualized service in order to fill large orders.
              </p>
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="col-lg-7 mt-3">
              <h4 className="">03</h4>
              <p className="">
                Full control is given to traders. Before each trade is executed,
                the details are verified and validated. To ensure safety, we
                utilize two-factor authentication (2FA).
                <br />
                <br />
                The trade is settled instantly as soon as the trader confirms
                execution. That&apos;s lightning fast.
              </p>
            </div>
            <div className="col-lg-5 text-center">
               <Image className="otc-imd owls-image" src={ImgThree} alt="..." />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-7 text-center">
               <Image className="otc-imd owls-image" src={ImgFour} alt="..." />
            </div>
            <div className="col-lg-5 texting-margin">
              <h4 className="">04</h4>
              <p className="">
                At the click of a button, you can get up-to-date deals
                information. Details about the transaction, such as the ID, time
                stamp, amount, fees, and counterparty, can be located. Now you
                can keep track of all your transactions in one screen.
                <br />
                <br />
                We support all fiat currencies and digital asset currencies on
                our OTC desk in order to cover all global markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickTour;
