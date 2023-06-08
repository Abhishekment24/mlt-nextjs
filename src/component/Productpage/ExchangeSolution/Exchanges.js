import React, { useState, useCallback, useEffect } from "react";
import ExchangeComponent from "../ExchangeSolution";

const ExchangeSolution = () => {
  const [productDropdownOpen, setProductOpen] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [lockActive, setLockActive] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProductDropdown = useCallback((val) => {
    setProductOpen(val);
  }, []);

  const handleAssets = useCallback((val) => {
    setSelectedAsset(val);
  }, []);

  const handleLockState = useCallback((val) => {
    setLockActive(val);
  }, []);

  return (
    <ExchangeComponent
      fixedTop={scrollPosition > 300}
      selectedAsset={selectedAsset}
      productDropdownOpen={productDropdownOpen}
      handleProductDropdown={handleProductDropdown}
      handleAssets={handleAssets}
      lockActive={lockActive}
      handleLockState={handleLockState}
    />
  );
};

export default ExchangeSolution;
