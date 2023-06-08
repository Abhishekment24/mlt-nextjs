import React from "react";
import Head from "next/head";
import Header from "../Header";
import LetsTalks from "../LetsTalk/Legals";
import Image from "next/image";
import correct from "../../assests/images/correct.svg";
import tick from "../../assests/images/tick.svg";
const Quotation = ({
  selectedTab,
  productsList,
  handleSelectedProduct,
  handleQuoteBtn,
}) => {
  return (
    <>
       <Head>
        <title>For Quotation</title>
        <meta name="description" content="For Quotation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="  white-header">
      <Header />
        <section className=" p-y-100 securit  ">
          <div className="container">
            <div className="row  align-items-center pt-5">
              <div className="col-lg-12 text-center pt-5 pb-3">
                <h1 className="">Choose your Service Portfolio</h1>
              </div>
            </div>
            <div className="qutei">
              <div className="gets">
                {productsList[selectedTab].list.map((data, i) => (
                  <div
                    className={`get-head ${data.selected && "selected"}`}
                    key={i}
                    onClick={() => handleSelectedProduct(i)}
                  >
                    <div className="get-title">
                      <h3 className={data.selected && "selected"}>
                        {data.heading}
                      </h3>
                      <p>{data.description}</p>
                    </div>
                    <div className="correct">
                      <Image
                        width="15%"
                        src={data.selected ? tick : correct}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="row ">
                <div className="col-lg-12">
                  <a onClick={handleQuoteBtn} className="btn btn-primary">
                    Get a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <LetsTalks />
      
    </>
  );
};
export default Quotation;
