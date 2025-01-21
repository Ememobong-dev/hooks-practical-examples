"use client"

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const page = () => {
  const { theme, toggleTheme }= useContext(ThemeContext)
    
  return (
    <div  className={`py-8 px-3 w-[50%] flex flex-col justify-center items-center ${theme === "light" ? "text-black bg-white" : "text-white bg-slate-800"}`}>
      {/* Sharing a theme across components.*/}
      <h1>
        Current Theme: {theme}
      </h1>

      <button 
        className={` py-2 px-8 mt-5 rounded-full text-white ${theme === "light" ? "bg-purple-900" : 'bg-[#333]'}  `}
        onClick={toggleTheme}
      >
        Toggle theme to 
        {
         theme === "light" ? " Dark" : ' Light'
        }
      </button>
    </div>
  )
}

export default page