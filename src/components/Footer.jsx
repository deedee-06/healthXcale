import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[380px] bg-[#346296] flex flex-col justify-center items-center mt-8">
    <div className="h-[117px] w-[1150px] flex justify-between mt-8">
      <div className="h-[96px] w-[182px]">
        
        <div className="flex font-bold text-2xl mb-4">
          <h2 className="text-white">Health</h2>
          <h2 className="text-green-100">Xcale</h2>
        </div>

        <div className="font-normal text-base text-white">
          <p>Keeping you healthy one</p>
          <p>supply at a time.</p>
        </div>
      </div>

      <div className="h-[117px] w-[826px] text-white flex justify-between">
        <ul>
          <h3 className="mb-4 font-bold text-lg">Address</h3>
          <div className="text-base font-normal">
            <p>2, William Street,</p>
            <p>Yaba Lagos.</p>
          </div>
        </ul>

        <ul>
          <h3 className="font-bold text-lg mb-4">Quick links</h3>
          <div className="text-base font-normal">
            <li>About us</li>
            <li>Products</li>
            <li>FAQs</li>
          </div>
        </ul>

        <ul>
          <h3 className="font-bold text-lg mb-4">Contact us</h3>
          <div className="text-base font-normal">
            <li>Support@HealthXcale.ng</li>
            <li>+234 70 -123- 456</li>
            <li>+234 70 -123- 456</li>
          </div>
        </ul>
      </div>
    </div>

    <hr className="w-full bg-gray-500 mt-24" />

    <div className="mt-8 text-white font-normal text-base">
      <p>All right reserved @HealthXcale 2024</p>
    </div>
  </div>
  )
}

export default Footer;