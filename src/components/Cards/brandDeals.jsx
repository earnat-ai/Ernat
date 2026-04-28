import Image from "next/image";
export default function brandDeals({ brandImg, brandAlt, category, discount, productImg, productAlt, style, brandImgClass }) {
    return (
        <>
            <div className="w-[420px] h-[240px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-between px-3 py-3 rounded-[10px]"
                style={style}>
                <div className="flex flex-col justify-start items-center relative flex-1">
                    <Image
                        src={brandImg}
                        alt={brandAlt}
                        width={100}
                        height={100}
                        className={`w-[250px] h-[100px] opacity-30 object-contain ${brandImgClass}`}
                        priority
                    />

                    <div className="flex flex-col justify-center items-center leading-6.5">
                        <p className="text-[18px] ">{category}</p>
                        <h1 className="text-[24px] font-bold">{discount}</h1>

                    </div>

                    <button className="bg-white rounded-[6px] px-2 py-[2px] text-[14px] absolute left-0 bottom-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">Grab Now</button>

                </div>

                <div className="w-[160px] h-full flex-shrink-0 relative">
                    <Image
                        src={productImg}
                        alt={productAlt}
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>

            </div>
        </>
    );
};