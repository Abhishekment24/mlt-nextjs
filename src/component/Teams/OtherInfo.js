import React from "react";
import Link from "next/link";
const OtherInfo = () => {
  return (
    <section className="other-info py-5 mb-5">
      <div className="container">
        <div className=" securty-blocki-4">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <Link
                href="/ment-tech-careers"
                className="bg-white rounded-2 box-shadow-card no-underline hover-grow"
              >
                <h3>Careers</h3>
                <p>
                  At Ment Tech, we create tools that simplify collaboration and
                  software development for everyone. We have established a
                  company that we are proud to work for and believe that you
                  will also enjoy working here.
                </p>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link
                href="/contact-us"
                className="bg-white rounded-2 box-shadow-card no-underline hover-grow"
              >
                <h3>Contact Us</h3>
                <p>
                  Do you have anything to share with us? If you have a question,
                  suggestion, or tip, please don&apos;t hesitate to fill out the
                  form below. We will respond to you as soon as possible. Join
                  us in our mission to make collaboration even better.
                </p>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherInfo;
