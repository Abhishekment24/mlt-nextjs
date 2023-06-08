import React from "react";
import Head from "next/head";
import HeaderCareer from "./HeaderCareer";
import { Card, Accordion, Button } from "react-bootstrap";
import Link from "next/link";

const Careers = () => {
  return (
    <section className="contactus career">
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderCareer />
      <section className="location-offices py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12 text-center">
              <h1 className="">The Places We Can Hire</h1>
              <p>
                At Ment Tech, we embrace a remote work culture and have offices
                in various states and countries.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <div className="box-shadow-cards">
                    <h4 className="">Diversity & Inclusion at Work</h4>
                    <p>
                      At Ment Tech, our goal is to create a positive and
                      welcoming work environment by promoting diversity and
                      inclusiveness in our culture.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="box-shadow-cards">
                    <h4 className="">Invest in Yourself </h4>
                    <p>
                      Our platform is constructed with equity grants, allowing
                      you to have a share in our future success. For full-time
                      employees, the company offers attractive 401k plans and
                      matches 50% of the employee&apos;s total contribution, up to
                      the IRS 402(g) limit.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="box-shadow-cards">
                    <h4 className="">Continue to Grow </h4>
                    <p>
                      Uncover your preferred way of learning. Every year, you
                      will be allocated funds to fulfill your learning and
                      personal development aspirations, including attending
                      conferences and purchasing books.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="box-shadow-cards">
                    <h4 className="">Having Fun at Work </h4>
                    <p>
                      We believe that autonomy, self-direction, and a balanced
                      work-life balance are crucial for achieving great things.
                      Our employees enjoy flexible schedules and time off, and
                      we believe that you should be able to work from any
                      location where you can be productive and happy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" id="Open Positions">
          <div className="row my-5 ">
            <div className="col-lg-12 text-center">
              <h1>Open Positions</h1>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-12">
              <Accordion className="job-listing">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Business <span>3 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/business/business-analyst"
                            className="accod"
                          >
                            Business Analyst
                            <span>Hybrid</span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/business/business-development-manager"
                            className="accod"
                          >
                            Business Development Manager
                            <span>Hybrid</span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/business/business-development-executive-requirements"
                            className="accod"
                          >
                            Business Development Executive
                            <span>Hybrid</span>
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Human Resource <span>2 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/human-resource/human-resource-manager"
                            className="accod"
                          >
                            Human Resource Manager
                            <span>Hybrid</span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/human-resource/human-resource-executive"
                            className="accod"
                          >
                            Human Resource Executive
                            <span>Hybrid</span>
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Project Management <span>2 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/project-management/agile-project-manager"
                            className="accod"
                          >
                            Agile Project Manager
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      Quality Assurance (QA) <span>2 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/quality-assurance/quality-assurance-engineer"
                            className="accod"
                          >
                            Quality Assurance Engineer
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>

                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                      Software Engineering <span>5 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/software-engineering/blockchain-developer"
                            className="accod"
                          >
                            Blockchain Developer
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/software-engineering/frontend-engineer"
                            className="accod"
                          >
                            Frontend Developer
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/software-engineering/backend-developer"
                            className="accod"
                          >
                            Backend Developer
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/software-engineering/full-stack-developer"
                            className="accod"
                          >
                            Full Stack Developer
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/software-engineering/mern-stack-developer"
                            className="accod"
                          >
                            MERN Stack Developer
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                      Marketing <span>2 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/marketing/digital-marketing-executive"
                            className="accod"
                          >
                            Digital Marketing Executive
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/marketing/digital-marketing-manager"
                            className="accod"
                          >
                            Digital Marketing Manager
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                      Accounts <span>2 Openings</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <ul className="py-3">
                        <li>
                          <Link
                            href="/careers/accounts/accounts-manager"
                            className="accod"
                          >
                            Accounts Manager
                          </Link>
                          <span>Hybrid</span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Careers;
