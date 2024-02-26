"use client"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"




export default function DarkModeToggle() {

    const { mode, toggle } = useContext(ThemeContext)
    return (
        <div onClick={toggle} 
        style={{ 
            position: 'relative', 
            cursor:'pointer', 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'30px',}}>
            {`${mode === 'dark' ? '🌟' : '🌜'}`} 
            
        </div>)
};
