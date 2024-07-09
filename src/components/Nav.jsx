import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import {  BsSearch, BsTelephone } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-around shadow-xl">
        <div className=" flex justify-center items-center gap-6">
          <p className="font-bold text-base ">Shop by category</p>
          <FaAngleDown className="w-4 h-4 mt-2" />
          {/* <label htmlFor="category" className='font-bold text-base'>Shop by category</label>
          <select name="category" className='w-[20px] h-[20px] hover:pointer flex items-center justify-center' id="category">
            <option value=""></option>
            <option value="malaria" className='text-sm font-medium text-[#346296]'>Anti-Malaria </option>
            <option value="reproduction" className='text-sm font-medium text-[#346296]'>Reproductive Health</option>
            <option value="bacteria" className='text-sm font-medium text-[#346296]'>Antibacterial</option>
            <option value="Antibiotics" className='text-sm font-medium text-[#346296]'>Antibiotics</option>
            <option value="PainRelief" className='text-sm font-medium text-[#346296]'>Pain Relief</option>
            <option value="supplement" className='text-sm font-medium text-[#346296]'>Vitamin & 
            Supplement</option>
          </select> */}
        </div>

        <div className="h-10 w-2/5 border rounded-lg color-[#9EA0A3] gap-2.5 flex items-center p-5">
          <BsSearch className="text-[#9EA0A3] h-4 w-4" />
          <p className="text-[#9EA0A3] text-base">What do you need?</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <BsTelephone className=" md:h-7 w-7" />
          <p className="font-bold text-base">Call - 08127845670</p>
        </div>
      </nav>
  )
}

export default Nav


