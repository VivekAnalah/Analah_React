import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

import bref from "../Assets/Images/career.svg";

function Careers() {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <>
      <div>
        <Header raiseClaim={true} />

        <div className="bred">
          <img src={bref} alt="" className="w-full h-[250px] lg:h-[300px] xl:h-[400px] object-cover" />
          <h2 class="font-semibold text-2xl lg:text-3xl pb-4 lg:pb-8 text-[#2A44A9]">
            <span class=" title-border-bottom">Caree</span>rs
          </h2>
        </div>

        <div className="ml-[5%] mr-[5%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-3 pt-16 relative items-center">
            <>
              <div className="lg:w-1/2 flex flex-col">
                <div className="w-[100%] space-y-6 lg:space-y-10">
                  <h2 className="font-semibold text-2xl lg:text-3xl pb-4 lg:pb-8 text-[#2A44A9]">
                    <span className=" title-border-bottom">Let’s </span>
                    grow together
                  </h2>

                  <h4 className="font-normal text-base text-[#595959] lg:max-w-[90%] text-justify">
                    InsurTech is disrupting the insurance domain in India. If
                    you're looking for a dynamic opportunity and want to be a
                    part of something that's truly transformative, then
                    InsurTech is the place for you. We're looking for people who
                    are ready to take their ideas and run with them. You'll have
                    the opportunity to work with some of the brightest minds in
                    the industry and build solutions that are changing the
                    insurance landscape
                  </h4>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col">
                <div className="flex items-center gap-4 w-full justify-center mt-8 lg:mt-0">
                  <div className="flex flex-col gap-4 h-full max-h-[416px]">
                    <img
                      src={require("../Assets/Images/career1.png")}
                      alt=""
                      className="aspect-auto object-contain justify-end h-full max-h-[200px]"
                    />
                    <img
                      src={require("../Assets/Images/career2.png")}
                      alt=""
                      className="aspect-auto object-contain justify-end h-full max-h-[200px]"
                    />
                  </div>
                  <div className="flex justify-center w-auto h-auto">
                    <img
                      src={require("../Assets/Images/career3.png")}
                      alt=""
                      className="aspect-auto object-contain justify-end h-full max-h-[416px]"
                    />
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="flex space-y-5 flex-col items-center justify-center mt-10 lg:mt-20">
            <h2 className="font-semibold text-2xl lg:text-3xl text-center text-[#2A44A9]">
              <span className="title-border-bottom">Get in</span> touch{" "}
            </h2>

            <h5 className="font-semibold text-xl lg:text-2xl text-[#595959] text-center pt-4 lg:pt-8">
              Current Openings
            </h5>
            <h5 className="font-normal text-lg lg:text-xl text-center text-[#595959] my-1">
              If you're ready to make a difference, come and join us. Send us
              your resume at{" "}
              <span className="text-[#2A44A9]">
                <b><a href="mailto:contactus@analahinsurance.com" className="underline decoration-1">contactus@analahinsurance.com</a></b>
              </span>
              .
            </h5>
            <div className="flex space-y-5 flex-col items-center justify-center w-full">
              <div className="text-center flex gap-5 items-center w-full my-4 lg:my-12">
                <div className="career-box bg-[#ECF7FF] text-lg lg:text-2xl p-4 lg:p-8">
                  Sales Executive
                </div>

                <div className="career-box bg-[#ECF7FF] text-lg lg:text-2xl p-4 lg:p-8">
                  Sales Manager
                </div>
              </div>
              <div className="py-4 text-left pb-20 w-full">
                <h4 className="text-left text-lg lg:text-xl mb-4 font-bold text-[#595959]">
                  If you don't see a job opening which interests you, don't
                  worry!
                </h4>
                <p className="text-left text-base text-[#595959]">
                  We accept applications for future positions. Simply send us
                  your resume and we will get in touch if we have a suitable
                  opening for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Careers;
