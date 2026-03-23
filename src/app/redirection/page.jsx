import React from "react";

export default function Page() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">

            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row gap-4">

                {/* LEFT (IMAGE/BANNER) */}
                <div className="flex-1 bg-white rounded-lg h-[200px]">
                    {/* YAHAN IMAGE LAGANI HAI */}
                </div>

                {/* RIGHT CARD */}
                <div className="flex-1 bg-white p-4 rounded-lg">




                </div>
            </div>

            {/* MIDDLE SECTION */}
            <div className="bg-white mt-5 p-4 rounded-lg">

            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row gap-4 mt-5">

                {/* LEFT */}
                <div className="flex-1 bg-white p-4 rounded-lg">
                </div>

                {/* RIGHT */}
                <div className="flex-1 bg-white p-4 rounded-lg">
                </div>

            </div>

        </div>
    );
}