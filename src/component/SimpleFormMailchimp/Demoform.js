import React, { useRef, useEffect, useState } from "react";
import Header from "../Header";
import Head from "next/head";
import Input from "../PhoneInput";
import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";

const Demoform = ({ status, message, className, style, onSubmitted }) => {
  const [phonenumber, setPhonenumber] = useState("");

  const handleTechnicalShow = () => setTechnicalShow(true);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const projectRef = useRef(null);
  const companyRef = useRef(null);
  const messagesRef = useRef(null);

  const submit = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;

    const company = companyRef.current.value;
    const messages = messagesRef.current.value;

    if (email && name && company && messages && email.indexOf("@") > -1) {
      onSubmitted({
        EMAIL: email,
        MERGE1: name,
        MERGE13: phonenumber,
        MERGE14: company,
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
      <Head>
        <title>Ment Tech - Request a Demo</title>
        <meta name="description" content="Request a Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="contact-h-f white-header">
        <Header />
        <section className="Requestademo ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 mt-5 mb-5 offset-lg-d1 position-relative top-n6 top-lg-0 actions-pricing-private">
                <div className="">
                  <div className="row">
                    <div className="col-lg-12 mt-5">
                      <div className="title-block">
                        <h1 className="">Request a Demo</h1>
                      </div>
                    </div>
                  </div>
                  <div className="requestdemo">
                    <div className="row mt-2 ">
                      <div className="col-lg-12">
                        <div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <input
                                ref={nameRef}
                                type="text"
                                className="form-control"
                                placeholder="Your name"
                                isRequired
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                ref={emailRef}
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                isRequired
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <Input
                                type="tel"
                                name="phone"
                                phone={phonenumber}
                                onChange={setPhonenumber}
                                isRequired
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                ref={companyRef}
                                type="text"
                                className="form-control"
                                placeholder="Company Name"
                                isRequired
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <textarea
                                ref={messagesRef}
                                className="form-control"
                                placeholder="Message"
                              />
                            </div>
                            {/*  <div className="form-group col-lg-12 res">
                                                      <label>Upload File</label>
                                                
                                                </div>
                                                <div className="form-group col-lg-12 res">
                                          
                                                <img className="arts" width="2%" src={art} alt=""/>
                                         <input
                                            type="file"
                                              id="myfile"
                                                name="myfile"
                                                className="files"
                                            
                                            />
                                               
                                                   </div>
                                              
                                                <div className="form-group col-lg-12 rese">
                                                <label className="">
                                                <input
                                                  name="user-recommend"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />I give consent to processing my personal data given from the contact form above under the terms and conditions of Ment Tech Privacy Policy.</label>
       
                                                </div>
                                                <div className="form-group col-lg-12">
                                                <label className="">
                                                <input
                                                  name="user-recommend"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />I want to receive commercial commuications and marketing information from Ment Tech by electronic means of communication (including telephone and e-mail). </label>
       
                                                </div>*/}
                            <div className="form-group col-md-12">
                              <button
                                className="btn btn-primary"
                                onClick={submit}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Demoform;
