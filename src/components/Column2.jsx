import React from "react";
import folicAcid from "../assets/folicAcid.png";
import fishOil from "../assets/fishOil.png";
import nutrify from "../assets/nutrify.png";
import { FaNairaSign } from "react-icons/fa6";
import primrose from "../assets/primrose.png";
import { Link } from "react-router-dom";

const Column2 = () => {
  return (
    <div className="w-full h-[507px] flex items-center justify-center gap-6 mt-6">
      <div className="w-[250px] h-[507px]">
        <div className="w-[250px] h-[334px] flex shadow-xl items-center justify-center">
          <img src={nutrify} className="w-48 h-60" alt="nutrify" />
        </div>

        <div className="w-[193px] h-[157px] mt-4">
          <div className="w-full h-[107px]">
            <div className="w-full h-[77px] pb-2">
              <p className="font-normal text-base text-gray-500">Paracetamol</p>
              <div className="font-medium text-base">
                <p>Nature's Field VitaminC</p>
                <p>100mg</p>
              </div>
            </div>
            <p className="font-bold text-lg text-[#346296] flex items-center">
              <FaNairaSign className="w-4 h-4" />
              10,450
            </p>
          </div>

          <Link to="/AddCart">
            <p className="h-[42px] w-[140px] bg-[#346296] rounded-md mt-2 font-bold text-base flex items-center justify-center text-white">
              Add to Cart
            </p>
          </Link>
        </div>
      </div>

      <div className="w-[250px] h-[507px]">
        <div className="w-[250px] h-[334px] flex shadow-xl items-center justify-center">
          <img src={folicAcid} className="w-50 h-60" alt="folic acid" />
        </div>

        <div className="w-[193px] h-[157px] mt-4">
          <div className="w-full h-[107px]">
            <div className="w-full h-[77px] pb-2">
              <p className="font-normal text-base text-gray-500">Vitabiotic</p>
              <div className="font-medium text-base ">
                <p>Feroglobin Capsule</p>
                <p>Tabs X 14 </p>
              </div>
            </div>
            <p className="font-bold text-lg text-[#346296] flex items-center">
              <FaNairaSign className="w-4 h-4" />
              6,450
            </p>
          </div>

          <Link to="/AddCart">
            <p className="h-[42px] w-[140px] bg-[#346296] rounded-md mt-2 font-bold text-base flex items-center justify-center text-white">
              Add to Cart
            </p>
          </Link>
        </div>
      </div>

      <div className="w-[250px] h-[507px]">
        <div className="w-[250px] h-[334px] flex shadow-xl items-center justify-center">
          <img src={fishOil} className="w-[241px] h-[241px]" alt="fish oil" />
        </div>

        <div className="w-[193px] h-[157px] mt-4">
          <div className="w-full h-[107px]">
            <div className="w-full h-[77px] pb-2">
              <p className="font-normal text-base text-gray-500">
                Nature's Field
              </p>
              <div className="font-medium text-base">
                <p>Nature's Field VitaminC</p>
                <p>100mg</p>
              </div>
            </div>
            <p className="font-bold text-lg text-[#346296] flex items-center">
              <FaNairaSign className="w-4 h-4" />
              10,450
            </p>
          </div>

          <Link to="/AddCart">
            <p className="h-[42px] w-[140px] bg-[#346296] rounded-md mt-2 font-bold text-base flex items-center justify-center text-white">
              Add to Cart
            </p>
          </Link>
        </div>
      </div>

      <div className="w-[250px] h-[507px]">
        <div className="w-[250px] h-[334px] flex shadow-xl items-center justify-center">
          <img src={primrose} className="w-[250px] h-[241px]" alt="primrose" />
        </div>

        <div className="w-[193px] h-[157px] mt-4">
          <div className="w-full h-[107px]">
            <div className="w-full h-[77px] pb-2">
              <p className="font-normal text-base text-gray-500">primrose</p>
              <div className="font-medium text-base">
                <p>Emzoe Evening Primerose </p>
                <p>Oil 100ml</p>
              </div>
            </div>
            <p className="font-bold text-lg text-[#346296] flex items-center">
              <FaNairaSign className="w-4 h-4" />
              7,450
            </p>
          </div>

          <Link to="/AddCart">
            <p className="h-[42px] w-[140px] bg-[#346296] rounded-md mt-2 font-bold text-base flex items-center justify-center text-white">
              Add to Cart
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Column2;
