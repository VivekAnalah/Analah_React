import { useMediaQuery } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import { Link } from "react-router-dom";

function PolicyCancel() {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <div>
      <Header policyDetails={false} />

      <div className="my-0 bg-[#F5F5F5]">
      
        <div className="bg-[#F5F5F5] pt-0  ml-[8.5%] mr-[8.5%] mx-auto pb-10 lg:pb-20">
          <div className={matches ? "pt-[40px]" : "pt-[40px]"}>
            <h2 className="font-semibold text-xl my-3 lg:my-0 lg:m-0 sm:pb-5 lg:pb-11 lg:text-3xl text-left">
              <span className=" title-border-bottom ">Policy</span> Cancellation
              & Refund{" "}
            </h2>
            <p className="text-[#595959] text-base lg:text-lg text-justify pb-5 lg:pb-10">
              {" "}
              Policy cancellation and refund of the premium shall be as per the
              terms and conditions of the policy.
            </p>
          </div>
          <div>
            <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
              Cancellation Policy
            </h2>
            <p className="text-[#595959] text-base lg:text-lg text-justify pb-5 lg:pb-10">
              If in case you decide to cancel an insurance product, the
              insurance provider you purchased the product from will refund the
              premium via cheque or direct credit, depending on their policy.
              <br />
              <br />
              We request you to contact the toll free number of your Insurance
              Company or refer the respective section of your Policy’s terms and
              conditions in order to cancel a policy. Additionally, you may get
              in touch with us on <span class = "text-[#2A44A9] font-semibold" >+91-9920878181</span> or write to us at
               <span class = "text-[#2A44A9] font-semibold underline-offset-[1px]" style={{textDecoration : "underline"}} > contactus@analahinsurance.com,</span> and we will be happy to assist you.
            </p>
            <h2 className="text-[#2A44A9] text-xl lg:text-2xl font-semibold mb-7">
              Refund Policy
            </h2>
            <p className="text-[#595959] text-base lg:text-lg text-justify pb-7 lg:pb-14">
              If a refund is required due to an erroneous transaction or
              cancellation, the insurance provider you purchased the product
              from will refund the premium through a cheque or direct credit, as
              per the policy terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PolicyCancel;
