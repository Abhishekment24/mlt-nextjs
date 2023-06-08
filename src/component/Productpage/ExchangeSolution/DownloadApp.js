import React from "react";
import mobile from "../../../assests/images/home/app.svg";
import Image from "next/image";
const DownloadApp = () => {
  return (
    <section className="dowloadapp">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className=" texting-1">
              <h1 className="mb-5 text-center">
                Complete Your Ecosystem With Hybrid Mobile Apps
              </h1>
              <p>
                Our mobile application allows your clients to effortlessly trade
                with our full range of products and features from anywhere, at
                any time, using a high-performance, reliable, and cross-platform
                hybrid app.
              </p>
            </div>
          </div>
          <div className="col-lg-12 text-center order-1 mt-5">
          <Image className="img-fluid mains"  src={mobile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
