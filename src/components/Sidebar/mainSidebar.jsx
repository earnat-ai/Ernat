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
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 p-5 flex bg-white z-50 transform transition-transform duration-300 overflow-y-auto
  ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* <button
          onClick={() => setOpen(false)}
          className="p-4"
        >
          ×
        </button> */}
        <div className=" h-full bg-gray-400 border"></div>
        <ul className="p-4 space-y-4">
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/categories.svg"
            alt="categories"
            width={15}
            height={15} />
            CATEGORIES</div>
          <li>Highest Cashback Stores</li>
          <li>Retailers By Category</li>
          <li>Top Product Details</li>
          <li>Mobiles</li>
          <li>Headphones</li>
          <li>Laptops</li>
          <li>Men,Women Fashion</li>
          <li>Men,Women Shoes</li>
          <li>Beauty</li>
          <li>Grocery</li>
          <li>See All Category</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/help.svg"
            alt="help"
            width={15}
            height={15} />
            HELP PAGE</div>
          <li>My Cashback is Missing</li>
          <li>Track Your Cashback</li>
          <li>FAQ</li>
          <li>Want to Connect With Us</li>
          <li>Give us Feedback</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/notification.svg"
            alt="notification"
            width={15}
            height={15} />
            NOTIFICATIONS</div>
          <li>All </li>
          <li>Offers</li>
          <li>Information</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/mostpopular.svg"
            alt="mospopular"
            width={15}
            height={15} />
            MOST POPULAR</div>
          <li>Amazon</li>
          <li>Flipkart</li>
          <li>Myntra</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/credit-card.svg"
            alt="credit-card"
            width={15}
            height={15} />
            CREDIT CARDS</div>
          <li>SBI Card</li>
          <li>Axis Bank</li>
          <li>Federal Bank</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/mobiles.svg"
            alt="mobiles"
            width={15}
            height={15} />
            MOBILES</div>
          <li>Amazon</li>
          <li>Flipkart</li>
          <li>Reliance Digital</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/categories.svg"
            alt="categories"
            width={15}
            height={15} />
            POP BUTTON</div>
          <li>Mystery Gift Box</li>
          <li>Flash Deal</li>
          <div className="p-2 bg-red-600 flex flex-row items-center justify-start gap-2" style={{ color: "gray" }}> <Image
            src="/images/sidebar/categories.svg"
            alt="categories"
            width={15}
            height={15} />
            PERSONAL CARDS</div>
          <li>Online Shopping</li>
          <li>Paying Bills</li>
          <li>Groceries</li>
          <li>Ordering Food</li>
          <li>Filling Up Fuel</li>
          <li>Dining Out</li>
          <li>Flights or Hotels</li>
        </ul>
      </div>
    </>

  );
}