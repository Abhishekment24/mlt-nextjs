import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
const Faqs = () => {
  const data = [
    {
      id: 1,
      question:
        "How much does it cost to hire a Dedicated Developer from Ment?",
      answer: `Costs vary depending on the specific skills required. We specialize in a set of technologies and offer competitive pricing. A monthly contract with Ment Tech starts at $1000 per month. The cost increases with the developer's years of experience and the technology needed. Scaling your team with Ment Tech is easy, as developers can be on boarded within 7 days and contracts can be terminated with 1 month notice. Our policies are tailored to support startups`,
    },
    {
      id: 2,
      question: "How will I communicate with the Developer?",
      answer: `After signing the contract and receiving payment, we establish an open communication channel between you and our developers. Our goal at Team Ment Tech is to streamline the process and save you time. We use various platforms such as Skype, Slack, WhatsApp, Trello, and Discord for communication, but we are also flexible and willing to use the platform that you prefer
    
          `,
    },
    {
      id: 3,
      question:
        "I live in a different timezone from India, How will the developer work with me?",
      answer: `The team at Ment Tech has a track record of successfully working with clients from different time zones. Our developers are able to accommodate different shifts to ensure maximum collaboration and productivity. We schedule meetings and discussions at times that are convenient for both parties. With Ment Tech, you can seamlessly work across time zones`,
    },

    {
      id: 4,
      question:
        "What happens when a developer is not working as per expectation?",
      answer: `You can raise any concerns about performance to your assigned account manager. We will conduct an internal review and give the developer one week to improve. After that, you have two options: request a replacement or terminate the contract without any additional cost`,
    },
  ];
  return (
    <div>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="text-center">
                <p className=" text-capitalize"> Faqs</p>
                <h1 className="">Do You Have a Question for Us?</h1>
              </div>
              <div className="pt-5">
                <div className="">
                  {data.map((faq) => (
                    // eslint-disable-next-line react/jsx-key
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" disclosed  pt-4 pb-2 d-flex justify-content-between w-full text-black   text-left">
                            <span className="text-black">{faq.question}</span>
                            <div className="">
                              {open ? <BiMinus /> : <BsPlusLg />}
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className="ml-2  pb-2 text-black">
                            {faq.answer}
                          </Disclosure.Panel>
                          <div className="dis-1 ml-2"></div>
                          {/* <div className="pt-2 border-b border-slate-800"></div>*/}
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
