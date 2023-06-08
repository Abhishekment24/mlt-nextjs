import React from "react";
import { ListItem } from "./style.css/coin";
import FirstTabImg from "../../../assests/img/BusinessModel.svg";
import SecondTabImg from "../../../assests/img/Asset 3.png";
import ThirdTabImg from "../../../assests/img/Asset 1.png";
import FourthTabImg from "../../../assests/img/RiskControl.svg";
import FifthTabImg from "../../../assests/img/SharedTransaction.svg";
import Image from "next/image";
const Coins = ({ selectedAsset, handleAssets }) => {
  const data = [
    <>
      <div className="text-white  LeftDiv ">
        <h2 className="mb-2 text-white">A Clearly Defined Business Model</h2>
        <p className="">
          We are focused on providing blockchain technology services to global
          customers, with a focus on B-end clients. Currently, we do not operate
          any exchange and there are no plans to open one in the future.
        </p>
      </div>
      <div width="90%" className="RightDiv">
      <Image className="owls-image" src={FifthTabImg} alt="..." />
      </div>
    </>,

    <>
      <div className="text-white LeftDiv">
        <h2 className="mb-2 text-white">
          Deployment Options that are Flexible
        </h2>
        <p className="">
          Our services include private and SaaS deployment options for a
          seamless and efficient setup of the entire exchange system, or
          specific functional modules such as crypto-to-crypto transactions,
          leveraged trades, OTC deals, contract transactions, and ETFs.
        </p>
      </div>
      <div className="RightDiv">
      <Image className="owls-image" src={SecondTabImg} alt="..." />
      </div>
    </>,

    <>
      <div className="text-white LeftDiv">
        <h2 className="text-white">Liquidity Shared Between Transactions</h2>
        <p className="">
          Our company integrates the liquidity of over 300 eco-friendly
          exchanges managed by Ment Tech, which offers shared OTC liquidity and
          intelligent market-making services. We also offer standalone solutions
          for managing the liquidity of derivatives.
        </p>
      </div>
      <div className="RightDiv texting">
      <Image className="owls-image" src={ThirdTabImg} alt="..." />
      </div>
    </>,

    <>
      <div className="text-white LeftDiv ">
        <h2 className="mb-2 text-white">High Level of Safety & Risk Control</h2>
        <p className="">
          Our exchange platform offers over 30 security measures to ensure the
          protection of your funds. These measures include an independent risk
          control system, behavior monitoring, cash withdrawal audits, fund
          traceability, T + 1 withdrawal, strict signatures for each fund flow,
          a three-layer wallet system, DDoS defense, and flow cleaning, among
          others. These measures are put in place to ensure the full security of
          your funds.
        </p>
      </div>
      <div className="RightDiv texting">
      <Image className="owls-image" src={FourthTabImg} alt="..." />
      </div>
    </>,

    <>
      <div className="LeftDiv text-white ">
        <h2 className="mb-2">Service in Multiple Dimensions</h2>
        <p className="">
          We offer comprehensive support to ensure a seamless experience for our
          customers. Before sales, we provide one-on-one training to ensure a
          thorough understanding of our services. During the sales process,
          customers receive guidance from dedicated support staff. And, after
          sales, we offer round-the-clock online support and quick response to
          any problems or feedback.
        </p>
      </div>
      <div className="RightDiv texting">
      <Image className="owls-image" src={FirstTabImg} alt="..." />
      </div>
    </>,
  ];

  return (
    <>
      <section className="p-y-100 " id="hire-dev-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-white">
              <h1 className="">Features</h1>
            </div>
          </div>

          <div className="">
            <ul className="cropto-ul text-white">
              <ListItem
                selected={selectedAsset === 0}
                onClick={() => handleAssets(0)}
              >
                Business Model
              </ListItem>
              <ListItem
                selected={selectedAsset === 1}
                onClick={() => handleAssets(1)}
              >
                Deployment Options that are Flexible
              </ListItem>
              <ListItem
                selected={selectedAsset === 2}
                onClick={() => handleAssets(2)}
              >
                Liquidity Shared Between Transactions
              </ListItem>
              <ListItem
                selected={selectedAsset === 3}
                onClick={() => handleAssets(3)}
              >
                High level of Safety and Risk Control
              </ListItem>
              <ListItem
                selected={selectedAsset === 4}
                onClick={() => handleAssets(4)}
              >
                Service in Multiple Dimensions
              </ListItem>
            </ul>
          </div>
          <div className="BottomContainer">{data[selectedAsset]}</div>
        </div>
      </section>
    </>
  );
};

export default Coins;
