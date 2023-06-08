import React from "react";
import Hero from "./Heroform";
import TradingEngine from "../LiquidityBot/TradingEngine";

import TurnkeyAdvantages from "./TurnkeyAdvantages";

import AntiFraud from "./AntiFraud";

import Description from "./Description";
import TheSolution from "./TheSolution";
import IndustryLeading from "./IndustryLeading";
import TrustedPartners from "../MiningPool/TrustedPartners";
import LetsTalks from "../../LetsTalk/LetsTalk";
const ExchangeSolution = ({
  fixedTop,

  lockActive,
  handleLockState,
}) => {
  return (
    <div className="product-new">
      <Hero />

      <Description />
      <TheSolution />

      <IndustryLeading />
      <TrustedPartners />
      <TurnkeyAdvantages />
      <AntiFraud lockActive={lockActive} handleLockState={handleLockState} />
      <TradingEngine />
      {/*  <WorkBest />*/}
      <LetsTalks />
     
    </div>
  );
};

export default ExchangeSolution;
