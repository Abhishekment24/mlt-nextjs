import React, { useEffect, useState } from "react";

import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";

const Careerform = ({ status, message, className, onSubmitted }) => {
  const [phonenumber, setPhonenumber] = useState("");

  let email, name, phone, company, messages;
  const submit = () => {
    if (
      email &&
      name &&
      phone &&
      company &&
      messages &&
      email.value.indexOf("@") > -1
    ) {
      onSubmitted({
        EMAIL: email.value,
        MERGE1: name.value,
        MERGE13: phone.value,
        MERGE14: company.value,
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
    <section className="contactus  career">
      <section className="p-y-100" id="hire-background">
        <div className="">
          <div className="container">
            <div className="hirs-flex align-items-center">
              <div className=" text-black">
                <h1 className="respo text-capitalize">
                  Hire Remote Developers
                </h1>

                <p className="hir-para">
                  Achieve outstanding results by augmenting your teams with the
                  knowledge and skills of industry experts and well-trained
                  professionals from Ment Tech, a top IT staff augmentation
                  company.
                </p>
                <p className="hir-para">
                  Accelerate your product launch by bringing on skilled
                  developers. Enhance team productivity and quickly acquire top
                  talent to efficiently develop large-scale projects.
                </p>
              </div>
              <div className="mt-4 blue-bg gits-pading text-white hires w-full">
                <div className="px-4">
                  <h3> Get In Touch With Us</h3>
                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            ref={(node) => (name = node)}
                            type="text"
                            className="form-control foms-text"
                            placeholder="Your Full Name"
                            isRequired
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            ref={(node) => (email = node)}
                            type="email"
                            className="froms-mar form-control foms-text"
                            placeholder="Your Business Email"
                            isRequired
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            ref={(node) => (phone = node)}
                            type="phone"
                            className="form-control foms-text"
                            placeholder="Your Phone No"
                            isRequired
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <select
                            ref={(node) => (company = node)}
                            name="mostLike"
                            className="froms-mar"
                            required
                          >
                            <option selected>How Did You Hear About Us?</option>

                            <option value="Google">Google</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="   Friend Suggested">
                              Friend Suggested
                            </option>

                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <textarea
                            className="form-control messges-text"
                            placeholder="Message"
                            ref={(node) => (messages = node)}
                          />
                        </div>
                        <div className="form-group mt-4 ">
                          <button className="btn btn-primary" onClick={submit}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            ref={(node) => (name = node)}
                            type="text"
                            name="name"
                            className="form-control foms-text"
                            placeholder="Your Full Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            ref={(node) => (email = node)}
                            type="email"
                            name="email"
                            className="froms-mar form-control foms-text"
                            placeholder="Your Business Email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            //  ref={(node) => (phone = node)}
                            type="phone"
                            name="phone"
                            className="form-control foms-text"
                            placeholder="Your Phone No"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <select
                            ref={(node) => (company = node)}
                            name="mostLike"
                            className="froms-mar"
                            required
                          >
                            <option selected>How Did You Hear About Us?</option>

                            <option value="Google">Google</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="   Friend Suggested">
                              Friend Suggested
                            </option>

                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-12">
                          <textarea
                            ref={(node) => (messages = node)}
                            className="form-control messges-text"
                            name="message"
                            placeholder="Message"
                          />
                        </div>

                        <div className="form-group mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={submit}
                          >
                            TALK TO A FRIEND
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>*/}
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
