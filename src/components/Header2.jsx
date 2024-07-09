import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <header className="flex h-20 w-full bg-[#346296] items-center justify-around">
      <div className="flex font-bold text-2xl">
        <h2 className="text-white">Health</h2>
        <h2 className="text-green-100">Xcale</h2>
      </div>

      <p className="text-base font-normal text-white font-secondary">
        Nigeria’s No.1 Pharmaceutical e-commerce platform
      </p>

      <div className="flex gap-4 flex justify-center items-center h-10 w-42">
        <div className="gap-2.5 flex justify-center items-center">
          <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center  ">
            <Link to="#">
              <FaRegUser className="h-6 w-6" />
            </Link>
          </div>

          <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center relative">
            <Link to="/ViewCart">
              <BsCartCheck className="h-6 w-6" />
            </Link>
            <div className="rounded-full bg-[#A7D4EF] h-[20px] w-[20px] absolute -top-1 -right-2">
              <p className=" text-sm font-normal flex items-center justify-center"> 1 </p>  
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2