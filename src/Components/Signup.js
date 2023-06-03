import React, { useState } from "react";
import Header from "./Header";

import axios from "axios";

 const  Signup = () => {
   
    const [Email_valid, setEmail_valid] = useState(true);
    const [Pass_valid, setPass_valid] = useState(true);
    const [Mob_valid, setMob_valid] = useState(true);
    const displayButton = {
        display : "block"
    }
    const notDisplayButton = {
        display : "hidden"
    }
    const validStyle = {
        border : "2px solid #E5E7E8"
    }
    const notValidStyle = {
        border : "1px solid red"
    }

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [pass , setPass] = useState("");
    const button_disable = Email_valid && Pass_valid && Mob_valid &&  name && email && mob && pass
    const validPass = (e) => {
        var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(e.target.value.match(passw)){
            console.log(e.target.value)
            setPass(e.target.value)
            setPass_valid(true)
            console.log("valid pass")
        }else{
            setPass_valid(false)
            
console.log("not valid pass")
setPass("")
        }
    }
    const validMob = (e) =>{
        let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
        let mobile_number = e.target.value
    // if mobile_number
    // is empty return false
    if (mobile_number == null) {
        console.log("mob not valid")
        setMob("")
        setMob_valid(false)
        return "false";
    }
 
    // Return true if the mobile_number
    // matched the ReGex
    if (regex.test(mobile_number) == true) {
        setMob(e.target.value)
        setMob_valid(true)
        console.log("mob valid")
        return "true";
    }
    else {
        console.log("mob not valid")
        setMob("")
        setMob_valid(false)
        return "false";
    }
    }
    const validEmail = (e) =>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(e.target.value.match(validRegex)){
            setEmail_valid(true)
            setEmail(e.target.value)
            console.log("valid")
        }else{
            setEmail_valid(false)
console.log("not valid")
setEmail("")
        }

    }
    const handleSignUp = async (e) => {
        e.preventDefault();
      try{

        let res = await axios.post( "https://famous-teal-raven.cyclic.app/signup",
          {
            name,
            email,
            password : pass,
            mobile : mob
          }
        );
        let data = res.data;
        if(data.Status === "Ok"){
          alert(data.msg)
{
  <div
  class="mb-3 inline-flex w-full items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700"
  role="alert">
  <span class="mr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="h-5 w-5">
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clip-rule="evenodd" />
    </svg>
  </span>
  A simple success alert - check it out!
</div>
}
        }else{
          alert(data.msg)
          {
            <div
  class="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
  role="alert">
  A simple danger alert—check it out!
</div>
          }

        }
       console.log(data)
      }
      catch(e){

      }
  
    }
  return (
    <div className="h-screen  ">
        <Header />
      {/* <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div> */}
      <div className="flex w-[100%]   justify-center py-10 items-center bg-white m-[auto] " >
        <form className="bg-white p-10 sm:p-15  rounded-md shadow-lg shadow-blue-500/50 " >
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
            onChange={(e) => setName(e.target.value)}
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
            />
          </div>
          
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4" style={Email_valid ? validStyle : notValidStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
            onChange={(e) => validEmail(e)}
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4" style={Mob_valid ? validStyle : notValidStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
            onChange={(e) => validMob(e)}
              className="pl-2 outline-none border-none"
              type="number"
              name="mob"
              id="mob"
              placeholder="Mobile Number"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl" style={Pass_valid ? validStyle : notValidStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
            onChange={(e) => validPass(e)}
              className="pl-2 outline-none border-none"
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              required
            />
          </div>
          <button
          
          
          onClick={(e) => handleSignUp(e)}
            
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            disabled={!Email_valid || !Pass_valid || !Mob_valid || !name || !email ||!mob || !pass}
          >
            Sign Up
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
          <a href="https://dashboard.analahinsurance.com/customer/login" target="blank"> Already have an account? Sign In</a>
           
          </span>
        </form>

        


      </div>
     
    </div>
  );
};

export default  Signup;