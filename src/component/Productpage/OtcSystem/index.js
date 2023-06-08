import React from "react";
import Hero from "./Heroform";
import TradingEngine from "../LiquidityBot/TradingEngine";

import TurnkeyAdvantages from "./TurnkeyAdvantages";
import MultiSecurity from "../ExchangeSolution/MultiSecurity";

import AntiFraud from "./AntiFraud";

import Description from "./Description";
import DarkSection from "./DarkSection";

import TheProblem from "./TheProblem";
import TheSolution from "./TheSolution";
import QuickTour from "./QuickTour";
import IndustryLeading from "../MiningPool/IndustryLeading";
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
      <DarkSection />
      <TheProblem />
      <TheSolution />
      <QuickTour />
      <IndustryLeading />
      <TrustedPartners />

      <TurnkeyAdvantages />
      <MultiSecurity />
      <AntiFraud lockActive={lockActive} handleLockState={handleLockState} />
      <TradingEngine />
      <LetsTalks />
      
    </div>
  );
};

export default ExchangeSolution;
