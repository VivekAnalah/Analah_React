import "./App.css";
import {  Routes, Route  } from "react-router-dom";
import Home from "./Screens/Home";
import TermLife from "./Screens/Insurances/TermLife";
import HealthInsurance from "./Screens/Insurances/HealthInsurance";
import FamilyHealth from "./Screens/Insurances/FamilyHealth";
import TwoWheeler from "./Screens/Insurances/TwoWheeler";
import CarInsurance from "./Screens/Insurances/CarInsurance";
import GroupInsurance from "./Screens/Insurances/GroupInsurance";
import HomeInsurance from "./Screens/Insurances/HomeInsurance";
import RetirementInsurance from "./Screens/Insurances/Retirement";
import Raiseaclaim from "./Screens/Raiseaclaim";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import Careers from "./Screens/Careers";
import BecomePosp from "./Screens/BecomePosp";
import PolicyCancel from "./Components/Policy_Cancel";
import Signup  from "./Components/Signup";
import InvestmentPlans from "./Screens/Insurances/InvestmentPlans";
import GuaranteedReturns from "./Screens/Insurances/GuaranteedReturns";
import Travel from "./Screens/Insurances/TravelInsurance";
import About from "./Components/About";


function App() {
  return (
    
  
      <Routes>
    
        <Route path="/" element={<Home />} />
      
        
        <Route path="/Term-Life" element={<TermLife />} />
        <Route path="/Health" element={<HealthInsurance />} />
        <Route path="/Family" element={<FamilyHealth />} />
        <Route path="/2-Wheeler" element={<TwoWheeler />} />
        <Route path="/Car" element={<CarInsurance />} />
        <Route path="/Group" element={<GroupInsurance />} />
        <Route path="/Home" element={<HomeInsurance />} />
        <Route path="/Retirement" element={<RetirementInsurance />} />
        <Route path="/Raiseaclaim" element={<Raiseaclaim />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/become-posp" element={<BecomePosp />} />
        <Route path="/policy-cancel" element={<PolicyCancel />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Investment" element={<InvestmentPlans />} />
        <Route path="/Guaranteed" element={<GuaranteedReturns />} />
        <Route path="/Travel" element={<Travel />} />
        {/* <Route path="/:sectionId" element={<About />} /> */}


      </Routes>
   
    
  );
}

export default App;
