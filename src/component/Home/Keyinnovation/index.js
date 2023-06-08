import React, { useRef, useEffect, useState } from "react";
import nfts from "../../../assests/nfts.svg";
import Blockchians from "../../../assests/blockchains.svg";
import smart from "../../../assests/lockers.svg";
import centralised from "../../../assests/news.svg";
import Link from "next/link";
import Image from "next/image";
const Keyinnovation = () => {
  const videoEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  {
    /*} const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
   useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          attemptPlay();
        } else {
          videoEl.current.pause();
        }
      });
    });
    observer.observe(videoEl.current.parentElement);
    return () => {
      observer.disconnect();
    };
  }, []);
  */
  }
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
    <>
      <section className="keyinnovations keybanegas p-y-100 ">
        <div class="container">
          <div className="row">
            <div class="col-lg-12 mt-4 text-white">
              <h1 className="texting">Key Innovations</h1>

              <div className="row">
                <div className="col-lg-6 col-md-6 mt-4">
                  <div className="d-flex align-items-center">
                    <Image className="me-2 keyino-imag" src={nfts} alt="..." />
                    <h4 className="mb-0"> NFTs & Metaverse Development</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-4">
                  <div className="d-flex align-items-center">
                    <Image
                      className="me-2 keyino-imag"
                      src={Blockchians}
                      alt="..."
                    />
                    <h4 className="mb-0">
                      Blockchain-Based Digital Banking Solution
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 mt-4">
                  <div className="d-flex align-items-center">
                    <Image
                      className="me-2 keyino-imag"
                      src={centralised}
                      alt="..."
                    />
                    <h4 className="mb-0">Smart Contracts & DAOs</h4>
                  </div>
                </div>
                <div className="col-lg-6  col-md-6 mt-4">
                  <div className="d-flex align-items-center">
                    <Image className="me-2 keyino-imag" src={smart} alt="..." />
                    <h4 className="mb-0">
                      Centralised Exchanges & Regulated Solutions
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-y-100">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <h1 className="texting">What We Do</h1>
              <p>
                Bring your blockchain vision to life with the support of a
                community that shares your passion. Let&apos;s work together to make
                something extraordinary.
              </p>
              <p>
                Let us turn your blockchain idea into a reality by building
                user-friendly and visually appealing applications, regardless of
                technical background. With our support, you can take your
                concept to launch effortlessly.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="">
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

                  {/* <video
                    ref={videoEl}
                    loop
                    onPlay={handlePlay}
                    onPause={handlePause}
                    controls={isPlaying}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src={Videos} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>*/}
                  {/* <video
                  style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                  playsInline
                  loop
                  muted
                  controls
                  alt="All the devices"
                  src={Videos}
                  ref={videoEl}
                />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="keyinnovations keybanegas p-y-100 ">
        <div class="container">
          <div className="row">
            <div class="col-lg-12 mt-4 text-white">
              <h1 className="texting">Key Innovations</h1>

             
                <div className="row">
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="d-flex align-items-center">
                      <img className="me-2 keyino-imag" src={nfts} alt="..." />
                      <h4 className="mb-0"> NFTs & Metaverse Development</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="me-2 keyino-imag"
                       
                        src={Blockchians}
                        alt="..."
                      />
                      <h4 className="mb-0">
                        {" "}
                        Blockchain-Based Digital Banking Solution
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="me-2 keyino-imag"
                       
                        src={centralised}
                        alt="..."
                      />
                      <h4 className="mb-0">Smart Contracts & DAOs</h4>
                    </div>
                  </div>
                  <div className="col-lg-6  col-md-6 mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="me-2 keyino-imag"
                       
                        src={smart}
                        alt="..."
                      />
                      <h4 className="mb-0">
                        Centralised Exchanges & Regulated Solutions
                      </h4>
                    </div>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      </section>*/}
    </>
  );
};
export default Keyinnovation;
