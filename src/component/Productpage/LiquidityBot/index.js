import React from "react";
import Hero from "./Heroform";
import TurnkeyAdvantages from "./TurnkeyAdvantages";
import MultiSecurity from "../ExchangeSolution/MultiSecurity";
import AntiFraud from "./AntiFraud";
import TradingEngier from "./TradingEngine";
import Description from "./Description";
import DarkSection from "./DarkSection";

import LetsTalks from "../../LetsTalk/LetsTalk";
const ExchangeSolution = ({ lockActive, handleLockState }) => {
  return (
    <div className=" product-new">
      <Hero />

      <Description />
      <DarkSection />

      <TurnkeyAdvantages />
      <MultiSecurity />
      <AntiFraud lockActive={lockActive} handleLockState={handleLockState} />
      <TradingEngier />
      <LetsTalks />
      
    </div>
  );
};

export default ExchangeSolution;
