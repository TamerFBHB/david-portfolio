"use client"
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {

    const [mode, setMode] = useState("dark")
    const toggle = () => {
        setMode(prev => (prev == "dark" ? "light" : "dark"));
        document.documentElement.classList.toggle("dark");
    }
    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme  ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>

    )
};
