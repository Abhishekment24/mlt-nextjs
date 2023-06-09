import React from "react";
import Image from "next/image";
import { Nftmart } from "../../Data/Data";
import Featus from "../../../assests/featurs.svg";
const Nftmarkets = () => {
  return (
    <div>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="texting-1">
                <h1 className="texting">What is an NFT Launchpad?</h1>
                <p className="">
                  NFT Launchpads are platforms that enable creators of
                  non-fungible tokens to raise funds at the early stages of
                  their projects. These platforms serve to support promising
                  projects, foster growth within the crypto industry, and
                  provide services to earn revenue. Essentially, they are
                  crowdfunding platforms that allow individuals to invest in NFT
                  projects that have not yet been released to the market.
                  Additionally, these platforms facilitate the minting and
                  storage of NFTs, and offer a more cost-effective option
                  compared to using smart contracts or NFT marketplaces. Some
                  popular NFT Launchpad examples include NFTb, NFTPad,
                  NFTLaunch, and NFTSolPad
                </p>
                <h2 className="pt-5">
                  Let’s Emphasize the Advantages of NFT Launchpads
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-3 justify-content-center">
            {Nftmart.edata.map((person) => {
              return (
                <div className="col-lg-6" key={person.id}>
                  <div className="nft-block">
                    <div className="py-3">
                      <h4>{person.name}</h4>
                      <p>{person.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="p-y-100" id="hire-dev-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-white">
              <div className="text-center">
                <h1 className="">How does an NFT Launchpad Function?</h1>
              </div>
            </div>
          </div>
          <div className="row pt-4 justify-content-center">
            <div className="col-lg-6 text-white">
              <p className="nfts-mar">
                NFT Launchpads are a new phenomenon in the world of blockchain
                and cryptocurrency. They are similar to other token sale
                platforms such as ICO, STO, IEO, IDO, and IGO, in that they
                provide a platform for startups to mint and sell their own
                tokens. However, NFT Launchpads are specifically designed for
                the creation and sale of non-fungible tokens (NFTs). These
                platforms offer a variety of tools and resources to help
                startups mint their NFTs and launch a successful token sale.
                Additionally, NFT Launchpads typically verify each project to
                ensure that it is reliable and promising, providing a level of
                security and trust for investors. This also helps investors find
                valuable NFT projects and buy tokens at more favorable prices.
                Overall, NFT Launchpads are a valuable resource for startups
                looking to launch their own NFT projects and for investors
                looking to find and invest in promising NFTs
              </p>
            </div>
            <div className="col-lg-4 text-white text-center">
              <Image src={Featus} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className=" p-y-100 blue-bg" id="">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-block text-white">
                <h1 className="mb-4 text-capitalize one-step">
                  Why You Should Embrace NFT Technology?
                </h1>
                <p className="">
                  With the widespread popularity of marketplace platforms across
                  different industries, NFTs and decentralized social media
                  platforms bring huge opportunities for the creator community,
                  enabling them to monetize their work in the best way possible.
                  Its key benefits are as follows
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="boxs">
                <div className="one-block pink onbl ">
                  <div className="one-block-content">
                    <h2>
                      NFT Makes an Investor’s Ownership of an Asset More Secure.
                    </h2>
                    <h1 className="text-white">23%</h1>
                    <p className="">
                      Reports show that the gaming segment generated the most
                      revenue in 2020 from selling NFTs, contributing to
                      approximately 23% of the total NFT sales revenue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="boxs pt-4">
                <div className="one-block green onbl ">
                  <div className="one-block-content">
                    <h2>
                      It Makes it Easy to Prove the Authenticity of a Digital
                      Asset.
                    </h2>
                    <h1 className="text-white">$24.9 Bn</h1>
                    <p class="">
                      Studies by leading institutes show that the total NFT
                      sales volume totaled around $24.9 billion in 2021, a
                      significant growth from $94.9 million in sales in 2020.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nftmarkets;
