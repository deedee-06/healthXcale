import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Column2 from "../components/Column2";
import vitabiotic from "../assets/vitabiotic.png";
import { FaNairaSign, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AddCart = () => {
  return (
    <div>
      <Header />
      <Nav />

      <div className="flex font-medium text-base mt-10 ml-36 ">
          <p className="text-gray-500">Home /Feroglobim/</p>
          <span>Vitabiotics...</span>
        </div>

      <section className=" flex flex-col items-center justify-center mt-6">
        <div className="flex gap-48">
          <div className="w-[403px] h-[334px] flex shadow-xl items-center justify-center">
            <img
              src={vitabiotic}
              className="w-[179px] h-[241px]"
              alt="vitabolic"
            />
          </div>

          <div className="h-[192px] w-[387px]">
              <div className="h-[89px] w-[387px]">
                <p className="text-xl font-medium ">
                  Vitabiotics Feroglobin Capsule Tabs X 14
                </p>
                <p className="font-medium text-base">Feroglobin</p>
                <div className="flex items-center justify-center gap-0.5 h-[24px] w-[70px] mt-2">
                  <FaNairaSign className="h-3.5" />
                  <p className="font-bold text-lg h-[24px] w-[60px] flex items-center">
                    8,120
                  </p>
                </div>
                </div>
                <div className=" mt-3 flex items-center ">
                <p className="h-[24px] w-[24px] border border-black flex items-center justify-center">-</p>
                <p className="h-[24px] w-[24px] flex items-center justify-center">1</p>
                <p className="h-[24px] w-[24px] border border-black flex items-center justify-center">+</p>
              </div>

            <div className="h-[42px] w-[140px] bg-[#346296] text-white font-bold text-base rounded-lg flex items-center justify-center mt-6">
                <Link to ="/AddCart">
                <p>Add to cart</p>
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* product description section */}
      <div className="w-[635px] h-[44px] flex justify-between items-center mt-10 ml-36">
      <p className="font-medium font-secondary text-base ">Product Description</p>
      <FaPlus  className="h-[12px] w-[12px]"/>
      </div>
      <hr className="w-[635px] ml-36 "/>
      
      {/* More of you section */}
      <section className="mt-40  mb-48 h-[567px] w-full">
        <p className="font-bold text-2xl font-secondary flex items-center justify-center">
          More For You
        </p>

        <Column2 />
      </section>
      <Footer />
    </div>
  );
};

export default AddCart;
