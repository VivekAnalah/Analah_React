import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";


function OurPartner() {
  const our_partner = new Array(25).fill(0)
 



  

  return (
    <div className="mt-[50px]">
      <h2 className="font-semibold text-2xl lg:text-3xl text-center mb-5">
        <span className="title-border-bottom">Our P</span>artners{" "}
      </h2>
      
      <div className="relative pt-10 lg:py-20">
       

        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2  lg:justify-center lg:items-center  w-[70%]  " style={{ margin: "auto"}}>
{our_partner && our_partner.map((icons,i) => (
  
 
   <div key={i} className="grid__partner flex justify-center items-center border border-slate-300 grayscale hover:grayscale-0  hover:scale-110 hover:shadow-md hover:shadow-blue-800 hover:bg-[white] hover:z-10  place-items-center justify-items-center ">
           {i===7 || i===9 || i===22 || i===24 ? <img alt={`${i+1}`}
              src={require(`../Assets/Images/logo/${i+1}.png`)}
              className="h-auto object-contain w-[60%] "
            /> : <img alt={`${i+1}`}
              src={require(`../Assets/Images/logo/${i+1}.png`)}
              className="h-auto object-contain w-[80%] "
            />}
           
          
          </div>
 
))}
<div className="grid__partner flex justify-center items-center border border-slate-300 grayscale hover:grayscale-0  hover:scale-110 hover:shadow-md hover:shadow-blue-800 hover:bg-[white] hover:z-10 place-items-center justify-items-center our-partner-grid ">
            <img alt={`26`}
              src={require(`../Assets/Images/logo/26.png`)}
              className="h-auto object-contain w-[80%] "
            /> 
           
          
          </div>
          
        </div>

        

      </div>
    </div>
  );
}

export default OurPartner;
