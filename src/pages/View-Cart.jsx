import React from "react";
import Header2 from "../components/Header2";
import Nav from "../components/Nav";
import vitabiotic from "../assets/vitabiotic.png";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ViewCart = () => {
  return (
    <div>
      <Header2 />
      <Nav />

      <p className="font-secondary font-bold text-lg mb-6 mt-10 ml-14">Your cart details</p>

      {/* table */}
      <div className="flex  items-center justify-center mb-4">
      <table className="table-auto  ">
        <tr className="shadow-xl">
          <th className="font-medium font-base font-secondary w-">Items</th>
          <th className="font-medium font-base font-secondary w-[90px] h-[27px]">Quantity</th>
          <th className="font-medium font-base font-secondary w-[49px] h-[27px]">Price</th>
          <th className="font-medium font-base font-secondary w-[86px] h-[27px]">Subtotal</th>
        </tr>

        <div className="flex items-center mb-8">
          <tr>
            <td>
              <img src={vitabiotic} className="mt-10" alt="vitabiotic" />
            </td>
          </tr>
          <p className="font-secondary text-base font-medium ml-6 mr-[500px]">
            Feroglobin Capsule Tabs X 14
          </p>
          
        </div>

        <td>1</td>
          <td className="items-center font-normal text-lg gap-0.5">
            {/* <FaNairaSign className="h-3.5 w-3.5" /> */}
             8,120
          </td>

          

          <td className="flex items-center font-normal text-lg gap-0.5">
            <FaNairaSign className="h-3.5 w-3.5" /> 8,120
          </td>

        {/* <tr>
            <td>
              <div className="w-[428] h-[170px] flex items-center justify-center">
                <img src={vitabiotic} alt="vitabiotic" />
                <p className="font-secondary text-base font-medium">
                  Feroglobin Capsule Tabs X 14 
                </p>
              </div>
            </td>
            
            <td className="flex items-center justify-center gap-0.5 font-normal text-lg">
              <FaNairaSign className="w-3.5 h-3.5"/> 8,120
            </td >

            <td className="flex items-center text-center justify-center gap-0.5 font-normal text-lg"><FaNairaSign className="w-3.5 h-3.5" /> 8,120</td>
          </tr> */}
      </table>

      </div>
      
      {/* checkout box */}

      <div className="w-[400px] h-[146px] mb-40 ml-14">
        <div className="w-[400px] h-[84px] font-secondary font-medium text-base border border-#E6E6E680] rounded-lg">
          <p>Cart subtotal</p>
          <div className="bg-[#E6E6E680] w-[400px] h-[35px] mt-2 flex items-center"> 
            <FaNairaSign /> 8,120
          </div>
        </div>

        <div className="w-[400px] h-[42px] font-bold flex gap-7 mt-4">
          <div className=" text-[#346296] bg-white border border-[#346296] rounded-lg flex items-center justify-center font-normal text-base">
            <button className="w-[185px] h-[42px]">
              <Link to="/store"> Get more items </Link>
            </button>
          </div>

          <div className=" bg-[#346296] text-white border rounded-lg flex items-center justify-center font-normal text-base">
            <button className="w-[185px] h-[42px]">
              <Link to="/delivery"> Get more items</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
