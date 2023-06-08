import React from "react";
import Image from "next/image";
import { Nav, Tab } from "react-bootstrap";
import MS1 from "../../../assests/ment-solution/1.png";
import MS2 from "../../../assests/ment-solution/2.png";
import MS3 from "../../../assests/ment-solution/3.png";
import MS4 from "../../../assests/ment-solution/4.png";
import MS5 from "../../../assests/ment-solution/5.png";
import MS6 from "../../../assests/ment-solution/6.png";
import MS7 from "../../../assests/ment-solution/7.png";
import MS8 from "../../../assests/ment-solution/8.png";
import MS9 from "../../../assests/ment-solution/9.png";
import MS10 from "../../../assests/ment-solution/10.png";
import MS11 from "../../../assests/ment-solution/Group 1820.png";
import Nft from "../../../assests/b-m-n/graphics – 3.png";
import Port1 from "../../../assests/ment-solution/Update/Cryptocurrency Exchange Turnkey.png";
import Port2 from "../../../assests/ment-solution/Update/Crypto Liquidity Solution.png";
import Port3 from "../../../assests/ment-solution/Update/Mining Pool System.png";
import Port4 from "../../../assests/ment-solution/Update/OTC Platform Turnkey.png";
import Port5 from "../../../assests/ment-solution/Update/Refferal & Affiliate System.png";
import Port6 from "../../../assests/ment-solution/Update/Crypto Banking Solution (1).png";
import Port7 from "../../../assests/ment-solution/Update/NFT Marketplace.png";
import Port9 from "../../../assests/ment-solution/Update/Decentralized Exchange.png";
import Port10 from "../../../assests/ment-solution/Update/NFT Launchpad-done.png";
import Port8 from "../../../assests/ment-solution/Update/Token Launchpad.png";
import Link from "next/link";
const MentSolutions = () => {
  return (
    <section className="ment-black-bg p-y-100">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1>Ment Tech Solutions</h1>
            <p>
              Our comprehensive solution offering encompasses both
              infrastructure development and ecosystem support, aimed at helping
              innovative businesses that are looking to utilize blockchain
              technology. Our goal is to reduce entry barriers and enhance
              cost-effectiveness for these organizations
            </p>
          </div>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="ment-slotion">
                <Nav variant="pills" className="">
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="first">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS1} alt="" />
                        <div>Cryptocurrency Exchange Turnkey</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="second">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS2} alt="" />
                        <div>Crypto Liquidity Solution</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="third">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS3} alt="" />
                        <div>Mining Pool System</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" d-flex w-100">
                    <Nav.Link eventKey="forth">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS4} alt="" />
                        <div>OTC Platform Turnkey</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="six">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS5} alt="" />
                        <div>Referral & Affiliate System</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="seven">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS6} alt="" />
                        <div>Crypto Banking Solution</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="eight">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS7} alt="" />
                        <div>NFT Marketplace</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="nine">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS8} alt="" />
                        <div>Decenterlized Exchange</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="ten">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS9} alt="" />
                        <div>NFT LaunchPad</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="elavan">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS10} alt="" />
                        <div>Token LaunchPad</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="twelve">
                      <div className="d-flex justi">
                        <Image className="mx-1 me-3" src={MS11} alt="" />
                        <div>Bitcoin Ordinals NFT Marketplace & Wallet</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="text-left ">
                <Tab.Content className="texting">
                  <Tab.Pane eventKey="first">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port1}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      Cryptocurrency Exchange Turnkey
                    </h2>
                    <p>
                      White-label exchange solutions are the core business of
                      the Ment Tech Group. Product portfolios, risk management
                      systems, applicable teams, and deployment processes are
                      explained in detail on this page.
                    </p>
                    {/* <p>
                      Our focus is on providing blockchain technology services
                      to global customers, with B-end customers at the core of
                      what we do. There is no exchange open by us at the moment,
                      and none will be opened.
                    </p>*/}
                    <Link
                      href="/crypto-exchange-turnkey-solution"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port2}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      Cryptocurrency Liquidity Solution
                    </h2>
                    <p>
                      The liquidity of an asset is defined by the ease with
                      which it can be converted into cash without difficulty on
                      the financial markets. In the context of cryptocurrencies,
                      liquidity is the ability to convert a coin into cash or
                      another currency as quickly as possible. Cryptocurrencies,
                      as well as all other tradable assets, require liquidity.
                      Due to low liquidity levels, cryptocurrency prices spike
                      during times of market volatility. On the other hand, if
                      liquidity is high, the market is stable, and there are few
                      fluctuations in price.
                    </p>
                    <Link
                      href="cryptocurrency-liquidity-solution"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port3}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      Mining Pool Solution for Crypto Exchanges
                    </h2>
                    <p>
                      Without a deep understanding of cryptocurrency mining,
                      anyone can start mining. It features a very simple
                      interface and is tailored for ease of use. Miners are
                      connected to an exchange platform with the Ment Fintech
                      open marketplace for mining power.
                    </p>
                    <Link
                      href="/mining-pool-solution-crypto-exchange"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port4}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">OTC Platform Turnkey</h2>
                    <p>
                      By definition, over-the-counter (OTC) trading is a
                      transaction between two parties that does not require the
                      oversight of an exchange.
                    </p>
                    <Link href="/otc-trading-system" className="btn btn-primary">
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="six">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port5}
                      alt=""
                    />
                    <h2 className="mt-5">
                      Referral & Affiliate System for Crypto Exchanges
                    </h2>
                    <p>
                      It&apos;s our Affiliate & Referral system that is the most
                      effective and cost-effective on the market for any
                      Cryptocurrency Exchange looking for a 100% affiliate /
                      referral plugin.
                    </p>
                    <Link
                      href="/referral-platform-crypto-exchange"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seven">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port6}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      Digital & Crypto Banking Solution
                    </h2>
                    <p>
                      By digitizing significant parts of their customer service
                      operations, financial institutions could save significant
                      amounts of money on their physical infrastructure and
                      hiring costs. Due to new social distancing expectations,
                      it is imperative that qualified banking services be
                      provided to customers completely remotely.
                    </p>
                    <Link
                      href="/digital-and-crypto-banking"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eight">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port7}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      NFT MarketPlace Software Platform
                    </h2>
                    <p>
                      Do you want to start an NFT company? Trust the experts to
                      design, build, and operate your NFT Crypto Marketplace for
                      you
                    </p>
                    <p>
                      Ment Tech will assist you in developing an NFT
                      (Non-Fungible Token) Crypto Marketplace platform in order
                      to provide your customers with the ability to buy and sell
                      collectibles, jewelry, art, valuables, stocks, bonds and
                      other securities backed by NFT tokens.
                    </p>
                    <Link
                      href="/nft-marketplace-software-platform"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="nine">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port9}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      Cryptocurrency Decentralized Exchange Software (DEX)
                    </h2>
                    {/* <p>
                      As more centralized exchange platforms have launched,
                      there has been an increase in both crypto awareness and
                      security challenges.
                    </p>*/}
                    <p>
                      Crypto exchange hacks are still fresh in the minds of
                      everyone who was shaken by the wave and showed that
                      safekeeping crypto assets, or any assets for that matter,
                      is a challenging task. In a recent hack, a significant
                      portion of exchange funds were stolen. Too many exchanges
                      have fallen victim to outside or internal attacks.
                    </p>
                    <Link
                      href="/decentralized-crypto-exchange-platform"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ten">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port10}
                      alt=""
                    />
                    <h2 className="ment-titles mt-5">
                      NFT LaunchPad Development
                    </h2>
                    <p>
                      With our expertise in NFT launchpad development, we can
                      assist your business in gaining a competitive advantage in
                      the NFT market and uncovering new business opportunities.
                      A strong NFT launchpad platform can establish your
                      business as a reputable player in the NFT community.
                      Contact our experts now to bring your NFT vision to
                      reality
                    </p>
                    <Link href="/token-launchpad" className="btn btn-primary">
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="elavan">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Port8}
                      alt=""
                    />
                    <h2 className="mt-5">Token Launchpad Platform</h2>
                    <p>
                      Our Ment Token launchpad can be used by ventures to assist
                      fundraising campaigns. No coding knowledge is required,
                      making the platform launchpad among the masses!
                    </p>
                    <Link
                      href="/decentralized-crypto-exchange-platform"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twelve">
                    <Image
                      className="ments-Image"
                      width="600px"
                      src={Nft}
                      alt=""
                    />
                    <h2 className="mt-5">
                      Bitcoin Ordinals NFT Marketplace & Wallet Solution
                    </h2>
                    <p>
                      Production-ready Ordinals NFT Marketplace & Wallet
                      solution that allows you to keep up with the rapidly
                      moving ordinals industry, providing a complete ecosystem
                      for the community.
                    </p>
                    <Link
                      href="/Bitcoin-Ordinals-NFT-Marketplace-Wallet"
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
};
export default MentSolutions;
