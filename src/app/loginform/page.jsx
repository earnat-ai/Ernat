import Image from "next/image";
import React from "react";

export default function LoginForm() {
    return (
        <>

            <div className="flex items-center justify-center w-full h-full bg-[#F5F5F5]">

                {/* main-background-section-start */}
                <div className=" flex items-center justify-center w-full max-w-[1240px] h-[100vh]  bg-[#F5F5F5] relative">

                    <div className="flex justify-center items-center w-full max-w-[350px] h-[100vh] bg-[#F77F00] flex-wrap relative">

                        <div className="flex justify-center items-center w-full max-w-[350px] h-[25vh] bg-[#F77F00] px-4 flex-wrap  sm:px-1 relative ">
                            <h1 className="font-sans text-[25px] font-bold text-[#ffffff] font-sans"> Login </h1>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full max-w-[400px] h-[75vh] bg-[#ffffff] rounded-tr-[50px] flex-wrap relative gap-[8px]">
                            {/* Login-or-Signup-text-start */}
                            <div className="flex flex-col justify-center items-start mt-[30px] w-[280px] h-[10vh] ">
                                <h1 className="font-sans text-[20px] font-bold text-[#000000] font-sans"> Login or Signup </h1>
                                <p className="font-sans text-[12px] font-normal text-[#000000] font-sans"> We will send an OTP to verify </p>
                            </div>     {/* Login-or-Signup-text-start */}

                            {/* input-start */}
                            <div className="flex justify-center items-center w-[280px] h-[10vh] gap-[8px]">
                                <input
                                    type="text"
                                    placeholder="Enter Email or Mobile Number"
                                    className="w-[180px] h-[42px] border border-[#E1E1E1] bg-[#E1E1E1] rounded-[5px] px-3 outline-none placeholder:text-[13px]"
                                />

                                <button className="h-[42px] w-[100px] bg-[#F77F00] text-white text-[13px] font-bold rounded-md">
                                    Send OTP
                                </button>
                            </div> {/* input-ent */}

                            {/* hr-line */}
                            <div className="flex flex-col justify-center items-center w-[280px] h-[10vh] ">
                                <div className="flex items-center w-[280px] my-[20px]">

                                    <hr className="flex-1 border-[#D1D1D1] border-1" />

                                    <span className="px-2 text-[12px] text-[#8A8A8A] font-sans">or sign  in using</span>

                                    <hr className="flex-1 border-[#D1D1D1] border-1" />

                                </div>

                            </div> {/* hr-line */}

                            {/* logo-section */}
                            <div className="flex flex-col justify-center items-center w-[280px] h-[10vh] gap-[10px]">
                                <span className="text-[12px] font-sans">Continue with Google</span>

                                <Image
                                    src="/icons/Group-233.svg"
                                    alt="google"
                                    width={30}
                                    height={30}
                                />
                            </div> {/* logo-section */}

                            {/* button-section */}
                            <div className="flex justify-center items-center w-[280px] h-[10vh]">
                                <button className="h-[42px] w-[280px] bg-[#F77F00] text-white text-[13px] font-sans font-bold rounded-md">
                                    Continue
                                </button>
                            </div> {/* button-section */}


                            {/* text */}
                            <div className="flex flex-col justify-center items-center w-[280px] text-center gap-[5px]">

                                <p className="text-[11px] text-[#8B8B8B] leading-[18px]">
                                    By continuing, you agree to our{" "}
                                    <span className="text-black ">terms</span> and{" "}
                                    <span className="text-black ">privacy policy</span>.
                                </p>

                                <p className="text-[11px] text-[#8B8B8B]">
                                    Already have an account?{" "}
                                    <span className="text-black">
                                        sign in
                                    </span>
                                </p>

                            </div> {/* text */}


                        </div>

                    </div>

                </div>      {/* main-background-section-end */}
            </div>
        </>
    )
}