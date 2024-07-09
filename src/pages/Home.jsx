import React from "react";
import Nav from "../components/Nav";
import pharmacy from "../assets/pharmacy.png";
import { Link } from "react-router-dom";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";
import astymin from "../assets/astymin.png";
import supplement from "../assets/supplement.png";
import reproductive from "../assets/reproductivehealth.png";
import painrelief from "../assets/painrelief.png";
import antibacteria from "../assets/antibacteria.png";
import antimalaria from "../assets/antimalaria.png";
import emzor from "../assets/emzor.png";
import vitabiotic from "../assets/vitabiotic.png";
import vitaminC from "../assets/naturefield.png";
import kwik from "../assets/kwik.png";
import fez from "../assets/fez.png";
import glovo from "../assets//glovo.png";
import bank from "../assets/standardbank.png";
import stack from "../assets/sendstack.png";
import gokada from "../assets/gokada.png";
import {
  FaAngleLeft,
  FaArrowRight,
  FaRegUser,
  FaNairaSign,
} from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-full w-full bg-white">
      <header className="flex h-24 w-full bg-[#346296] items-center justify-around">
        <div className="flex font-bold text-2xl">
          <h2 className="text-white">Health</h2>
          <h2 className="text-green-100">Xcale</h2>
        </div>

        <p className="text-xl font-normal text-white font-secondary">
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
              <p className=" text-sm font-normal flex items-center justify-center"> 0 </p>  
            </div>
          </div>
          </div>

          <div className="bg-[#5EBA24] rounded-md h-10 w-36 flex justify-center items-center ">
            <Link to="/store">
              <p className="flex justify-center items-center text-white text-base">
                Shop Meds
              </p>
            </Link>
          </div>
        </div>
      </header>
      <Nav />

      <section className="flex p-16">
        <div className="w-[644px] h-96 flex-[60%]">
          <div className="w-full h-60 pb-8">
            <div className="w-full h-44 font-secondary mb-4">
              <div className="pb-5">
                <h2 className="text-4xl font-bold">
                  Waste no time on the queue,
                </h2>
                <h2 className="text-4xl font-bold leading-10">
                  we will bring the pharmacy to you.
                </h2>
              </div>

              <div className="">
                <p className="text-xl font-medium">
                  Shop for prescription medications, vitamins,
                </p>
                <p className="text-xl font-medium">
                  and over-the-counter supplies, all in one place.
                </p>
              </div>
            </div>
            <Link to="/store">
              <p className="bg-[#5EBA24] text-white w-52 h-12 flex justify-center items-center rounded-lg font-bold text-base">
                Start shopping now
              </p>
            </Link>
          </div>

          <div className="w-52 h-20 text-base font-normal mt-6">
            <p>24,000+ </p>
            <p>customers satisfied</p>

            <div className="flex mt-1">
              <img
                src={customer1}
                className="h-7 w-7 rounded-full"
                alt="customer"
              />
              <img
                src={customer2}
                className="h-7 w-7 rounded-full"
                alt="customer2"
              />
              <img
                src={customer3}
                className="h-7 w-7 rounded-full"
                alt="customer3"
              />
              <img
                src={customer4}
                className="h-7 w-7 rounded-full"
                alt="customer4"
              />
            </div>
          </div>
        </div>

        <div className="flex-[40%]">
          <img src={pharmacy} className="h-[345px] w-[509px]" alt="pharmacy" />
        </div>
      </section>

      <section className="bg-[#A7D4EF] h-20 w-full flex items-center justify-around ">
        <div className="h-11 flex gap-8">
          <p className="font-bold text-2xl text-[#346296]">Good Price</p>

          <div className="flex font-bold text-2xl">
            <h2 className="text-white">Health</h2>
            <h2 className="text-green-200">Xcale</h2>
          </div>

          <p className="font-bold text-2xl text-[#346296]">Super fast</p>

          <div className="flex font-bold text-2xl">
            <h2 className="text-white">Health</h2>
            <h2 className="text-green-200">Xcale</h2>
          </div>

          <p className="font-bold text-2xl text-[#346296]">Easy shopping</p>
        </div>
      </section>

      {/* Top category section */}
      <section className="mt-4">
        <p className="font-bold text-2xl font-secondary flex items-center justify-center">
          Top Categories
        </p>

        {/* The first div  */}
        <div className="h-96 w-full flex items-center justify-center gap-12 mt-4">
          <div className="h-96 w-[350px]">
            <div className="shadow-lg h-[334px] w-[350px] flex items-center justify-center ">
              <img
                src={astymin}
                className="w-[259px] h-[310px] "
                alt="multivitamin"
              />
            </div>
            <div className="flex items-center justify-center mt-2 gap-4">
              <p className="text-[#346296] font-medium text-base">
                Multivitamin Syrup
              </p>
              <Link to="#">
                <FaArrowRight className="h-4 w-4 mt-1 text-[#346296]" />
              </Link>
            </div>
          </div>

          <div className="h-96 w-[350px]">
            <div className="shadow-lg h-[334px] w-[350px] flex items-center justify-center ">
              <img
                src={supplement}
                className="w-[200px] h-[310px] "
                alt="multivitamin"
              />
            </div>
            <div className="flex items-center justify-center mt-2 gap-4">
              <p className="text-[#346296] font-medium text-base">
                Vitamins & Supplements
              </p>
              <Link to="#">
                <FaArrowRight className="h-4 w-4 mt-1 text-[#346296]" />
              </Link>
            </div>
          </div>

          <div className="h-96 w-[350px]">
            <div className="shadow-lg h-[334px] w-[350px] flex items-center justify-center">
              <img
                src={reproductive}
                className="w-[300px] h-[310px]"
                alt="reproduction"
              />
            </div>
            <div className="flex items-center justify-center mt-2 gap-4">
              <p className="text-[#346296] font-medium text-base">
                Reproductive Health
              </p>
              <Link to="#">
                <FaArrowRight className="h-4 w-4 mt-1 text-[#346296]" />
              </Link>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="h-96 w-full flex items-center justify-center gap-12 mt-4">
          <div className="h-96 w-[350px]">
            <div className="shadow-lg h-[334px] w-[350px] flex items-center justify-center ">
              <img
                src={painrelief}
                className="w-[259px] h-[310px] "
                alt="pain relief balm"
              />
            </div>
            <div className="flex items-center justify-center mt-2 gap-4">
              <p className="text-[#346296] font-medium text-base">
                Pain Relief
              </p>
              <Link to="#">
                <FaArrowRight className="h-4 w-4 mt-1 text-[#346296]" />
              </Link>
            </div>
          </div>

          <div className="h-96 w-[350px]">
            <div className="shadow-lg h-[334px] w-[350px] flex items-center justify-center ">
              <img
                src={antibacteria}
                className="w-[300px] h-[310px] "
                alt="antibacteria cream"
              />
            </div>
            <div className="flex items-center justify-center mt-2 gap-4">
              <p className="text-[#346296] font-medium text-base">
                Antibacterial
              </p>
              <Link to="#">
                <FaArrowRight className="h-4 w-4 mt-1 text-[#346296]" />
              </Link>
            </div>
          </div>

          <div className="h-96 w-[350px]">
            <div className="shadow-lg h-[334px] w-[350px] flex items-center justify-center">
              <img
                src={antimalaria}
                className="w-[330px] h-[310px]"
                alt="anti-malaria drug"
              />
            </div>
            <div className="flex items-center justify-center mt-2 gap-4">
              <p className="text-[#346296] font-medium text-base">
                Anti-Malaria
              </p>
              <Link to="/AddCart">
                <p className="h-[42px] w-[140px] bg-[#346296] rounded-md mt-2 font-bold text-base flex items-center justify-center text-white">
                  Add to Cart
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More for you section */}
      <section className="mt-4 h-[575px] w-full">
        <p className="font-bold text-2xl font-secondary flex items-center justify-center">
          More For You
        </p>

        {/*drugs div */}
        <div className="h-[507px] w-full flex gap-6 mt-4">
          <div className="w-[884px] h-[507px] ">
            <div className="w-[850px] h-[507px] flex items-center justify-center gap-8">
              <FaAngleLeft className="bg-[#D5D5D580] h-[30px] w-[30px] rounded-full" />

              <div className="w-60 h-[507px]">
                <div className="w-60 h-[334px] flex shadow-xl items-center justify-center">
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

              <div className="w-60 h-[507px]">
                <div className="w-60 h-[334px] flex shadow-xl items-center justify-center">
                  <img
                    src={vitabiotic}
                    className="w-[178px] h-[241px]"
                    alt="vitabolic"
                  />
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

              <div className="w-60 h-[507px]">
                <div className="w-60 h-[334px] flex shadow-xl items-center justify-center">
                  <img src={vitaminC} className="w-52 h-64" alt="vitamin c" />
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
          <div className="h-[280px] w-[320px] ">
            <div className="font-secondary font-normal text-base">
              <p>Get started with these selections from</p>
              <p> pharmacists. Click on the left or right</p>
              <p> direction to view more options. </p>
            </div>

            <Link to="/store">
              <p className="h-[44px] w-[206px] bg-[#5EBA24] rounded-lg text-white flex items-center justify-center mt-2.5">
                View all products
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Partners section */}
      <section className="w-full h-[108px] mt-8">
        <p className="text-2xl font-bold flex items-center justify-center  font-secondary">
          Our partners
        </p>
        <div className="flex items-center justify-center h-10 w-full mt-4 gap-20">
          <img src={kwik} className="h-10 w-[143px]" alt="kwik" />

          <img src={fez} className="h-10 w-[104px]" alt="fez" />

          <img src={glovo} className="h-10 w-[107px]" alt="glovo" />

          <img src={bank} className="h-10 w-[72px]" alt="standard bank" />

          <img src={stack} className="h-10 w-[155px]" alt="send stack" />

          <img src={gokada} className="h-10 w-[167px]" alt="gokada" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
