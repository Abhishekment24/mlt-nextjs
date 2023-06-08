import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { Trusteddata } from "../Data/Data";
import Header from "../Header";
import dev from "../../assests/dev.svg";
import ConfigurationCode from "../Home/ConfigurationCode";
import LetsTalk from "../LetsTalk/LetsTalk";
import Developers from "../../assests/fordevimage/Asset 2.png";
import blog1 from "../../assests/fordevimage/best-seller.png";
import blog2 from "../../assests/fordevimage/balance-scale.png";
import blog3 from "../../assests/fordevimage/benefits.png";
import blog4 from "../../assests/fordevimage/people.png";
import blog5 from "../../assests/fordevimage/self-growth.png";
import blog6 from "../../assests/fordevimage/together.png";
import Image from "next/image";
import games from "../../assests/Games.png";
import movie from "../../assests/Movie-Tickets.png";
import book from "../../assests/Books.png";
import restaurant from "../../assests/Resaurant.png";
import weeked from "../../assests/Weekend-Explorer.png";
import health from "../../assests/Health-and-Wellness.png";
import headphone from "../../assests/Headphones.png";
import gear from "../../assests/Cooking-Gear.png";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";
const Developer = () => {
  const videoEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const attemptPlay = () => {
    videoEl?.current?.play()?.catch((error) => {
      console.error("Error attempting to play", error);
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          attemptPlay();
        } else {
          videoEl.current?.pause();
        }
      });
    });
    videoEl.current && observer.observe(videoEl.current.parentElement);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="Aboutus">
      <Head>
        <title>For Developers</title>
        <meta name="description" content="For Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="banking-solution overflow-hidden">
      <Header />
        <section className="com-header comap blue-bg ">
          <div className="container wide-block">
            <div className="row align-items-center">
              <div className="col-lg-6 text-white">
                <p className="mt-4">For Developers</p>
                <h1>LIVE ENERGIZED</h1>
                <span>
                  Become a part of the most invigorating group for developers
                  and secure long-term remote positions with top-notch
                  companies.
                </span>
              </div>
              <div className="col-lg-6 text-center mt-4">
                <Image  className="img-fluid" src={Developers} alt="Developers" />
              </div>
            </div>
          </div>
        </section>

        <section className="p-y-100" id="hire-background">
          <div className="container">
            <div class="why-softobiz-content">
              <div className="row justify-content-between">
                <div className="col-lg-4 ">
                  <div className="for-padding">
                    <h2 className="mt-4">Why Ment Tech</h2>
                    <div class=" test">
                      By partnering with us, you will open up new avenues for
                      education, progression, and advancement.
                    </div>
                    <p class=" mt-4 pary">
                      Ment Tech is a unique organization where you&apos;ll not only
                      join a software development company, but you&apos;ll become a
                      member of a vibrant and innovative culture. Our team is
                      made up of individuals who are passionate about delivering
                      innovative solutions and making a difference in the world.
                      Our philosophy is centered around continuous learning,
                      experimentation, and improvement, and we strive to create
                      an environment that fosters these values.{" "}
                    </p>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 ">
                      <div class="for-dev   ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="">Learn from Best</h3>
                          <Image src={blog1} alt="" />
                        </div>
                        <p className="for-p">
                          Collaborate with seasoned professionals who possess
                          extensive practical experience in a wide range of
                          technologies.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div class="for-dev   ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="">Open Culture</h3>
                          <Image src={blog2} alt="" />
                        </div>
                        <p className="for-p">
                          Join an engineering environment characterized by
                          versatility, liberty, and confidence.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div class="for-dev   ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="">Grow with Us</h3>
                          <Image src={blog5} alt="" />
                        </div>
                        <p className="for-p">
                          Attend frequent seminars and engage in
                          knowledge-sharing sessions for your personal and
                          professional growth.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div class="for-dev   ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="">Health Benefits</h3>
                          <Image src={blog6} alt="" />
                        </div>
                        <p className="for-p">
                          Obtain thorough medical insurance and undergo frequent
                          health assessments to sustain optimal employee
                          fitness.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div class="for-dev   ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="">Diversity</h3>
                          <Image src={blog4} alt="" />
                        </div>
                        <p className="for-p">
                          A dynamic team of skilled individuals collaborating
                          towards a shared objective.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div class="for-dev   ">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="">Work-life Balance </h3>
                          <Image src={blog3} alt="" />
                        </div>
                        <p className="for-p">
                          Join festive parties, outdoor activities, and engaging
                          sessions to cultivate a lively and upbeat work
                          atmosphere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-y-100" id="hire-dev-background">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-white">
                <div className="text-center">
                  <h1>Life @ Ment Tech</h1>
                  <div class="mt-4 mb-4 test">
                    Powered by a Team-Oriented and Mutual Development Culture
                  </div>

                  <p className="pary">
                    We take pride in establishing a thriving engineering culture
                    and strive to achieve the best work-life balance by
                    providing training sessions, workshops, and spontaneous
                    celebrations to recognize our employees accomplishments.
                    Our reward system acknowledges and values exceptional
                    performance, which helps to minimize attrition rates in the
                    industry and instills a sense of fulfillment among our team.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-4 justify-content-center">
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={games} alt="" />
                      <h3 className="">GAMES</h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Revitalize yourself with the latest gaming gear or games
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={movie} alt="" />
                      <h3>MOVIE TICKETS</h3>
                    </div>
                    <div class="category-text text-white">
                      Recharge with movie tickets or purchase a digital film to
                      immerse yourself in the latest movies
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={book} alt="" />
                      <h3>COURSES & BOOKS</h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Continuously expand your knowledge by taking online or
                        in-person courses or reading books on any subject matter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={restaurant} alt="" />
                      <h3>RESTAURANTS </h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Explore a new dining establishment and sample the local
                        cuisine or travel to a new city and indulge in its
                        gastronomic offerings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={weeked} alt="" />
                      <h3>WEEKEND EXPLORERS</h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Continuously broaden your horizons by booking a trip to
                        discover a new city, including expenses for
                        accommodations, transportation, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={health} alt="" />
                      <h3>HEALTH & WELLNESS </h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Take a break and recharge with massages, therapy
                        sessions, and meditation apps to rejuvenate your mind
                        and body
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={headphone} alt="" />
                      <h3>HEADPHONES</h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Revitalize with music and improve team communication
                        with higher-quality headphones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mm-6">
                <div class="t-f-i-block">
                  <div class="c-info-box">
                    <div class="box-img">
                      <Image className="my-3" src={gear} alt="" />
                      <h3>COOKING GEAR</h3>
                    </div>
                    <div class="category-text text-white">
                      <p>
                        Upgrade your cooking gear to create new dishes and take
                        pride in your culinary abilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-y-100">
          <div className="container wide-block">
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                <Image src={dev} alt="" />
                <div className="dev-shodw">
                  <p className="dev-p">GLASSDOOR REVIEWS</p>
                  <h5 className="dev-font">
                    Amazing community, the best company ever
                  </h5>
                  <span className="dev-span">DevOps Engineer</span>
                  <AiTwotoneStar className="dev-mar dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <h5 className="dev-font mt-3">
                    I wake up every morning feeling so grateful
                  </h5>
                  <span className="dev-span">
                    Full Stack Developer in Ojochal
                  </span>

                  <AiTwotoneStar className="dev-mar dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <h5 className="dev-font mt-3">
                    Engaging, supportive, and open-minded community
                  </h5>
                  <span className="dev-span">Software Developer in Dallas</span>

                  <AiTwotoneStar className="dev-mar dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                  <AiTwotoneStar className=" dev-fa" />
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <p className="dev-sub">Ment Community</p>
                <h2>JOIN THE MOST ENERGIZING COMMUNITY FOR DEVELOPERS</h2>
                <p className="dev-sub-head">
                  Join our exclusive developer community at Ment Tech and access
                  opportunities for learning, growth, and pursuing your passions
                </p>
                <Link href="/ment-tech-careers" className="btn btn-primary">
                  Join Ment Team
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="mt-4">
                  <div class="">
                    <video
                      ref={videoEl}
                      loop
                      onPlay={handlePlay}
                      onPause={handlePause}
                      controls={false}
                      muted={false}
                      autoPlay
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onClick={attemptPlay}
                    >
                      <source
                        src={"./02 Ment Tech Labs (1).mp4"}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConfigurationCode />
      <LetsTalk />
    </div>
  );
};
export default Developer;
