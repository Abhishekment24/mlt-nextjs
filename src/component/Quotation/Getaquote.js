import React from "react";
import Getform from "../Quotation/Getform";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://tech.us14.list-manage.com/subscribe/post?u=25fcf4ce1e7fda61341e5e020&amp;id=982a6358ef";

const Getaquote = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message, onSubmitted }) => (
      <div>
        <Getform
          onSubmitted={(formData) => subscribe(formData)}
          message={message}
          status={status}
        />
      </div>
    )}
  />
);
export default Getaquote;
