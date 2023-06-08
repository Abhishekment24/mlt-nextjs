import React from "react";
import Image from "next/image";
import FirstImg from "../../../assests/img/exchange-20x.svg";
import SecondImg from "../../../assests/img/exchange-10x.svg";
import ThirdImg from "../../../assests/img/exchange-25x.svg";

const Products = () => {
  return (
    <>
      <section className="p-y-100 " id="hire-dev-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12  text-white">
              <h1 className="text-white mt-4 text-center">
                Advantages of Turnkey Packages
              </h1>
              <p className="text-white texting-1">
                Adopting a Turnkey cryptocurrency exchange solution offers the
                convenience of simplified maintenance and support. This means
                that you can focus on growing your business without worrying
                about the technicalities of running an exchange.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 text-white">
              <div className="trunkey effort">
                <div className="trunk-p">Effortlessly Low-Cost</div>
                <p className="">
                  Adopting a turnkey cryptocurrency exchange solution offers
                  many advantages, including reduced costs, time savings, and
                  increased efficiency. With this system, you can launch your
                  exchange faster and at a lower cost, with setup costs reduced
                  by over <span>$900,000,</span> and ongoing monthly expenses
                  such as technical support, office space, and development
                  reduced by approximately <span>$25,000</span>. This makes
                  turnkey solutions a highly cost-effective and time-saving
                  option in today&apos;s fast-paced and competitive market.
                </p>

                <div className="trunsk-1">
                  <div className="trunsk-2">
                    <div className="trunsk-3">Investing Initially</div>
                    <div className="trunsk-4">
                      <div className="trunsk-5"></div>
                      <div className="trunsk-6"> {">"}$1 000 000</div>
                    </div>
                    <div class="trunsk-7">
                      Cost of development of own platform
                    </div>
                    <div class="trunsk-4">
                      <div
                        color="linear-gradient(90deg, #0272d9 1.59%, #42a3fd 93.04%)"
                        class="trunsk-8"
                      ></div>
                    </div>
                    <div class="trunsk-9">Turnkey exchange setup price</div>
                  </div>
                  <div class="trunsk-10 ">
                    <div class="trunsk-11 "></div>
                    <Image className="" src={FirstImg} alt="FirstImg" />
                    <div class="trunsk-12 ">Cheaper</div>
                  </div>
                </div>
                <div className="trunsk-1">
                  <div className="trunsk-2">
                    <div className="trunsk-3">Monthly Payments</div>
                    <div className="trunsk-4">
                      <div className="trunsk-5"></div>
                      <div className="trunsk-6"> {">"}$40 000</div>
                    </div>
                    <div class="trunsk-7">Burn rate of team of developers</div>
                    <div class="trunsk-4">
                      <div
                        color="linear-gradient(90deg, #0272d9 1.59%, #42a3fd 93.04%)"
                        class="trunsk-8 blue-background-round"
                      ></div>
                    </div>
                    <div class="trunsk-9">Technical support monthly fee</div>
                  </div>
                  <div class="trunsk-10 ">
                    <div class="trunsk-11 "></div>
                    <Image className="" src={SecondImg} alt="SecondImg" />
                    <div class="trunsk-12 ">More Efficient</div>
                  </div>
                </div>
                <div className="trunsk-1">
                  <div className="trunsk-2">
                    <div className="trunsk-3">Time to Launch</div>
                    <div className="trunsk-4">
                      <div className="trunsk-5"></div>
                      <div className="trunsk-6"> {">"}1.5 years</div>
                    </div>
                    <div class="trunsk-7">Development of a new platform</div>
                    <div class="trunsk-4">
                      <div
                        color="linear-gradient(90deg, #0272d9 1.59%, #42a3fd 93.04%)"
                        class="trunsk-8 blue-background-round-1"
                      ></div>
                      <div class="trunsk-13">3 weeks</div>
                    </div>
                    <div class="trunsk-9">Turnkey exchange setup price</div>
                  </div>
                  <div class="trunsk-10 ">
                    <div class="trunsk-11 "></div>
                    <Image className="" src={ThirdImg} alt="ThirdImg" />
                    <div class="trunsk-12 ">Faster</div>
                  </div>
                </div>
                <div class="trunsk-14">
                  <svg
                    width="8"
                    height="116"
                    viewBox="0 0 8 116"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.511719"
                      width="7"
                      height="115"
                      fill="#01B890"
                    ></rect>
                  </svg>
                  <p class="">
                    Opting for a turnkey cryptocurrency exchange solution can
                    save you both time and money. Instead of investing in the
                    development of your own exchange, you can launch your
                    business a year earlier and use the savings for marketing
                    and legal services. This will increase your chances of
                    success and give you the opportunity to assess demand from
                    real customers before committing to your own development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
