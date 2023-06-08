import React, { useEffect, useState } from "react";
import Input from "../PhoneInput";
import { Modal } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";


const SimpleForm = ({ status, message, className, onSubmitted }) => {
  const [phonenumber, setPhonenumber] = useState("");
  
  const [technicalShow, setTechnicalShow] = useState(false);
  const handleClose = () => {
    setTechnicalShow(false);
  };

  const handleTechnicalShow = () => setTechnicalShow(true);

  let email, name, company, project, messages;
  const submit = () =>
    email &&
    name &&
    company &&
    project &&
    messages &&
    email.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: email.value,
      MERGE2: name.value,
      MERGE13: phonenumber,
      MERGE14: company.value,
      MERGE1: project.value,
      MERGE15: messages.value,
    });
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
                <div className="col-lg-4">
                 
                    <div className="lets-chat"></div>
                    <a
                      href="https://wa.me/917479866444/?text=Hi, Ment Tech!"
                      className="contact-block white-bg d-block position-relative no-underline overflow-hidden"
                    >
                      <h3>Chat with Sales</h3>
                      <p className="mb-0">
                        Start chat <i class="fas fa-arrow-right fa-fw"></i>
                      </p>
                      <i class="far fa-comments" aria-hidden="true"></i>
                    </a>
                  
                </div>
                <div className="col-lg-4">
                 
                    <a
                      href="tel:+917479866444"
                      className="contact-block white-bg d-block position-relative no-underline overflow-hidden"
                    >
                      <h3>Call Sales</h3>
                      <p className="mb-0">
                        Call now <i class="fas fa-arrow-right fa-fw"></i>
                      </p>
                      <i class="fas fa-phone-volume"></i>
                    </a>
                  
                </div>
                <div className="col-lg-4">
                 
                    <a
                      href="#"
                      onClick={handleTechnicalShow}
                      className="contact-block white-bg d-block position-relative no-underline overflow-hidden"
                    >
                      <h3>Let us Contact you</h3>
                      <p className="mb-0">
                        Send a contact request{" "}
                        <i class="fas fa-arrow-right fa-fw"></i>
                      </p>
                      <i class="far fa-envelope"></i>
                    </a>
                  
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
                className="form-control"
                placeholder="What project do you have in mind? Which ment solutions and products are you interested in?"
                ref={(node) => (messages = node)}
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
