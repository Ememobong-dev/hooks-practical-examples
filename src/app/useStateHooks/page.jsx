"use client"

import React, { useState } from 'react'

const page = () => {
    const [color, setColor] = useState("Blue");
    const [carDetails, setCarDetails] = useState({
      brand : "Ferrari",
      model: "Roma",
      year: "2023",
      color: "Red"
      
    });

    const handleChangeColor = () => {
      setColor("Purple")
    } 


  return (
    <div>
      <h1 className='text-3xl text-center text-slate-900'>I love the color {color}!</h1>
      <button className='py-2 px-8 bg-blue-950 text-white mt-5 rounded-3xl flex justify-center' onClick={handleChangeColor}>Change to Purple</button>

      <h1 className='text-3xl text-center text-[orange]'>My {carDetails.brand}</h1>
      <p>It is a {carDetails.color} {carDetails.model} from {carDetails.year} </p>
    </div>
  )
}

export default page