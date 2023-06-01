import { Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
// --------- CSS Module Added ----------------
// import Raise_css from "../Styles/Raise.module.css"

function Raise() {
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
    <>
      {/* <div className=" policy-buttons justify-end flex flex-row pr-5">
     <Link to="/privacy-policy" > <button className="justify-center rounded-b-[11px] items-center py-2 text-[#FFFFFF] px-10 lg:text-[16px] sm:text-[10px]" style={{background:"#2A44A9"}}>Privacy Policy</button>
       </Link> 
         <Link to="/privacy-policy" ><button className="justify-center items-center rounded-b-[11px] py-2 text-[#FFFFFF] px-10 lg:text-[16px] sm:text-[10px]" style={{background:"#2A44A9"}}>Disclaimer</button>
       </Link> 
         
         <Link to="/privacy-policy" ><button className="justify-center items-center rounded-b-[11px] py-2 text-[#FFFFFF] px-10 lg:text-[16px] sm:text-[10px]" style={{background:"#2A44A9"}}>Terms & Conditions</button>
       </Link> 
      
      </div> */}
      <div className="">
        <div className="flex flex-col sm:flex-row gap-[6%]  mt-[50px] relative items-center">
          <div className="sm:w-[36.6%] w-[70%] order-2 sm:order-1 flex flex-col  ml-[8.5%]  xl:pl-0 sm:ml-[9.5%] sm:mt-[0px] mt-[15px]">
            <div className="mt-[20px] md:space-y-8 lg:space-y-10 sm:space-y-5 space-y-5">
              <h2 className="font-semibold sm:text-[22px] text-[24px] 2xl:text-[32px] lg:text-[28px] md:text-[26px] text-[#2A44A9]">
                <span className="title-border-bottom ">Rais</span>e a Claim
              </h2>
              <h3 className=" leading-[30px] font-[600] text-[#000000] text-[16px] 2xl:text-[20px] lg:text-[18px] md:text-[16px]  sm:text-[14]">
                Raise your claim request in only a few clicks.
              </h3>
              <h4 className="font-[400] text-base text-[16px] 2xl:text-[20px] lg:text-[18px] md:text-[16px]  sm:text-[14] text-[#595959]">
                You may raise a claim request, even if you did not buy your
                policy with us.
              </h4>
              <div className="text-center my-6 sm:text-left sm:my-0 ">
                <a href="#raiseform">
                  <button
                    style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className=" justify-center items-center py-2 text-[#FFFFFF] px-10 text-[18px] "
                    id="raise-button"
                  >
                    Raise Claim
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 order-1 sm:order-2 flex flex-col w-[70%]  sm:w-[50%]">
            <div className="">
              <div
                className="rounded-tr-[349px] ml-auto w-auto h-full py-16 max-w-[100%] sm:max-w-[100%] xl:max-w-[85%] "
                style={{
                  background:
                    "linear-gradient(172.81deg, #2A44A9 -68.4%, rgba(255, 255, 255, 0.06) 87.56%)",
                  borderRadius: "500.5px 0px 0px 0px",
                }}
              >
                <img
                  alt="insurance"
                  src={require("../Assets/Images/Raise_claim.png")}
                  className="pt-16  md:h-[50vh]  h-[250px]  mx-auto"
                />
                {/* h-[500px] */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Raise;
