import React from "react";
import Hero from "./Heroform";
import Coins from "./Coins";
import TradingEngine from "../LiquidityBot/TradingEngine";

import TurnkeyAdvantages from "./TurnkeyAdvantages";
import MultiSecurity from "../ExchangeSolution/MultiSecurity";

import Description from "./Description";
import TheSolution from "./TheSolution";
import IndustryLeading from "./IndustryLeading";
import TrustedPartners from "./TrustedPartners";

import LetsTalks from "../../LetsTalk/LetsTalk";
const ExchangeSolution = ({ selectedAsset, handleAssets, fixedTop }) => {
  return (
    <div className="product-new">
      <Hero />

      <Description />
      <TheSolution />
      <Coins selectedAsset={selectedAsset} handleAssets={handleAssets} />

      <IndustryLeading />
      <TrustedPartners />

      <TurnkeyAdvantages />
      <MultiSecurity />
      <TradingEngine />
      <LetsTalks />
      
    </div>
  );
};

export default ExchangeSolution;
