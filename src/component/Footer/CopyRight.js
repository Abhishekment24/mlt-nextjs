import React from "react";
const CopyRight = () => {
  return (
    <section className="copyright">
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-lg-12 text-center">
            <ul className="d-flex justify-content-center">
              <li>
                2019 - {new Date().getUTCFullYear()} © Ment Tech Labs Pvt. Ltd
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;
