// import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import "../App.css";

function RaiseClaimForm() {
  return (
    <>
      <div className="relative">
        <div className="absolute left-0 top-0 lg:block hidden">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            className="w-full "
            alt=""
          />
        </div>
        <div className=" mycontainer_form mx-auto">
          <div
            className="items-center flex flex-col justify-center mb-14 lg:mb-28 scroll-mt-[100px]"
            id="raiseform"
          >
            <div className="max-w-[600px] mt-6">
              <h2 className="font-semibold text-xl lg:text-3xl text-[#000000] text-center mb-8">
                Please enter the following details for your to raise your claim
                request
              </h2>
              <h5 className="text-base lg:text-2xl font-medium text-[#000000] text-center ">
                <span className="text-[#2A44A9] border-[#2A44A9] border-b-[3px] pb-2">
                <a href="https://dashboard.analahinsurance.com/customer/login" target="blank">Login</a>{" "}
                </span>{" "}
                here if you are an existing user.
              </h5>
            </div>
            <div className="flex raiseform-wrap w-full max-w-[600px] mt-8 lg:mt-16" style={{background:'#F7F8FC'}}>
              <div className="w-[100%] flex flex-col space-y-6 items-center justify-center">
                <div className="flex flex-wrap gap-3 lg:w-[95%] justify-between">

                    <div className="section over-hide ">
                      <div className="section over-hide ">
                        <div className="container-fluid pt-2">
                          <div className="row justify-content-center pb-5">
                            <div className="col-12 pb-5">
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
                              <label className="for-checkbox-tools" for="tool-2">
                                Life
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-3" />
                              <label className="for-checkbox-tools" for="tool-3">
                                Health
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-4" />
                              <label className="for-checkbox-tools" for="tool-4">
                                Car
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-5" />
                              <label className="for-checkbox-tools" for="tool-5">
                                Bike
                              </label>
                            </div>
                          </div>
                        </div>	
                      </div>
                    </div>

                  {/* <div className="m-0">
                    <input
                      type="radio"
                      className="radio-button"
                      value="Life"
                      name="type"
                    />{" "}
                    Life
                  </div>
                  <div className="m-0">
                    <input
                      type="radio"
                      className="radio-button"
                      value="Health"
                      name="type"
                    />{" "}
                    Health
                  </div>
                  <div className="m-0">
                    <input
                      type="radio"
                      className="radio-button"
                      value="Car"
                      name="type"
                    />{" "}
                    Car
                  </div>
                  <div className="m-0">
                    <input
                      type="radio"
                      className="radio-button"
                      value="Bike"
                      name="type"
                    />{" "}
                    Bike
                  </div> */}
                </div>
                <div className="lg:w-[85%]">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Name of the Insurer"
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Policy Number "
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Mobile Number"
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Email ID"
                  />
                  <textarea className="input-text" placeholder="Tell us what happened"></textarea>

                  <div className="text-center">
                    <button
                      className="justify-center w-[100%] text-center items-center py-2 text-[#FFFFFF] px-10 text-[18px]"
                      style={{
                        // background:
                        //   "linear-gradient(180deg, #089DA6 0%, #08CADE 100%)",
                        background: "linear-gradient(180deg, #284CD8 0%, #2A44A9 100%)",
                        borderRadius: 11,
                      }}
                    >
                      Raise Claim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-7 bottom-[0] lg:block hidden ">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            className="w-full "
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default RaiseClaimForm;
