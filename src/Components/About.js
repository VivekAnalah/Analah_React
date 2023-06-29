import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Cheacked_Context } from "../Context/Cheacked_Context";


function About() {
  const targetDivRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    console.log(location)
    if (location.hash === "#about") {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="bg-[#FAFFFF] mt-[0px] scroll-mt-[100px]" id="about" ref={targetDivRef} >
      
      <div className="flex space-y-5 flex-col justify-center pt-5">
        <h2 className="font-semibold text-2xl lg:text-3xl text-center m-auto lg:pb-[30px] pb-[0px]">
          <span className="title-border-bottom">Abou</span>t Us 
        </h2>
        <h5 className="text_font  text-justify my-1 pt-[30px]">
        Analah Insurance is an IRDAI regulated Insurance Broking Firm, with headquarters in Mumbai's prestigious BKC area. Our primary objective is to provide you with a broad range of insurance products from the most trusted insurers, ensuring that you receive the best possible coverage for your specific requirements. We work tirelessly to ensure that our clients get the highest level of protection at the most competitive rates.
        </h5>
        <h5 className="text_font text-justify   my-1">
        In addition, we understand that choosing the right insurance policy can be challenging, which is why we offer you the ability to compare various policies' features and prices. By comparing policies, you can determine the best plan for your needs while ensuring that you get the best value for your money. You can complete the entire process quickly and efficiently with just a few clicks.
        </h5>
        <h5 className="text_font text-justify   my-1">
        Analah Insurance also provides a hassle-free online renewal and claims service for all your policies. You can renew your policy or file a claim in only a few minutes, even if you did not buy your policy with us. Our team of experienced professionals is dedicated to helping you make the most of your policies while ensuring that you are fully protected against any potential risks.
        </h5>
        <h5 className="text_font  text-justify   my-1">
        At Analah Insurance, we take pride in our commitment to our clients' satisfaction and strive to provide them with the best possible insurance solutions. We are confident that our broad range of products, competitive pricing, and excellent service will exceed your expectations.
        </h5> 
      </div>
    
    </div>
  );
}

export default About;
