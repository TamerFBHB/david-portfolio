'use client'
import { useEffect, useState } from "react";
import "./DarkMode.scss"
import { FaSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";


const DarkMode =()=> {

    const [mode, setMode] = useState("dark")

    useEffect(() => {
        if (mode ==="light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light"); 
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark"); 
        }
    }, [mode])
    
    return (
        <button className="dark_mode" onClick={()=>{
            setMode( mode ==="dark"? "light" : "dark");
            
        }}>
            {mode==="dark"? <FaSun className="sun"/> :  <IoMoonOutline  className="moon"/> 
                }
        </button>
    );
}

export default DarkMode;

