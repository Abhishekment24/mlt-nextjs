import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

const Heroform = ({ status, message, className, style, onSubmitted }) => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);
  const messagesRef = useRef(null);

  const submit = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const company = companyRef.current.value;
    const messages = messagesRef.current.value;

    if (
      email &&
      name &&
      phone &&
      company &&
      messages &&
      email.indexOf("@") > -1
    ) {
      onSubmitted({
        EMAIL: email,
        MERGE1: name,
        MERGE13: phone,
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
      <section className="contactus  career">
        <section className="job-details">
          <div className="">
            <div className="">
              <div className="hires">
                <div className="form-bg">
                  <div className="">
                    <div className="form-group my-3">
                      <div className="products-forms">
                        <input
                          ref={nameRef}
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group my-3">
                      <div className="products-forms">
                        <input
                          ref={emailRef}
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group my-3">
                      <div className="products-forms">
                        <input
                          ref={phoneRef}
                          type="phone"
                          className="form-control"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group my-3">
                      <div className="products-forms">
                        <input
                          ref={companyRef}
                          type="text"
                          className="form-control"
                          placeholder="Company Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group my-3">
                      <div className="products-forms">
                        <textarea
                          ref={messagesRef}
                          className="form-control"
                          placeholder="Message"
                          required
                        />
                      </div>
                    </div>

                    <div className="">
                      <button
                        className="schedule-call-modals w-100 btn btn-primary text-center"
                        onClick={submit}
                      >
                        Submit
                      </button>
                    </div>
                    <span className="pro-para mt-2">
                      The purpose of collecting your information is to provide
                      you with updates on products and services that might
                      interest you. Our <Link href="/privacy-policy">Privacy Policy</Link>  has more
                      information on the matter.
                    </span>
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

export default Heroform;
