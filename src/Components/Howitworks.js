import { Grid } from "@mui/material";
import React from "react";

function Howitworks() {
  
  return (
    
    <div className="  mx-auto w-[100%] max-w-[100%]" style={{backgroundColor: 'rgba(42, 68, 169, 0.04)'}}>
      <div className="lg:pt-[4rem] md:pt-[3rem] sm:pt-[2rem] pt-[2rem] pb-[5rem] ">
      <h2 className="font-semibold text-2xl lg:text-3xl mb-9 lg:mb-[60px] text-center" >
        <span className=" title-border-bottom text-center mb-[35px]">How </span>
        it works ?
      </h2>

      <Grid container>
         
       
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center px-3"} 
            >
              <div className="flex flex-col justify-center items-center w-9/12" >
                <div className={"flex justify-start w-auto h-auto mb-10"}>
                  <img
                    src={require("../Assets/Images/Asset 3.png")}
                    alt=""
                    className="aspect-auto object-contain w-[70%] lg:w-[80%] h-[100%] m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px]">
                    Fill up our form and submit a request to raise a claim.
                  </h3>
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center px-3"}
            >
              <div className="flex flex-col justify-center items-center w-9/12">
                <div className={" flex justify-start w-auto h-auto mb-10"}>
                  <img
                    src={require("../Assets/Images/Asset 6.png")}
                    alt=""
                    className="aspect-auto object-contain w-[70%] lg:w-[80%] h-[100%] m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px]">
                    Submit the requisite documents as requested by our team.
                  </h3>
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              lg={4}
              className={"w-[100%] flex justify-center px-3"}
            >
              <div className="flex flex-col justify-center items-center w-9/12">
                <div className={" flex justify-start w-auto h-auto mb-10"}>
                  <img
                    src={require("../Assets/Images/Asset 1.png")}
                    alt=""
                    className="aspect-auto object-contain w-[70%] lg:w-[80%] h-[100%] m-auto"
                  />
                </div>
                <div className={"w-[80%]"}>
                  <h3 className="text-[16px] text-center font-[600] text-[#595959] mt-[10px]">
                    Leave it to us to resolve and work for your claim
                    settlement.
                  </h3>
                </div>
              </div>
            </Grid>
        
    
      </Grid>
    </div>
    </div>
  );
}

export default Howitworks;
