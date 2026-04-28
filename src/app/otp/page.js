import React from "react";
export default function otp() {
    return (


        <>
            <div className="flex justify-center items-center h-screen w-full">

                {/* LEFT SECTION */}
                <div className="hidden md:flex justify-center items-center h-screen w-1/2 bg-[#F77F00]">

                    <div className="flex flex-col justify-center items-start p-16 gap-3 h-72 w-full">
                        <h1 className="font-bold text-2xl text-white font-sans mb-2"> Earnat.</h1>

                        <h2 className="font-bold text-4xl font-sans text-white">
                            Verify Your Account
                        </h2>
                        <p className="text-sm sm:text-base text-center text-white">
                            Enter the OTP sent to your email or mobile number
                            to continue your journey with Earnat.

                        </p>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex justify-center items-center h-screen w-full md:w-1/2 bg-white">

                    <div className="flex flex-col justify-center items-center h-screen w-[90%] sm:w-[80%] md:w-2/3 gap-6">

                        <div className="flex flex-col justify-center items-start gap-2 h-14 w-full mb-5">
                            <h1 className="font-bold text-2xl"> OTP Verification</h1>
                            <p className="text-sm text-gray-500"> Enter OTP received on 8XXXXXXX16</p>
                        </div>

                        <form className="w-full flex flex-col justify-center gap-4">

                            <div className=" w-full flex justify-center gap-4 ">

                                <input
                                    type="text"
                                    maxLength="1"
                                    className=" w-12 h-12 text-center border border-[#F77F00] outline-none rounded-sm"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className=" w-12 h-12 text-center border border-[#F77F00] outline-none rounded-sm"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className=" w-12 h-12 text-center border border-[#F77F00] outline-none rounded-sm"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className=" w-12 h-12 text-center border border-[#F77F00] outline-none rounded-sm"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className=" w-12 h-12 text-center border border-[#F77F00] outline-none rounded-sm"
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className=" w-12 h-12 text-center border border-[#F77F00] outline-none rounded-sm"
                                />

                            </div>

                            <div className="flex flex-col w-full justify-center items-center mt-6">
                                <span className="text-sm text-gray-500">
                                    Haven’t received the OTP?  <b className="text-[#6b7280]">Resend in 43 Sec</b>
                                </span>
                            </div>
                            <div className="flex flex-col gap-3.5">
                                <button
                                    type="submit"
                                    className="w-full p-3 bg-[#F77F00] rounded-2xl text-white font-sans font-bold text-lg"
                                >
                                    Verify OTP
                                </button>
                            </div>
                        </form>



                    </div>
                </div>

            </div>
        </>
    )
}