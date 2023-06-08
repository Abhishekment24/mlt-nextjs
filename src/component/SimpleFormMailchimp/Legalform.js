import React, {useRef, useEffect, useState } from "react";
import Input from "../PhoneInput";
import { Modal } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const SimpleForm = ({ status, message, className, onSubmitted }) => {
  const [phonenumber, setPhonenumber] = useState("");
  
  const [technicalShow, setTechnicalShow] = useState(false);
  const handleClose = () => {
    setTechnicalShow(false);
  };

  const handleTechnicalShow = () => setTechnicalShow(true);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const projectRef = useRef(null);
  const companyRef = useRef(null);
  const messagesRef = useRef(null);

  const submit = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const  project = projectRef.current.value;
    const company = companyRef.current.value;
    const messages = messagesRef.current.value;

    if (
      email &&
      name &&
      project &&
      company &&
      messages &&
      email.indexOf("@") > -1
    ) {
      onSubmitted({
        EMAIL: email,
      MERGE2: name,
      MERGE13: phonenumber,
      MERGE14: company,
      MERGE1: project,
      MERGE15: messages,
      });
    } else {
      toast.error("Please fill in all required fields", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

 
  useEffect(() => {
    if (status === "success") {
      toast.success("Thank you for contacting us! We will get back to you ASAP!", {
        appearance: "success",
        autoDismiss: true,
      });
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
      <section className="weoffer-section p-y-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row mb-5">
                <div className="col-lg-12">
                 
                    <div className="title-block">
                      <h1 className="mb-4 texting">
                        Interested in Working Together? Let&apos;s Talk!
                      </h1>
                      <p>
                        A successful digital banking system utilizes technology
                        that is fast, scalable, and stable, and implements
                        effective risk management measures.
                      </p>
                    </div>
                  
                </div>
              </div>
              <div className="row lets-talk">
                <div className="col-lg-4 hover-grow">
                 
                    <div className="lets-chat"></div>
                    <Link
                      href="https://wa.me/917479866444/?text=Hi, Ment Tech!"
                      className="contact-block white-bg d-block position-relative no-underline overflow-hidden"
                    >
                      <h3>Chat with Sales</h3>
                      <p className="mb-0">
                        Start chat 
                      </p>
                      <i class="far fa-comments" aria-hidden="true"></i>
                    </Link>
                  
                </div>
                <div className="col-lg-4 hover-grow">
                 
                    <Link
                      href="tel:+917479866444"
                      className="contact-block white-bg d-block position-relative no-underline overflow-hidden"
                    >
                      <h3>Call Sales</h3>
                      <p className="mb-0">
                        Call now
                      </p>
                      <i class="fas fa-phone-volume"></i>
                    </Link>
                  
                </div>
                <div className="col-lg-4 hover-grow">
                 
                    <Link
                      href="#"
                      onClick={handleTechnicalShow}
                      className="contact-block white-bg d-block position-relative no-underline overflow-hidden"
                    >
                      <h3>Let us Contact you</h3>
                      <p className="mb-0">
                        Send a contact request{" "}
                       
                      </p>
                      <i class="far fa-envelope"></i>
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal className="tech-contact" show={technicalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Contact Ment Tech Technical Sales
            <p className="mb-0">
              Tell us a bit about yourself and your project. An ment team member
              will reach out to you shortly.
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
               ref={nameRef}
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
                  ref={emailRef}
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
                ref={companyRef}
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
                ref={projectRef}
                type="text"
                className="form-control"
                placeholder="Enter your estimated project budget in USD"
                isRequired
              />
            </div>
            <div className="form-group col-12">
              <label>Your Message</label>
              <textarea
                className="form-control"
                placeholder="What project do you have in mind? Which ment solutions and products are you interested in?"
                ref={messagesRef}
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
    </>
  );
};

export default SimpleForm;
