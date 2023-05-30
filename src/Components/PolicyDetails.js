import { useMediaQuery } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import { Link } from "react-router-dom";

function PolicyDetails({
  head,
  benefit_head,
  key_feature_head,
  subhead,
  list1,
  list2,
  list3,
  list4,
  img,
  Ins_Text_1,
  Ins_Text_2,
  Ins_Text_3,
  description_1,
  description_2,
  description_3,
  benefits,
  keyTerms,
  twoWheel,
  homeInsurance,
  RetirementInsurance,
  car,
  why,
  whyText,
  quotes,
  quotes_link,
  helping_verb,
  no_benefit,
  isRequired,
  whyRequired_head,
  whyRequired_Text,
  what,
  whatText,
  whatHeadingText,
  whatDefinition,
  gridText,
  gridHeader,
  document_data,
  add_ons_array,
  extra_data
}) {
  const matches = useMediaQuery("(max-width:500px)");

  const title = head;
  const myArr = title.split(" ");

  console.log(myArr[0], Ins_Text_1);

  return (
    <div>
      <Header policyDetails={false} />

      <div
        id="insurance-scroll"
        className=" mycontainer1 mx-auto lg:pb-[200px] md:pb-[150px] sm:pb-[120px] pb-[120px]   "
        style={{
          background:
            "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
        }}
      >
        <div className="flex flex-col sm:flex-row lg:gap-[12.2%] xl:gap-[15.2%] md:gap-[8%] gap-[5%] termLife relative items-center mt-[40px] pb-[20px]">
          <div className="lg:w-[45%] sm:w-[50%] w-[90%] order-2 sm:order-1 flex flex-col  pl-[8.5%] sm:pr-[0%] pr-[8.5%]">
            <div className=" ">
              <div className="flex items-center sm:mt-[0px] mt-[10px]">
                <h2 className="text-[#000000] font-normal  text-[24px]  md:text-[30px] sm:text-[27px] xl:text-[32px] pb-[2%]">
                  <span className="title-border-bottom">{myArr[0]}</span>{" "}
                  {myArr[1] === "Insurance" || myArr[1] === "Plans" ? (
                    <span className="text-[#2A44A9] font-medium">
                      {myArr[1]}
                    </span>
                  ) : (
                    <span>{myArr[1]} </span>
                  )}
                  <span className="text-[#2A44A9] font-medium">{myArr[2]}</span>
                </h2>
              </div>
              <h3 className=" text-base lg:text-2xl sm:font-[500] text-[18px] pt-[4%] text-[#000] pb-[2%]">
                {subhead}
              </h3>
              <ul className="font-light text-xl xl:text-2xl text-[#595959] list-outside ... list-disc ml-[15px]  ">
                <li className="pb-[7px] text-[1.2rem]">{list1}</li>
                <li className="pb-[7px] text-[1.2rem]">{list2}</li>
                <li className=" pb-[7px] text-[1.2rem]">{list3}</li>
                <li className="text-[1.2rem]">{list4}</li>
              </ul>
            </div>
          </div>
          <div className="order-1 sm:order-2 flex flex-col items-center xl:ml-[10%] lg:ml-[5%]">
            <img
              src={require(`../Assets/Images/${img}.png`)}
              alt={head}
              className=" lg:w-[320px] md:w-[250px] sm:w-[250px] w-[60%]  "
            />

            {/* ---------- Form -------------  */}
            {/* <div className="order-1 lg:order-2 flex flex-col ">
              <div className="items-center flex justify-center mt-5 lg:mt-0">
                <div className="flex raiseform-wrap2 -mr-4 rounded-tl-[130px] p-5 lg:p-10">
                  <div className="flex flex-col space-y-6 items-center justify-center mt-[0px]">
                    <h2 className="text-xl text-[#2A44A9] font-bold text-center">
                      Get the right {head} plan Today !
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
                      <div>
                        {homeInsurance ? (
                          <>
                            <p className="pt-3">
                              Do you own the property or do you rent it?
                            </p>
                            <div className="section over-hide z-bigger">
                              <div className="section over-hide z-bigger">
                                <div className="container-fluid pt-2">
                                  <div className="row justify-content-center pb-5">
                                    <div className="col-12 pb-5">
                                      <input
                                        className="checkbox-tools"
                                        type="radio"
                                        name="tools"
                                        id="tool-1"
                                        checked
                                      />
                                      <label
                                        className="for-checkbox-tools"
                                        for="tool-1"
                                      >
                                        Owner
                                      </label>
                                      <input
                                        className="checkbox-tools"
                                        type="radio"
                                        name="tools"
                                        id="tool-6"
                                      />
                                      <label
                                        className="for-checkbox-tools"
                                        for="tool-6"
                                      >
                                        Tenant
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>

                      <div className="checkbox pt-4">
                        <div className="round">
                          <input type="checkbox" name="" id="checkBox" />
                          <label htmlFor="checkBox"></label>
                        </div>
                        <Link to="/privacy-policy">
                          <p className="text-xs	px-5">
                            {" "}
                            I hereby agree to the Privacy Policy, Disclaimer and
                            Terms & Conditions.
                          </p>
                        </Link>
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
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative xl:top-[-80px] lg:top-[-80px] md:top-[-80px] sm:top-[-60px] top-[-60px] ">
        <div className="text-center items-center   h-[20px] absolute top-[0%] ">
          <a href={quotes_link} target="blank">
            <button
              className="justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px] "
              style={{
                background: "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
                borderRadius: 11,
              }}
            >
              {quotes}
            </button>
          </a>
        </div>
      </div>
      <div className="relative top-[0px]">
        <div
          className="items-center  w-[100%]   absolute lg:top-[-180px] md:top-[-150px] sm:top-[-120px] top-[-120px] lg:pl-[25%] lg:pr-[25%] md:pl-[20%] md:pr-[20%] sm:pl-[20%] sm:pr-[20%] pl-[5%] pr-[5%] "
          style={{ textAlign: "center" }}
        >
         
            <h2 className="text-[#000000] text-center text-[16px]  md:text-[20px] sm:text-[18px] lg:text-[25px] xl:text-[28px] items-center">
              <span className="text-[#2A44A9] font-light">{Ins_Text_1}</span>{" "}
              <span className="text-[#2A44A9] font-normal">{Ins_Text_2}</span>{" "}
              <span className="text-[#2A44A9] font-light">{Ins_Text_3}</span>
            </h2>
          
        </div>

        <div
          className="headingLine m-[auto] w-[100%]"
          style={{
            background:
              "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
          }}
        >
          {/* <h2>Know more about {head}</h2> */}
        </div>
      </div>

      <div className="my-0 bg-[#F5F5F5]">
        {/* <div
          style={{ display: matches ? "none" : "" }}
          className="bg-[#F5F5F5]"
        >
          <img
            alt="left triangle"
            src={require("../Assets/Images/leftTriangle.png")}
            className="object-contain aspect-auto  w-[100px] h-auto"
          />
        </div>  */}

        <div className="relative ">
          <img
            alt="left triangle"
            style={{ display: matches ? "none" : "" }}
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto sm:w-[100px] w-[70px] absolute sm:top-[1%] top-[2.5%]  h-auto rotate-180"
          />
          <div className="bg-[#F5F5F5] pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-10 lg:pb-20">
            <div>
              <h2 className="font-semibold text-xl my-3 lg:my-5 lg:m-0 pb-8 lg:pb-11 lg:text-3xl text-center">
                <span className=" sm:border-b-[5px] sm:pb-[15px] sm:border-[#2a44a9]">
                  Know
                </span>{" "}
                more about {head}
              </h2>
            </div>
            <div>
              {RetirementInsurance ? (
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  Retirement or Pension Plans
                </h2>
              ) : (
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  {head}
                </h2>
              )}

              <p className="text-[#595959] text-base lg:text-lg text-justify pb-7 lg:pb-14">
                {description_1}

                {description_2 ? (
                  <>
                    {" "}
                    <br />
                    <br />
                    {description_2}
                  </>
                ) : (
                  <></>
                )}

                {description_3 ? (
                  <>
                    <br />
                    <br />
                    {description_3}{" "}
                  </>
                ) : (
                  <></>
                )}
              </p>
              {why ? (
                <>
                  <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                    Why {helping_verb} {head} essential?
                  </h2>{" "}
                  <ul className="list-disc ml-4 mb-10">
                    {whyText.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                </>
              ) : (
                ""
              )}
               {what ? (
              <>
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  What is Travel Insurance?
                </h2>{" "}
                <p className="text-[#595959] text-base lg:text-lg text-justify">
                  {whatDefinition}
                </p>
                <p className="text-[#595959] font-[600] text-base lg:text-lg text-justify mb-4 mt-4 lg:mb-6">
                  Types of Travel Insurance in India
                </p>
                <ul className="list-disc ml-4 mb-10">
                  {whatText &&
                    whatText.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-base text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                </ul>{" "}
              </>
            ) : (
              ""
            )}
              {no_benefit ? (
                ""
              ) : (
                <>
                  <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                    {benefit_head}
                  </h2>
                  <ul className="list-disc ml-4 mb-10">
                    {benefits.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">{item.desc_head}</span>{" "}
                          {item.desc}
                        </li>
                      );
                    })}
                  </ul>{" "}
                </>
              )}

              <div className={matches ? "my-2 h-[10px]" : "my-4 h-[10px]"} />
              {twoWheel ? (
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  Benefits of Group Health Insurance to the Employee:
                </h2>
              ) : homeInsurance ? (
                <></>
              ) : (
                <h2 className="text-[#2A44A9] text-xl  lg:text-2xl font-semibold mb-7">
                  {key_feature_head}
                </h2>
              )}
              {homeInsurance ? (
                <></>
              ) : (
                <ul className="list-disc ml-4 pb-[32px]">
                  {keyTerms.map((item, index) => {
                    return (
                      <li
                        className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                        key={index}
                      >
                        {car && item.id == 3 ? (
                          <>
                            <p>
                              <span className="font-[600]">Premiums:</span> The
                              premiums for Car Insurance are decided on the
                              basis of:
                            </p>
                            <li
                              className={
                                matches
                                  ? "text-[#595959] text-[14px] text-justify my-1 ml-[6%]"
                                  : "text-[#595959] text-[16px] text-justify my-3 ml-[5%]"
                              }
                            >
                              The type of Vehicle, Model Number, Fuel Type,
                              Capacity etc
                            </li>
                            <li
                              className={
                                matches
                                  ? "text-[#595959] text-[14px] text-justify my-1 ml-[6%]"
                                  : "text-[#595959] text-[16px] text-justify my-3 ml-[5%]"
                              }
                            >
                              The city
                            </li>
                            <li
                              className={
                                matches
                                  ? "text-[#595959] text-[14px] text-justify my-1 ml-[6%]"
                                  : "text-[#595959] text-[16px] text-justify my-3 ml-[5%]"
                              }
                            >
                              Age and profession
                            </li>
                            <li
                              className={
                                matches
                                  ? "text-[#595959] text-[14px] text-justify my-1 ml-[6%]"
                                  : "text-[#595959] text-[16px] text-justify my-3 ml-[5%]"
                              }
                            >
                              Accessories added or any modifications made in the
                              policy
                            </li>

                            <p
                              className={
                                matches
                                  ? "text-[#595959] text-[14px] text-justify my-1 font-[600]"
                                  : "text-[#595959] text-[16px] text-justify my-3 font-[600]"
                              }
                            >
                              These are the factors that determine Car Insurance
                              quotes that are required to pay to buy the policy.
                              Use Car Insurance online calculators to find the
                              premium payable on a policy.
                            </p>
                          </>
                        ) : (
                          <>
                            {" "}
                            <span className="font-[600]">
                              {item.desc_head}
                            </span>{" "}
                            {item.desc}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

             
            </div>
             
              {/* What is covered Travel Insurance section */}

          {gridHeader ? (
            <>
              <div className="w-[100%]">
                <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                  {gridHeader}
                </h2>

                <div className="flex gap-[5px] mt-[5px]">
                  <div className="w-[30%] text-[#595959] text-base font-[600]  bg-[#FFFFFF] p-[2%] flex  items-center">
                    Coverage Benefit
                  </div>
                  <div className="text-[#595959] text-base p-[2%] w-[70%] text-justify  bg-[#FFFFFF] font-[600]">
                    Meaning
                  </div>
                </div>
                {gridText &&
                  gridText.map((text, index) => (
                    <div className="flex gap-[5px] mt-[5px]" key={index}>
                      <div className="w-[30%] text-[#595959] text-base font-[600]  bg-[#FFFFFF] p-[2%] flex  items-center">
                        {text.title}
                      </div>
                      <div className="text-[#595959] text-base p-[2%] w-[70%] text-justify  bg-[#FFFFFF]">
                        {text.desc}
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
          {/* Why required section for Car  */}
          {isRequired ? (
            <>
              <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                {whyRequired_head}
              </h2>
              <ul className="list-disc ml-4 mb-10">
                {whyRequired_Text && whyRequired_Text.map((item, index) => {
                  return (
                    <li
                      className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                      key={index}
                    >
                      <span className="font-[600]">{item.require_head}</span>{" "}
                      {item.require}
                    </li>
                  );
                })}
              </ul>{" "}
            </>
          ) : (
            ""
          )}

          {/* Add-ons In car  */}
          {extra_data ? <div>
            <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
              Add-ons in a Car Insurance Policy
            </p>
            <p className="text-[#595959] text-base lg:text-lg ml-[16px] text-justify mb-4 lg:mb-6">
              In addition to the standard Car Insurance coverage, Insurance
              companies also offer ‘Add-on Covers’, which are additional covers
              that protect your car and offer extra coverage. By paying an
              additional premium, which is added to the Car Insurance quotes to
              determine the final premium payable for the policy, Add-on Covers
              can be purchased. Comprehensive Car Insurance packages provide
              Add-ons. Below are some examples of frequent Add-ons:
            </p>
          
            <ul className="list-disc ml-4 mb-10">
              {add_ons_array && add_ons_array.map((item, index) => {
                return (
                  <li
                    className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                    key={index}
                  >
                    <span className="font-[600]">{item.require_head}</span>{" "}
                    {item.require}
                  </li>
                );
              })}
            </ul>{" "}
            <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
              Documents required to Raise Car Insurance Claim:
            </p>
            <p className="text-[#595959] text-base lg:text-lg ml-[16px] text-justify mb-4 lg:mb-6">
              There is no actual paperwork required to raise a claim against
              your policy. The following documents must instead be uploaded
              digitally via our digital platform (mobile website/app). Please
              note that depending on the claim, the list of required documents
              may change.
            </p>
            <ul className="list-disc ml-4 mb-10">
              {document_data.map((item, index) => {
                return (
                  <li
                    className="text-[#595959] text-base lg:text-lg text-justify  ml-[5%]"
                    key={index}
                  >
                 
                    {item.require}
                  </li>
                );
              })}
            </ul>{" "}
          </div> : <></> }
          
          </div>
          <img
          alt="left triangle"
          style={{ display: matches ? "none" : "" }}
            src={require("../Assets/Images/rightTriangle.png")}
          className="object-contain aspect-auto sm:w-[100px] w-[70px] absolute  bottom-[0%] right-[0%]  h-auto  sm:block hidden"
        />
        </div>
      </div>
      <div className="mt-[20px]">
        <Footer />
      </div>
    </div>
  );
}

export default PolicyDetails;
