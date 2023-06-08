import React from "react";
import { Nav, Tab } from "react-bootstrap";
import MS1 from "../../../assests/ment-solution/ments/trader.png";
import MS2 from "../../../assests/ment-solution/ments/4.ae5403aa.png";
import MS3 from "../../../assests/ment-solution/ments/stake-img.png";
import MS4 from "../../../assests/ment-solution/ments/3.1324b682.png";
import MS5 from "../../../assests/ment-solution/ments/wallet.png";
import MS6 from "../../../assests/ment-solution/ments/stake.png";
import Image from "next/image";
const MentSolutions = () => {
  return (
    <section className="solutionment p-y-100">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1>Full-line Modules Supporting Exchange Turnkey</h1>
          </div>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row ">
            <div className="col-lg-3">
              <div className="ment-slotion">
                <Nav variant="pills" className="">
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="first">
                      <div className="d-flex justi">
                      <Image className="" src={MS1} alt="" />
                        <div className="ms-2">Spot Trading System </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="second">
                      <div className="d-flex justi">
                        <Image className="" src={MS2} alt="" />
                        <div className="ms-2">OTC Trading System</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="third">
                      <div className="d-flex justi">
                        <Image className="" src={MS3} alt="" />
                        <div className="ms-3">
                          Automated Liquidity Aggregation Bot
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className=" d-flex w-100">
                    <Nav.Link eventKey="forth">
                      <div className="d-flex justi">
                        <Image className="" src={MS4} alt="" />
                        <div className="ms-2">Mining Pool System</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="six">
                      <div className="d-flex justi">
                        <Image className="" src={MS5} alt="" />
                        <div className="ms-2">All-In-One Wallet System</div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-flex w-100">
                    <Nav.Link eventKey="seven">
                      <div className="d-flex justi">
                        <Image className="" src={MS6} alt="" />
                        <div className="ms-3">
                          Cryptocurrency Staking System
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="text-left ">
                <Tab.Content className=" margins-tabs">
                  <Tab.Pane eventKey="first">
                    <h4 className="ment-titles">
                      Optimized Matchmaking Engine
                    </h4>
                    <p>
                      The matching engine of the platform is highly capable,
                      boasting the ability to handle up to 50,000 transactions
                      per second for each trading pair.
                    </p>
                    <h4 className="ment-titles">
                      Transaction in the Professional Sphere
                    </h4>
                    <p>
                      The platform also supports third-party created technical
                      analysis tools such as K-lines and customized technical
                      analysis tools, in addition to API orders and strategy
                      orders.
                    </p>
                    <h4 className="ment-titles">
                      Functions Supporting the Mission
                    </h4>
                    <p>
                      The platform offers support for a centralized financial
                      system, wallets, and risk management control systems. It
                      also enables the trade of all popular coins and their
                      tokens, with an auditing system in place to ensure the
                      seamless functioning of the system. Additionally, it
                      provides a fast and reliable deployment and implementation
                      process.
                    </p>
                    <h4 className="ment-titles">Multi-Mode Transactions</h4>
                    <p>
                      This allows for greater flexibility and convenience for
                      users who can engage in both types of transactions, buy
                      fiat currencies with no minimum limit, and take advantage
                      of the platform&apos;s financial system, centralized wallets,
                      and risk control measures for a seamless and secure
                      experience.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h4 className="ment-titles">What is OTC Desk?</h4>
                    <p>
                      Our OTC trading service provides enhanced liquidity and a
                      confidential, tailored experience to institutions and high
                      net worth individuals who require executing substantial
                      orders.
                    </p>
                    <h4 className="ment-titles">
                      High Volume Professional Transactions
                    </h4>
                    <p>
                      The OTC desk offers confidential, secure, and highly
                      competitive execution and settlement services for large
                      trades, regardless of the size or currency, be it
                      $100,000, €10,000,000 or 2,000 Bitcoin.
                    </p>
                    <h4 className="ment-titles">Safety Guaranteed</h4>
                    <p>
                      This helps ensure that all transactions are secure and
                      compliant with established risk management protocols. The
                      real-time calculation of risk rates also provides valuable
                      insights into potential financial risks, allowing traders
                      and institutions to make informed decisions.
                    </p>
                    <h4 className="ment-titles">Full Asset Support</h4>
                    <p>
                      This provides a wide range of options and flexibility for
                      clients to meet their trading needs and goals.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h4 className="ment-titles">Leading Liquidity System</h4>
                    <p>
                      The OTC desk provides deep liquidity and support for over
                      100 mainstream and popular currency pairs, offering top
                      trading depth and real-time K-line charts for a seamless
                      trading experience.
                    </p>
                    <h4 className="ment-titles">
                      Professional Hedging Strategies
                    </h4>
                    <p>
                      Additionally, the exchange has the ability to implement
                      professional hedging strategies to effectively manage its
                      own positions.
                    </p>
                    <h4 className="ment-titles">
                      All Transaction Types are Supported
                    </h4>
                    <p>
                      The platform offers a comprehensive solution for managing
                      the liquidity of spot trading, futures trading, and OTC
                      trading.
                    </p>
                    <h4 className="ment-titles">
                      Transaction Fees Rate & Spread
                    </h4>
                    <p>
                      The platform allows for the customization of spreads and
                      commissions based on aggregate quotes, enabling the
                      adjustment and management of costs and revenues.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    <h4 className="ment-titles">Quick Setup to Start Mining</h4>
                    <p>
                      This platform offers the option of cloud mining for more
                      than 100 assets with ease, using your device.
                      Alternatively, you can also connect your own hardware to
                      the high-yielding mining pool.
                    </p>
                    <h4 className="ment-titles">Hardware Mining Made Easy</h4>
                    <p>
                      Alternatively, you can also opt to mine on the cloud using
                      your device and still enjoy high payouts from the mining
                      pool.
                    </p>
                    <h4 className="ment-titles">
                      Benefits of Global Pool Network
                    </h4>
                    <p>
                      Our high-performance mining pool is designed to maximize
                      your profits and make it easy for you to manage your
                      mining operations, regardless of whether you have your own
                      hardware or a datacenter. By connecting to our pool, you
                      can benefit from our advanced monitoring features and get
                      the best possible returns on your investment.
                    </p>
                    <h4 className="ment-titles">
                      Monitor your Mining Anytime, Anywhere
                    </h4>
                    <p>
                      Additionally, manage and monitor your mining operations
                      with ease by organizing your team&apos;s activity. Stay
                      informed with real-time statistics such as earnings, hash
                      rate, and workers, all from the convenience of your mobile
                      device.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="six">
                    <h4 className="ment-titles">
                      Multiple Main Chain Currencies Support
                    </h4>
                    <p>
                      Our platform offers a single wallet solution for over 100
                      main chain currencies, making it easier for users to
                      manage their digital assets and reducing the complexity of
                      holding multiple wallets.
                    </p>
                    <h4 className="ment-titles">
                      Full Sync to your Exchange Wallet
                    </h4>
                    <p>
                      Our wallet system not only allows for peer-to-peer
                      transactions, but also has an auto-syncing feature that
                      ensures the wallet stays up-to-date with the exchange
                      wallet at all times. This one-stop solution supports over
                      100 main chain currencies, making it easy to manage and
                      lower the barrier for users to manage their digital
                      assets.
                    </p>
                    <h4 className="ment-titles">Payment System</h4>
                    <p>
                      The platform also supports the publishing of lock-up
                      activities and the setting of unlock rules. This allows
                      users to participate in these activities during the
                      lock-up period and receive their rewards in the form of
                      cryptocurrencies, based on the specified unlock rules.
                    </p>
                    <h4 className="ment-titles">Financial Management System</h4>
                    <p>
                      The platform offers demand/term wealth management options
                      for digital currencies. The interest rates and lock-up
                      terms can be customized to maintain or steadily increase
                      the value of assets in a low-risk manner, catering to the
                      investment needs of users.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seven">
                    <h4 className="ment-titles">
                      Fixed Income Solutions for Crypto Asset Investors
                    </h4>
                    <p>
                      Our platform offers a non-custodial solution for staking
                      and lending of digital assets, allowing investors to
                      generate returns on their investments in a wide range of
                      cryptocurrencies.
                    </p>
                    <h4 className="ment-titles">Broadest Asset Coverage</h4>
                    <p>
                      Our platform supports more than 100 assets, providing
                      investors with a wide range of options to earn rewards
                      through staking and Defi lending.
                    </p>
                    <h4 className="ment-titles">Optimal Rewards</h4>
                    <p>
                      Our custom algorithms allow us to maximize rewards by
                      taking into account the specific characteristics of each
                      supported chain or protocol.
                    </p>
                    <h4 className="ment-titles">
                      Turnkey Staking & Defi Lending
                    </h4>
                    <p>
                      Our platform provides fixed income services for over 30
                      PoS and defi assets by leveraging its high-availability
                      infrastructure, 24/7 devops support, comprehensive APIs,
                      audited smart contracts, and block-level reporting.
                    </p>
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
