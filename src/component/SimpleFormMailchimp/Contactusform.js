import React, { useEffect, useState } from "react";
import Input from "../PhoneInput";
import Image from "next/image";
import ContactUsHeader from "../ContactUs/HeaderContactUs";
import IndiaOffice from "../../assests/images/contact/india-office.jpg";
import UkOffice from "../../assests/images/contact/uk-office.jpg";
import UsaOffice from "../../assests/images/contact/romania-office.jpg";
import IOffice from "../../assests/images/contact/56f17e8b811e4adca3fd211a1c83bda1.jpg";
import DOffice from "../../assests/Aboutusimg/dubai.jpeg";
import { Modal } from "react-bootstrap";

import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const Contactusform = ({ status, message, className, onSubmitted }) => {
  const [phonenumber, setPhonenumber] = useState("");

  const [technicalShow, setTechnicalShow] = useState(false);
  const handleClose = () => {
    setTechnicalShow(false);
  };

  const handleTechnicalShow = () => setTechnicalShow(true);

  let email, name, company, project, messages;
  const submit = () => {
    if (
      email &&
      name &&
      company &&
      project &&
      messages &&
      email.value.indexOf("@") > -1
    ) {
      onSubmitted({
        EMAIL: email.value,
        MERGE2: name.value,
        MERGE13: phonenumber,
        MERGE14: company.value,
        MERGE1: project.value,
        MERGE15: messages.value,
      });
    } else {
      toast.error("Please fill in all required fields", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }
    
    
  useEffect(() => {
    if (status === "success") {
      toast.success(
        "Thank you for contacting us! We will get back to you ASAP!",
        {
          appearance: "success",
          autoDismiss: true,
        }
      );
    }
    if (status === "error") {
      toast.error("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [status]);
  return (
    <>
      <section className="contactus">
        <ContactUsHeader />
        <section id="hire-background" className="location-offices p-y-100">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                <h1>Ment Offices</h1>
                <p >Offices around the world</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 text-center mb-3">
                <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                  <Image className="img-fluid" src={IndiaOffice} alt="IndiaOffice" />
                  <h4 className="mb-3 mt-3 pr-2 pl-2 h-line">
                    MENT TECH INDIA
                  </h4>
                  <p className="pr-3 pl-3">
                    Annapurna Rd, Saraswati Nagar, Indore, Madhya Pradesh,
                    452001
                  </p>
                  <hr className="mb-0" />
                  <p className="p-3">Email: info@ment.tech</p>
                </div>
              </div>
              <div className="col-lg-3 text-center mb-3">
                <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                  <Image className="img-fluid" src={UsaOffice} alt="UsaOffice" />
                  <h4 className="mb-3 mt-3 pr-2 pl-2 h-line">MENT TECH USA</h4>
                  <p className="pr-3 pl-3">
                    5857 Owens Ave Suite 300 Carisbad, CA 92008
                  </p>
                  <hr className="mb-0" />
                  <p className="p-3">Email: info@ment.tech</p>
                </div>
              </div>
              <div className="col-lg-3 text-center mb-3">
                <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                  <Image className="img-fluid" src={UkOffice} alt="UkOffice" />
                  <h4 className="mb-3 mt-3 pr-2 pl-2 h-line">MENT TECH UK</h4>
                  <p className="pr-3 pl-3 mb-3">
                    One Avenue, 23 Finsbury Circus, London, England, EC2M 7EA
                  </p>
                  <hr className="mb-0" />
                  <p className="p-3">Email: info@ment.tech</p>
                </div>
              </div>
              <div className="col-lg-3 text-center mb-3">
                <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                  <Image className="img-fluid" src={IOffice} alt="IOffice" />
                  <h4 className="mb-3 mt-3 pr-2 pl-2 h-line">
                    MENT TECH IRELAND
                  </h4>
                  <p className="pr-3 pl-3">
                    101, Monkstown Rd, Monkstown, Blackrock Co. Dublin, Ireland
                  </p>
                  <hr className="mb-0" />
                  <p className="p-3">Email: info@ment.tech</p>
                </div>
              </div>
              <div className="col-lg-3 text-center mb-3">
                <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                  <Image
                    className="img-fluid"
                    width="100%"
                    src={DOffice}
                    alt="DOffice"
                  />
                  <h4 className="mb-3 mt-3 pr-2 pl-2 h-line">MENT TECH UAE</h4>
                  <p className="pr-3 pl-3">We are Coming to Dubai Soon!</p>
                  <hr className="mb-0" />
                  <p className="p-3">Email: info@ment.tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="hire-dev-background" className="contact-options  p-y-100">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center text-white">
                <h1>Contact Ment Support</h1>
                <p>
                  Thank you for your interest in reaching out to us. Our team
                  will be happy to assist you and answer any questions you may
                  have. Please provide your preferred contact method and a
                  representative will be in touch with you as soon as possible.
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-4 text-center">
                <div className="contact-chat">
                  {/*  <ChatBox open={(handleToggle) => (<button onClick={handleToggle}>Im</button> )}/>*/}
                </div>
                <div className="contact-box rounded-2 box-shadow-card no-underline hover-grow p-5">
                  <Link  href="https://wa.me/917479866444/?text=Hi, Ment Tech!">
                   
                    <h3 className="mb-4">Contact Ment Sales</h3>
                    <p>Start an online chat session with a Ment team member.</p>
                    <p className="bottom-link font-weight-bold">Chat now  </p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="callus-block contact-box rounded-2 box-shadow-card no-underline hover-grow p-5">
                  <a href="tel:+7479866444?Call">
                    <i className="fas fa-headset fa-3x fa-fw mt-3 mb-4"></i>
                    <h3 className="mb-4">Call Us</h3>
                    <p>
                      Call us, and we&apos;ll answer your questions over the
                      phone.
                    </p>
                    <p className="bottom-link font-weight-bold">
                      <span>Call now</span> 
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div
                  className="contact-box rounded-2 box-shadow-card no-underline hover-grow p-5"
                  onClick={handleTechnicalShow}
                >
                  <i className="fas fa-envelope-open fa-3x fa-fw mt-3 mb-4"></i>
                  <h3 className="mb-4">Request we Contact you</h3>
                  <p>
                    Send us the contact request, and have a technical sales
                    specialist contact you.
                  </p>
                  <p className="bottom-link">
                    <Link href="" className="font-weight-bold">
                      Send a request
                    </Link>{" "}
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modal
          className="tech-contact"
          show={technicalShow}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Contact Ment.Tech Technical Sales
              <p className="mb-0">
                Tell us a bit about yourself and your project. An Ment team
                member will reach out to you shortly.
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className="mb-4">Your Contact Information</h2>
            <div className="form-row">
              <div className="form-group col-12">
                <label>
                  Name<em className="text-danger">*</em>
                </label>
                <input
                  ref={(node) => (name = node)}
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  isRequired
                />
              </div>
              <div className="form-group col-12">
                <label>
                  Email<em className="text-danger">*</em>
                </label>
                <input
                  ref={(node) => (email = node)}
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  isRequired="is required"
                />
              </div>
              <div className="form-group col-12">
                <label>
                  Phone<em className="text-danger">*</em>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  phone={phonenumber}
                  onChange={setPhonenumber}
                  isRequired
                />
              </div>
              <div className="form-group col-12">
                <label>
                  Company Name<em className="text-danger">*</em>
                </label>
                <input
                  ref={(node) => (company = node)}
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  isRequired
                />
              </div>
              <div className="col-lg-12">
                <h2>Tell us about your project</h2>
              </div>
              <div className="form-group col-12">
                <label>
                  Estimated project budget (USD)? We have solutions for any
                  budget.<em className="text-danger">*</em>
                </label>
                <input
                  ref={(node) => (project = node)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your estimated project budget in USD"
                  isRequired
                />
              </div>
              <div className="form-group col-12">
                <label>Your Message</label>
                <textarea
                  ref={(node) => (messages = node)}
                  placeholder="What project do you have in mind? Which ment solutions and products are you interested in?"
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-12">
                <button className="btn btn-primary" onClick={submit}>
                  Submit
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Contactusform;
