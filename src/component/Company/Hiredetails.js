import React from "react";
import Hireform from "../SimpleFormMailchimp/Hireform";
import MailchimpSubscribe from "react-mailchimp-subscribe";
//const url =
// "https://tech.us13.list-manage.com/subscribe/post?u=d92c244f52691a213cb0ecd90&amp;id=fcb1367741";
const url =
  "https://tech.us14.list-manage.com/subscribe/post?u=25fcf4ce1e7fda61341e5e020&amp;id=982a6358ef";
const HireDetail = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <Hireform
          onSubmitted={(formData) => subscribe(formData)}
          message={message}
          status={status}
        />
      </div>
    )}
  />
);
export default HireDetail;
