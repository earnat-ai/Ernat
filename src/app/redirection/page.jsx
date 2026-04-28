import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">

            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row gap-4">

                {/* LEFT (IMAGE + BELOW CARD) */}
                <div className="flex-1">

                    {/* IMAGE */}
                    <div className="bg-white rounded-lg h-[380px]">
                        <Image
                            src="/images/redirection/Redirection.png"
                            alt="redirection image"
                            width={90}
                            height={90}
                            className="w-full h-full object-cover rounded-[20px]"
                            priority
                        />
                    </div>

                    {/* 🔥 IMAGE KE NEECHE WALI DIV */}
                    <div className="bg-white mt-4 p-4 rounded-lg border border-[#EEEEEE] ">
                        <h2 className="text-2xl  font-medium pt-2">Exclusive App Rewards</h2>
                        <p className="text-m text-gray-500">Save up to 70% across categories + Extra Cashback on every order.</p>
                        <span className="text-[#FF6900] text-lg inline-block font-bold mt-5">    See All Deals →
                        </span>
                    </div>

                </div>

                {/* RIGHT CARD */}
                <div className="flex-1 bg-white p-4 rounded-lg ">
                    <h1 className="text-4xl font-bold pl-6 pt-4">Myntra Store</h1>

                    <span className="text-[#6E6565] mt-4 block ml-6 text-l">
                        You are being redirected to our trusted partner store.
                    </span>

                    {/* CASHBACK CARD */}
                    <div className="border border-[#EEEEEE] rounded-2xl p-6 flex items-center gap-4 bg-white shadow-sm mt-10 ml-5">

                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100">
                            <Image
                                src="/images/redirection/Myntra.png"
                                alt="myntra logo"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 ml-4">
                                Get Up to 25% Cashback
                            </h2>
                            <p className="text-sm text-gray-500 ml-4">
                                Cashback will be tracked automatically
                            </p>
                        </div>

                    </div>

                    {/* REDIRECTION TEXT */}
                    <h3 className="ml-5 mt-14 text-[#7D7682]">Redirection...</h3>

                    {/* PROGRESS BAR */}
                    <div className="w-[550px] h-[10px] ml-5 mt-2 rounded-xl bg-[#FCFCFC] overflow-hidden">
                        <div className="h-full w-1/2 bg-[linear-gradient(to_right,#FF7A18,#FF3D77)] rounded-xl"></div>
                    </div>

                    {/* BUTTON */}
                    <div className="w-[557px] h-[81px] bg-[#FF7514] mt-12 ml-4 rounded-xl text-white flex items-center justify-center text-xl">
                        Continue to Store
                    </div>

                </div>


            </div>
            {/* Why Shop Through Ernat */}
            <div className="border border-[#EEEEEE] rounded-lg   gap-4 bg-white  mt-5 flex flex-col ">
                <h1 className="font-bold text-xl p-4"> Why Shop Through Ernat ?  </h1>

                <div className="gap-4 flex flex-row">

                    {/* DIV1 */}
                    <div className=" w-[270px] h-[200px] bg-red-500 ml-10 p-10 flex text-center justify-center  flex-col">

                        {/* LOCK ICON */}
                        <Image
                            src="/images/redirection/Lock.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* TEXT */}
                        <div className="mt-[15px]">
                            100% Safe & Secure
                            Tracking                        </div>

                    </div>


                    {/* DIV2 */}
                    <div className=" w-[270px] h-[200px] bg-red-500  p-10 flex text-center justify-center  flex-col">
                        {/* CASHBACK ICON */}
                        <Image
                            src="/images/redirection/Lock.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* CASHBACK TEXT */}
                        <div className="mt-[15px]">
                            100% Safe & Secure
                            Tracking                        </div>
                        </div>

                    {/* DIV3 */}

                    <div className=" w-[270px] h-[200px] bg-red-500  p-10 flex text-center justify-center  flex-col">
                        {/* CASHBACK ICON */}
                        <Image
                            src="/images/redirection/Lock.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* CASHBACK TEXT */}
                        <div className="mt-[15px]">
                            100% Safe & Secure
                            Tracking                        </div>
                        </div>


                    {/* DIV3 */}

                    <div className=" w-[270px] h-[200px] bg-red-500  p-10 flex text-center justify-center  flex-col">
                        {/* CASHBACK ICON */}
                        <Image
                            src="/images/redirection/Lock.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* CASHBACK TEXT */}
                        <div className="mt-[15px]">
                            100% Safe & Secure
                            Tracking                        </div>
                        </div>

                </div>
            </div>

        </div>
    );
}