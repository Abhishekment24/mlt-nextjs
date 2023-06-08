import React from "react";
import Header from "../Header";
import Head from "next/head";
import Image from "next/image";
import Security from "../../assests/Aboutusimg/Group 31380.png";
import PanelSecurty from "../../assests/images/security.svg";
import securityimg from "../../assests/images/securty.svg";
import quant from "../../assests/images/quant.svg";
import { Secdata } from "../Data/Data";

const Securitys = () => {
  return (
    <>
        <Head>
        <title>Security </title>
        <meta name="description" content="Security" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <section className="">
        <section className="about-header securit blue-bg ">
        <Header />
          <div className="container">
            <div className="row  align-items-center mt-5">
              <div className="col-lg-8  text-white">
                <h1 className="mb-4">Security Layers</h1>
                <p>
                  Security in crypto exchanges is a top priority and must never
                  be compromised. Our advanced security system protects against
                  fraudulent activities and attacks.
                </p>
                <p>
                  We have engineered our exchange with robust security features,
                  including cold storage for the majority of tokens and coins.
                  Security is paramount in crypto trading, and our cold wallets
                  are designed for maximum security, being kept offline without
                  internet connection and stored in secure hardware wallets. Our
                  algorithms ensure the regular transfer of client funds into
                  cold storage, maintaining a high level of security at all
                  times.
                </p>
                <p>
                  During code reviews, it&apos;s essential to review pull requests
                  for any security vulnerabilities. Ensure that no new security
                  issues are introduced into the main branch.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                 <Image className="owls-image"  src={Security} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="p-y-100 securt-blocks-4">
          <div className="container ">
            <div className="row">
              {Secdata.map((person) => {
                return (
                  <div className="col-lg-3 mb-4" key={person.id}>
                    <div className="box-shadow-card p-3">
                      <h4 className="mt-2 mb-2">{person.name}</h4>

                      <p>{person.position}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="pb-4">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12">
                <div className="blue-bg border-r-10 overflow-hidden p-50">
                  <div className="row">
                    <div className="col-lg-8 text-white">
                      <h1>Code Security</h1>
                      <h2> From Blueprint to Execution</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 text-white mt-5 mt-md-5">
                      <h3 className="">Fraud-Prevention System</h3>
                      <p>
                        Trust is the cornerstone of our commitment to our
                        customers. We place a high value on security and
                        privacy.
                      </p>
                      <ul className="text-white security-d">
                        <li> An excessive deposit amount </li>
                        <li> No trading activity after multiple withdrawals</li>
                        <li>
                          Multiple accounts use the same withdrawal wallet
                          address
                        </li>
                        <li> Multiple accounts share the same phone number</li>
                        <li> Multiple accounts share the same IP address</li>
                        <li> The amount of trades is excessive</li>
                        <li> Triangle of arbitrage</li>
                        <li> Multiple accounts use the same email address</li>
                        <li> Deposits made frequently</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-white mt-5  mt-md-5">
                      <h3 className="">Teamwork & Integration</h3>
                      <p>
                        Maximize your productivity by efficiently managing
                        collaborations, projects, and integrations.
                      </p>
                      <ul className="text-white security-d">
                        <li>Controlling access in a fine-grained manner </li>
                        <li>SAML</li>
                        <li>LDAP</li>

                        <li>
                          Access levels for a repository (Read, Write, and
                          Admin)
                        </li>
                        <li>Permissions for the base repository</li>
                        <li>OAuth Application Whitelists</li>
                        <li>
                          Using webhooks to monitor security across the
                          organization{" "}
                        </li>
                        <li>Third-party integration access controls </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-white mt-5  mt-md-5">
                      <h3 className="">Monitoring & Evaluation of Projects</h3>
                      <p>
                        Build with confidence by having the right teams in place
                        and continuously monitoring security.
                      </p>
                      <ul className="text-white security-d">
                        <li>Reviews to be performed </li>
                        <li>Checks that are required</li>
                        <li>
                          The continuous integration and testing (CI) are built
                          in{" "}
                        </li>
                        <li>Keys with read-only deployment </li>
                        <li>API for deployments </li>
                        <li>Keeping track of and logging </li>
                        <li>Evidence key controls </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-y-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-2">
                <h2 className="">
                  Security is an Integral Part of Our Software Development
                  Lifecycle.
                </h2>
                <p className="mt-5">
                  Security is integrated into our coding lifecycle through the
                  use of site-specific and dynamic source code analysis tools,
                  as well as peer-reviews of our software.
                </p>
              </div>
              <div className="col-lg-5">
                 <Image className="owls-image" width="85%" src={PanelSecurty} alt="" />
              </div>
            </div>
            <div className="row my-5 align-items-center">
              <div className="col-lg-5">
                 <Image className="owls-image" width="85%" src={securityimg} alt="" />
              </div>
              <div className="col-lg-7 mb-2">
                <h2 className=" mt-5">
                  MFA (Multi-Factor Authentication) is Used.
                </h2>
                <p className="mt-5">
                  Transactions are protected with the use of multiple
                  authentication methods such as passwords, biometrics, email,
                  and phone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-y-100 securit blue-bg ">
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-lg-6 mb-5 text-white">
                <h1 className="mb-4 ">Cryptography Based on Quantums</h1>
                <p>
                  As one of the world&apos;s leading providers of QKD (Quantum Key
                  Distribution), we offer cutting-edge solutions for long-term
                  data protection. Explore our range of security products
                  offered by Quantum-Safe Security, aimed at protecting assets
                  through cyber security solutions based on quantum technology.
                </p>
                <p>
                  This makes it impossible for unauthorized parties to access
                  the information being transmitted, providing unbreakable
                  security for sensitive data. Quantum cryptography provides a
                  revolutionary new way of securing communication and protecting
                  sensitive data from cyber threats.
                </p>
                <p>
                  Quantum cryptography ensures the privacy and security of data
                  transmission, as it can detect any unauthorized access or
                  manipulation of the data. It is considered to be the most
                  secure form of cryptography, and is being widely used for
                  secure communication and data protection in various industries
                  and applications.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                 <Image className="owls-image" src={quant} alt="" />
              </div>
            </div>
          </div>
        </section>

        
      </section>
    </>
  );
};
export default Securitys;
