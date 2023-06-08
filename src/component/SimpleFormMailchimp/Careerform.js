import React, { useEffect, useState } from "react";

import Input from "../PhoneInput";
import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";

const Careerform = ({ status, message, className, onSubmitted }) => {
  const [phonenumber, setPhonenumber] = useState("");
  

  let email, name, company, messages;
  const submit = () => {
    if (
      email &&
    name &&
    company &&
    messages &&
    email.value.indexOf("@") > -1
    ) {
      onSubmitted({
        EMAIL: email.value,
        MERGE1: name.value,
        MERGE13: phonenumber,
        MERGE14: company.value,
        MERGE15: messages.value,
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
    <section className="contactus  career">
      <section className="job-details">
        <div className="container">
          <div className="text-capitalize">
            <div className="">
              <div className="form-bg">
                <div className="">
                  <div className="form-group my-3">
                    <label>
                      Your Name<em className="text-danger">*</em>
                    </label>
                    <input
                      ref={(node) => (name = node)}
                      type="text"
                      className="form-control"
                      isRequired
                    />
                  </div>
                  <div className="form-group my-3">
                    <label>
                      Email <em className="text-danger">*</em>
                    </label>
                    <input
                      ref={(node) => (email = node)}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      isRequired
                    />
                  </div>
                  <div className="form-group my-3">
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
                  <div className="form-group my-3">
                    <label>
                      For Postion<em className="text-danger">*</em>
                    </label>
                    <input
                      ref={(node) => (company = node)}
                      type="text"
                      className="form-control"
                      placeholder="For Postion"
                      isRequired
                    />
                  </div>
                  <div className="form-group my-3">
                    <label>
                      Message<em className="text-danger">*</em>
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      ref={(node) => (messages = node)}
                    />
                  </div>

                  <div className="">
                    <button
                      className="schedule-call-modal w-100 btn btn-primary text-center mt-4"
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
      </section>
    </section>
  );
};

export default Careerform;
