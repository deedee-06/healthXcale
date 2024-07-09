import React from "react";
import Header2 from "../components/Header2";
import house from "../assets/house.png";
import truck from "../assets/truck.png";
import { FaNairaSign } from "react-icons/fa6";
import Footer from "../components/Footer";
import vitabiotic from "../assets/vitabiotic.png";

const Delivery = () => {
  return (
    <div>
      <Header2 />

      <div className="flex  ">
        {/* Delivery form */}
        <section className="w-[50%] bg-white pl-12 mt-6 pr-4">
          <p className="text-base font-medium font-secondary mb-4">
            Select your delivery option
          </p>

          <div className="flex w-full h-[35px] items-center gap-48 bg-[#D8EEFC] rounded-md">
            <div className="flex items-center justify-center  gap-4 w-[168px] h-[32px]">
              <input type="radio" id="doorstep" value="doorstep" />
              <div className="flex gap-2 font-normal text-base">
                <img src={truck} className="h-[20px] w-[20px]" alt="truck" />
                Ship to you
              </div>
            </div>

            <div className="flex items-center justify-center  gap-4 w-[168px] h-[32px]">
              <input type="radio" id="pickup" value="pickup" />
              <div className="flex gap-2 font-normal text-base">
                <img src={house} className="h-[20px] w-[20px]" alt="house" />
                Pickup yourself
              </div>
            </div>
          </div>

          {/* form */}
          <form className="w-full h-[300px] mt-6 mb-4 font-normal text-base font-secondary">
            <div className="w-full h-[35px] flex items-center gap-6 mb-4">
              <input
                type="text"
                className="w-[309px] h-[35px] border rounded-md p-2"
                value="First Name"
                required
              />
              <input
                type="text"
                className="w-[309px] h-[35px] border rounded-md p-2"
                value="Last Name"
                required
              />
            </div>

            <input
              type="email"
              className="w-full h-[35px] border rounded-md p-2 mb-4"
              value="Email"
              required
            />

            <input
              type="text"
              className="w-full h-[35px] border rounded-md p-2 mb-4"
              value="Address"
              required
            />

            <div className="w-full h-[40px] flex items-center gap-6 mb-4">
              <input
                type="text"
                className="w-[309px] h-[40px] border rounded-md p-2"
                value="City (e.g Lekki)"
                required
              />

              <select
                name="address"
                className="w-[309px] h-[40px] border rounded-md p-2"
                id="address"
              >
                <option
                  value="Lagos"
                  className="text-sm font-medium text-[#346296]"
                >
                  Lagos
                </option>
                <option
                  value="Delta"
                  className="text-sm font-medium text-[#346296]"
                >
                  Delta
                </option>
                <option
                  value="Ogun"
                  className="text-sm font-medium text-[#346296]"
                >
                  Ogun
                </option>
                <option
                  value="Ibadan"
                  className="text-sm font-medium text-[#346296]"
                >
                  Ibadan
                </option>
              </select>
            </div>

            <input
              type="tel"
              className="w-full h-[35px] border rounded-md p-2 mb-4"
              value="Phone Number"
              required
            />

            <div className="w-full flex items-center gap-2 h-[35px]">
              <input type="checkbox" />
              Save this information for next time
            </div>
          </form>

          {/* Shipping method */}
          <div className="w-full h-[95px] mb-32">
            <p className="font-medium text-base font-secondary mb-4">
              Shipping method
            </p>

            <div className="flex items-center justify-center rounded-md gap-4 w-full h-[35px] bg-[#D8EEFC]">
              <input type="radio" id="shipping" />
              <div className="flex gap-32 font-normal text-base">
                <p className="font-normal text-base">
                  Standard shipping (delivered within 1 to 2 days)
                </p>
                <p className="flex items-center justify-center font-normal text-base gap-0.5">
                  <FaNairaSign className="h-3.5 w-3.5 flex items-center justify-center" /> 4,156
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checkout*/}
        <div className="bg-[#F9F9F9] w-[50%] flex justify-center items-center pl-12">
          <div className="w-[600px] h-full bg-[#F9F9F9]">
            <div className="w-[550px] h-[454px]">
              <div className="h-[93px] w-full flex items-center gap-4 mt-6 ">
                <div className="h-[84px] w-[101px] relative flex items-center bg-white justify-center">
                  <img
                    src={vitabiotic}
                    className="h-[60px] w-[45px]"
                    alt="vitabiotic"
                  />
                  <div className="rounded-full bg-[#A7D4EF] h-[20px] w-[20px] absolute -top-1 -right-2">
                    <p className=" text-sm font-normal flex items-center justify-center">
                      1
                    </p>
                  </div>
                </div>
                <div className="flex gap-20">
                  <p>Vitabiotics Feroglobin Capsule Tabs X 14</p>
                  <p className="flex items-center justify-center font-normal text-base gap-0.5">
                    <FaNairaSign className="h-3.5 w-3.5  items-center justify-cente" /> 8,120
                  </p>
                </div>
              </div>

              <div className="w-full h-[345px] mt-4">
                <div className="w-full h-[261px]">
                  <div className="flex w-full h-[40px] gap-10">
                    <input
                      type="text"
                      className="w-[455px] h-[40px] border rounded-md font-normal text-base bg-white p-2"
                      value="Discount code"
                      required
                    />

                    <button className="w-[131px] h-[40px] border bg-[#D5D5D580] text-[#9EA0A3] font-normal text-base flex items-center justify-center rounded-md">
                      Apply
                    </button>
                  </div>

                  <div className="h-[177px] w-full mt-6 ">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-normal text-base font-secondary">Subtotal</p>
                      <p className="flex items-center justify-center font-medium text-base gap-0.5">
                        <FaNairaSign className="h-3.5 w-3.5" /> 8,120
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <p className="font-normal text-base font-secondary">Shipping</p>
                      <p className="flex items-center justify-center font-medium text-base gap-0.5">
                        <FaNairaSign className="h-3.5 w-3.5" /> 4,156
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <p className="font-normal text-base font-secondary">VAT</p>
                      <p className="flex items-center justify-center font-medium text-base gap-0.5">
                        <FaNairaSign className="h-3.5 w-3.5" /> 801.72
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                      <p className="font-medium text-base font-secondary">Total</p>
                      <p className="flex items-center justify-center font-medium text-base gap-0.5">
                        <FaNairaSign className="h-3.5 w-3.5" /> 13,077.72
                      </p>
                    </div>
                </div>
                </div>


                <p className="h-[40px] w-full rounded-md flex items-center justify-center bg-[#346296] text-white font-medium text-base">
                  Proceed to pay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;
