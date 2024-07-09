import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import emzor from "../assets/emzor.png";
import { FaArrowLeft, FaArrowRight, FaNairaSign } from "react-icons/fa6";
import vitabitioc from "../assets/vitabiotic.png";
import naturefield from "../assets//naturefield.png";
import omega3 from "../assets/omega3.png";
import primrose from "../assets//primrose.png";
import cardioace from "../assets/cardioace.png";
import augumentin from "../assets/augmentin.png";
import Column2 from "../components/Column2";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div>
      <Header />
      <Nav />
      <section className="flex flex-col items-center justify-center">
        <div className="w-full h-[567px] mt-8">
          <p className="font-bold text-2xl font-secondary flex items-center justify-center mb-4">
            Available products
          </p>

          {/* column 1 */}
          <div className="w-full h-[507px] flex items-center justify-center gap-6">
            <div className="w-[250px] h-[507px]">
              <div className="w-[250px] h-[334px] flex shadow-xl items-center justify-center">
                <img src={emzor} className="w-48 h-60" alt="parcetamol" />
              </div>

              <div className="w-[193px] h-[157px] mt-4">
                <div className="w-full h-[107px]">
                  <div className="w-full h-[77px] pb-2">
                    <p className="font-normal text-base text-gray-500">
                      Paracetamol
                    </p>
                    <div className="font-medium text-base ">
                      <p>Emzor Paracetamol, 500g </p>
                      <p>Tabs blister X 12</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-[#346296] flex items-center">
                    <FaNairaSign className="w-4 h-4" />
                    2050
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
                <img src={vitabitioc} className="w-48 h-60" alt="vitabotic" />
              </div>

              <div className="w-[193px] h-[157px] mt-4">
                <div className="w-full h-[107px]">
                  <div className="w-full h-[77px] pb-2">
                    <p className="font-normal text-base text-gray-500">
                      Vitabolic
                    </p>
                    <div className="font-medium text-base ">
                      <p>Feroglobin Capsule </p>
                      <p>Tabs X 14</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg text-[#346296] flex items-center">
                    <FaNairaSign className="w-4 h-4" />
                    8,120
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
                <img src={omega3} className="w-48 h-60" alt="omega 3" />
              </div>

              <div className="w-[193px] h-[157px] mt-4">
                <div className="w-full h-[107px]">
                  <div className="w-full h-[77px] pb-2">
                    <p className="font-normal text-base text-gray-500">
                      Biosea
                    </p>
                    <div className="font-medium text-base ">
                      <p>Cod Liver Oil</p>
                      <p>120ml </p>
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
                <img
                  src={naturefield}
                  className="w-48 h-60"
                  alt="nature field"
                />
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
          </div>
        </div>

        {/* column 2 */}

        <Column2 />

        {/* column 3 */}
        <div className="w-full h-[507px] flex items-center justify-center gap-6 mt-12">
          <div className="w-[250px] h-[507px]">
            <div className="w-[250px] h-[334px] flex shadow-xl items-center justify-center">
              <img src={emzor} className="w-48 h-60" alt="parcetamol" />
            </div>

            <div className="w-[193px] h-[157px] mt-4">
              <div className="w-full h-[107px]">
                <div className="w-full h-[77px] pb-2">
                  <p className="font-normal text-base text-gray-500">
                    Paracetamol
                  </p>
                  <div className="font-medium text-base ">
                    <p>Emzor Paracetamol, 500g </p>
                    <p>Tabs blister X 12</p>
                  </div>
                </div>
                <p className="font-bold text-lg text-[#346296] flex items-center">
                  <FaNairaSign className="w-4 h-4" />
                  2050
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
              <img src={augumentin} className="w-50 h-60" alt="augmentin" />
            </div>

            <div className="w-[193px] h-[157px] mt-4">
              <div className="w-full h-[107px]">
                <div className="w-full h-[77px] pb-2">
                  <p className="font-normal text-base text-gray-500">
                    Antibiotic
                  </p>
                  <div className="font-medium text-base ">
                    <p>Augmentin Capsule</p>
                    <p>Tabs X 14</p>
                  </div>
                </div>
                <p className="font-bold text-lg text-[#346296] flex items-center">
                  <FaNairaSign className="w-4 h-4" />
                  8,120
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
              <img src={cardioace} className="w-48 h-60" alt="cardioace" />
            </div>

            <div className="w-[193px] h-[157px] mt-4">
              <div className="w-full h-[107px]">
                <div className="w-full h-[77px] pb-2">
                  <p className="font-normal text-base text-gray-500">
                    Vitabiotic
                  </p>
                  <div className="font-medium text-base ">
                    <p>Cardioace Plus Capsule</p>
                    <p>X 60</p>
                  </div>
                </div>
                <p className="font-bold text-lg text-[#346296] flex items-center">
                  <FaNairaSign className="w-4 h-4" />
                  38,450
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
              <img
                src={primrose}
                className="w-[250px] h-[241px]"
                alt="primrose"
              />
            </div>

            <div className="w-[193px] h-[157px] mt-4">
              <div className="w-full h-[107px]">
                <div className="w-full h-[77px] pb-2">
                  <p className="font-normal text-base text-gray-500">
                    primrose
                  </p>
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

        {/* next and prev */}
        <div className="h-[40px] w-[531px] border rounded-md mt-16 mb-24 text-[#454C52] flex">
          <div className="font-semibold text-sm font-secondary flex gap-2 items-center justify-center h-full w-[119px] hover:bg-[#346296] hover:text-white ">
            <FaArrowLeft />
            <p>Previous</p>
          </div>
          <div className="h-[40px] w-[320px] flex items-center font-secondary text-sm font-normal">
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              1
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              2
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              3
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              4
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              5
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              6
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              ...
            </p>
            <p className="h-[40px] w-[40px] flex items-center justify-center border hover:bg-[#346296] hover:text-white ">
              9
            </p>
          </div>

          <div className="font-semibold text-sm font-secondary flex gap-2 items-center justify-center h-full w-[119px] hover:bg-[#346296] hover:text-white ">
            <p>Next</p>
            <FaArrowRight />
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
};

export default Store;
