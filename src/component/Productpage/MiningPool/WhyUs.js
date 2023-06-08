import React from "react";

import {
  Container,
  Wrapper,
  TopContainer,
  TopWrapper,
} from "../Styles.css/WhyUs.js";

const WhyUs = () => {
  return (
    <Container>
      <Wrapper>
        <TopContainer>
          <TopWrapper>
            <div>
              <h2 className="text-white text-capitalize">2,000,000</h2>
              <p>Total Active Users</p>
            </div>
            <div>
              <h2 className="text-white text-capitalize">USD 75M+</h2>
              <p>Total Crypto Purchased</p>
            </div>
            <div>
              <h2 className="text-white text-capitalize">USD 10M+</h2>
              <p>Total Crypto Invested</p>
            </div>
          </TopWrapper>
        </TopContainer>
      </Wrapper>
    </Container>
  );
};

export default WhyUs;
