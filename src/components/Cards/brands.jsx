import Image from "next/image";

export default function Brands({ image, alternate, brand }) {
    return (
        <div className="w-[230px] h-[230px] bg-white shadow-[0px_5px_25px_rgba(0,0,0,0.2)] rounded-[25px] relative flex flex-col justify-center items-center gap-10">

            <Image
                src={image}
                alt={alternate}
                width={100}
                height={100}
                className="w-40 h-auto"
                priority
            />

            <button className="text-[13px] text-white font-bold  bg-[#F77F00] px-4 py-2 rounded-[4px]">
                {brand}
            </button>

        </div>
    );
}