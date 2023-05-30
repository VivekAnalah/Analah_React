import { Grid } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "@splidejs/react-splide/css";
import { Carousel } from "react-responsive-carousel";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
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
        // #main 
          options={{
            // rewind: true,
            gap: "1rem",
            type: "loop",
            arrows: false,
            // perPage: 2,
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
            
          //  padding:"160px",
          //  padding: { left: '160px', right: '160px'}
            // focus: "center",
            // cloneStatus: true,
            // focusableNodes: "a, button, textarea, input, select, iframe",
          }}

          className="lg:pl-[6.5%] lg:pr-[6.5%] sm:pl-[10%] sm:pr-[10%]"
          // className="w-[60%]"
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div style={divStyles} className="space-y-2 sm:min-h[320px] min-h[200px] ">
              <h3 className="text-[16px] pt-[10px]  pb-[10px] sm:text-[22px] sm:pt-[20px]  sm:pb-[20px]  font-semibold text-center rounded-tl-[20px] rounded-tr-[20px] text-[#FFFFFF]   bg-[#2A44A9]">
                Calculate in Minutes
              </h3>
              <div className="sm:p-5 pt-2 pl-5 pr-5 pb-5">
                <p className="text-gray-600 sm:text-[18px] text-[14px]">
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
                <p className="text-gray-600 sm:text-[18px] text-[14px]" >
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
                <p className="text-gray-600 sm:text-[18px] text-[14px]">
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
                <p className="text-gray-600 sm:text-[18px] text-[14px]">
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

  // return (
  //   <div className="bg-[#FAFFFF] pb-5">
  //     <div style={{ display: matches ? "none" : "" }}>
  //       <img
  //         alt="left triangle"
  //         src={require("../Assets/Images/leftTriangle.png")}
  //         className="object-contain aspect-auto w-[180px] h-auto md:absolute"
  //       />
  //     </div>

  //     <div className="flex flex-col  justify-center ">
  //       <h2
  //         style={{ fontSize: matches ? 24 : 32 }}
  //         className="font-[600] text-center"
  //       >
  //         <span className="title-border-bottom">Why</span> Choose Us?
  //       </h2>
  //       <div>
  //         <Grid container className={matches ? " " : "pl-14 pr-14  mt-[60px]"}>
  //           <Grid item md={6} sm={6} lg={6}>
  //             <div
  //               className={
  //                 matches
  //                   ? "flex space-x-2 w-[100%] pr-5 mt-5"
  //                   : "flex m-auto flex-row justify-center items-start space-x-2 w-[100%] px-[100px] py-16"
  //               }
  //             >
  //               <h1
  //                 className={
  //                   matches
  //                     ? " font-[600] text-[#D9D9D9] pl-2"
  //                     : "text-[40px] font-[600] text-[#D9D9D9]"
  //                 }
  //               >
  //                 1.
  //               </h1>

  //               <div className="flex flex-col items-start justify-center space-y-3">
  //                 <img
  //                   src={require("../Assets/Images/choose1.png")}
  //                   alt="insurance partner"
  //                   className={
  //                     matches
  //                       ? "object-contain w-[100px] h-[50px]"
  //                       : "object-contain w-[125px] h-[80px]"
  //                   }
  //                 />
  //                 <h3
  //                   className={
  //                     matches
  //                       ? "text-[#2A44A9] text-[18px] font-[600]"
  //                       : "text-[#2A44A9] text-[24px] font-[600]"
  //                   }
  //                 >
  //                   30+ Insurance Partners
  //                 </h3>
  //                 <p
  //                   className={
  //                     matches
  //                       ? "font-[400] text-[12px] text-justify w-[92%] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Compare features and prices of multiple insurance policies
  //                   easily. Shortlist plans that best meet your needs.
  //                 </p>
  //                 <li
  //                   className={
  //                     matches
  //                       ? "font-[450] text-[12px] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Get best quotes from top insurers instantly
  //                 </li>
  //                 <li
  //                   className={
  //                     matches
  //                       ? "font-[450] text-[12px] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Compare plans and shortlist the best plan
  //                 </li>
  //               </div>
  //             </div>
  //           </Grid>
  //           <Grid item md={6} sm={6} lg={6}>
  //             <div
  //               className={
  //                 matches
  //                   ? "flex space-x-2 w-[100%] pr-5 mt-5"
  //                   : "flex m-auto flex-row justify-center items-start space-x-2 w-[100%] px-[100px] py-16"
  //               }
  //             >
  //               <h1
  //                 className={
  //                   matches
  //                     ? "text-[18px] font-[600] text-[#D9D9D9] pl-2"
  //                     : "text-[40px] font-[600] text-[#D9D9D9]"
  //                 }
  //               >
  //                 2.
  //               </h1>

  //               <div className="flex flex-col items-start justify-center space-y-3">
  //                 <img
  //                   src={require("../Assets/Images/choose2.png")}
  //                   alt="insurance partner"
  //                   className={
  //                     matches
  //                       ? "object-contain w-[100px] h-[50px]"
  //                       : "object-contain w-[125px] h-[80px]"
  //                   }
  //                 />
  //                 <h3
  //                   className={
  //                     matches
  //                       ? "text-[#2A44A9] text-[18px] font-[600]"
  //                       : "text-[#2A44A9] text-[24px] font-[600]"
  //                   }
  //                 >
  //                   Simplest Way to Get Insured
  //                 </h3>
  //                 <p
  //                   className={
  //                     matches
  //                       ? "font-[400] text-[12px] text-justify w-[92%] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Applying for Insurance has never been easier! We have online
  //                   forms that ask questions based on the applicant’s
  //                   demographics and profile.
  //                 </p>
  //                 <li
  //                   className={
  //                     matches
  //                       ? "font-[450] text-[12px] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   All plans are explained in English. No additional research
  //                   is required
  //                 </li>
  //                 <li
  //                   className={
  //                     matches
  //                       ? "font-[450] text-[12px] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Application process is completely online
  //                 </li>
  //                 <li
  //                   className={
  //                     matches
  //                       ? "font-[450] text-[12px] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Unbiased advice from experts with extensive experience
  //                 </li>
  //               </div>
  //             </div>
  //           </Grid>
  //           <Grid item md={6} sm={6} lg={6}>
  //             <div
  //               className={
  //                 matches
  //                   ? "flex space-x-2 w-[100%] pr-5 mt-5"
  //                   : "flex m-auto flex-row justify-center items-start space-x-2 w-[100%] px-[100px] pt-5"
  //               }
  //             >
  //               <h1
  //                 className={
  //                   matches
  //                     ? "text-[18px] font-[600] text-[#D9D9D9] pl-2"
  //                     : "text-[40px] font-[600] text-[#D9D9D9]"
  //                 }
  //               >
  //                 3.
  //               </h1>

  //               <div className="flex flex-col items-start justify-center space-y-3">
  //                 <img
  //                   src={require("../Assets/Images/choose3.png")}
  //                   alt="insurance partner"
  //                   className={
  //                     matches
  //                       ? "object-contain w-[100px] h-[50px]"
  //                       : "object-contain w-[125px] h-[80px]"
  //                   }
  //                 />
  //                 <h3
  //                   className={
  //                     matches
  //                       ? "text-[#2A44A9] text-[18px] font-[600]"
  //                       : "text-[#2A44A9] text-[24px] font-[600]"
  //                   }
  //                 >
  //                   Claims Assistance
  //                 </h3>
  //                 <p
  //                   className={
  //                     matches
  //                       ? "font-[400] text-[12px] text-justify w-[92%] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   We know how exhausting it can get to raise a claim. We at
  //                   Analah Insurance, have support built in with every policy
  //                   for help, especially when you need it the most.
  //                 </p>
  //               </div>
  //             </div>
  //           </Grid>
  //           <Grid item md={6} sm={6} lg={6}>
  //             <div
  //               className={
  //                 matches
  //                   ? "flex space-x-2 w-[100%] pr-5 mt-5"
  //                   : "flex m-auto flex-row justify-center items-start space-x-2 w-[100%] px-[100px] pt-5 "
  //               }
  //             >
  //               <h1
  //                 className={
  //                   matches
  //                     ? "text-[18px] font-[600] text-[#D9D9D9] pl-2"
  //                     : "text-[40px] font-[600] text-[#D9D9D9]"
  //                 }
  //               >
  //                 4.
  //               </h1>

  //               <div className="flex flex-col items-start justify-center space-y-3">
  //                 <img
  //                   src={require("../Assets/Images/choose4.png")}
  //                   alt="insurance partner"
  //                   className={
  //                     matches
  //                       ? "object-contain w-[100px] h-[50px]"
  //                       : "object-contain w-[125px] h-[80px]"
  //                   }
  //                 />
  //                 <h3
  //                   className={
  //                     matches
  //                       ? "text-[#2A44A9] text-[18px] font-[600]"
  //                       : "text-[#2A44A9] text-[24px] font-[600]"
  //                   }
  //                 >
  //                   Calculate in Minutes
  //                 </h3>
  //                 <p
  //                   className={
  //                     matches
  //                       ? "font-[400] text-[12px] text-justify w-[92%] text-[#595959]"
  //                       : "font-[400] text-[16px] text-[#595959]"
  //                   }
  //                 >
  //                   Calculate premiums like never before. All insurance quotes
  //                   are system generated, which eradicate the scope of any human
  //                   error and reduce the time needed to calculate premiums.
  //                 </p>
  //               </div>
  //             </div>
  //           </Grid>
  //         </Grid>
  //       </div>
  //       <div
  //         style={{ display: matches ? "none" : "" }}
  //         className="flex justify-end items-end w-[100%]"
  //       >
  //         <img
  //           alt="left triangle"
  //           src={require("../Assets/Images/rightTriangle.png")}
  //           className="object-contain aspect-auto w-[180px] h-auto "
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default ChooseUs;
