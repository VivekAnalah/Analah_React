import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import { Link } from "react-router-dom";
import Whatsapp from "./Whatsapp";

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
  extra_data,
  gridTopRight,
  gridTopLeft,
  button_overlap
}) {
  const matches = useMediaQuery("(max-width:500px)");

  const title = head;
  const myArr = title.split(" ");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const divStyles = {
    // border : isHovered ? "0.5px solid #2A44A9" : "",
    background: isHovered
      ? "white"
      : "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
    boxShadow: isHovered ? "5px 10px" : "",
    color: isHovered ? "#2A44A9" : "#ffffff",
    borderRadius: 11,
  };

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
              <div className="flex items-center sm:mt-[0px] mt-[20px]">
                <h2 className="text-[#000000] font-normal sm:text-[22px] text-[24px] 2xl:text-[32px] lg:text-[28px] md:text-[26px]  pb-[2%]">
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
              <h3 className=" text-base text-[16px] 2xl:text-[20px] lg:text-[18px] md:text-[16px]  sm:text-[14] sm:font-[500] lg:pt-[2rem] pt-[1rem] text-[#000] pb-[2%]">
                {subhead}
              </h3>
              <ul className="font-light text-[16px] 2xl:text-[20px] lg:text-[18px] md:text-[16px]  sm:text-[14] text-[#595959] list-outside ... list-disc ml-[15px]  ">
                <li className="pb-[7px] ">{list1}</li>
                <li className="pb-[7px] ">{list2}</li>
                <li className=" pb-[7px] ">{list3}</li>
                <li className="">{list4}</li>
              </ul>
            </div>
          </div>
          <div className="order-1 sm:order-2 flex flex-col items-center xl:ml-[10%] lg:ml-[5%]">
            {img === "Travel_ins" ? (
              <img
                src={require(`../Assets/Images/${img}.png`)}
                alt={head}
                className=" lg:w-[400px] md:w-[350px] sm:w-[350px] w-[80%] xl:ml-[-50%] lg:ml-[-5%] "
              />
            ) : img === "Group_ins" ? <> <img
            src={require(`../Assets/Images/${img}.png`)}
            alt={head}
            className=" lg:w-[300px] sm:w-[250px] w-[60%] "
          />  </> : (
              <img
                src={require(`../Assets/Images/${img}.png`)}
                alt={head}
                className=" lg:w-[320px] md:w-[250px] sm:w-[250px] w-[60%]  "
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative xl:top-[-80px] lg:top-[-80px] md:top-[-80px] sm:top-[-60px] top-[-60px] ">
        {button_overlap ? <><div className="button_overlap text-center items-center h-[20px] absolute top-[0%] sm:mt-[0] mt-[15px]">
          <a href={quotes_link} target="blank">
            <button
              className="justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px]"
              style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
            >
              {quotes}
            </button>
          </a>
        </div></>: <><div className="text-center items-center h-[20px] absolute top-[0%] ">
          <a href={quotes_link} target="blank">
            <button
              className="justify-center items-center py-2 text-[#FFFFFF] px-10 sm:text-[18px] text-[15px]"
              style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
            >
              {quotes}
            </button>
          </a>
        </div></>}
        
        
      </div>
      <div className="relative top-[0px]">
        <div
          className="items-center  w-[100%] absolute lg:top-[-180px] md:top-[-150px] sm:top-[-120px] top-[-120px] lg:pl-[25%] lg:pr-[25%] md:pl-[20%] md:pr-[20%] sm:pl-[20%] sm:pr-[20%] pl-[5%] pr-[5%] "
          style={{ textAlign: "center" }}
        >
          <h2 className="quotes  text-[#000000] text-center text-[16px]  md:text-[20px] sm:text-[18px] lg:text-[25px] xl:text-[28px] items-center">
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
      
        </div>
      </div>

      <div className="my-0 bg-[#F5F5F5]">
       

        <div className="relative ">
          <img
            alt="left triangle"
            style={{ display: matches ? "none" : "" }}
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute sm:top-[1%] top-[2.5%]  h-auto rotate-180"
          />
          <div className="bg-[#F5F5F5] pt-10 ml-[8.5%] mr-[8.5%] mx-auto pb-10 lg:pb-20">
            <div>
              <h2 className="font-semibold my-3 lg:my-5 lg:m-0 pb-8 lg:pb-11 text-center sm:text-[22px] text-[24px] 2xl:text-[32px] lg:text-[28px] md:text-[26px]">
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
              {twoWheel ? (
                <>
                  <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                    {benefit_head}
                  </h2>
                  <p className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6">
                    Bike insurance in India offers several benefits to
                    policyholders. Some of the key advantages include:
                  </p>
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
                  <p className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6 font-[600]">
                    It is important to carefully assess the coverage, terms, and
                    conditions offered by different insurance providers and
                    choose a policy that best suits your requirements and
                    budget.
                  </p>
                </>
              ) : (
                <></>
              )}

              <div className={matches ? "my-2 h-[10px]" : "my-4 h-[10px]"} />
              {twoWheel ? (
                <>
                  <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
                    How to choose a Two-wheeler Insurance Policy?
                  </h2>
                  <p className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6">
                    Once you understand the significance of having a bike
                    insurance policy, the subsequent step is to familiarize
                    yourself with the types of bike insurance policies
                    available. In the market, there are two categories of bike
                    insurance policies. The first is a third-party bike
                    insurance, which is a fundamental policy providing coverage
                    for damages caused to a third party due to your bike. On the
                    other hand, a comprehensive bike insurance plan offers
                    coverage for both you and the third party involved.
                  </p>
                  <p className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6">
                    Nevertheless, similar to any other purchase, it is crucial
                    to conduct thorough research and compare your needs with
                    affordability before buying a bike insurance policy. Here
                    are some valuable tips that can assist you in selecting the
                    best bike insurance plan:
                  </p>
                </>
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
                      {gridTopLeft}
                    </div>
                    <div className="text-[#595959] text-base p-[2%] w-[70%] text-justify  bg-[#FFFFFF] font-[600]">
                      {gridTopRight}
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
                  {whyRequired_Text &&
                    whyRequired_Text.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">
                            {item.require_head}
                          </span>{" "}
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
            {extra_data ? (
              <div>
                <p className="text-[#595959] font-[600]  text-[20px]  ml-[16px] mb-6">
                  Add-ons in a Car Insurance Policy
                </p>
                <p className="text-[#595959] text-base lg:text-lg ml-[16px] text-justify mb-4 lg:mb-6">
                  In addition to the standard Car Insurance coverage, Insurance
                  companies also offer ‘Add-on Covers’, which are additional
                  covers that protect your car and offer extra coverage. By
                  paying an additional premium, which is added to the Car
                  Insurance quotes to determine the final premium payable for
                  the policy, Add-on Covers can be purchased. Comprehensive Car
                  Insurance packages provide Add-ons. Below are some examples of
                  frequent Add-ons:
                </p>
                <ul className="list-disc ml-4 mb-10">
                  {add_ons_array &&
                    add_ons_array.map((item, index) => {
                      return (
                        <li
                          className="text-[#595959] text-base lg:text-lg text-justify mb-4 lg:mb-6"
                          key={index}
                        >
                          <span className="font-[600]">
                            {item.require_head}
                          </span>{" "}
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
                  digitally via our digital platform (mobile website/app).
                  Please note that depending on the claim, the list of required
                  documents may change.
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
              </div>
            ) : (
              <></>
            )}
          </div>
          <img
            alt="left triangle"
            style={{ display: matches ? "none" : "" }}
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto sm:w-[100px] w-[0px] absolute  bottom-[0%] right-[0%]  h-auto  sm:block hidden"
          />
        </div>
      </div>
      <div className="mt-[20px]">
        <Footer />
      </div>
      {/* <div className="fixed bottom-[10%] left-[2%]">
      <Whatsapp />
      </div> */}
      
    </div>
  );
}

export default PolicyDetails;
