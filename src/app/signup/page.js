<<<<<<< HEAD

export default function SignupForm(){
    return(
        <>
          
        </>
    )
=======
import React from "react";

export default function SignupForm() {
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
                                Create an account
                            </h1>
                        </div>

                        {/* form section */}
                        <div className="bg-white rounded-tr-[60px] p-6 flex flex-col gap-4">

                            <form className="flex flex-col gap-4">
                                {/* Full Name */}
                                <div className="flex flex-col w-full gap-1">
                                    <label className="text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="w-full h-[44px] border border-gray-300 bg-gray-100 rounded-md px-3 outline-none text-sm focus:ring-2 focus:ring-[#F77F00]"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col w-full gap-1">
                                    <label className="text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="w-full h-[44px] border border-gray-300 bg-gray-100 rounded-md px-3 outline-none text-sm focus:ring-2 focus:ring-[#F77F00]"
                                    />
                                </div>

                                {/* Password */}
                                <div className="flex flex-col w-full gap-1">
                                    <label className="text-sm font-medium text-gray-700">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="w-full h-[44px] border border-gray-300 bg-gray-100 rounded-md px-3 outline-none text-sm focus:ring-2 focus:ring-[#F77F00]"
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="flex flex-col w-full gap-1">
                                    <label className="text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        className="w-full h-[44px] border border-gray-300 bg-gray-100 rounded-md px-3 outline-none text-sm focus:ring-2 focus:ring-[#F77F00]"
                                    />
                                </div>

                                {/* button */}
                                <button className="h-[44px] w-full bg-[#F77F00] text-white text-sm font-semibold rounded-md hover:bg-[#e96f00] transition mt-2">
                                    Sign up
                                </button>
                            </form>
                            {/* footer */}
                            <div className="text-center text-[11px] text-gray-500 space-y-2 px-2 leading-relaxed">
                                <p>
                                    Already have an account?{" "}
                                    <span className="text-black font-medium cursor-pointer hover:underline">
                                        Sign in
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
>>>>>>> 9c84182b31d609db9be08985296ff825995aa12b
}