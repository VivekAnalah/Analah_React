// import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import { Link } from "react-router-dom";
import "../App.css";

function BecomePosp() {
  // const matches = useMediaQuery("(max-width:500px)");
  return (
    <>
      <div className="pb-4" >
        <Header raiseClaim={true} />
        <div className="container-fluid pb-4" >
          <div className="flex flex-col sm:flex-row gap-[5%]  mt-[50px] relative items-center ">
            <div className="flex flex-col sm:w-[50.6%] w-[80%]  ml-[4%]  order-2 sm:order-1 sm:[50%] sm:ml-[8.5%] sm:mt-[0px] mt-[15px]" >
              <div className="my-container_posp sm:space-y-[10%]  xl:pl-0  " >
                <h2 className="font-semibold  sm:text-[25px] text-[24px] md:text-[32px] text-[#2A44A9] " >
                 Become an Insurance PoSP
                  
                  <br />
                  <span className="title-border-bottom ">(Point </span> of
                  Salesperson)
                </h2>
                <div className="  lg:w-11/12 text-justify sm:mt-0 mt-[10px]" >
                  <h4 className="text-justify mb-[4%]   text-[15px] md:text-[20px] font-normal  text-[#595959]">
                    Join our growing network of Insurance Partners and work with
                    the most respected names and companies in the insurance
                    industry. Our extensive product range consists of both Life
                    & Non-life Insurance products.
                  </h4>

                  <h4 className="text-justify mb-[4%] text-[15px] md:text-[20px] font-normal  text-[#595959]">
                    We value your referrals and offer excellent commissions on
                    all our plans. So what are you waiting for? Join our team
                    today, sell insurance online as a PoSP and start earning
                    passive income!
                  </h4>

                  <h4 className="text-justify mb-[4%]  text-[15px] md:text-[20px] font-bold  text-[#000]">
                    A PoSP is a type of insurance agent who works with insurance
                    companies or brokers to sell insurance policies directly to
                    customers.
                  </h4>
                  <div className="text-center my-6 sm:text-left sm:my-0 ">
                <a href="https://pos.analahinsurance.com/" target="blank">
                  <button
                    className="justify-center items-center py-2 text-[#FFFFFF] px-10 text-[18px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
                      borderRadius: 11,
                    }}
                  >
                    Become a PoSP
                  </button>
                </a>
              </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col order-1 sm:order-2 w-[70%] sm:w-[50%]" style={{background: 'linear-gradient(171.81deg, #2A44A9 -68.4%, rgba(255, 255, 255, 0.06) 80.56%)', borderRadius: '280.5px 0px 0px 0px'}} >
              <div className="items-center flex justify-center mt-10 lg:mt-8">
                <div className="flex rounded-tl-[130px] p-5 lg:p-10">
                  {/* <div className="flex flex-col space-y-6 items-center justify-center mt-[0px]">
                    <h2 className="text-xl text-[#000000] font-bold text-center">
                      Register Now!
                    </h2>

                    <div>
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Full Name (Name as per PAN card)"
                      />
                      <div className="phoneInpt">
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Mobile No. "
                        />
                        <span>Send OTP</span>
                      </div>
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Enter OTP"
                      />

                      <input
                        type="text"
                        className="input-text"
                        placeholder="Email"
                      />

                      <input
                        type="text"
                        className="input-text"
                        placeholder="Enter PAN Card Number"
                      />
                      <div className="checkbox pt-4">
                        <div className="round">
                          <input type="checkbox" name="" id="checkBox" />
                          <label htmlFor="checkBox"></label>
                        </div>
                        <Link to="/privacy-policy"><p className="text-xs px-5"> I hereby agree to the Privacy Policy, Disclaimer and
                            Terms & Conditions.
                        </p></Link>
                      </div>
                      <div className="text-center">
                        <button
                          className="justify-center w-full sm:w-[210px] text-center items-center py-2 text-[#FFFFFF] px-10 text-[18px]"
                          style={{
                            background:
                              "linear-gradient(180deg, #2A44A9 0%, #3052D3 100%)",
                            borderRadius: 11,
                          }}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div> */}
                  <img
                  alt="insurance"
                  src={require("../Assets/Images/Asset 15.png")}
                  className=" sm:h-[50vh]  h-[250px] mx-auto"
                />
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 -bottom-44 lg:block hidden">
            <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-full "
              alt=""
            />
          </div>
          <div className="absolute right-0 -bottom-44 lg:block hidden">
            <img
              src={require("../Assets/Images/partnerBg.png")}
              className="w-full "
              alt=""
            />
          </div>
        </div>
        <div className="container-fluid w-12/12 pt-2 pb-20 pl-[10%] pr-[10%]" style={{background:"#F7F8FC"}}>
          <div className="my-container flex space-y-5 flex-col items-center justify-center lg:mt-20 sm:mt-20 mt-10">
            <h2 className="font-semibold text-2xl lg:text-3xl text-[#000]">
              <span className="  sm:border-b-[5px] sm:pb-[15px] sm:border-[#2a44a9]">Why </span>become an
              Analah Insurance PoSP?{" "}
            </h2>
            <div className="my-8 flex space-y-5 flex-col  items-center justify-center text-justify ">
              <ul className="posp-content text-[#525252] mt-4 lg:mt-16 pb-6">
                <li>
                  <b>Passive Income:</b> Earn passive income for each plan that
                  you sell. IRDAI sets a predetermined and fixed level of
                  commissions that PoSPs are paid. Simply cultivate a strong
                  clientele and refer people to our insurance services and
                  develop a steady stream of revenue through policy renewals.
                  Additional work will increase your income further.
                </li>
                <li>
                  <b>Ongoing Support & Regular Training:</b> When it comes to
                  insurance, knowledge is key. Avail thorough and regular
                  training from industry experts on latest products.
                </li>
                <li>
                  <b>Work from anywhere at any time:</b> All PoSPs use online
                  processes to sell policies, and hence are not required to
                  travel anywhere to sell insurance. Being a PoSP agent gives
                  you the flexibility to work from anywhere at any time, whether
                  you wish to work full-time or part-time.
                </li>
                <li>
                  <b> Designated Relationship Manager:</b> Joining our network
                  of PoSPs ensures you are never alone during the sales process.
                  A designated Relationship Manager is assigned to you, who
                  helps you in every step of the way.
                </li>
                <li>
                  <b>Scope for High Earnings:</b> As there is no fixed income or
                  any maximum limit, your income will be based on a commission
                  basis and will depend on the number of policies you sell and
                  the renewals you receive. Set your own targets; the more
                  policies you sell, the higher you can earn as a PoSP.
                </li>
                <li>
                  <b>Awards and Recognition:</b> Gain national and international
                  recognition by qualifying for global awards like Asia’s
                  Trusted Life Insurance Agents and Advisors and more.
                </li>
                <li>
                  <b>Monitor your Performance:</b> Our backend support & MIS
                  helps you track your performance and records.
                </li>
              </ul>

              <h5 className="font-bold text-lg lg:text-2xl w-full text-left text-[#2A44A9]">
                Eligibility to become a PoSP:
              </h5>

              <ul className="posp-content posp-content2 text-left mr-[auto] text-[#525252] lg:pt-4">
                <li>
                  <b>At least 18 years of age</b>
                </li>
                <li>
                  <b>Basic Educational Qualifications (Completed Class 10)</b>
                </li>
                <li>
                  <b>
                    Valid Identity Proof (Aadhaar Card, PAN Card and a Bank
                    Account)
                  </b>
                </li>
              </ul>

              <h5 className="font-bold text-lg lg:text-2xl w-full text-left text-[#2A44A9]">
                Simple Steps to Become an IRDAI PoSP:
              </h5>

              <ul className="posp-content posp-content2 text-left mr-[auto] text-[#525252] lg:pt-3">
                <li>
                  <b>Registration and Complete your KYC</b>
                </li>
                <li>
                  <b>Training</b>
                </li>
                <li>
                  <b>Examination</b>
                </li>
                <li>
                  <b>IRDAI Approved Certification</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BecomePosp;