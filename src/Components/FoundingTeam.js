import {  useMediaQuery } from "@mui/material";
import React from "react";

function FoundingTeam() {
  
  return (
    <div className="mr-[8.5%] ml-[8.5%]" >
      <h2 className="font-semibold text-2xl lg:text-3xl text-center pb-15 lg:pb-[80px] pt-[10px] lg:pt-[20px] ">
        <span className="title-border-bottom">Found</span>ing Team
      </h2>
      {/* <div className="py-10 lg:py-20">
        <div className="bg-[#2A44A9] h-[1px] m-auto" />
      </div> */}
      {/* -------------------------CEO-------- Vaishali Dhankani--------------------------------------------- */}
      <div className="lg:flex items-center gap-[8%] " >
        <div className="w-full m-auto lg:w-[32%]  flex justify-center lg:justify-start mt-auto">
          <div className="flex justify-start lg:w-[100%] w-[auto] mt-auto h-auto founding-right founding-img-div " >
            <img
            style={{borderRadius: "0px 80px 0px 0px"}}
              src={require("../Assets/Images/Vaishali_Dhankani.png")}
              alt=" "
              className="aspect-auto object-contain sm:h-[373px] h-[300px] w-[100%] lg:mt-auto "
            />
          </div>
        </div>
        <div className="space-y-5 w-full lg:w-[60%] teamDetails">
          <h2 className="text-[#2A44A9] pt-5 lg:pt-0 font-semibold text-2xl lg:text-3xl text-center lg:text-left">
            Vaishali Dhankani
          </h2>
          <h5 className="founder-position font-normal text-xl lg:text-xl text-[#000] text-center lg:text-left">
            CEO
          </h5>
          <p className="font-normal text-base lg:text-[16px] text-[#595959] text-justify">
            Vaishali holds over two decades of expertise in the Finance, Banking
            and Insurance sector. <br />
            <br />
            She is the CEO of Analah Insurance and the founder of the Analah
            Group and oversees investment transactions worth more than USD 900
            million. She leads investments for the group's Financial Services
            and Insurance sectors. She has been majorly focusing on Pre-IPO,
            venture capital and early-stage investments. Her recommendations
            have generated multi-bagger returns for onshore and offshore
            investors. Her foresight and stock picking abilities in private
            markets has helped investors and institutions diversify their
            portfolio, in turn generating high returns.
            <br />
            <br />
            Vaishali is a Chartered Accountant by profession, along with a
            Diploma in Systems Management (DNIIT). She has also held various
            senior positions in leading organizations such as ICICI Bank and
            National Payments Corporation of India (set up by the Reserve Bank
            of India & Indian Banking Association).
          </p>
        </div>
      </div>

      <div className="mb-8 mt-[20px] lg:mb-16 bg-[#2A44A9] h-[1px] m-auto" />
{/* -------------------------Co-Founder-------- Hitesh Dhankani--------------------------------------------- */}
      <div className="flex  lg:flex-row items-center gap-[8%] flex-col-reverse" >
        <div className="space-y-5  w-full lg:w-[60%] teamDetails2" >
          <h2 className="text-[#2A44A9] pt-5 lg:pt-0 font-semibold text-2xl lg:text-3xl text-center lg:text-left">
            Hitesh Dhankani
          </h2>
          <h5 className="founder-position font-normal text-xl lg:text-xl text-[#000] text-center lg:text-left">
            Co-Founder
          </h5>
          <p className="font-normal text-base lg:text-[16px]  text-[#595959] text-justify">
            Hitesh is reckoned as a reputable, thoughtful & an action oriented
            leader with proven success in Asset Management, Fundraising,
            Distribution, Sales, Marketing, Research and Advisory across
            Financial Services, Insurance, Real Estate and Technology. He is the
            Co-founder of the Analah group, wherein, he is responsible for
            performance, strategy & growth of the company. <br />
            <br />
            Hitesh has done his Software Engineering in Systems Management
            (GNIIT) and B.com (Hons). He also holds a Masters in Business, SMP
            from the Indian Institute of Management (IIM) - Calcutta. His
            leadership competence also dives across the Equity sector among
            leading Asset Management Companies, NBFC’s, and Banks. He possesses
            a provenentrepreneurial prowess having been a key member of core
            startup teams responsible for the successful launch of top notch
            organizations like HDFC Bank, SBI Asset Management, Mirae Asset and
            Prudential Incorporation (Pramerica AMC).
          </p>
        </div>
        <div className="w-full lg:w-[32%] flex justify-center lg:justify-end  mt-[5px]" >
          <div className=" flex justify-end lg:w-[100%] w-auto mt-[5px]  h-auto founding-left lg:pt-[50px] pt-[25px] founding-img-div">
            <img
            style={{
              borderRadius: "80px 0px 0px 0px"
            }}
              src={require("../Assets/Images/hitesh_dhankani.png")}
              alt=" "
              className="aspect-auto w-[100%] object-contain m-[auto] h-[300px] sm:h-[323px] 2xl:h-[353px] "
            />
          </div>
        </div>
      </div>

      <div className="mb-8 mt-[20px] lg:mb-16 bg-[#2A44A9] m-auto h-[1px]" />
{/* -------------------------Senior Vice President-------- Satya Pravas Parida--------------------------------------------- */}
      <div className="lg:flex items-center gap-[8%]">
        <div className="w-full  lg:w-[32%] flex justify-center lg:justify-start">
          <div className="flex justify-start w-auto lg:w-[100%]  h-auto founding-right lg:pt-[50px] pt-[25px] founding-img-div">
            <img
            style={{
              borderRadius: "0px 80px 0px 0px"
            }}
              src={require("../Assets/Images/satya_pravas.png")}
              alt=" "
              className="aspect-auto object-contain w-[100%] sm:h-[320px] h-[300px] lg:mt-auto 2xl:h-[353px] "
            />
          </div>
        </div>
        <div className="w-full lg:w-[60%] space-y-5 mt-auto m-auto teamDetails3">
          <h2 className="text-[#2A44A9] pt-5 lg:pt-0 font-semibold text-2xl lg:text-3xl text-center lg:text-left">
            Satya Pravas Parida
          </h2>
          <h5 className="founder-position font-normal text-xl lg:text-xl text-[#000] text-center lg:text-left">
            Senior Vice President
          </h5>
          <p className="font-normal text-base lg:text-[16px] text-[#595959] text-justify">
            Satya brings more than 23 years of experience having worked with
            leading Insurance & Stock Broking verticals. His extensive
            experience ranges across Insurance Distribution, Franchise and IFA
            Business, Broking, PMS, Mutual Funds Distribution, Loans against
            Securities, Wealth Management and Corporate Finance. <br />
            <br />
            Satya is a Commerce Graduate from Calcutta University, Black Belt in
            Six Sigma & a certified personnel in Derivatives (Capital Market)
            from National Institute of Securities Markets (NISM).
          </p>
        </div>
      </div>

      <div className="mt-[20px] bg-[#2A44A9] h-[1px]" />
    </div>
  );
}

export default FoundingTeam;
