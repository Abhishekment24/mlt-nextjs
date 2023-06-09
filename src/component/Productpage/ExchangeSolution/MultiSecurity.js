import React from "react";

const MultiSecurity = () => {
  return (
    <>
      <section className="gradient-black-bg p-y-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <h1 className="mb-4 texting">Security of Data</h1>
              <div className="abouts-benifits-box mb-4">
                <h3>Backup of data in two modes</h3>
                <p>
                  There are two options for data backup: Real-time replication
                  and a daily scheduled backup
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>Authorization through two-factor authentication</h3>
                <p>
                  Exchange enhances the security of multiple admin panels
                  through the use of two-factor authentication. This involves
                  sending a secure link via email and requiring a token,
                  creating an additional safeguard against unauthorized access
                  to the system
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>IP-based access restrictions</h3>
                <p>
                  When feasible, an IP address can be linked to a login password
                  or key. For example, access to the payment system in Exchange
                  is only possible from a previously defined IP address
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>Database with encryption</h3>
                <p>
                  Client personal information is stored in an encrypted database
                  partition, ensuring that the data cannot be directly accessed
                  even from the server
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>Replication of databases securely</h3>
                <p>
                  SSL-enabled database replication eliminates the risk of
                  man-in-the-middle (MITM) attacks
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-white">
              <h1 className="mb-4 texting">Security of Access</h1>
              <div className="abouts-benifits-box mb-4">
                <h3>Access logs</h3>
                <p>
                  Every access to the database server is recorded and logged for
                  auditing purposes
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>External data exchange that is secure</h3>
                <p>
                  A one-of-a-kind authentication key is utilized for exchanging
                  data with external systems such as payment systems, and the
                  signature is verified after each data exchange to ensure its
                  authenticity
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>SSH Keys</h3>
                <p>
                  Ment Tech personnel use SSH keys to access the server, and
                  access is restricted to a select few individuals who have
                  encrypted disks on their computers. This eliminates the risk
                  of data breaches due to laptop theft, ensuring the
                  confidentiality of sensitive information
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>Document security</h3>
                <p>
                  Our database does not hold any client documents. Instead, we
                  process data through a cloud-based solution provided by a
                  third-party provider. All client documents are securely stored
                  by third-party KYC providers in accordance with the terms of a
                  contract
                </p>
              </div>
              <div className="abouts-benifits-box mb-4">
                <h3>Change monitoring</h3>
                <p>
                  We continuously monitor any alterations to important data,
                  such as a password hash, and send notifications through two
                  separate channels in the event of a change, ensuring real-time
                  security
                </p>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-12 texting-1 text-white">
              <h3>
                High-level DDoS mitigation is employed to secure our servers,
                preventing disruptive bad traffic while allowing good traffic to
                pass through smoothly, ensuring high availability and optimal
                performance of websites, applications, and APIs.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiSecurity;
