import React from "react";

const ourteamsjoin = () => {
  return (
    <div>
      <section className="">
        <div className="team-join">
          <div className="team-sol hover-grow">
            <div className="team-titles">
              Our
              <span>Team</span>
            </div>
            <div className="team-paras">
              We appreciate everyone who works with us and inspires
              <br /> us towards achieving our success.
            </div>
            <a href="/Team" class="learns">
              Learn More
            </a>
          </div>
          <div class="team-joiners hover-grow">
            <div class="team-titles">
              We are <span>hiring</span>
            </div>
            <div class="team-paras">
              We are always on the lookout for talent
            </div>
            <a href="/Career" class="learns">
              Vacancies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ourteamsjoin;
