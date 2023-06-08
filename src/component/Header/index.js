import React, { useRef, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Button } from "react-bootstrap";
import HeaderLogo from "../../assests/images/m-logo-white.svg";
import HeaderLogoblue from "../../assests/images/m-logo-blue.svg";
import ph2 from "../../assests/images/ph2.svg";
//import Mentportfolio from "../../../Ment-Portfolio.pdf";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const router = useRouter();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbarRef.current.classList.add("scroll");
    } else {
      navbarRef.current.classList.remove("scroll");
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [product, setProduct] = useState(false);
  const productDropdown = (e) => {
    setProduct(!product);
  };
  const producthideDropdown = (e) => {
    setProduct(false);
  };
  const [about, setAbouts] = useState(false);
  const aboutDropdown = (e) => {
    setAbouts(!about);
  };
  const abouthideDropdown = (e) => {
    setAbouts(false);
  };
  return (
    <>
      <Navbar
        id="navbar"
        className={`navbar navbar-expand-lg customize-nav ${
          isOpen ? "blue-bg" : "bg-none"
        } fixed-top navbar-light`}
        expand="lg"
        ref={navbarRef}
      >
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <Image
              className="img-fluid white-logo"
              src={HeaderLogo}
              alt="Logo"
            />
            <Image
              className="img-fluid blue-logo"
              src={HeaderLogoblue}
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto header-nav">
              <NavDropdown
                title="Products"
                id="basic-nav-dropdown"
                className="services-nav-mobile proi-nav"
              >
                <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                    <Link
                      href="/crypto-exchange-turnkey-solution"
                      className={
                        "dropdown-item mt-0" +
                        (url === "/crypto-exchange-turnkey-solution"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Cryptocurrency Exchange Turnkey Solution
                    </Link>
                    <Link
                      href="/cryptocurrency-liquidity-solution"
                      className={
                        "dropdown-item" +
                        (url === "/cryptocurrency-liquidity-solution"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Crypto Liquidity Solution
                    </Link>
                    <Link
                      href="/mining-pool-solution-crypto-exchange"
                      className={
                        "dropdown-item" +
                        (url === "/mining-pool-solution-crypto-exchange"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Mining Pool System
                    </Link>

                    <Link
                      href="/otc-trading-system"
                      className={
                        "dropdown-item" +
                        (url === "/otc-trading-system" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      OTC Platform Turnkey
                    </Link>
                  </div>
                  <div className="w-100">
                    <Link
                      href="/ico-ieo-sto-platform"
                      className={
                        "dropdown-item" +
                        (url === "/ico-ieo-sto-platform" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      ICO/IEO/STO
                    </Link>
                    <Link
                      href="/referral-platform-crypto-exchange"
                      className={
                        "dropdown-item" +
                        (url === "/referral-platform-crypto-exchange"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Referral & Affiliate System
                    </Link>
                    <Link
                      href="/digital-and-crypto-banking"
                      className={
                        "dropdown-item" +
                        (url === "/digital-and-crypto-banking" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Crypto Banking Solution
                    </Link>
                    <Link
                      href="/nft-marketplace-software-platform"
                      className={
                        "dropdown-item" +
                        (url === "/nft-marketplace-software-platform"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      NFT Marketplace
                    </Link>
                    <Link
                      href="/decentralized-crypto-exchange-platform"
                      className={
                        "dropdown-item" +
                        (url === "/decentralized-crypto-exchange-platform"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Decenterlized Exchange
                    </Link>
                    <Link
                      href="/nft-launchpad"
                      className={
                        "dropdown-item" +
                        (url === "/nft-launchpad" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      NFT LaunchPad
                    </Link>
                    <Link
                      href="/token-launchpad"
                      className={
                        "dropdown-item" +
                        (url === "/token-launchpad" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Token LaunchPad
                    </Link>
                    <Link
                      href="/bitcoin-ordinals-nft-marketplace-wallet"
                      className={
                        "dropdown-item" +
                        (url === "/bitcoin-ordinals-nft-marketplace-wallet"
                          ? " active"
                          : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Bitcoin Ordinals NFT Marketplace & Wallet
                    </Link>
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown
                title="Products"
                onToggle={toggleNav}
                id="basic-nav-dropdown"
                className="services-nav pro-nav"
                // show={show}
                //  onMouseEnter={showDropdown}
                // onMouseLeave={hideDropdown}
              >
                <div className="d-md-flex align-items-start justify-content-start">
                  <div className="container">
                    <div className="row ">
                      <div className="col-lg-12 text-black ">
                        <div className="row mt-4">
                          <div className="col-lg-3 text-black">
                            <div className="d-flex">
                              <Link
                                href="/crypto-exchange-turnkey-solution"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    Cryptocurrency Exchange Turnkey Solution
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    A Centralised Exchange Ecosystem ready to
                                    launch with regulatory norms
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/cryptocurrency-liquidity-solution"
                                className="  dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    Crypto Liquidity Solution
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Helping new exchanges to get liquidity from
                                    multiple big exchanges in the market
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/mining-pool-solution-crypto-exchange"
                                className="  dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">Mining Pool System</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Start your own mining pool and let people
                                    mine cryptocurrencies by connecting their
                                    rigs
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                          <div className="col-lg-3 ">
                            <div className="d-flex">
                              <Link
                                href="/otc-trading-system"
                                className=" dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    OTC Platform Turnkey
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    P2P trading platform with multiple payment
                                    gateway support and strongest moderation
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/ico-ieo-sto-platform"
                                className=" dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis"> ICO/IEO/STO</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Let your community buy your new token with
                                    your own ICO/IEO/STO platform
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/referral-platform-crypto-exchange"
                                className="  dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    Referral & Affiliate System
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Referral System module supporting all our
                                    products for boosting the business on the go
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex">
                              <Link
                                href="/digital-and-crypto-banking"
                                className="  dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    Crypto Banking Solution
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Ready solution for internet banking to
                                    support crypto transactions and custodian
                                    wallet
                                  </p>
                                </div>
                              </Link>
                            </div>

                            <div className="d-flex">
                              <Link
                                href="/nft-marketplace-software-platform"
                                className="dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">NFT Marketplace</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    NFT marketplace platform ready to go live
                                    with Multichain support for trading NFTs
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/decentralized-crypto-exchange-platform"
                                className="dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    Decenterlized Exchange
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Swap, Pools, Stake, Farms, Bridge, Vaults,
                                    Tanks, Launchpad, DAO & everything DeFi
                                    under the sun
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="d-flex">
                              <Link
                                href="/nft-launchpad"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">NFT LaunchPad</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Start a NFT launchpad to let communities
                                    launch their collections on the go
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/token-launchpad"
                                className="dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">Token LaunchPad</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Token Launchpad Platform with multichain
                                    support ready to go live
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-flex">
                              <Link
                                href="/bitcoin-ordinals-nft-marketplace-wallet"
                                className="dropdown-item  com-nav-p mt-4"
                              >
                                <div className="">
                                  <h4 className="servis">
                                    Bitcoin Ordinals NFT Marketplace & Wallet
                                  </h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Ordinals Marketplace and Originals Wallet
                                    like Metamask to capture the growing
                                    Ordinals industry
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link href="/developers">For Developers</Nav.Link>
              <Nav.Link href="/companies">For Companies</Nav.Link>
              <Nav.Link href="/Ment-Portfolio.pdf" target="_blank">
                Portfolio
              </Nav.Link>
              <NavDropdown
                title="Company"
                onToggle={toggleNav}
                id="basic-nav-dropdown"
                className="compnaies-nav services-nav comp-height"
                /*className="company-nav"*/
                //show={about}
                //  onMouseEnter={aboutDropdown}
                //  onMouseLeave={abouthideDropdown}
              >
                <div className="d-md-flex align-items-start justify-content-start">
                  <div className="container">
                    <div className="row py-4 ">
                      <div className="col-lg-12 text-black ">
                        <div className="row ">
                          <div className="col-lg-4 text-black">
                            <div className="d-flex">
                              <Link
                                href="/about"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">About Us</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Discover our vision, mission and team
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                          <div className="col-lg-4 text-black">
                            <div className="d-flex">
                              <Link
                                href="/team"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">Team</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Explore our world-class portfolio of
                                    partners
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                          <div className="col-lg-4 text-black">
                            <div className="d-flex">
                              <Link
                                href="/quotation"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">Quotation</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Company and product updates
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                          <div className="col-lg-4 text-black">
                            <div className="d-flex">
                              <Link
                                href="/ment-tech-careers"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">Careers</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Build Web3 with us
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                          <div className="col-lg-4 text-black">
                            <div className="d-flex">
                              <Link
                                href="/Security"
                                className="dropdown-item  com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">Security</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Learn about our industry-leading protection
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                          <div className="col-lg-4 text-black">
                            <div className="d-flex">
                              <Link
                                href="/contact-us"
                                className="dropdown-item comp-height com-nav-p"
                              >
                                <div className="">
                                  <h4 className="servis">Contact Us</h4>
                                  <p className="com-nav-p border-0 pl-0 prd">
                                    Get help 24/7
                                  </p>
                                </div>
                              </Link>
                            </div>

                            {/*<a className="dropdown-item underline mt-2" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown
                title="Company"
                id="basic-nav-dropdown"
                className="services-nav-mobile proi-nav"
              >
                <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100 drop-content">
                    <Link
                      href="/about"
                      className={
                        "dropdown-item " + (url === "/about" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      About Us
                    </Link>
                    <Link
                      href="/team"
                      className={
                        "dropdown-item " + (url === "/team" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Team
                    </Link>
                    <Link
                      href="/ment-tech-careers"
                      className={
                        "dropdown-item " + (url === "/career" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Careers
                    </Link>
                    <Link
                      href="/Security"
                      className={
                        "dropdown-item " +
                        (url === "/Security" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Security
                    </Link>
                    <Link
                      href="/contact-us"
                      className={
                        "dropdown-item " +
                        (url === "/contact-us" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Contact Us
                    </Link>
                    <Link
                      href="/quotation"
                      className={
                        "dropdown-item " +
                        (url === "/quotation" ? " active" : "")
                      }
                    >
                      <Image className="ph2" src={ph2} alt="..." />
                      Quotation
                    </Link>
                  </div>
                </div>
              </NavDropdown>

              <Button
                className="request-demo-modal ml-2"
                href="/requestDemo"
                bsPrefix="btnn"
              >
                Request Demo
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
export default Navigation;
