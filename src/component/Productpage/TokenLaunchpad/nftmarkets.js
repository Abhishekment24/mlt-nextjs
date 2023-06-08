import React from "react";
import Tokenocn1 from "../../../assests/tl-1.png";
import Tokenocn2 from "../../../assests/tl-2.png";
import Tokenocn3 from "../../../assests/tl-3.png";
import Tokenocn4 from "../../../assests/tl-4.png";
import Tokenocn5 from "../../../assests/tl-5.png";
import Tokenocn6 from "../../../assests/tl-6.png";
import Tokenocn7 from "../../../assests/tl-7.png";
import Tokenocn8 from "../../../assests/tl-8.png";
import Tokenocn9 from "../../../assests/tl-9.png";
import Tintro from "../../../assests/Aboutusimg/second.png";
import Image from "next/image";
const Nftmarkets = () => {
  return (
    <div>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="mb-5">Token launchpad An Introduction</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div>
                <p className="">
                  Token Launchpad is a decentralized platform that allows users
                  to create and sell tokens on multiple blockchains without
                  needing coding knowledge. It offers a variety of features such
                  as automated listing, token locking in liquidity pools, and
                  vesting periods. The platform supports Ethereum, Polygon,
                  Binance Smart Chain (BSC), Avalanche, KuCoin, Cronos, and
                  Fantom blockchains. The native token of the platform will be
                  your own token.
                </p>
                <p>
                  Token Launchpad is a platform based on the feature-rich Ment
                  platform, with the goal of providing startups with an easy and
                  accessible option for creating and selling tokens. The
                  platform is relatively new, giving venture owners an advantage
                  over potential competition. Our experts have conducted
                  extensive research to create a ready-to-launch version of the
                  platform that is customizable and secure. The solution can be
                  tailored to fit specific business requirements and launched
                  quickly at a lower cost than developing a launchpad from
                  scratch.
                </p>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <Image className="bitc-img" src={Tintro} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-y-100" id="hire-dev-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-white">
              <div className="text-center">
                <h1 className="">
                  Exemplary Features of Our Token Launchpad Solution
                </h1>
              </div>
            </div>
          </div>
          <div className="row pt-4 justify-content-center">
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn1} alt="" />
                    <h2>Tokens</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad allows users to easily create and
                      launch their project tokens on multiple blockchains with
                      just a few clicks. They can also list their tokens on
                      popular decentralized exchanges (DEXs) and centralized
                      exchanges (CEXs) using the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn2} alt="" />
                    <h2>Launchpads</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad solution, similar to PinkSale, also
                      gives users the ability to create their own launchpads
                      with various features to conduct token sales without the
                      need for coding knowledge. This allows users to easily
                      launch and sell their tokens on multiple blockchains,
                      without needing technical expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn3} alt="" />
                    <h2>Presale Vesting</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad solution enables projects to lock
                      tokens for teams and presales, which helps to prevent rug
                      pulls and stabilize the token price. This feature provides
                      investors with added security and helps to safeguard their
                      investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn4} alt="" />
                    <h2>Fair Launch </h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad solution also includes a feature that
                      allocates a fixed price for a project&apos;s tokens after the
                      token sale event, which helps to prevent pump-and-dump
                      actions by malicious actors. This feature helps to ensure
                      a fair and stable token price for investors, protecting
                      them from potential market manipulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn5} alt="" />
                    <h2>Dutch Auction</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      The Token launchpad includes a Dutch auction feature,
                      which is based on descending bidding for a project&apos;s
                      tokens. This type of auction benefits businesses more as
                      it allows them to sell tokens at the highest possible
                      price and gives investors the opportunity to purchase
                      tokens at a fair market value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn6} alt="" />
                    <h2>Subscription </h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      In a Token Launchpad, the subscription feature provides
                      investors with a proportion of tokens based on the amount
                      of cryptocurrency they committed, compared to the total
                      amount committed by all investors.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn7} alt="" />
                    <h2>Private Sale</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad solution also allows projects to sell
                      tokens to selected investors, which is a useful feature
                      that allows projects to provide benefits such as bonuses
                      or discounts to investors who have gained them through
                      community contests or other promotional activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn8} alt="" />
                    <h2>Airdrop</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad also allows projects to airdrop tokens
                      to community members through giveaways in a secure and
                      decentralized manner. This feature can be used as a
                      promotion tool to increase community engagement and
                      increase awareness of the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="t-f-block">
                <div class="c-info-box">
                  <div class="box-img">
                    <Image src={Tokenocn9} alt="" />
                    <h2>Multi-Sender</h2>
                  </div>
                  <div class="category-text text-white">
                    <p>
                      Our Token launchpad solution also includes a bulk
                      transaction feature, which enables projects to send tokens
                      to multiple wallet addresses at the same time. This
                      feature allows for efficient distribution of tokens to a
                      large number of recipients, and also provides options for
                      conducting transactions for unlimited times or just one
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" p-y-100 blue-bg" id="">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="title-block text-white">
                <h1 className="mb-5 text-capitalize one-step">
                  Advantages that a Token Launchpad Offers to Businesses
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="one-blocks pink text-white mb-4 height-boxes-block">
                <h2>Community Participation</h2>
                <p>
                  A Token launchpad offers businesses the opportunity to utilize
                  its community for various processes inside the platform, which
                  helps to ensure that the platform remains truly decentralized.
                  This allows businesses to tap into the wisdom of the crowd and
                  benefit from the collective knowledge and expertise of the
                  community. For example, businesses can use the community to
                  help with marketing, community management, and even
                  development of new features.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="one-blocks green text-white mb-4 height-boxes-block">
                <h2>Partnerships</h2>
                <p>
                  Since a Token launchpad is decentralized, it can make it
                  easier for businesses to create partnerships with exchanges.
                  This is because decentralized platforms typically have a more
                  open and transparent structure, which can help to build trust
                  between businesses and exchanges. As a result, businesses that
                  use a Token launchpad may have an easier time getting their
                  tokens listed on major exchanges.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="one-blocks orange text-white mb-4 height-boxes-block">
                <h2>Fundraising Options</h2>
                <p>
                  Having a variety of fundraising options in a token launchpad
                  solution can enhance a venture&apos;s performance as it allows
                  projects to launch tokens in their own launchpads. This gives
                  businesses more flexibility and control over the fundraising
                  process, allowing them to choose the option that best suits
                  their needs. For example, some businesses may prefer to
                  conduct an ICO while others may choose to conduct an IEO or
                  STO. The ability to launch tokens in their own launchpads also
                  allows businesses to build a strong community and establish a
                  direct relationship with their investors.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="one-blocks yellow text-white mb-4 height-boxes-block">
                <h2>Multi-chain Support</h2>
                <p>
                  Multi-chain support is not only useful for users, but also for
                  businesses. By supporting multiple blockchains, the token
                  launchpad provides businesses with the flexibility to launch
                  their tokens on a variety of networks. This can help
                  businesses to reach a wider user base and expand their market
                  potential. For example, a business may choose to launch their
                  tokens on Ethereum, which has a large and established user
                  base, or on a newer blockchain such as Binance Smart Chain
                  (BSC), which may have lower fees and faster transaction times.
                  This can help businesses to reach new audiences and tap into
                  different markets.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nftmarkets;
