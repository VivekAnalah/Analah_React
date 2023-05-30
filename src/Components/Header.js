import { useMediaQuery } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ policyDetails }) {
  const matches = useMediaQuery("(max-width:500px)");
  const location= useLocation()
  console.log("location",location.pathname)
  const divStyles = {
    boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)",
    // marginBottom:'50px',
    marginRight: "0",
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        style={divStyles}
        id={"scroll"}
        className=" flex flex-wrap items-center justify-between py-3 bg-white sticky  top-[0px] z-[12] "
      >
        <div className="w-[100%] mycontainer mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <Link to="/" >
              {" "}
              <img
                src={require("../Assets/Images/logo.png")}
                alt="analah insurance"
                className={
                  matches
                    ? " ml-[-20px] mt-[0px] w-[230px]  justify-start"
                    : "object-contain w-[185px] pt-0"
                }
              />
            </Link>
            <div></div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img
                src={require("../Assets/Images/bar-icon.png")}
                alt="youtube"
                className="object-contain w-[25px] h-[25px]"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <h2
                    className={`${location.pathname === "/" && "active"} ${
                      matches
                        ? "text-[12px] font-[400]"
                        : "text-[18px] lg:text-[16px] font-[400]" 
                      } `
                    }
                  >
                    Insurance Products
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/raiseaclaim">
                  <h2
                    className={`${
                      matches
                        ? "text-[12px] font-[400]"
                        : "text-[18px] lg:text-[16px] font-[400]"
                        
                    } ${location.pathname === "/raiseaclaim" && "active"}`
                    }
                  >
                    Raise a Claim
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/become-posp">
                  {" "}
                  <h2
                    className={`${
                      matches
                        ? "text-[12px] font-[400]"
                        : "text-[18px] lg:text-[16px] font-[400]"
                      } ${location.pathname === "/become-posp" && "active"}`
                    }
                  >
                    Become a PoSP with us
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                {policyDetails ? null : (
                  <div
                    className={
                      matches ? "flex space-x-2 my-2" : "flex space-x-2"
                    }
                  >
                  
                    <button
                      className={
                        matches
                          ? "bg-[#2A44A9] p-[2px] h-[30px] rounded-l-[30px] w-[60px] text-[12px] text-white justify-center items-center"
                          : "bg-[#2A44A9]  rounded-l-[30px] w-[90px] text-[18px] text-white justify-center items-center"
                      }
                    >
                       <a href="https://dashboard.analahinsurance.com/customer/login" target="blank">Login</a>
                      
                    </button>
                   
                   
                    <button
                      className={
                        matches
                          ? "border-[3px] border-[#2A44A9] w-[60px] p-[2px] rounded-r-[30px] text-[12px] text-[#2A44A9] justify-center items-center"
                          : "border-[3px] border-[#2A44A9] w-[90px] py-[2px]  rounded-r-[30px] text-[18px] text-[#2A44A9] justify-center items-center"
                      }
                    >
                      <Link to="/sign-up" >Register</Link>
                      
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
