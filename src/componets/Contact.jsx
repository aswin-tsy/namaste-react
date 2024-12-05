import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DarkContext from "../../DarkContext";

const Contact = () =>{

    
    const {isDark} = useContext(DarkContext);

 
  

    return(
        <div data-testid =  'resContactDark' className={`${isDark && "dark"}`}>
            <div className="dark:bg-black h-[100vh] dark:text-white" >
            <h1 className="dark:text-white text-[24px] text-center p-4 font-bold">Contact Page</h1>
            <div className="text-center p-4">
                <form className=" mx-[550px] p-4 flex flex-col gap-4 border w-[600px] border-black" >
                <input className="border p-2 " type="text" placeholder="name"/>
                <input className="border p-2" type="text" placeholder="place"/>
                <button className="border w-[80px] font-bold bg-gray-200 p-3 rounded-md">Submit</button>
                </form>
            </div>
            
        </div></div>
        
    )
}

export default Contact;