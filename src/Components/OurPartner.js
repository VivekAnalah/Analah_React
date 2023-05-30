import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Pagination } from "swiper";

function OurPartner() {
  const our_partner = new Array(25).fill(0)
  const data = [
    {
      id: 1,
      img: "logo/1.png",
    },
    {
      id: 8,
      img: "logo/2.png",
    },
    {
      id: 3,
      img: "logo/3.png",
    },
    {
      id: 4,
      img: "logo/4.png",
    },
    {
      id: 5,
      img: "logo/5.png",
    },
    {
      id: 6,
      img: "logo/6.png",
    },
    {
      id: 7,
      img: "logo/7.png",
    },
    {
      id: 8,
      img: "logo/8.png",
    },
    {
      id: 9,
      img: "logo/9.png",
    },
    {
      id: 10,
      img: "logo/10.png",
    },
    {
      id: 11,
      img: "logo/11.png",
    },
    {
      id: 12,
      img: "logo/12.png",
    },
    {
      id: 13,
      img: "logo/13.png",
    },
    {
      id: 14,
      img: "logo/14.png",
    },
    {
      id: 15,
      img: "logo/15.png",
    },
    {
      id: 16,
      img: "logo/16.png",
    },
    {
      id: 17,
      img: "logo/17.png",
    },
    {
      id: 18,
      img: "logo/18.png",
    },
    {
      id: 19,
      img: "logo/19.png",
    },
    {
      id: 20,
      img: "logo/20.png",
    },
    {
      id: 21,
      img: "logo/21.png",
    },
  ];

  const data1 = [
    {
      id: 1,
      img: "logo/11.png",
    },
    {
      id: 2,
      img: "logo/12.png",
    },
    {
      id: 3,
      img: "logo/13.png",
    },
    {
      id: 4,
      img: "logo/14.png",
    },
    {
      id: 5,
      img: "logo/15.png",
    },
    {
      id: 6,
      img: "logo/16.png",
    },
    {
      id: 7,
      img: "logo/17.png",
    },
    {
      id: 8,
      img: "logo/18.png",
    },
    {
      id: 9,
      img: "logo/19.png",
    },
    {
      id: 10,
      img: "logo/20.png",
    },
  ];

  const data2 = [
    {
      id: 1,
      img: "logo/21.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    setCurrentSlide(currentSlide - 1);
  };

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

        {/* <Swiper
        
          slidesPerView={5}
          grid={{
            rows: 2,
          }}
          grabCursor={true}
          slidespercolumn={2}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidespercolumn: 2,
            },
            640: {
              slidesPerView: 2,
              slidespercolumn: 2,
            },
            768: {
              slidesPerView: 2,
              slidesPerColumn: 2,
            },
            1024: {
              slidesPerView: 5,
              slidesPerColumn: 2,
            },
          }}
          navigation={true}
          modules={[Grid, Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "90px" }}>
              <img
                src={require(`../Assets/Images/${item.img}`)}
                alt="carousels"
                className="object-contain aspect-auto w-[80%] h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

      </div>
    </div>
  );
}

export default OurPartner;
