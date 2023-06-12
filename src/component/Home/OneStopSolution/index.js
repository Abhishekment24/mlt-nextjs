import Link from "next/link";
import React from "react";

const OneStopSolution = () => {
  return (
    <section className="onestopsolution p-y-100" id="One-Stop Solution">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="title-block text-white">
              <h1 className="mb-4 text-capitalize">
                One-Stop <span className="">Solution</span>
              </h1>
              <p className="">
                Ment Tech leads the enterprise blockchain ecosystem with its
                expertise in software engineering. Our innovative
                blockchain-based solutions have transformed the operations of
                top financial institutions, governments, and corporations
                globally. Our comprehensive offerings include blockchain
                training, strategic advisory services, development and
                implementation, and joint ventures and co-development. Whether
                you&apos;re looking for blockchain consulting or comprehensive
                services, we are ready to support you on your journey to harness
                the power of blockchain technology. Contact us today to learn
                more.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <div className="boxs">
                  <div className="one-block pink">
                    <div className="one-block-content">
                      <h2>Crypto Exchange Turnkey</h2>
                      <p className="onsetp">
                        Ment Tech is a pioneering company in the provision of
                        White Label Exchange Solutions. We offer comprehensive
                        information about our product offerings, risk management
                        systems, competent teams and deployment process ...
                      </p>
                      <Link href="/crypto-exchange-turnkey-solution">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="boxs">
                  <div className="one-block green">
                    <div className="one-block-content">
                      <h2>Crypto Liquidity Solution</h2>
                      <p className="onsetp">
                        Liquidity refers to the ease with which an asset can be
                        converted into cash on financial markets. In the context
                        of cryptocurrencies, liquidity refers to the ease with
                        which a cryptocurrency can be bought or sold price...
                      </p>
                      <Link href="/cryptocurrency-liquidity-solution">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <div className="boxs">
                  <div className="one-block min-boxes blue margin-one">
                    <div className="one-block-content">
                      <h2>Bitcoin Ordinals NFT Marketplace & Wallet</h2>
                      <p className="">
                        Experience our comprehensive range of development
                        solutions tailored to the Bitcoin network. Our offerings
                        include Ordinals Launchpad, Ordinals Marketplace,
                        Ordinals Wallet, BRC-20 Tokens, BRC20 Indexer &
                        Explorer, BRC-721, and a host of other services,
                        covering all aspects of the Bitcoin ecosystem.
                      </p>
                      <Link href="/otc-trading-system">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStopSolution;
