import Image from "next/image";
import React from "react";

export default function Login() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full bg-amber-100">

            <div className="hidden md:flex flex-col justify-center items-center min-h-screen w-[50%] bg-[#F77F00] text-white ">
                {/* TOP LOGO */}
                <div className="flex justify-start items-center w-28 h-20 mr-100">
                    <h1 className="text-2xl font-bold">
                        Earnat.
                    </h1>
                </div>


                <div className="flex flex-col items-start justify-center text-center h-[100px] w-[80%] gap-2">


                    <h2 className="text-3xl sm:text-4xl font-sans font-bold gap-2">
                        Shop Smart, Live Better
                    </h2>

                    <p className="text-sm sm:text-base text-white ">
                        Discover amazing products at the best prices.
                        Login now and start your shopping journey with Earnat.
                    </p>


                </div>
            </div>


            <div className="flex items-center justify-center min-h-screen w-full md:w-[50%] bg-white">
                <div className="w-full max-w-md">

                    {/* Heading */}
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        Join Earnat
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Account Login
                    </p>
                    <form>
                        <div className="flex gap-2 mb-5 ">

                            <input
                                type="text"
                                placeholder="Enter Email or Mobile Number"
                                className="flex-1 input px-2 p-3 border border-[#F77F00] outline-none rounded-sm"
                            />

                            <button
                                type="submit"
                                className="px-4 font-bold font-sans bg-[#F77F00] text-white rounded-xl hover:bg-orange-400"
                            >
                                Send OTP
                            </button>
                        </div>
                    </form>


                    <div className="flex items-center gap-3 mb-5">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-sm text-gray-500">or continue with</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>


                    <div className="flex justify-center mb-6">
                        <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
                            <img src="/icons/Group-233.svg"
                                width={30} height={30} />
                        </div>
                    </div>

                    {/* Button */}
                    <button className="w-full h-[48px] bg-[#F77F00] text-white font-bold rounded-xl hover:bg-orange-400 transition">
                        Continue
                    </button>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        By continuing, you agree to <b className="text-black"> Terms</b> and <b className="text-black"> privacy policy.</b>
                    </p>

                    <p className="text-center text-sm   text-gray-500 mt-2">
                        Already have an account? <b className="text-black"> sign in</b>
                    </p>

                </div>
            </div>
        </div>
    );
}