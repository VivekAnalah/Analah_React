import { Grid, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cheacked_Context } from "../Context/Cheacked_Context";

function Footer() {
  const matches = useMediaQuery("(max-width:900px)");
  // const navigate = useNavigate();
  const {Set_Disclaimer,  Set_T_C, Set_Privacy} = useContext(Cheacked_Context)
  const pageScroll = (id)=>{
 
    if(id==="tab2"){
      Set_Disclaimer()
      window.scrollTo(50,0)
      // document.getElementById(id).scrollIntoView()
    }else if(id==="tab3"){
      Set_T_C()
      window.scrollTo(50,0)
      // document.getElementById(id).scrollIntoView()
    }
    else if(id==="tab1"){
      Set_Privacy()
      window.scrollTo(50,0)
      // document.getElementById(id).scrollIntoView()
    } else if(id==="about"){
      // document.getElementById(id).scrollIntoView()
      // window.href= "/"
      // window.scrollTo(2400,2400)
      document.getElementById(id).scrollIntoView({ block: 'start' });



    }
     else if(document.getElementById(id)){
      console.log(id)
      window.scrollTo(50,0)
      // document.getElementById(id).scrollIntoView()
    }
  }
  // const Disclaimer_Route = (id) =>{
  //   if(document.getElementById(id)){
  //     document.getElementById(id).scrollIntoView()
  //   }
  //   Set_Disclaimer()
    
  //  navigate("/privacy-policy")
   
  // }
  return (
    <div className="">
      {/* <div class="grid grid-cols-3 bg-[#2A44A9] w-[100%] justify-evenly">
      <div className="space-y-5">
                  <h1 className="font-[600] text-[28px] text-white">
                    Get Insured
                  </h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Term-Life">Term Life Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Health">Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Family">Family Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Group">Group Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Car">Car Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/2-Wheeler">Two-Wheeler Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white">
                    Home Insurance
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white">
                    Retirement Plans
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white">
                    Investment Plans
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white">
                    Guaranteed Returns Plans
                  </h5>
                </div>
                <div className="space-y-5">
                  <h1 className="font-[600] text-[28px] text-white" >Explore</h1>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/"}>Home</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" >
                    About us
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" >Blog</h5>
                  <h5 className="font-[300] text-[16px] text-white" >
                    Policy Cancellation
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/become-posp"}>Become a PoSP</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/careers"}>Careers</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/privacy-policy"} >Privacy Policy</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white">
                    Terms & Conditions
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white">
                    Disclaimer
                  </h5>
                </div>
                <div className="space-y-5 ">
                  <h1 className="font-[600] text-[28px] text-white">
                    Contact Us
                  </h1>
                  <h5 className="font-[300] text-[16px] text-white ">
                    <span className="font-[600]">
                      {" "}
                      Registered & Corporate Office:{" "}
                    </span>
                    <br />
                    1407, B-Wing Parinee Crescenzo, G Block BKC, Mumbai,
                    Maharashtra 400051
                  </h5>
                  <br />

                  <h5 className="font-[600] text-[16px] text-white mt-[112px]">
                    +91 99208 78181 <br />
                    contactus@analahinsurance.com
                  </h5>

                  <div className="bg-[#ffffff] w-auto h-[100]"></div>
                </div>
                <div className="space-y-5 mt-16 ">
                  <h5 className="font-[400] text-[16px] text-white">
                    Analah Insurance Broking Pvt Ltd
                  </h5>
                  <h5 className="font-[400] text-[16px] text-white">
                    IRDAI License No. 744 <br />
                    Direct Broker (Life & General) <br />
                    Valid upto: 10/06/2024 (Renewable)
                  </h5>
                  <br />
                  <h5 className="font-[400] text-[16px] text-white">
                    CIN No. U66010MH2020PTC337611
                  </h5>
                  <div className="">
                    <img
                      alt="values "
                      src={require("../Assets/Images/image 4.png")}
                      className={
                        matches
                          ? "hidden"
                          : "aspect-auto w-[450] h-auto p-[18px] bg-[#fff]"
                      }
                    />
                  </div>

                  <div className="w-[220px] h-[90] flex   items-center">
                    <a href="https://twitter.com/analahinsurance">
                      <img
                        src={require("../Assets/Images/twitter.png")}
                        alt="twitter"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://www.instagram.com/analahinsurance/?igshid=ZDdkNTZiNTM%3D">
                      <img
                        src={require("../Assets/Images/instagram.png")}
                        alt="instagram"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://www.facebook.com/analahinsurance">
                      <img
                        src={require("../Assets/Images/facebook-app-symbol.png")}
                        alt="facebook"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/analahinsurance/">
                      <img
                        src={require("../Assets/Images/linkedin.png")}
                        alt="linkedin"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    {/* <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[25px] h-[25px]"
                    /> */}
                 {/* </div>
                </div>
      </div> */}
      <Grid container spacing={2} className="bg-[#2A44A9] px-[6%] py-10">
        {matches ? (
          <>
            <div className="w-[100%] px-5">
              <div className="flex flex-row w-[100%] items-start space-x-2 justify-between">
                <div className="space-y-2 w-[50%]">
                  <h1 className="font-[600] text-[18px] text-white">
                    Get Insured
                  </h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("insurnce-scroll")}>
                    <Link to="/Term-Life">Term Life Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("insurnce-scroll")}>
                    <Link to="/Health">Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Family">Family Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Group">Group Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Car">Car Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/2-Wheeler">Two-Wheeler Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Home">Home Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Retirement">Retirement Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Investment">Investment Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Guaranteed">Guaranteed Returns Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Travel"> Travel Insurance </Link>
                  </h5>
                  <div className="bg-[#ffffff] w-[120px] h-auto flex flex-row rounded-[20px] p-2 space-x-2 items-center justify-center">
                    <a href="https://twitter.com/analahinsurance" target="_blank">
                    <img
                      src={require("../Assets/Images/twitter.png")}
                      alt="twitter"
                      className="object-contain w-[15px] h-[15px]"
                    />
                    </a>
                    <a href="https://www.instagram.com/analahinsurance/?igshid=ZDdkNTZiNTM%3D" target="_blank">
                    <img
                      src={require("../Assets/Images/instagram.png")}
                      alt="instagram"
                      className="object-contain w-[15px] h-[15px]"
                    />
                    </a>
                    <a href="https://www.facebook.com/analahinsurance" target="_blank">
                    <img
                      src={require("../Assets/Images/facebook-app-symbol.png")}
                      alt="facebook"
                      className="object-contain w-[15px] h-[15px]"
                    />
                    </a>
                    
                    <a href="https://www.linkedin.com/company/analahinsurance/" target="_blank">
                    <img
                      src={require("../Assets/Images/linkedin.png")}
                      alt="linkedin"
                      className="object-contain w-[15px] h-[15px]"
                    />

                    </a>
                   
                   {/* <a  >
                   <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[15px] h-[15px]"
                    />
                   </a> */}
                    
                  </div>
                </div>
                <div className="space-y-2 w-[50%]">
                  <h1 className="font-[600] text-[18px] text-white">
                    Quick Links
                  </h1>
                  
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/"}>Home</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white scroll-mt-[-20px]" onClick={()=>pageScroll("about")}>
                    <Link to={"/"}>About us </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                       <Link to={"/Raiseaclaim"}>Claim</Link>
                    </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/policy-cancel"}>Policy Cancellation</Link>
                    
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/become-posp"}>Become a PoSP</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/careers"}>Careers</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("tab1")}>
                    <Link to={"/privacy-policy"} >Privacy Policy</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white"  onClick={()=>pageScroll("tab3")}>
                    
                    <Link to={"/privacy-policy"} >Terms & Conditions </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white"  onClick={()=>pageScroll("tab2")}>
                  <Link to={"/privacy-policy"} > Disclaimer </Link>
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-[100%] px-5 py-5">
              <div className="flex flex-row w-[100%] items-start space-x-2 justify-between">
                <div className="space-y-2 w-[50%]">
                  <h1 className="font-[600] text-[18px] text-white">Contact</h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white w-[100%%]">
                    <span className="font-[600]">
                      Registered & Corporate Office:{" "}
                    </span>
                    <br />
                    1407, B-Wing Parinee Crescenzo, G Block BKC, Mumbai,
                    Maharashtra 400051
                  </h5>
                  <br />

                  <h5 className="font-[600] text-[12px] sm:text-[16px] text-white">
                    <a href="tel:+91 99208 78181">+91 99208 78181</a>
                    
                  </h5>
                  <h5 className="font-[600] text-[12px] sm:text-[16px] text-justify text-white">
                    <a href="mailto:contactus@analahinsurance.com">contactus@analahinsurance.com</a>
                    
                    <br />
                    
                  </h5>
                </div>

                <div className="space-y-2  w-[50%]">
                  <h5 className="font-[400] text-[12px] sm:text-[16px] text-white">
                    Analah Insurance Broking Pvt Ltd
                  </h5>
                  <h5 className="font-[400] text-[12px] sm:text-[16px] text-white">
                    IRDAI License No. 744 <br />
                    Direct Broker (Life & General) <br />
                    Valid upto: 10/06/2024 (Renewable)
                  </h5>
                  <br />
                  <h5 className="font-[400] text-[12px] sm:text-[16px] text-white">
                    CIN No. U66010MH2020PTC337611
                  </h5>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Grid item md={6} sm={6} lg={5}>
              <div className="flex flex-row  space-x-2 justify-around">
                <div className="space-y-5">
                  <h1 className="font-[600] text-[28px] text-white">
                    Get Insured
                  </h1>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Term-Life" >Term Life Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Health">Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Family">Family Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Group">Group Health Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Car">Car Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/2-Wheeler">Two-Wheeler Insurance</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Home">Home Insurance</Link>
                     
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                  <Link to="/Retirement">Retirement Plans</Link>
                    
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                   <Link to="/Investment">Investment Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to="/Guaranteed">Guaranteed Returns Plans</Link>
                  </h5>
                  <h5 className="font-[300] text-[12px] sm:text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                   <Link to="/Travel"> Travel Insurance </Link>
                  </h5>

                </div>
                <div className="space-y-5">
                  <h1 className="font-[600] text-[28px] text-white" >Explore</h1>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/"}>Home</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white scroll-mt-[-20px]" onClick={()=>pageScroll("about")}>
                  <Link to={"/"}>About us </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                       <Link to={"/Raiseaclaim"}>Claim</Link>
                    </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/policy-cancel"}>Policy Cancellation</Link>
                    
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/become-posp"}>Become a PoSP</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("scroll")}>
                    <Link to={"/careers"}>Careers</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white" onClick={()=>pageScroll("tab1")}>
                    <Link to={"/privacy-policy"} >Privacy Policy</Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white"  onClick={()=>pageScroll("tab3")}>
                    <Link to={"/privacy-policy"} >Terms & Conditions </Link>
                  </h5>
                  <h5 className="font-[300] text-[16px] text-white"  onClick={()=>pageScroll("tab2")}>
                   <Link to={"/privacy-policy"} > Disclaimer </Link>
                  </h5>
                </div>
              </div>
            </Grid>

            <Grid item md={6} sm={6} lg={7}>
              <div className="flex flex-row justify-evenly">
                <div className="space-y-5 w-[100%]">
                  <h1 className="font-[600] text-[28px] text-white">
                    Contact Us
                  </h1>
                  <h5 className="font-[300] text-[16px] text-white w-[75%]">
                    <span className="font-[600]">
                      {" "}
                      Registered & Corporate Office:{" "}
                    </span>
                    <br />
                    1407, B-Wing Parinee Crescenzo, G Block BKC, Mumbai,
                    Maharashtra 400051
                  </h5>
                  <br />

                  <h5 className="font-[600] text-[16px] text-white mt-[112px]">
                  <a href="tel:+91 99208 78181">+91 99208 78181</a>
                    <br />
                    <a href="mailto:contactus@analahinsurance.com">contactus@analahinsurance.com</a>
                    
                  </h5>

                  <div className="bg-[#ffffff] w-auto h-[100]"></div>
                </div>

                <div className="space-y-5 mt-16 w-[100%]">
                  <h5 className="font-[400] text-[16px] text-white">
                    Analah Insurance Broking Pvt Ltd
                  </h5>
                  <h5 className="font-[400] text-[16px] text-white">
                    IRDAI License No. 744 <br />
                    Direct Broker (Life & General) <br />
                    Valid upto: 10/06/2024 (Renewable)
                  </h5>
                  <br />
                  <h5 className="font-[400] text-[16px] text-white">
                    CIN No. U66010MH2020PTC337611
                  </h5>
                  <div className="">
                    <img
                      alt="values "
                      src={require("../Assets/Images/image 4.png")}
                      className={
                        matches
                          ? "hidden"
                          : "aspect-auto w-[450] h-auto p-[18px] bg-[#fff]"
                      }
                    />
                  </div>

                  <div className="w-[170px] h-[90] flex p-2 space-x-3 items-center justify-center bg-[#ffffff] rounded-[20px]">
                    <a href="https://twitter.com/analahinsurance" target="_blank">
                      <img
                        src={require("../Assets/Images/twitter.png")}
                        alt="twitter"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://www.instagram.com/analahinsurance/?igshid=ZDdkNTZiNTM%3D" target="_blank">
                      <img
                        src={require("../Assets/Images/instagram.png")}
                        alt="instagram"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://www.facebook.com/analahinsurance" target="_blank">
                      <img
                        src={require("../Assets/Images/facebook-app-symbol.png")}
                        alt="facebook"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/analahinsurance/" target="_blank">
                      <img
                        src={require("../Assets/Images/linkedin.png")}
                        alt="linkedin"
                        className="object-contain w-[25px] h-[25px]"
                      />
                    </a>
                    {/* <a  >
                    <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[25px] h-[25px]"
                    />
                    </a> */}
                    {/* <img
                      src={require("../Assets/Images/youtube.png")}
                      alt="youtube"
                      className="object-contain w-[25px] h-[25px]"
                    /> */}
                  </div>
                </div>
              </div>
            </Grid>
          </>
        )}
      </Grid>

    </div>
  );
}

export default Footer;
