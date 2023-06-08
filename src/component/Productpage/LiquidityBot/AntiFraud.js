import React from "react";
import { ListItems } from "../ExchangeSolution/style.css/coin";
import LockSvg from "../ExchangeSolution/LockSvg";

const MultiSecurity = ({ lockActive, handleLockState }) => {
  const data = [
   
    
    <div key={0} className="">
     The Exchange&apos;s KYC procedure requires users to disclose the total amount
     of deposits they have made within a specified time frame. If the sum of
     these deposits surpasses a predetermined threshold, an alert is triggered
     to the compliance officer for further examination.
   </div>,

   <div key={1} className="">
     The system detects and alerts if a user makes deposits and withdrawals
     without engaging in any trading activities, as it is a primary indication
     of potential money laundering involvement.
   </div>,

   <div  key={2} className="">
     If a user requests a withdrawal to a wallet that has already been utilized
     by another user of the Exchange, it is a clear indication of double
     accounting and should be reviewed by a responsible security department
     personnel.
   </div>,

   <div key={3} className="">
     The system maintains a record of all users phone number changes, and if
     someone tries to use a phone number already registered to another user,
     the system will trigger an alert.
   </div>,

   <div key={4} className="">
     The system sends an alert with a list of users who have logged into their
     Client Area using the same IP address, along with their details, IP
     address, login dates, and other information for further investigation.
   </div>,

   <div key={5} className="">
     If a user is observed engaging in frequent high-frequency trading (HFT)
     activity, it could indicate the use of an exploit, and further
     investigation is required to ensure that their trading is fully
     legitimate.
   </div>,

   <div key={6} className="">
     The anti-fraud system has the capability to detect and flag a trading
     strategy that is considered toxic by both Forex and Crypto exchanges, and
     sends an alert to investigate further to ensure the user&apos;s trading is
     legitimate.
   </div>,

   <div key={7} className="">
     The Exchange keeps a record of all e-mail changes made by users, and if a
     new user tries to use an e-mail address that has already been used by
     another user, the system will send an alert to notify of this potential
     issue.
   </div>,

   <div key={8} className="">
     Yes, it is possible to detect users that make a large number of deposits,
     which is often considered as suspicious activity. The system can flag
     these activities and alert the finance or compliance team for further
     investigation. This is a standard feature in many anti-fraud systems used
     in financial institutions and online exchanges.
   </div>,
   
 ];

  return (
    <>
      <section className="p-y-100" id="hire-background">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <h2 className=""> Fraud-Prevention System</h2>
              <div className="">
                {/*}  <div className="SecurityWrapperLefts">
                  {data.map((item) => (
                    <ListItems
                      key={item.id}
                      active={lockActive === item.id}
                      onClick={() => handleLockState(item.id)}
                    >
                      Excessive Deposite Amount
                    </ListItems>
                  ))}
                </div>*/}
             <div className="SecurityWrapperLefts">
                  <ListItems
                  
                    active={lockActive === 0}
                    onClick={() => handleLockState(0)}
                  >
                    Excessive Deposite Amount
                  </ListItems>
                  <ListItems
                    active={lockActive === 1}
                    onClick={() => handleLockState(1)}
                  >
                    Lack of Trading Activity With Different Withdrawals
                  </ListItems>
                  <ListItems
                    active={lockActive === 2}
                    onClick={() => handleLockState(2)}
                  >
                    Multiple Accounts Use the Same Withdrawal Wallet Address
                  </ListItems>
                  <ListItems
                    active={lockActive === 3}
                    onClick={() => handleLockState(3)}
                  >
                    Multiple Accounts Using Identical Phone Numbers
                  </ListItems>
                  <ListItems
                    active={lockActive === 4}
                    onClick={() => handleLockState(4)}
                  >
                    Multiple Accounts Using the Same IP
                  </ListItems>
                  <ListItems
                    active={lockActive === 5}
                    onClick={() => handleLockState(5)}
                  >
                    Trades Amounts are Excessive
                  </ListItems>
                  <ListItems
                    active={lockActive === 6}
                    onClick={() => handleLockState(6)}
                  >
                    Arbitrage Triangle
                  </ListItems>
                  <ListItems
                    active={lockActive === 7}
                    onClick={() => handleLockState(7)}
                  >
                    A Single Email is Reused by Multiple Accounts
                  </ListItems>
                  <ListItems
                    active={lockActive === 8}
                    onClick={() => handleLockState(8)}
                  >
                    Deposits Made Regularly
                  </ListItems>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
            <LockSvg lockActive={lockActive} />
              <div>{data[lockActive]}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MultiSecurity;
