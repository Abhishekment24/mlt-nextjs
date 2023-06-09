import React from "react";

import FirstImg from "../../../assests/ment-solution/Update/Group 1818.png";
import Image from "next/image";
const NoBank = () => {
  return (
    <>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 texting-1">
              <h1 className="text-center">
                Diagram of a Cryptocurrency Exchange
              </h1>
              <p>
                The cryptocurrency exchange consists of several components, with
                the Exchange module being connected to the frontend via its Web
                API.
              </p>
              <Image className="img-fluid" src={FirstImg} alt="" />
            </div>

            <div class="trunsk-15 py-5">
              <div class="trunsk-16">
                Connecting components in <span></span> a secure manner
              </div>
              <div class="trunsk-16">
                The entire solution can <span></span> be customized
              </div>
              <div class=" trunsk-16">
                Liquidity can be provided <span></span> internally and
                externally via the <span></span> matching engine
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoBank;
