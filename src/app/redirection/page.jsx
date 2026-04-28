import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">

            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* LEFT (IMAGE + BELOW CARD) */}
                <div className="flex-1">

                    {/* IMAGE */}
                    <div className="bg-white rounded-lg h-[380px] relative">
                        <Image
                            src="/images/redirection/Redirection.png"
                            alt="redirection image"
                            fill
                            className="object-cover rounded-[20px]"
                            priority
                            quality={100}
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
                    <div className="w-full h-[60px] md:h-[81px] bg-[#FF7514] mt-12 rounded-xl text-white flex items-center justify-center text-lg md:text-xl">
                        Continue to Store
                    </div>

                </div>


            </div>
            {/* Why Shop Through Ernat */}
            <div className="border border-[#EEEEEE] rounded-lg   gap-4 bg-white  mt-5 flex flex-col ">
                <h1 className="font-bold text-xl p-9"> Why Shop Through Ernat ?  </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* DIV1 */}
                    <div className=" w-[240px] h-[200px] bg-gray-50 shadow rounded ml-10 p-10 flex text-center justify-center  flex-col">

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
                    <div className=" w-[270px] h-[200px] bg-gray-50 shadow rounded  p-10 flex text-center justify-center  flex-col">
                        {/* CASHBACK ICON */}
                        <Image
                            src="/images/redirection/cashback.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* CASHBACK TEXT */}
                        <div className="mt-[15px]">
                            Real Cashback,
                            No Hidden Charges                     </div>
                    </div>

                    {/* DIV3 */}

                    <div className=" w-[270px] h-[200px] bg-gray-50 shadow rounded  p-10 flex text-center justify-center  flex-col">
                        {/* CASHBACK ICON */}
                        <Image
                            src="/images/redirection/tracking.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* CASHBACK TEXT */}
                        <div className="mt-[15px]">
                            Fast Tracking
                            within Minutes                      </div>
                    </div>


                    {/* DIV4 */}

                    <div className=" w-[270px] h-[200px] bg-gray-50 shadow rounded  p-10 flex text-center justify-center  flex-col">
                        {/* CASHBACK ICON */}
                        <Image
                            src="/images/redirection/man.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className=" w-[40px] h-[40px] ml-[80px]"
                        />

                        {/* CASHBACK TEXT */}
                        <div className="mt-[15px]">
                            Trusted by
                            10,000 users                      </div>
                    </div>

                </div>

                {/* IMP TIPS + RATING WRAPPER */}
                <div className="flex flex-col md:flex-row gap-6 p-5 md:p-8 mt-10 border border-[#EEEEEE] rounded-lg">

                    {/* LEFT - TIPS */}
                    <div className="flex-1 bg-white p-5 rounded-lg">

                        <h1 className="font-bold text-xl mb-4">
                            Important Tips Before You Shop
                        </h1>

                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <span className="text-green-500">✔</span>
                                <p>Don’t open other coupon apps</p>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-green-500">✔</span>
                                <p>Cashback will track within 24 hours</p>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-green-500">✔</span>
                                <p>Complete purchase in same tab</p>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-green-500">✔</span>
                                <p>Always click ‘Continue to Shop’ before Shopping</p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT - RATING */}
                    <div className="w-full md:w-[400px] bg-[#F7F7F7] rounded-2xl p-5 border border-gray-300">

                        <div className="flex items-center gap-3">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                            <Image
  src="/images/redirection/ratinguser.jpg"
  alt="user"
  width={50}
  height={50}
/>
                            </div>

                            <div className="text-yellow-500 text-lg md:text-2xl">
                                ★★★★★
                            </div>
                        </div>

                        <p className="text-black text-base md:text-lg mt-4 leading-relaxed">
                            I received ₹1200 cashback from Myntra just by shopping through Ernat!
                        </p>

                        <p className="text-black text-base md:text-lg mt-3">
                            — Priya S.
                        </p>

                    </div>

                </div>
            </div>

        </div>

    );
}