import React from "react";
import { ListItem } from "../ExchangeSolution/style.css/coin";
import SecondTabImg from "../../../assests/img/liquidity-FlexibleDeployment.svg";
import ThirdTabImg from "../../../assests/img/liquidity-Multi-Dimensional.svg";
import FourthTabImg from "../../../assests/img/liquidity-RiskControl.svg";
import FifthTabImg from "../../../assests/img/liquidity-BusinessModel.svg";
import Image from "next/image";
const Coins = ({ selectedAsset, handleAssets }) => {
  const data = [
    <>
      <div className="text-white  LeftDiv ">
        <h2 className="mb-2 text-white">
          Dashboard that is Easy to use and Efficient
        </h2>
        <p className="">
          Access crucial information with ease using our user-friendly
          dashboard. Start mining effortlessly with just a few clicks.
        </p>
      </div>
      <div width="90%" className="RightDiv texting">
        <Image className="" src={FifthTabImg} alt="FifthTabImg" />
      </div>
    </>,

    <>
      <div className="text-white LeftDiv ">
        <h2 className="mb-2 text-white">Device Monitoring</h2>
        <p className="">
          You have complete control over each device in your system. Keep track
          of important details such as temperature, load, fan speed, and
          profits, all in one place.
        </p>
      </div>
      <div className="RightDiv texting">
        <Image className="" src={SecondTabImg} alt="SecondTabImg" />
      </div>
    </>,

    <>
      <div className="text-white LeftDiv ">
        <h2 className="text-white">Benchmark</h2>
        <p className="">
          Evaluate the most profitable algorithms for your hardware through
          accurate benchmarking, or handpick the algorithms you prefer to
          support.
        </p>
      </div>
      <div className="RightDiv texting">
        <Image className="" src={ThirdTabImg} alt="ThirdTabImg" />
      </div>
    </>,

    <>
      <div className="text-white LeftDiv ">
        <h2 className="mb-2 text-white">Plugins</h2>
        <p className="">
          With the use of plugins, you can enhance your NiceHash Miner
          experience by incorporating third-party miners and transforming it
          into a cutting-edge mining solution.
        </p>
      </div>
      <div className="RightDiv texting">
        <Image className="" src={FourthTabImg} alt="FourthTabImg" />
      </div>
    </>,

    <></>,
  ];

  return (
    <section className="p-y-100 " id="hire-dev-background">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center text-white">
            <h1>Solution Features</h1>
          </div>
        </div>

        <div className="">
          <ul className="cropto-ul">
            <ListItem
              selected={selectedAsset === 0}
              onClick={() => handleAssets(0)}
            >
              Dashboard that is easy to use and Efficient
            </ListItem>
            <ListItem
              selected={selectedAsset === 1}
              onClick={() => handleAssets(1)}
            >
              Devices
            </ListItem>
            <ListItem
              selected={selectedAsset === 2}
              onClick={() => handleAssets(2)}
            >
              Benchmark
            </ListItem>
            <ListItem
              selected={selectedAsset === 3}
              onClick={() => handleAssets(3)}
            >
              Plugins
            </ListItem>
          </ul>
        </div>
        <div className="BottomContainer">{data[selectedAsset]}</div>
      </div>
    </section>
  );
};

export default Coins;
