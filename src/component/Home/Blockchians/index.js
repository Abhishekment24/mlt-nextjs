import React from "react";
import Image from "next/image";
import { Bdata, Tecdata } from "../../Data/Data";
const Blockchians = () => {
  return (
    <>
      <section className="blue-bg p-y-100">
        <div className="container">
          <div>
            <div className="row">
              <div class="col-lg-12 text-left text-white">
                <div class="title-block"></div>

                <h1 className="titles-trusted"> Tech We&apos;re Working With</h1>
              </div>
            </div>
            <div class="row">
              {Bdata.map((person) => {
                return (
                  <div className="col-lg-2 col-sm-6 mt-4 text-center text-white" key={person.id}>
                    <ul className="services-teams justify-content-center hover-grow" >
                    <li>
                      <Image  src={person.imgscr} className="tech-img" alt="" />
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="keyinnovations p-y-100">
        <div className="container">
          <div className="row ">
            <div class="col-lg-12  text-left text-white">
              <div class="title-block"></div>

              <h1 className="titles-trusted"> Blockchains We Build On</h1>
            </div>
          </div>
          <div class="row">
            {Tecdata.map((person) => {
              return (
                <div className="col-lg-2 col-sm-6 mt-4 text-center text-white" key={person.id}>
                  <ul className="services-teams justify-content-center hover-grow">
                  <li >
                    <Image  src={person.imgscr} className="block-img" alt="" />
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blockchians;
