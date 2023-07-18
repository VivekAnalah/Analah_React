import {  useMediaQuery } from "@mui/material";
import React from "react";
import About from "../Components/About";
import Values from "../Components/Values";
import ChooseUs from "../Components/ChooseUs";
import Footer from "../Components/Footer";
import FoundingTeam from "../Components/FoundingTeam";
import Header from "../Components/Header";
import Insurance from "../Components/Insurance";
import OurPartner from "../Components/OurPartner";
import "../App.css";



const insurance_data = [
  {
    id: 1,
    name: "Term-Life Insurance",
    img: "Term_ins.png",
  },
  {
    id: 2,
    name: "Health Insurance",
    img: "Health_ins.png",
  },
  {
    id: 3,
    name: "Family Health Insurance",
    img: "Family_ins.png",
  },
  {
    id: 4,
    name: "Group Health Insurance",
    img: "Group_ins.png",
  },
  {
    id: 5,
    name: "Car Insurance",
    img: "Car_ins.png",
  },
  {
    id: 6,
    name: "2-Wheeler Insurance",
    img: "Two_ins.png",
  },

  {
    id: 7,
    name: "Travel Insurance",
    img: "Travel_ins.png",
  },
  {
    id: 8,
    name: "Home Insurance",
    img: "Home_ins.png",
  },
  {
    id: 9,
    name: "Retirement Plans",
    img: "ins9.png",
  },
  {
    id: 10,
    name: "Investment Plans",
    img: "ins10.png",
  },
  {
    id: 11,
    name: "Guaranteed Return Plans",
    img: "ins11.png",
  },
];

function Home() {
  const matches = useMediaQuery("(max-width:500px)");
  

  return (
    <div className="relative" id="top-scroll">
      <Header />
      <div className="main-hero" >
        <div className="sm:pt-10  pt-[-20] relative homeLeft lg:pl-[6.5%] pl-[8.5%] sm:mt-[70%] mt-[80%] md:mt-[0%]" >
          <div className="py-0 px-5 sm:mt-[0px] mt-[-25px]" >
            <h1 className="text-[25px] sm:text-[30px] md:text-[40px] leading-[40px]  md:leading-[50px] lg:leading-[55px] font-normal ">
              Get the Best&nbsp;
              <span className="text-[#2A44A9] font-bold">Insurance</span>
              <br /> for your needs.
            </h1>
            <h4 className="text-[16px] font-[300] lg:text-[18px] pt-2 pb-7">
              Let us help you choose a suitable plan.
            </h4>
          
            <div className="cstm-grid gap-4 w-[90%]"  >
              {insurance_data.map((item,index) => {
                return (
                  <div
                  key={index}
                    className="bg-[#FFFFFF] text-center rounded-[20px] hover:scale-110"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Insurance ins={item.name} item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="hero absolute right-[0px] block sm:mt-[20px]  lg:mt-[100px] " >
        <div className="hero-background w-[100%] h-[500px] 2xl:h-[550px]">


        </div>
        <div className="">
          <img
            alt="insurance"
            src={require("../Assets/Images/user3.png")}
            className="  w-[100%] max-w-[200%] right-[0px] top-[0px] absolute  pt-[17.955%] "
           
          />
        </div>
   
            </div>
            
      

      <div className="relative " >
      
        <div className="container-fluid mx-auto">
          <ChooseUs />
        </div>
      </div>
      <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
      <div className="relative">
        <div className="absolute left-0 top-0 ">
          <img
            src={require("../Assets/Images/partnerBg.png")}
            alt=""
            className="w-full lg:block hidden"
          />
        </div>
        <div className="relative">
          <img
            alt="Right triangle"
            src={require("../Assets/Images/rightTriangle.png")}
            className="object-contain aspect-auto h-auto absolute right-0 sm:w-[100px] w-[70px] sm:top-[-3.5%] top-[-1%] "
          />
          <div className=" ">
            <OurPartner />
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          alt="left triangle"
          src={require("../Assets/Images/rightTriangle.png")}
          className="object-contain aspect-auto sm:w-[100px] w-[70px] absolute sm:top-[-3.5%] top-[-0.5%]  h-auto rotate-180"
        />
        <div className="mt-[50px] mr-[8.5%] ml-[8.5%]">
          <About />
        </div>
      </div>
      <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
      <div className="relative mt-[50px]">
        <img
          alt="Right triangle"
          src={require("../Assets/Images/rightTriangle.png")}
          className="object-contain aspect-auto h-auto absolute right-0 sm:w-[100px] w-[70px] sm:top-[-5.5%] top-[-3%] "
        />
        <div className="mr-[8.5%] ml-[8.5%] "> 
          <Values />
        </div>
      </div>

      <div className="container-fluid mx-auto bg-[#E9F2FF]">
        <div className={matches ? "mt-[30px] h-[10px]" : "mt-[50px] h-[10px]"} />
        <FoundingTeam />
        <div className={matches ? "mt-5 h-[10px]" : "mt-8 h-[10px]"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
