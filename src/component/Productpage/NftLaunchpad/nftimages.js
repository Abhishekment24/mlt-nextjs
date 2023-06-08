import React from "react";
import Image from "next/image";
import aur from "../../../assests/Portfolioimages/NFTMarketplaces/ANGELDUSTs.png";
import auri from "../../../assests/Portfolioimages/NFTMarketplaces/CLUBRARE.png";
import beta from "../../../assests/Portfolioimages/NFTMarketplaces/DELICIAE.png";
import clu from "../../../assests/Portfolioimages/NFTMarketplaces/ECOSWAPNFTMARKETPLACE.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  margin: 30,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Ntimages = () => {
  return (
    <div>
      <div>
        <section className="p-y-100" id="hire-background">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="text-center mb-5">
                  <h1 className="">
                    NFT launchpad Development VS White Label NFT Launchpad
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="diffvs px-3 py-3">
                  <h3>NFT Launchpad Development</h3>
                  <p>
                    Building it requires all the steps in the development
                    process to be fulfilled
                  </p>
                  <p>The cost of developing it is comparatively higher</p>
                  <p>
                    Time taken to develop an NFT launchpad from scratch is
                    comparatively higher
                  </p>
                  <p>
                    You can decide on every feature of the NFT launchpad
                    platform
                  </p>
                  <p>
                    You will get a one-of-a-kind NFT launchpad platform as a
                    result
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center justify-content-center">
                <div className="vs">
                  <h1 className="vs-magin">VS</h1>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="diffvs px-3 py-3">
                  <h3>White Label NFT Launchpad</h3>
                  <p>
                    The solution is built and tested beforehand, reducing the
                    burden related to development
                  </p>
                  <p>The cost of launching it is comparatively lower</p>
                  <p>
                    Time taken to launch from a white label NFT launchpad is
                    comparatively lower
                  </p>
                  <p>
                    You can modify the user-end of the pre-built NFT launchpad
                    platform
                  </p>
                  <p>
                    You will get a platform similar to a popular NFT launchpad
                    venture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blue-bg" id="NFT-Marketplaces">
          <div className="container">
            <div className="awards">
              <div className="container">
                <div className="row py-5">
                <div className="col-lg-12 text-white text-center">
                    <h1>Ment NFT Portfolio</h1>
                    <Slider {...settings}>
                      <div class="item">
                        <Image className="owls-image" src={aur} alt="" />
                      </div>
                      <div class="item">
                        <Image className="owls-image" src={auri} alt="" />
                      </div>
                      <div class="item">
                        <Image className="owls-image" src={clu} alt="" />
                      </div>
                      <div class="item">
                        <Image className="owls-image" src={beta} alt="" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ntimages;
