import React from "react";
  import Navbar from "./Navbar";
import HomeStyle from './Home.module.css'
export default function Home() {
    return(
        <div className={HomeStyle.wrapper}>
         <Navbar/>  
        
        <div className={HomeStyle.bg}>
    
        <h3>Project BY </h3>
        
        <p>RICHA BHARTI</p>
       
        </div>
        </div>
    )
}