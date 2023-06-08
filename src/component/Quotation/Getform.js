import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header";
import LetsTalk from "../LetsTalk/LetsTalk";
import Input from "../PhoneInput";
import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";

import Image from "next/image";
const Getform = ({
  status,
  message,
  messages,
  className,
  style,
  onSubmitted,
}) => {
  const [phonenumber, setPhonenumber] = useState("");
  
  const [msg, setMsg] = useState(messages);
  const submit = () => {
    if (
      email &&
      name &&
      company &&
     
      email.value.indexOf("@") > -1
    ) {
      onSubmitted({
        EMAIL: email.value,
        MERGE1: name.value,
        MERGE13: phonenumber,
        MERGE14: company.value,
        MERGE15: msg,
      });
    } else {
      toast.error("Please fill in all required fields", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  let email, name, company;
 
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
     <Head>
        <title>For Quotation</title>
        <meta name="description" content="For Quotation" />
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
                        <h1 className="">Get a Quote</h1>
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
                                ref={(node) => (name = node)}
                                type="text"
                                className="form-control"
                                placeholder="Your name"
                                isRequired
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                ref={(node) => (email = node)}
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
                                ref={(node) => (company = node)}
                                type="text"
                                className="form-control"
                                placeholder="Company Name"
                                isRequired
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <textarea
                                className="form-control"
                                placeholder="Message"
                                // ref={node => (messages = node)}
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                              />
                            </div>

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
      <LetsTalk />
     
    </>
  );
};

export default Getform;
