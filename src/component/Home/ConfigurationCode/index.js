import React from "react";
import awrds from "../../../assests/awards.png";
import Image from "next/image";
import { Trusteddata } from "../../Data/Data";
const ConfigurationCode = () => {
  return (
    <>
      {/* <section class="resume p-y-100" id="resume">
        <div class="container">
         
            <div className="row">
              <div class=" col-lg-12 text-center">
                <h1>Awards</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="timeline">
                  <ul>
                    <li>
                      <div className="timeline-content">
                        <span class="date">2021-2022</span>
                        <h4>Top 3 blockchain Startups</h4>
                        <p>Appengine.ai</p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-content">
                        <span class="date">2020 - 2021</span>
                        <h4>Top Startups of Asia</h4>
                        <p>Beststartups.asia</p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-content">
                        <span class="date">2019 - 2020</span>
                        <h4>Top Indian Startups</h4>
                        <p>Best in Tech awards</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
        </div>
      </section>*/}
      <section className="keyinnovations p-y-100">
        <div className="container">
          <div>
            <div className="row">
              <div class="col-lg-7 col-xw-8 text-center text-white">
                <div class="title-block"></div>

                <h1 className=" titles-trusted">Trusted By</h1>

                <div class="row">
                  <div class="col-lg-12">
                    <div className="row ">
                      {Trusteddata.map((person) => {
                        return (
                          <div className="col-lg-3 col-sm-6 mt-4  text-white" key={person.id}>
                            <ul className="services-teams  hover-grow">
                              <li>
                                <Image
                                  src={person.imgscr}
                                  className="truted-img"
                                  alt=""
                                />
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 text-white">
                <div className="awards-titile">
                  <h1 className="awds-margin">Awards</h1>

                  <div class="vert"> </div>
                  <div className="line-image">
                    <Image src={awrds} className="awrds-img" alt="" />
                  </div>
                  <div className="mt-3 awds-mai">
                    <h2>Top 3 blockchain</h2>
                    <h2>Startups 2022</h2>
                    <p>Appengine.ai</p>
                    <div class="lines"></div>
                  </div>
                  <div class="mt-5 awds-mai">
                    <h2>Top Startups of</h2>
                    <h2>Asia 2021</h2>
                    <p>Beststartups.asia</p>
                    <div class="lines hii"></div>
                  </div>
                  <div className="mt-5 awds-mai">
                    <h2>Top Indian</h2>
                    <h2>Startups 2020</h2>
                    <p>Best in Tech awards</p>
                    <div class="lines hiii"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfigurationCode;
