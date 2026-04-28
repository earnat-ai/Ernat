
import React from "react";

export default function Signup() {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-ful">

                <div className=" hidden md:flex flex justify-center items-center h-screen w-1/2 bg-[#F77F00] ">

                    <div className="flex flex-col justify-center items-start p-16 gap-3 h-72 w-full">
                        <h1 className="font-bold text-2xl text-white font-sans mb-3"> Earnat.</h1>

                        <h2 className="font-bold text-4xl font-sans text-white">  Shop Smart, Live Better</h2>
                        <p className="text-sm sm:text-base text-center text-white"> Discover amazing products at the best prices.
                             Signup now and start your shopping journey with Earnat.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center h-screen w-1/2 bg-white ">

                    <div className="flex flex-col justify-center items-center h-screen w-2/3">

                        <div className="flex flex-col  justify-center items-start h-14 w-full mb-5" >
                            <h1 className="font-bold text-2xl"> Join Earnat</h1>
                            <p className="text-sm text-gray-500 mr-7"> Create Account</p>
                        </div>

                        <form className="w-full flex flex-col gap-4">
                            <div className="flex flex-col gap-2" >
                                <label htmlFor="text" className="text-[#6b7280] font-medium"> Full Name </label>
                                <input type="text"
                                    placeholder=""
                                    className=" w-11/12 p-3 border border-[#F77F00] outline-none rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2" >
                                <label htmlFor="email" className="text-[#6b7280] font-medium"> Email Address </label>
                                <input type="email"
                                    placeholder=""
                                    className=" w-11/12 p-3 border border-[#F77F00] outline-none rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2" >
                                <label htmlFor="password" className="text-[#6b7280] font-medium">Password </label>
                                <input type="password"
                                    placeholder=""
                                    className=" w-11/12 p-3 border border-[#F77F00] outline-none rounded-sm" />
                            </div>

                            <div className="flex flex-col gap-2" >
                                <button type="sumbit" className="w-11/12 p-3 bg-[#F77F00] rounded-2xl text-white font-sans font-bold text-lg"> Sign Up</button>
                            </div>
                        </form>
                        <div className="flex flex-col mt-4" >
                            <span className="text-sm text-gray-500" >Already have an account? <b className="text-[#6b7280]">Sign In</b></span>
                        </div>
                    </div>


                </div>


            </div>
        </>
    );
}