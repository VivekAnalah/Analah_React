
import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function RaiseClaimForm() {
  const [isHovered, setIsHovered] = useState(false);
  const [insurance_type , setInsuranceType] = useState("");
  const [Claimant_name, setClaimantName] = useState("");
  const [policy_num, SetPolicyNum] = useState("");
  const [mob_num, SetMobNum] = useState("");
  const [claimant_email, SetClaimantEmail] = useState("");
  const [claimant_query, SetClaimantQuery] = useState("");
  const [Email_valid, setEmail_valid] = useState(true);
  const [Mob_valid, setMob_valid] = useState(true);
  const validMob = (e) =>{
   
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    let mobile_number = e.target.value
// if mobile_number
// is empty return false
if (mobile_number == null) {
    console.log("mob not valid")
    SetMobNum("")
    setMob_valid(false)
    return "false";
}

// Return true if the mobile_number
// matched the ReGex
if (regex.test(mobile_number) == true) {
  SetMobNum(e.target.value)
    setMob_valid(true)
    console.log("mob valid")
    return "true";
}
else {
    console.log("mob not valid")
    SetMobNum("")
    setMob_valid(false)
    return "false";
}
}
const validStyle = {
  
}
const notValidStyle = {
  border : "1px solid red"
}
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const validEmail = (e) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(e.target.value.match(validRegex)){
        setEmail_valid(true)
        SetClaimantEmail(e.target.value)
        console.log("valid")
    }else{
        setEmail_valid(false)
console.log("not valid")
SetClaimantEmail("")
    }

}

const handleClaim = async (e) => {

  e.preventDefault();
  console.log(
    insurance_type,
    Claimant_name,
    policy_num,
    mob_num, 
    claimant_email,
    claimant_query,
    Email_valid,
    Mob_valid)
try{

  let res = await axios.post( "https://famous-teal-raven.cyclic.app/claim",
    {
      Insurance_Type: insurance_type,
      Claimant_Name : Claimant_name,
      Policy_Number : policy_num,
      Mobile_Number : mob_num,
         Claimant_Email : claimant_email,
         Claimant_Query : claimant_query,

    }
  );
  let data = res.data;
  if(data.Status === "Ok"){
    alert(data.msg)
    // window.location.href = "https://dashboard.analahinsurance.com/customer/login"
   


  }else{
    alert("Sorry!!  Getting Internal Error to Upload your request")


  }
 console.log(data)
}
catch(e){
console.log(e)
}

}
  const divStyles = {
    // border : isHovered ? "0.5px solid #2A44A9" : "",
    background: isHovered
      ? "white"
      : "linear-gradient(180deg, #2A44A9 0%, #3654CA 100%)",
      boxShadow: isHovered ? "5px 10px" : "",
    color: isHovered ? "#2A44A9" : "#ffffff",
    borderRadius: 11,
  };
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
            <div className="flex raiseform-wrap w-full max-w-[600px] mt-8 lg:mt-16 hover:shadow-blue-800 hover:shadow-md" style={{background:'#F7F8FC'}}>
              <div className="w-[100%] flex flex-col space-y-6 items-center justify-center">
                <div className="flex flex-wrap gap-3 lg:w-[95%] justify-between">

                    <div className="section over-hide ">
                      <div className="section over-hide ">
                        <div className="container-fluid pt-2">
                          <div className="row justify-content-center pb-5">
                            <div className="col-12 pb-5">
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-2" onClick={() => setInsuranceType("Life")} />
                              <label className="for-checkbox-tools" for="tool-2">
                                Life
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-3" onClick={() => setInsuranceType("Health")}/>
                              <label className="for-checkbox-tools" for="tool-3">
                                Health
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-4" onClick={() => setInsuranceType("Car")} />
                              <label className="for-checkbox-tools" for="tool-4">
                                Car
                              </label>
                              <input className="checkbox-tools" type="radio" name="tools" id="tool-5" onClick={() => setInsuranceType("Bike")}/>
                              <label className="for-checkbox-tools" for="tool-5">
                                Bike
                              </label>
                            </div>
                          </div>
                        </div>	
                      </div>
                    </div>

                  
                </div>
                <div className="lg:w-[85%]">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Name of the Insurer"
                    onChange={(e) => {setClaimantName(e.target.value)}}
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Policy Number "
                    onChange={(e) => SetPolicyNum(e.target.value)}
                  />
                  <input
                    type="number"
                    className="input-text"
                    placeholder="Mobile Number"
                    onChange={(e) => validMob(e)}
                    style={Mob_valid ? validStyle : notValidStyle}
                  />
                  <input
                    type="text"
                    className="input-text"
                    placeholder="Email ID"
                    onChange={(e) => validEmail(e)}
                    style={Email_valid ? validStyle : notValidStyle}
                  />
                  <textarea className="input-text" placeholder="Tell us what happened" onChange={(e)=> SetClaimantQuery(e.target.value)}></textarea>

                  <div className="text-center">
                    <button
                      className="justify-center w-[100%] text-center items-center py-2 text-[#FFFFFF] px-10 text-[18px]"
                      style={divStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleClaim(e)}
                    disabled={!Email_valid || !Mob_valid  || !mob_num || !claimant_email  }
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
