import { useState, useEffect } from "react";
import MentWhite from "../../assests/images/m-logo-white.svg";
import { Button } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaYoutube,
  FaRedditAlien,
  FaChevronUp,
} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  Fdata,
  Coredata,
  Solutiondata,
  Emaildata,
  udata,
  zdata,
} from "../Data/Data";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="footer">
        <div className="footer-first-section">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                <a href="#">
                  <Image
                    className="footer-logo"
                    width="100"
                    src={MentWhite}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="row py-4 text-white footer-links">
              <div className="col-lg-3 social-links-footer mb-4">
                <h3>Find us on</h3>
                <ul>
                  <li>
                    <Link href="https://www.instagram.com/menttechlabs/">
                      <BsInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/menttechlabs">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/menttechlabs">
                      <AiOutlineTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://t.me/menttechlabs">
                      <FaTelegramPlane />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/menttechlabs/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/channel/UC_3SFkoApivR81hA2PJ9Kyw">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.reddit.com/user/MentFintech">
                      <FaRedditAlien />
                    </Link>
                  </li>
                  {/* <li><a href="#"><i class="fab fa-discord"></i></a></li> */}
                </ul>
              </div>
              <div className="col-lg-3 mb-4">
                <h3>Core Products</h3>
                <ul>
                  {Coredata.map((person) => {
                    return (
                      <li key={person.id}>
                        <Link href={person.inst}>{person.position}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3 mb-4">
                <h3>Solutions</h3>
                <ul>
                  {Solutiondata.map((person) => {
                    return (
                      <li key={person.id}>
                        <Link href={person.inst}>{person.position}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3 mb-4">
                <h3>Email Contact</h3>
                <p>
                  <Link href="#">info@ment.tech</Link> <br />
                  Mon - Fri, 9:00 A.M to 18:00 P.M
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-second-section text-white">
          <div className="container">
            <div className="row justify-content-between">
              {Emaildata.map((person) => {
                return (
                  <div className="col-lg-2" key={person.id}>
                    <h3>{person.name}</h3>
                    <p>{person.position}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-third-section text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {udata.map((person) => {
                  return <p className="footr" key={person.id}> {person.position}</p>;
                })}
                <ul className="d-flex">
                  {zdata.map((person) => {
                    return (
                      <li key={person.id}>
                        <Link href={person.inst}>{person.position}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {visible && (
        <Button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        type="submit"
        className="css-mbv478"
      >
        <FaChevronUp />
      </Button>
      
      )}
     
    </>
  );
};

export default Footer;
