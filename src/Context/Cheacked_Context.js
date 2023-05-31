import { createContext, useState } from "react";

export const Cheacked_Context = createContext();

function CheackedContextProvider({ children }) {
  const [cheacked_disclaimer, set_Cheacked_disclaimer] = useState(false);
  const [cheacked_privacy, set_Cheacked_privacy] = useState(false);
  const [cheacked_T_C, set_Cheacked_T_C] = useState(false);
  const [aboutCheacked, setAbout] = useState(false)

  const Set_Disclaimer = () =>{
     set_Cheacked_disclaimer(true)
     set_Cheacked_T_C(false)
     set_Cheacked_privacy(false)
  }
  
  const Set_T_C = () =>{
    set_Cheacked_disclaimer(false)
    set_Cheacked_T_C(true)
    set_Cheacked_privacy(false)
 }
 const Set_Privacy = () =>{
    set_Cheacked_privacy(true)
    set_Cheacked_disclaimer(false)
    set_Cheacked_T_C(false)
 }
 const Set_About = () =>{
  setAbout(true)

 }
 const UnSet_About = () =>{
  setAbout(false)

 }

  return (
    <Cheacked_Context.Provider
      value={{
        cheacked_T_C,
        cheacked_disclaimer,
        cheacked_privacy,
        aboutCheacked,
        Set_Privacy,
        Set_Disclaimer,
        Set_T_C,
        Set_About,
        UnSet_About
        
        
       
      }}
    >
      {children}
    </Cheacked_Context.Provider>
  );
}
 export default CheackedContextProvider ;