import React from "react";
import Hero from "./Heroform";
import Products from "./Products";
import Coins from "./Coins";

import TurnkeyAdvantages from "./TurnkeyAdvantages";

import StructureSlider from "./StructureSlider";
import MultiSecurity from "./MultiSecurity";
import ReliableHosting from "./ReliableHosting";

import AntiFraud from "./AntiFraud";
import LetsTalks from "../../LetsTalk/LetsTalk";


const ExchangeSolution = ({
  productDropdownOpen,
  handleProductDropdown,
  selectedAsset,
  handleAssets,
  fixedTop,

  lockActive,
  handleLockState,
}) => {
  return (
    <div className="product-new">
      <Hero />
      {/*<Tabs fixedTop={fixedTop} />*/}
      <Products
        productDropdownOpen={productDropdownOpen}
        handleProductDropdown={handleProductDropdown}
      />
      <Coins selectedAsset={selectedAsset} handleAssets={handleAssets} />

      <TurnkeyAdvantages />

      <StructureSlider />
      <MultiSecurity />
      <AntiFraud lockActive={lockActive} handleLockState={handleLockState} />
      <ReliableHosting />
      <LetsTalks />
     
    </div>
  );
};

export default ExchangeSolution;
