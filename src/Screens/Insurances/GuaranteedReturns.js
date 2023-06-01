
import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";



function GuaranteedReturns() {

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
      <div className="pb-4" >
        <Header raiseClaim={true} />
        <div
        id="insurance-scroll"
        className=" mycontainer1 mx-auto lg:pb-[200px] md:pb-[150px] sm:pb-[120px] pb-[120px]   "
        style={{
          background:
            "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
        }}
      >
        <div className="flex flex-col sm:flex-row lg:gap-[12.2%] xl:gap-[15.2%] md:gap-[8%] gap-[5%] termLife relative items-center mt-[40px] pb-[20px]" >
         
          <div className="hidden sm:order-2 sm:block flex flex-col items-center xl:ml-[5%] lg:ml-[5%]">
           

            {/* ---------- Form -------------  */}
            <img
              src={require(`../../Assets/Images/Guaranteed_ins.png`)}
              alt={"Investment"}
              className=" lg:w-[320px] md:w-[250px] sm:w-[250px] w-[60%]"
            />
          </div>
          <div className="lg:w-[45%] sm:w-[50%] w-[90%] order-2 sm:order-1 flex flex-col  pl-[8.5%] sm:pr-[0%] pr-[8.5%]">
            <div className=" ">
              <div className="flex items-center sm:mt-[0px] mt-[10px]">
                <h2 className="text-[#000000] font-normal  text-[24px]  md:text-[30px] sm:text-[27px] xl:text-[32px] pb-[2%]">
                  <span className="title-border-bottom">Guaranteed</span>{" "}
                
                  Return Plans
                </h2>
              </div>
              <h3 className=" text-base lg:text-2xl sm:font-[500] text-[18px] pt-[4%] text-[#000] pb-[2%]">
              {/* Attractive returns that will help you retire with dignity. */}
              </h3>
              <div className="order-1 lg:order-2 flex flex-col ">
              <div className="items-center flex justify-center mt-5 lg:mt-0">
                <div className="flex raiseform-wrap2 -mr-4 rounded-tl-[130px] p-5 lg:p-10 hover:shadow-blue-800 hover:shadow-md">
                  <div className="flex flex-col space-y-6 items-center justify-center mt-[0px] m-[auto]">
                    <h2 className="text-xl text-[#2A44A9] font-bold text-center">
                      Get the right  plan Today !
                    </h2>

                    <div >
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Full Name"
                      />
                      <div className="phoneInpt">
                        <input
                          type="number"
                          className="input-text"
                          placeholder="Mobile No."
                        />
                        {/* <span>Send OTP</span> */}
                      </div>
                      {/* <input
                        type="number"
                        className="input-text"
                        placeholder="Enter OTP"
                      /> */}

                      <input
                        type="text"
                        className="input-text"
                        placeholder="Email"
                      />

                      {/* <input
                        type="text"
                        className="input-text"
                        placeholder="Enter PAN Card Number"
                      /> */}
                   
                      
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
                          style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     <div className="relative top-[0px]">
       

        <div
          className="headingLine m-[auto] w-[100%]"
          style={{
            background:
              "linear-gradient(-5.38deg, rgb(42, 68, 168) -107.1%, rgba(255, 255, 255, 0.06) 45.41%)",
          }}
        >
         
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}

export default GuaranteedReturns;
