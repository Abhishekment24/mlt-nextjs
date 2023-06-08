import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tdata, Ldata, Edata } from "../Data/Data";
import CEOImg from "../../assests/images/ceo-review.svg";
const OurLeader = () => {
  return (
    <section className="our-management our-leader p-y-100">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-lg-4">
            <div className="ceo_section text-center p-5">
              <Link
                href="https://www.linkedin.com/in/ujjwalsahay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=" hover-grow rounded-2 img-fluid"
                  src={CEOImg}
                  alt="..."
                />
              </Link>
              <h3 className="mt-4">Ujjwal Sahay</h3>
              <p className="paret">Founder & MD</p>
              <p className="para-title">
                New technologies have impacted every aspect of our lives,
                including the FINTECH industry. To stay ahead, we are constantly
                improving our products, investing in our team, technology,
                customer support, and infrastructure. Our dedication to progress
                never stops, as we work around the clock to meet changing
                business needs.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row mt-5">
              <div className="f_view w-100 tems">
                <h2 className="text-center mt-4 d-block">Our Leadership</h2>

                <p className="text-center  d-block">
                  Ment Tech is a top-ranked blockchain technology firm in the
                  market.
                </p>
                <div className="all_leaders overflow-auto">
                  <div className="field field--name-field-leaders-details field--type-entity-reference-revisions field--label-hidden field__items">
                    {Tdata.map((person) => {
                      return (
                        <div className="field__item  hover-grow no-underline text-center" key={person.id}>
                          <div className="leader_image">
                            <Image
                              alt=""
                              className="img-fluid rounded-2"
                              src={person.imgscr}
                            />
                          </div>
                          <h5>
                            <div class="field field--name-field-leader-title- field--type-string field--label-hidden field__item">
                              {person.name}
                            </div>
                          </h5>
                          <p></p>
                          <div class="field field--name-field-leader-designation field--type-string field--label-hidden field__item">
                            {person.position}
                          </div>

                          <p></p>
                        </div>
                      );
                    })}
                    <div className=" f_view w-100 mt-5">
                      <h2 className="text-center mt-4 d-block">Management</h2>

                      <p className="text-center  d-block">
                        The Ment Tech team is composed of international business
                        experts who work worldwide.
                      </p>
                    </div>
                    {Ldata.map((person) => {
                      return (
                        <div className="field__item  hover-grow no-underline text-center" key={person.id}>
                          <div className="leader_image">
                            <Image
                              alt=""
                              className="img-fluid rounded-2"
                              src={person.imgscr}
                            />
                          </div>
                          <h5>
                            <div class="field field--name-field-leader-title- field--type-string field--label-hidden field__item">
                              {person.name}
                            </div>
                          </h5>
                          <p></p>
                          <div class="field field--name-field-leader-designation field--type-string field--label-hidden field__item">
                            {person.position}
                          </div>

                          <p></p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeader;
