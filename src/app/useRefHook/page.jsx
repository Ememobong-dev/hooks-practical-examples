"use client";

import React, { useRef, useState } from 'react';

const page = () => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
       
    const focusInput = () => {
        return inputRef.current.focus();
    }


  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <input 
            ref={inputRef} 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder='Enter any value here'
            className='w-[50%] border border-blue-700 focus:outline-orange-800 py-2 px-8'
        />
        <div>
            <p>Current Value: {inputRef.current?.value}</p>
            <button onClick={focusInput} className='bg-orange-800 py-2 px-8 text-white'> Focus Input </button>

        </div>
    </div>
  )
}

export default page