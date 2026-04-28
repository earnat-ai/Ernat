import Image from "next/image";

export default function Footer() {
    return (
        <>
            {/* Quick Pages */}
            <div className="w-full h-[500px] bg-[#CBCBCB] flex flex-col justify-around items-center pt-[30px]">

                <div className="w-7xl flex justify-between items-start">
                    <div className="flex flex-col justify-center items-start gap-7">
                        <h1 className="font-bold text-[18px]">About Ernat</h1>

                        <ul className="style-none flex flex-col justify-start items-start gap-4 text-[14px]">
                            <li>About Us</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-7">
                        <h1 className="font-bold text-[18px]">Useful Reads</h1>

                        <ul className="style-none flex flex-col justify-start items-start gap-4 text-[14px]">
                            <li>Terms and Conditions</li>
                            <li>Privacy & Cookie Policy</li>
                            <li>Anti-Spam Policy</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-7">
                        <h1 className="font-bold text-[18px]">Special Pages</h1>

                        <ul className="style-none flex flex-col justify-start items-start gap-4 text-[14px]">
                            <li>Refer and Earn</li>
                            <li>Careers</li>
                            <li>Become our Partner</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-7">
                        <h1 className="font-bold text-[18px]">Connect With Us</h1>

                        <ul className="style-none flex flex-col justify-start items-start gap-4 text-[14px]">
                            <li>Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>

                {/* Social Icons */}
                <div className="w-7xl flex flex-col justify-between items-start gap-3">
                    <h1>Let's Get Social</h1>

                    <ul className="flex justify-start items-center gap-4">
                        <li className="w-[40px] h-[40px] bg-white rounded-[999px] flex justify-center items-center">
                            <Image
                                src="/icons/Facebook.svg"
                                alt="Facebook"
                                width={15}
                                height={15}
                            />
                        </li>
                        <li className="w-[40px] h-[40px] bg-white rounded-[999px] flex justify-center items-center">
                            <Image
                                src="/icons/Insta.svg"
                                alt="Instagram"
                                width={24}
                                height={24}
                            />
                        </li>
                        <li className="w-[40px] h-[40px] bg-white rounded-[999px] flex justify-center items-center">
                            <Image
                                src="/icons/LinkedIn Icon.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                            />
                        </li>
                        <li className="w-[40px] h-[40px] bg-white rounded-[999px] flex justify-center items-center">
                            <Image
                                src="/icons/X.svg"
                                alt="X"
                                width={24}
                                height={24}
                            />
                        </li>
                    </ul>
                </div>
            </div>


        </>
    );
};