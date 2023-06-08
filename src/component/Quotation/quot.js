import React, { useState, useEffect, useCallback } from "react";
import QuotationComponent from "../Quotation/Quotation";

import Getform from "../Quotation/Getform";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Quotation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [talkName, setTalkName] = useState("");
  const [talkEmail, setTalkEmail] = useState("");
  const [talkCompany, setTalkCompany] = useState("");
  const [talkPhone, setTalkPhone] = useState("");
  const [talkStatus, setTalkStatus] = useState("");
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoCompany, setDemoCompany] = useState("");
  const [demoPhone, setDemoPhone] = useState("");
  const [demoMessage, setDemoMessage] = useState("");
  const [demoStatus, setDemoStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [quotation, setQuotation] = useState(true);
  const [productsList, setProduct] = useState([
    {
      type: "Products",
      list: [
        {
          heading: "Cryptocurrency Exchange Turnkey",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "Crypto Liquidity Solution",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "OTC Platform Turnkey",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "Mining Pool System",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "NFT LaunchPad",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "Referral & Affiliate System",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "NFT Marketplace",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "Decenterlized Exchange",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "Crypto Banking Solution",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "ICO/IEO/STO",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
        {
          heading: "Token LaunchPad",
          description: "Source Codes can be Purchased Additionally",
          selected: false,
        },
      ],
    },
  ]);

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

  const handleSnackbar = useCallback(() => {
    setTimeout(() => {
      setTalkStatus("");
      setDemoStatus("");
    }, 3000);
  }, []);

  const handleTab = useCallback((val) => {
    setSelectedTab(val);
  }, []);

  const handleSelectedProduct = (val) => {
    let tempArr = [...productsList];
    tempArr[selectedTab].list[val].selected =
      !tempArr[selectedTab].list[val].selected;
    setProduct(tempArr);
  };
  
  const handleQuoteBtn = useCallback(() => {
    setQuotation(false);
    let tempData = [];
    productsList[selectedTab].list.map((data) =>
      data.selected ? tempData.push(data.heading) : null
    );
    let formattedQuoteData = `${
      productsList[selectedTab].type
    }: ${tempData.join(", ")}`;
    setDemoMessage(formattedQuoteData);
  }, [selectedTab, productsList]);

  const onChangeHandler = useCallback((e) => {
    if (e.target.name === "talkName") {
      setTalkName(e.target.value);
    }
    if (e.target.name === "talkEmail") {
      setTalkEmail(e.target.value);
    }
    if (e.target.name === "talkPhone") {
      setTalkPhone(e.target.value);
    }
    if (e.target.name === "talkCompany") {
      setTalkCompany(e.target.value);
    }

    if (e.target.name === "demoName") {
      setDemoName(e.target.value);
    }
    if (e.target.name === "demoEmail") {
      setDemoEmail(e.target.value);
    }
    if (e.target.name === "demoPhone") {
      setDemoPhone(e.target.value);
    }
    if (e.target.name === "demoCompany") {
      setDemoCompany(e.target.value);
    }
    if (e.target.name === "demoMessage") {
      setDemoMessage(e.target.value);
    }
  }, []);

  console.log("DATA", demoMessage);
  const url =
    "https://tech.us14.list-manage.com/subscribe/post?u=25fcf4ce1e7fda61341e5e020&amp;id=982a6358ef";
  return (
    <>
      {quotation ? (
        <QuotationComponent
          fixedTop={scrollPosition > 300}
          handleTab={handleTab}
          selectedTab={selectedTab}
          productsList={productsList}
          messages={demoMessage}
          handleQuoteBtn={handleQuoteBtn}
          handleSelectedProduct={handleSelectedProduct}
          onChangeHandler={onChangeHandler}
          talkName={talkName}
          talkEmail={talkEmail}
          talkPhone={talkPhone}
          talkCompany={talkCompany}
          demoName={demoName}
          demoEmail={demoEmail}
          demoPhone={demoPhone}
          demoCompany={demoCompany}
          loading={loading}
          talkStatus={talkStatus}
          demoStatus={demoStatus}
        />
      ) : (
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <Getform
                messages={demoMessage}
                onSubmitted={(formData) => subscribe(formData)}
                message={message}
                status={status}
              />
            </div>
          )}
        />
      )}
    </>
  );
};

export default Quotation;
