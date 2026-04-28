import Image from "next/image";
export default function MegaCards({ brandImg, brandAlt, brandImgClass, productImg, productAlt, bgGradient, prdouctName }) {
    return (
        <>
            <div className=" w-[300px] h-[400px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative rounded-[10px]"
                style={{ backgroundImage: bgGradient }}
            >

                <div className="w-full h-[250px] flex items-start">
                    <div className="shrink-0 pl-2">
                        <Image
                            src={brandImg}
                            alt={brandAlt}
                            width={150}
                            height={100}
                            className={`w-[150px] h-[100px] opacity-30 object-contain ${brandImgClass}`}
                            priority
                        />
                    </div>

                    <div className="static">
                        <Image
                            src={productImg}
                            alt={productAlt}
                            width={240}
                            height={250}
                            className="absolute top-0 right-0 w-[180px] h-auto object-contain z-20"
                            priority
                        />
                    </div>
                </div>


                <div className="w-full h-[150px] flex justify-start items-center px-4 py-5 relative bg-white rounded-bl-[10px] rounded-br-[10px]">

                    <div className="w-full h-[150px] py-5 bg-white">
                        <h1 className="text-[16px] font-semibold">{prdouctName}</h1>

                        <div className="flex items-center mt-1">
                            <span className="text-[#f77f00] text-[14px]">★★★★☆</span>
                            <span className="text-gray-500 text-[12px] ml-2">(4.2)</span>
                        </div>

                        <div className="mt-2 flex justify-start items-center">
                            <span className="text-[16px] font-bold">₹2,499</span>
                            <span className="line-through text-gray-400 text-[13px] ml-2">₹3,599</span>
                            <span className="text-white text-[13px] ml-2 bg-[#82C24D] px-[3px] rounded-[2px]">-30%</span>
                        </div>
                    </div>

                    <button className="bg-white rounded-[6px] px-2 py-[2px] text-[14px] absolute right-4 bottom-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        Grab Now
                    </button>

                </div>

                {/* 🔘 BUTTON (NOW PERFECTLY POSITIONED) */}

            </div>
        </>
    );
};