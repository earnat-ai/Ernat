import React from "react";

export default function Otp() {
    return (
        <>
            <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA] px-4">

                {/* main container */}
                <div className="w-full max-w-[1240px] flex items-center justify-center">

                    {/* card */}
                    <div className="w-full max-w-[360px] bg-[#F77F00] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

                        {/* header */}
                        <div className="flex justify-center items-center h-[140px] md:h-[160px]">
                            <h1 className="text-[26px] md:text-[30px] font-bold text-white tracking-wide">
                                OTP Verify
                            </h1>
                        </div>

                        {/* form section */}
                        <div className="bg-white rounded-tr-[60px] p-6 flex flex-col gap-4">

                            {/* heading */}
                            <div className="gap-[5px]">
                                <h1 className="text-[18px] font-bold text-gray-800">
                                    OTP Verification
                                </h1>
                                <p className="text-[12px] text-gray-500">
                                    Enter OTP received on 8XXXXXXX16
                                </p>
                            </div>
                            {/* OTP input boxes */}
                            <div className="flex justify-between gap-2 mt-2">
                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        className="w-[40px] h-[45px] border border-gray-300 rounded-md text-center text-lg font-semibold outline-none focus:border-[#F77F00]"
                                    />
                                ))}
                            </div>
                            <p className="text-[12px] text-gray-500">
                                Already have an account?{" "}
                                <span className="text-black  text-[10px]">
                                    Resend in 43 Sec
                                </span>
                            </p>

                            {/* button */}
                            <button className="h-[44px] w-full bg-[#F77F00] text-white text-sm font-semibold rounded-md hover:bg-[#e96f00] transition mt-2">
                                Verify OTP
                            </button>

                            <div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}