import React from 'react'
import Image from 'next/image'
export default function page() {
    return (
        <div className='flex flex-col md:flex-row min-h-screen'>

            {/* LEFT SIDEBAR */}
            <div className="w-full md:w-[250px] bg-white md:fixed md:left-0 md:top-0 md:h-screen">
                <div className="font-bold text-3xl ml-4 md:ml-16 mt-8 md:mt-12 ">Ernat. </div>


                <ul className='flex md:flex-col items-center md:items-start gap-18 md:gap-7 pb-6 md:pb-0 mt-5 md:mt-10 md: ml-14 text-sm mr-6 font-medium text-gray-600 overflow-x-auto whitespace-nowrap'>       <li className="flex items-center gap-3">
                    <img src="\images\setting\house.png" className="w-4 h-4" />
                    Dashboard
                </li>
                    <li className="flex items-center gap-3">
                        <img src="\images\setting\wallet.png" className="w-4 h-4" />
                        My Wallet
                    </li>
                    <li className="flex items-center gap-3">
                        <img src="\images\setting\history.png" className="w-4 h-4" />
                        History
                    </li>
                    <li className="bg-[#FDE8D7] text-[#FF6900] px-4 py-2 rounded-xl flex items-center gap-3 ">
                        <img src="\images\setting\settings.png" className="w-4 h-4" />
                        Settings
                    </li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="flex-1 bg-gray-100 md:ml-[250px] p-4 md:p-10 pb-16 md:pb-0 ">
                <div className="font-bold text-3xl ml-4 md:ml-19 mt-12 md:mt-12">Privacy Control</div>
                <span className=' ml-4 md:ml-19 text-lg'>Manage how your data is used and visible to others.

                    <div className="flex flex-wrap items-center gap-18 md:gap-10 mt-8 md:mt-12 ml-4 md:ml-16 font-medium text-gray-500 text-[16px]">

                        <p className="whitespace-nowrap">Account Setting</p>

                        <p className="whitespace-nowrap">Notification</p>

                        <div className='bg-white px-4 h-[40px] flex items-center justify-center border-b-2 border-[#FF6900]'>
                            <p className="whitespace-nowrap">Privacy</p>
                        </div>

                        <p className="whitespace-nowrap">Help</p>

                    </div>

                    {/* CARD */}
                    <div className="bg-white w-full md:w-[80%] ml-0 md:ml-16 px-4 md:px-10  pt-5 md:pt-10 mt-6 md:mt-4 ">

                        {/* VISIBILITY */}
                        <div className="flex items-center gap-3 font-bold text-xl">

                            <Image
                                src="/images/setting/visibility.png"
                                alt="visibility"
                                width={20}
                                height={20}
                            />

                            <span>Visibility</span>

                        </div>
                        {/* Public Profile */}
                        <div className="flex justify-between items-center pb-4 mt-[35]">
                            <div>
                                <h3 className="font-semibold text-[17px]">
                                    Public Profile Visibility
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Allow others to see your membership level and lifetime earnings on the leaderboard.
                                </p>
                            </div>

                            {/* Toggle */}
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 
      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
      after:bg-white after:border after:rounded-full after:h-5 after:w-5 
      after:transition-all peer-checked:after:translate-x-full">
                                </div>
                            </label>


                        </div>

                        {/* Show Referral Activity */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-6 md:mt-8">
                            <div>
                                <h3 className="font-semibold text-[17px]">
                                    Show Referral Activity                                 </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Share your successful referral count on your referral landing page.

                                </p>
                            </div>

                            {/* Toggle */}
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 
      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
      after:bg-white after:border after:rounded-full after:h-5 after:w-5 
      after:transition-all peer-checked:after:translate-x-full">
                                </div>
                            </label>


                        </div>

                        {/* Data Management */}
                        <div className="flex items-center gap-3 font-bold text-xl mt-10">

                            <Image
                                src="/images/setting/database.png"
                                alt="visibility"
                                width={20}
                                height={20}
                            />

                            <span>Data Management</span>

                        </div>

                        {/* Personalize Experience */}
                        <div className="flex justify-between items-center pb-4 mt-[35]">
                            <div>
                                <h3 className="font-semibold text-[17px]">
                                    Personalized Experience
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Use your shopping activity to suggest higher cashback offers tailored for you.


                                </p>
                            </div>

                            {/* Toggle */}
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 
      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
      after:bg-white after:border after:rounded-full after:h-5 after:w-5 
      after:transition-all peer-checked:after:translate-x-full">
                                </div>
                            </label>


                        </div>



                        {/* Download My Data */}
                        <div className="flex justify-between items-center pb-4 mt-[35]">
                            <div>
                                <h3 className="font-semibold text-[17px]">
                                    Download My Data
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Get a copy of all your account history and earning records in a JSON file.



                                </p>
                            </div>


                            {/* Request Data */}
                            <div className="h-[30px] w-[130px] bg-gray-100 flex items-center justify-center text-sm font-bold rounded-md">Request Data</div>
                        </div>

                        {/* Danger Zone */}
                        <div className="flex items-center  gap-2 font-bold text-xl mt-[35px]">
                            <Image
                                src="/images/setting/exclamation.png"
                                alt=""
                                width={22}
                                height={22}
                            />

                            <span>Danger Zone</span>


                        </div>

                        {/* Deactivae Account */}
                        <div className="h-[170px] w-[98%] bg-red-100 border border-red-200 p-6  rounded-2xl mt-[15px]">
                            <span className='text-sm text-red-600 font-bold'>Deactivate Account
                            </span>

                            <p className='text-sm text-red-700'>This will hide your profile and stop all pending rewards. You can reactivate your account anytime within 30 days.

                            </p>


                            <button className='bg-red-600  text-white text-sm h-[40px] w-[200px] mt-2 rounded-xl font-bold mt-5'>
                                Deactivate My Account</button>

  
                        </div>
                    </div>


                </span>
            </div>
        </div>
    )
}
