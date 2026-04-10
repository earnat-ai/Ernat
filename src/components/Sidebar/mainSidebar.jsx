"use client";
import Image from "next/image";
import { useState } from "react";

export default function MainSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-black text-white m-4"
      >
        Open Menu
      </button>

      {/* Overlay Background */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 p-5  z-50 transform transition-transform duration-300 overflow-y-auto
  ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{ backgroundColor: "white", color: "gray" }}

      >
        {/* <button
          onClick={() => setOpen(false)}
          className="p-4"
        >
          ×
        </button> */}

        {/* CATEGORIES */}
        <div className="w-full h-10  flex flex-row items-center justify-start gap-2  font-bold">
          <Image
            src="/images/sidebar/categories.svg"
            alt="categories Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> CATEGORIES</div>

        <div className="w-full h-105  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-25"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-35"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-45"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-55"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-65"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-75"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-85"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-95"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-105"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-115"
              priority />

          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-21 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Highest Cashback Stores</li>
              <li className="absolute top-31  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Retailers By Category</li>
              <li className="absolute top-41  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Top Product Details</li>
              <li className="absolute top-51  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Mobiles</li>
              <li className="absolute top-61 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Headphones</li>
              <li className="absolute top-71  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Laptops</li>
              <li className="absolute top-81  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Men,Women Fashion</li>
              <li className="absolute top-91  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Men,Women Shoes</li>
              <li className="absolute top-101 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Beauty</li>
              <li className="absolute top-111  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Grocery</li>
              <li className="absolute top-121  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >See All Category</li>

            </ul>
          </div>
        </div>

        {/* HELP PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/help.svg"
            alt="help Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> HELP PAGE</div>

        <div className="w-full h-45  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-140"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-150"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-160"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-170"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-180"
              priority />


          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-146 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">My Cashback is Missing</li>
              <li className="absolute top-156  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Track Your Cashback</li>
              <li className="absolute top-166  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >FAQ</li>
              <li className="absolute top-176  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Want to Connect With Us</li>
              <li className="absolute top-186 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Give us Feedback</li>


            </ul>
          </div>
        </div>


        {/* NOTIFICATIONS PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/notification.svg"
            alt="notification Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> NOTIFICATIONS</div>

        <div className="w-full h-26  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-205"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-215"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-225"
              priority />
          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-211 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">All</li>
              <li className="absolute top-221  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Offers</li>
              <li className="absolute top-231  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Information</li>

            </ul>
          </div>
        </div>


        {/* MOST POPULAR PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/notification.svg"
            alt="notification Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> MOST POLULAP</div>

        <div className="w-full h-26  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-251"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-261"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-271"
              priority />
          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-257 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Amazon</li>
              <li className="absolute top-267  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Flipkart</li>
              <li className="absolute top-277  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Myntra</li>

            </ul>
          </div>
        </div>

        {/* CREDIT CARDS PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/notification.svg"
            alt="notification Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> CREDIT CARDS</div>

        <div className="w-full h-26  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-297"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-307"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-317"
              priority />
          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-303 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">SBI Card</li>
              <li className="absolute top-313  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Axis Bank</li>
              <li className="absolute top-323  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Federal Bank</li>

            </ul>
          </div>
        </div>

        {/* MOBILES PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/notification.svg"
            alt="notification Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> MOBILES</div>

        <div className="w-full h-26  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-343"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-353"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-363"
              priority />
          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-349 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Amazon</li>
              <li className="absolute top-359  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Flipkart</li>
              <li className="absolute top-369  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Reliance Digital</li>

            </ul>
          </div>
        </div>


        {/* POP BUTTON PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/notification.svg"
            alt="notification Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> POP BUTTON</div>

        <div className="w-full h-17  flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-389"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-399"
              priority />
          
          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-395 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Mystery Gift Box</li>
              <li className="absolute top-405  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Flash Deal</li>
             
            </ul>
          </div>
        </div>


        {/* PERSONAL CARDS PAGE */}

        <div className="w-full h-10  flex flex-row items-center justify-start mt-10 gap-2 font-bold">
          <Image
            src="/images/sidebar/notification.svg"
            alt="notification Logo"
            width={10}
            height={10}
            className="w-4 h-4"
            priority
          /> PERSONAL CARDS</div>

        <div className="w-full h-65 mb-15 flex flex-row items-start justify-center ">
          <div className="w-10 h-full  border-l-3 border-[#9E9E9E] flex flex-col gap-2 ">
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-426"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-436"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-446"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-456"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-466"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-476"
              priority />
            <Image
              src="/images/sidebar/sideprop.svg"
              alt="sideprop Logo"
              width={10}
              height={10}
              className="w-10 h-10 absolute left-6 top-486"
              priority />
          
          </div>
          <div className="w-38 h-full ">
            <ul className="style-none font-normal text-[14px]">
              <li className="absolute top-432 hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer">Online Shopping</li>
              <li className="absolute top-442  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Paying Bills</li>
              <li className="absolute top-452  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Groceries</li>
              <li className="absolute top-462  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Ordering Food</li>
              <li className="absolute top-472  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Filling Up Fuel</li>
              <li className="absolute top-482  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Dining Out</li>
              <li className="absolute top-492  hover:bg-[#FFEDDA] hover:text-[#F77F00] text-black p-1 rounded-2xl cursor-pointer" >Flights or Hotels</li>
             
            </ul>
          </div>
        </div>








      </div>


    </>

  );
}
