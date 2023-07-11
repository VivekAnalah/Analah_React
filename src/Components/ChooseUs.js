
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "@splidejs/react-splide/css";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "../App.css";

const divStyles = {
  boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)",
  border: "2px solid #2A44A9",
  borderRadius: "25px",
 
};

function ChooseUs() {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <div className="bg-[#FAFFFF] pb-5 relative my-container">
       

      <div className="flex flex-col justify-center sm:mt-[100px] 2xl:mt-[200px] choose-us mt-[50px]" >
      <img
          alt="left triangle"
          src={require("../Assets/Images/rightTriangle.png")}
         
          className="object-contain aspect-auto sm:w-[100px] w-[60px]  absolute lg:top-[-9.5%] sm:top-[-7.5%] top-[-2.5%] z-[10]  h-auto rotate-180"
        />
        <h2
          
          className="font-semibold text-2xl lg:text-3xl text-center"
        >
          <span className="title-border-bottom">Why Ch</span>oose Us?
        </h2>
      </div>

      <div className="whychoose-wrap overflow-hidden pt-14 lg:pt-28">
        <Splide
       
          options={{
           
            gap: "1rem",
            type: "loop",
            arrows: false,
            
            perMove: 1,
            pagination: true,
           
            breakpoints: {
              3000: {
                perPage: 2,
               
              },
              
            
              1000: {
                perPage: 1,
            
              },
            },
            
         
          }}

          className="lg:pl-[6.5%] lg:pr-[6.5%] sm:pl-[10%] sm:pr-[10%]"
          
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div style={divStyles} className="space-y-2 sm:min-h[320px] min-h[200px] ">
              <h3 className="text-[16px] pt-[10px]  pb-[10px] sm:text-[22px] sm:pt-[20px]  sm:pb-[20px]  font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] text-[#FFFFFF]   bg-[#2A44A9]">
                Calculate in Minutes
              </h3>
              <div className="sm:p-5 pt-2 pl-5 pr-5 pb-5 text">
                <p className="text-gray-600 sm:text-[18px] text-[14px] text-center">
                  Calculate premiums like never before. All insurance quotes are
                  system generated, which eradicate the scope of any human error
                  and reduce the time needed to calculate premiums.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={divStyles} className=" space-y-2 sm:min-h[320px] min-h[200px]">
              <h3 className="text-[16px] pt-[10px]  pb-[10px] sm:text-[22px] sm:pt-[20px]  sm:pb-[20px]  font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] text-[#FFFFFF]   bg-[#2A44A9]">
                30+ Insurance Partners
              </h3>
              <div className="sm:p-5 pt-2 pl-5 pr-5 pb-5">
                <p className="text-gray-600 sm:text-[18px] text-[14px] text-center" >
                  Compare features and prices of multiple insurance policies
                  easily. Shortlist plans that best meet your needs.
                </p>
                <ul className=" whychoose list-disc sm:text-[16px] text-[14px]">
                  <li>Get best quotes from top insurers instantly</li>
                  <li>Compare plans and shortlist the best plan</li>
                </ul>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={divStyles} className=" space-y-2 sm:min-h[320px] min-h[200px]">
              <h3 className="text-[16px] pt-[10px]  pb-[10px] sm:text-[22px] sm:pt-[20px]  sm:pb-[20px]  font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] text-[#FFFFFF]   bg-[#2A44A9]">
                Simplest Way to Get Insured
              </h3>
              <div className="sm:p-5 pt-2 pl-5 pr-5 pb-5">
                <p className="text-gray-600 sm:text-[18px] text-[14px] text-center">
                  Applying for Insurance has never been easier! We have online
                  forms that ask questions based on the applicant’s demographics
                  and profile.
                </p>
                <ul className="whychoose list-disc sm:text-[16px] text-[14px]">
                  <li>
                    All plans are explained in English. No additional research
                    is required
                  </li>
                  <li>Application process is completely online</li>
                  <li>
                    Unbiased advice from experts with extensive experience
                  </li>
                </ul>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={divStyles} className=" space-y-2 sm:min-h[320px] min-h[200px]">
              <h3 className="text-[16px] pt-[10px]  pb-[10px] sm:text-[22px] sm:pt-[20px]  sm:pb-[20px]  font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] text-[#FFFFFF]   bg-[#2A44A9]">
                Claims Assistance
              </h3>
              <div className="sm:p-5 pt-2 pl-5 pr-5 pb-5">
                <p className="text-gray-600 sm:text-[18px] text-[14px] text-center">
                  We know how exhausting it can get to raise a claim. We at
                  Analah Insurance, have support built in with every policy for
                  help, especially when you need it the most.
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );

  
}

export default ChooseUs;
