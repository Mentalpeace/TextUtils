import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() 
{
  const[mode,setmode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=> {
    setAlert({msg:message,
    type: type})
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }
  const togglemode=()=>
    {
    if(mode==="light"){
      setmode('dark');
      document.body.style.backgroundColor="#040734";
      showAlert("Dark mode has been enabled", "Success");
    }else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "Success");
    }
  }
  return (
<div>
   <Navbar title="TextUtils"
  aboutText="About Us" search="SUBMIT" mode={mode} togglemode={togglemode}/>
  <Alert  Alert={alert}/>
  <div className="container my-3">
  <TextForm heading="Enter your texts to analyse:" mode={mode} showAlert={showAlert}/>
 {/* <About /> */}
  </div>
 </div>

  );
};
export default App;
