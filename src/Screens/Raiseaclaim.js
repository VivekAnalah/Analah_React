import {  useMediaQuery } from "@mui/material";
import React from "react";

import Footer from "../Components/Footer";

import Header from "../Components/Header";

import Raise from "../Components/Raise";
import Howitworks from "../Components/Howitworks";
import RaiseClaimForm from "../Components/RaiseClaimForm";


function Home() {
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <div  >
      <Header raiseClaim={true}/>
      
      <div className={matches ? "" : ""} />
      <Raise />
      <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
      <Howitworks />
        <div className={matches ? "my-5" : "my-8"} />
      <RaiseClaimForm />
      <div className={matches ? "my-5 h-[10px]" : "my-8 h-[10px]"} />
      <Footer />
    </div>
  );
}

export default Home;