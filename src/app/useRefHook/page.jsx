"use client";

import React, { useRef, useState } from 'react';

const page = () => {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef();
    console.log(inputRef.current?.value)

    const focusInput = () => {
        return inputRef.current.focus();
    }



  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <input 
            ref={inputRef} 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value) } 
            placeholder='Enter any value here'
            className='w-[50%] border border-blue-700 focus:outline-blue-800 py-2 px-8'
        />
        <div>
            <p>Current Value: {inputRef.current?.value}</p>
            <button className='bg-[blue] py-2 px-8 text-white'> {focusInput} </button>

        </div>
    </div>
  )
}

export default page