import React from "react";
import Image from "next/image";
import ImgOne from "../../../assests/img/otc-deal.svg";
import ImgTwo from "../../../assests/img/otc-blazing-speed.svg";
import ImgThree from "../../../assests/img/otc-dollar-shield.svg";

const TheProblem = () => {
  return (
    <>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h1 className="">Features that Set the Industry Standard</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 text-center mt-3">
            <div className="one-setp">
              <Image className="list-img-icons" src={ImgOne} alt="" />
              
              </div>
              <h3 className="">A safe & Stable Environment</h3>
              <p>
                We use cutting-edge technology to secure our mining operations
                and prevent various types of attacks. Our unique mining pool
                architecture guarantees stability for our clients.
              </p>
            
            </div>
            <div className="col-lg-4 text-center mt-3">
            <div className="one-setp">
              <Image className="list-img-icons" src={ImgTwo} alt="" />
             
              </div>
              <h3 className="">Transparent & Open</h3>
              <p>
                Our mining solution uses advanced technology to ensure stable
                operations and prevent various types of attacks. We offer a
                unique mining pool architecture to achieve this.
              </p>
             
            </div>
            <div className="col-lg-4 text-center mt-3">
            <div className="one-setp">
              <Image className="list-img-icons" src={ImgThree} alt="" />
              </div>
              <h3 className="">Deploying Multiple Nodes</h3>
              <p>
                We have a highly skilled technical team that provides stable
                mining services around the clock, every day of the week. Our
                deployment is global and covers multiple nodes, ensuring that
                you have the best possible experience.
              </p>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheProblem;
