
import React from "react";
import { Link } from "react-router-dom";

function Insurance({ item, ins }) {
  let insuranceName = ins;
  const myArr = insuranceName.split(" ");
  console.log("insuranceName ", myArr[0]);
  
  return (
    <Link to={`/${myArr[0]}`} >
      <div
        className={
         " p-2 flex justify-center flex-col items-center "
          }
      >
        {item.id === 7 ?<img
          src={require(`../Assets/Images/${item.img}`)}
          alt=""
          className={"object-contain  w-[65%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
        /> : <img
        src={require(`../Assets/Images/${item.img}`)}
        alt=""
        className={"object-contain  w-[55%] h-[40px] lg:h-[40px] 2xl:h-[60px] mt-[10px] insurance-home-img"}
      /> }
        

      <div className="contents">
        <h6 className="text-[85%]  pt-2  font-bold  lg:w-10/12 min-h-[39px] insurance-home-text">
       
          {item.name}
        </h6>
      </div>

      </div>
    </Link>
  );
}

export default Insurance;
