import React from "react";
import Header from "../Header";
import Head from "next/head";
import Image from "next/image";
import BgImg from "../../assests/images/AboutUs/banner_min.svg";
import AboutBanner from "../../assests/abots.png";
import CEOImg from "../../assests/images/ceo-review.svg";
import global from "../../assests/images/AboutUs/globals.svg";
import ReviewOneImg from "../../assests/images/AboutUs/about-review-one.svg";
import Tbenofits from "../../assests/Aboutusimg/Layer_27.png";
import Tbenofitis from "../../assests/Aboutusimg/Asset 1.png";

import { Carousel } from "react-bootstrap";

import {
  
  Weoffer,
  Weoffices,
  
} from "../Data/Data";
import Ourteamsjoin from "./ourteamsjoin";
import Start from "../../assests/Aboutusimg/start.png";
import Learn from "../../assests/Aboutusimg/learn.png";
import Ask from "../../assests/Aboutusimg/ask.png";
import Trade from "../../assests/Aboutusimg/trades.png";
import Link from "next/link";
const AboutUs = () => {
  return (
    <div className="Aboutus">
       <Head>
        <title>About Us</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className="banking-solution overflow-hidden">
        <section className="about-header blue-bg">
        <Header />
          <div className="container wide-block">
            <div className="row align-items-center">
              <div className="col-lg-6 text-white">
                {/* <img src={BgImg} alt="..." />*/}
                <p className="mt-4">About Us</p>
                <h1>MENT TECH</h1>
                <span>
                  Our team is dedicated to using blockchain technology to bring
                  positive change to the world. We are driven by our passion for
                  this cutting-edge field.
                </span>
              </div>
              <div className="col-lg-6">
              <Image className="img-fluid" src={AboutBanner} alt="AboutBanner" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="who-we p-y-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="mb-4">Who We Are</h1>
                <p>
                  We are committed to helping you establish a thriving financial
                  venture by connecting you to the markets and equipping you
                  with the latest, cutting-edge technologies. Our aim is to
                  provide you with these resources in a timely manner and at a
                  cost that is affordable.
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-4">
                <p className="we-will">
                  We promise to be with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>*/}
        <section className="with-us p-y-100" id="hire-background">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="">With Us You Can</h1>
                <p>We promise to be with you every step of the way.</p>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-lg-5">
                <div className="abouts-withus-block ">
                  <Image  src={Start} alt="Start" />
                  <div>
                    <h2 className="mt-2">Start</h2>
                    <p className="withs">
                      We&apos;ll either help you start a new business or enhance your
                      current one
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="abouts-withus-block abouts-withus-block-1">
                  <Image  src={Ask} alt="Ask" />
                  <div>
                    <h2 className="mt-2">Ask</h2>
                    <p className="withs">
                      You can count on us for suggestions and insightful advice
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="abouts-withus-block abouts-withus-block-2">
                  <Image  src={Learn} alt="Learn" />
                  <div>
                    <h2 className="mt-2">Learn</h2>
                    <p className="withs">
                      Stay ahead of the competition by inquiring about new
                      industry advancements, or have us integrate them into your
                      business model
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="abouts-withus-block abouts-withus-block-3">
                  <Image  src={Trade} alt="Trade" />
                  <div>
                    <h2 className="mt-2">Trade</h2>
                    <p className="withs">
                      We&apos;ll help you mitigate risks and expand your reach by
                      providing access to multiple markets for yourself or
                      others to trade in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gradient-black-bg p-y-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-white">
                <div className=" mb-5">
                  <h1 className="">What We Offer</h1>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-6 text-white">
                {Weoffer.map((person) => {
                  return (
                    <div className="abouts-benifit-box mb-4" key={person.id}>
                      <h3>{person.name}</h3>
                      <p>{person.position}</p>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-6 text-center ">
                <Image className="img-fluid" src={Tbenofits} alt="Tbenofits" />
              </div>
            </div>
          </div>
        </section>
        <section className="where-we p-y-100 " id="hire-background">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="title-block">
                  <h1 className="mb-4 ">Ment Location</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-lg-4">
                <div className="where-offices">
                  {Weoffices.map((person) => {
                    return (
                      <ul key={person.id}>
                        <li >
                          <span>{person.name}</span>
                          {person.position}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="where-offices">
                  <Image className="img-fluid" src={global} alt="global" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-4 mt-5">
                <div className="abouts-boxs mb-4">
                  <h2 className="">
                    <span>+</span> 200
                  </h2>
                  <p>Products & Services</p>
                </div>
                <div className="abouts-boxs mb-4">
                  <h2 className="">
                    <span>+</span> 150
                  </h2>
                  <p>Top-level Technicians</p>
                </div>
                <div className="abouts-boxs mb-4">
                  <h2 className="">
                    <span>+</span> 500
                  </h2>
                  <p>Client Services Experience worldwide</p>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="vs">
                  <Image className="img-fluid" src={Tbenofitis} alt="Tbenofitis" />
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div className="abouts-boxs mb-4">
                  <h2 className="">
                    <span>+</span> 20
                  </h2>
                  <p>Countries & Regions</p>
                </div>
                <div className="abouts-boxs mb-4">
                  <h2 className="">
                    <span>+</span> 30
                  </h2>
                  <p>Industry Partner support</p>
                </div>
                <div className="abouts-boxs mb-4">
                  <h2 className="">
                    <span>+</span> 20000
                  </h2>
                  <p>Security Maintenance Hours</p>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="where-about">
                  <div className="where-about-block">
                    <div class="css-wq5ned">
                      <h3 className="">
                        200 <span>+</span>
                      </h3>
                      <p>Products & Services</p>
                    </div>
                    <div class="css-wq5ned">
                      <h3 className="">
                        150 <span>+</span>
                      </h3>
                      <p>Top-level Technicians</p>
                    </div>
                  </div>
                  <div className="where-about-block">
                    <div class="css-wq5ned">
                      <h3 className="">
                        500 <span>+</span>
                      </h3>
                      <p>Client Services Experience worldwide</p>
                    </div>
                    <div class="css-wq5ned">
                      <h3 className="">
                        20 <span>+</span>
                      </h3>
                      <p>Countries & Regions</p>
                    </div>
                  </div>
                  <div className="where-about-block">
                    <div class="css-wq5ned">
                      <h3 className="">
                        30 <span>+</span>
                      </h3>
                      <p>Industry Partner support</p>
                    </div>
                    <div class="css-wq5ned">
                      <h3 className="">
                        20000 <span>+</span>
                      </h3>
                      <p>Security Maintenance Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </section>
        
        <section className="our-value gradient-black-bg p-y-100">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12  text-center">
                <div className="title-block text-white">
                  <h1 className="mb-4">Our Values</h1>
                </div>
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-lg-4 text-white">
                <div className="">
                  {/* <img src="" alt="" />*/}

                  <h3 class="abouts-btu btn-orange active btn-animated">
                    <span>Clarity & Integrity</span>
                  </h3>
                  <p>
                    We take pride in our honesty and transparency in conducting
                    business. Our approach is always sincere and straightforward
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white">
                <div className="">
                  {/* <img src="" alt="" />*/}

                  <h3 class="abouts-btu btn-orange-1 active btn-animated">
                    <span>Working Together</span>
                  </h3>
                  <p>
                    We achieve great things as a team. Our top priority is to
                    maintain a high level of energy and alignment among our
                    teams, all working towards our shared goal
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white">
                <div className="">
                  {/* <img src="" alt="" />*/}

                  <h3 class="abouts-btu btn-orange-2 active btn-animated">
                    <span>Empowering Others</span>
                  </h3>
                  <p>
                    Our specialty is helping businesses operate more
                    efficiently. We are always ready to assist those in need
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white ">
                <div className="">
                  {/* <img src="" alt="" />*/}

                  <h3 class="abouts-btu btn-orange-3 active btn-animated">
                    <span>Orientation on Results</span>
                  </h3>
                  <p>
                    We put in tireless effort to make our products time-saving.
                    We get results quickly and efficiently
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white">
                <div className="">
                  {/* <img src="" alt="" />*/}

                  <h3 class="abouts-btu btn-orange-4 active btn-animated">
                    <span>Constant Improvement</span>
                  </h3>
                  <p>
                    We continuously evolve and innovate our offerings to provide
                    you with cutting-edge and practical solutions
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white">
                <div className="">
                  {/* <img src="" alt="" />*/}

                  <h3 class="abouts-btu btn-orange-5 active btn-animated">
                    <span>Working with Passion</span>
                  </h3>
                  <p>
                    We are passionate about delivering outstanding results and
                    provide the best solutions with purpose and dedication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-value gradient-black-bg p-y-100">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12  text-center">
                <div className="title-block text-white">
                  <h1 className="mb-4">Our Mission</h1>
                </div>
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-lg-12 text-white">
                <div className="d-flex align-items-center">
                  <h1 className="abouts-titles">1</h1>
                  <p>
                    <span className="abouts-span"> Our aim</span> is to design
                    trading systems that set a new standard in the market,
                    particularly in the crypto space. We strive to promote
                    blockchain technology and educate both individuals and
                    governments on its benefits, in an effort to drive change
                    and revolutionize the global financial system
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <h1 className="abouts-titles">2</h1>
                  <p>
                    <span className="abouts-span"> Our mission</span> is to be
                    the preferred destination for all your brokerage needs by
                    offering exceptional technologies and a seamless user
                    experience for your clients. We aim to consistently meet
                    your business requirements and exceed customer expectations,
                    making Ment Tech your go-to solution
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <h1 className="abouts-titles">3</h1>
                  <p>
                    <span className="abouts-span"> Our goal</span> is to raise
                    the bar in the fintech industry through our company&apos;s
                    innovative solutions
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <h1 className="abouts-titles">4</h1>
                  <p>
                    <span className="abouts-span">Our mission </span> is to
                    create continually improving technology that delivers
                    accurate, efficient, transparent, and user-friendly forex
                    and crypto trading solutions for investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo securty-block-9 p-y-100" id="hire-background">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 mb-4 text-center">
                <Link
                  href="https://www.linkedin.com/in/ujjwalsahay/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image className="img-fluid oilso"  src={CEOImg} alt="CEOImg" />
                </Link>
                <h3 className="mt-4">Ujjwal Sahay</h3>
                <p className="paret">Founder & MD</p>
              </div>
              <div className="col-lg-8">
                <p className="para-title mt-4">
                  New technologies have impacted every aspect of our lives,
                  including the FINTECH industry. To stay ahead, we are
                  constantly improving our products, investing in our team,
                  technology, customer support, and infrastructure. Our
                  dedication to progress never stops, as we work around the
                  clock to meet changing business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="media-say  gradient-black-bg p-y-100">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 text-center text-white">
                <div className="title-block">
                  <h1 className="mb-0 ">What Media Says</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-8">
                <Carousel className="text-white">
                  <Carousel.Item>
                    <div className="carousel-block">
                      <Carousel.Caption>
                        <p>
                          Ment Tech expands payment options for clients with the
                          introduction of the Trader&apos;s Room.
                        </p>
                        <div className="review-name">
                          Tuesday 6th August 2019 12:00:00 AM
                        </div>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="carousel-block">
                      <Carousel.Caption>
                        <p>
                          Your team&apos;s professional approach and willingness to
                          go the extra mile with minimal disruption was noted by
                          all. I offer my heartfelt congratulations for an
                          excellent job. Working with you and your company is a
                          pleasure and a great partnership.
                        </p>
                        <div className="review-name">
                          Wednesday 12th February 2020 12:00:00 AM
                        </div>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="carousel-block">
                      <Carousel.Caption>
                        <p>
                          Ment Tech broadens its liquidity with the addition of
                          61 crypto CFD pairs, bringing its total offerings to
                          100 CFD in cryptocurrencies.
                        </p>
                        <div className="review-name">
                          Wednesday 4th December 2019 12:00:00 AM
                        </div>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="our-milstone p-y-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="title-block">
                  <h1 className="mb-4">Our Milestones</h1>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12">
                <SmallLine></SmallLine>
                <SmallTxtContainer>
                  <h4>2018</h4>
                  <div></div>
                  <ListContainer>
                    <li>
                      <span>
                        September
                        <b />
                      </span>
                      <p>Ment Tech was officially established in India.</p>
                    </li>
                    <li>
                      <span>
                        September
                        <b />
                      </span>
                      <p>Ment Tech set up its UK Office.</p>
                    </li>
                    <li>
                      <span>
                        October
                        <b />
                      </span>
                      <p>The first exchange client got online.</p>
                    </li>
                  </ListContainer>
                </SmallTxtContainer>
                <SmallTxtContainer>
                  <h4>2019</h4>
                  <div></div>
                  <ListContainer>
                    <li>
                      <span>
                        May
                        <b />
                      </span>
                      <p>Have served more than 50 clients.</p>
                    </li>
                    <li>
                      <span>
                        July
                        <b />
                      </span>
                      <p>
                        Ment Tech wallet solution was officially launched
                        online.
                      </p>
                    </li>
                    <li>
                      <span>
                        August
                        <b />
                      </span>
                      <p>The cloud exchange system was launched online.</p>
                    </li>
                    <li>
                      <span>
                        October
                        <b />
                      </span>
                      <p>The futures contract system was launched online.</p>
                    </li>
                    <li>
                      <span>
                        October
                        <b />
                      </span>
                      <p>
                        We have served clients from more than 10 countries in
                        Europe.
                      </p>
                    </li>
                    <li>
                      <span>
                        November
                        <b />
                      </span>
                      <p>We have served more than 150 clients.</p>
                    </li>
                    <li>
                      <span>
                        November
                        <b />
                      </span>
                      <p>
                        Global tour activities was launched, with the global
                        partner recruitment plan initiated.
                      </p>
                    </li>
                    <li>
                      <span>
                        December
                        <b />
                      </span>
                      <p>White-Label Solution was introduced.</p>
                    </li>
                  </ListContainer>
                </SmallTxtContainer>
                <SmallTxtContainer>
                  <h4>2020</h4>
                  <div></div>
                  <ListContainer>
                    <li>
                      <span>
                        January
                        <b />
                      </span>
                      <p>More New Products are introduced for sales.</p>
                    </li>
                    <li>
                      <span>
                        February
                        <b />
                      </span>
                      <p>
                        Mining Pool System Solution was introduced for sales.
                      </p>
                    </li>
                    <li>
                      <span>
                        March
                        <b />
                      </span>
                      <p>OTC Trading System was introduced.</p>
                    </li>
                    <li>
                      <span>
                        April
                        <b />
                      </span>
                      <p>Romania regional office has been started.</p>
                    </li>
                    <li>
                      <span>
                        May
                        <b />
                      </span>
                      <p>
                        All-In-One Wallet System was added in white-label
                        solution.
                      </p>
                    </li>
                    <li>
                      <span>
                        June
                        <b />
                      </span>
                      <p>Funded with $400,000 in seeds.</p>
                    </li>
                    <li>
                      <span>
                        July
                        <b />
                      </span>
                      <p>Scaled new offices in several cities.</p>
                    </li>
                    <li>
                      <span>
                        August
                        <b />
                      </span>
                      <p>New stuff coming soon</p>
                    </li>
                  </ListContainer>
                </SmallTxtContainer>
              </div>
            </div>
          </div>
        </section>*/}
      </div>
      {/* <Ourteamsjoin />*/}
     
    </div>
  );
};
export default AboutUs;
