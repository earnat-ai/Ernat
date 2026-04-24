import TopDeals from "@/components/Cards/topDeals";
import ShopCategory from "@/components/Cards/shopCategory";
import { Aboreto, Inter } from 'next/font/google';
import { Fredoka } from "next/font/google";
import Brands from "@/components/Cards/brands";
import BrandDeals from "./Cards/brandDeals";
import MegaCards from "./Cards/megaDeals";
import Image from "next/image";

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aboreto',
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Main() {
  return (
    <>
      {/* Main Section Start */}
      <div className="w-full px-4 md:px-5 lg:px-8 py-4 ">

        {/* Hero Section Start */}
        <div className="w-full h-[270px] lg:h-[400px] py-4 md:py-5 flex justify-center items-center">
          <div className="bg-[url('/images/home/HeroSlider2.png')] bg-cover bg-[position:90%_0%] bg-no-repeat w-full h-full rounded-[10px] relative">

            <h1
              className={`${aboreto.className} text-[28px] sm:text-[30px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] absolute top-1/2 -translate-y-1/2 left-5 text-[#f77f00]`}
            >
              SAVE MORE EVERYDAY <br />
              GRAB THE BEST OFFER NOW.
            </h1>

            <div
              className={`${fredoka.className} flex justify-center items-center absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-[#F8860E]/61 gap-2 lg:gap-3`}
            >
              <p className={`text-[20px]`}>Big Savings Start Here - Only at Earnat</p>

              <button className="bg-[#f77f00] px-3 py-1 rounded-[999px] text-[14px] text-white font-[300]">
                Shop Now
              </button>
            </div>

          </div>
        </div>
        {/* Hero Section End */}

        {/* Main Content Start */}
        <div className="w-full py-4 ">

          {/* Top Deals  */}
          <div className="w-full flex flex-col gap-10">

            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Top Deals</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between items-center">

              <TopDeals
                image="/images/products/Samsung Phone.png"
                category="On Mobile Phones"
                discount="Flat 20% off"
                imgClass="w-40 h-auto -top-10 left-3"
              />

              <TopDeals
                image="/images/products/Kurti's.png"
                category="On Mobile Phones"
                discount="Flat 20% off"
                imgClass="w-40 h-auto -top-17 left-3"
              />

              <TopDeals
                image="/images/products/Men's Fashion.png"
                category="On Mobile Phones"
                discount="Flat 20% off"
                imgClass="w-40 h-auto -top-10 left-0"
              />

              <TopDeals
                image="/images/products/Bags 2.png"
                category="On Mobile Phones"
                discount="Flat 20% off"
                imgClass="w-33 h-auto -top-10 left-10"
              />

              <TopDeals
                image="/images/products/Toys.png"
                category="On Mobile Phones"
                discount="Flat 20% off"
                imgClass="w-30 h-auto -top-10 left-5"
              />
            </div>
          </div>

          {/* Shop By Category */}
          <div className="w-full py-5 flex flex-col gap-10 ">
            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Shop By Category</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between items-center ">

              <ShopCategory
                image="/images/categories/Perfume.png"
              />

              <ShopCategory
                image="/images/categories/Beauty.png"
              />

              <ShopCategory
                image="/images/categories/fashion.png"
              />

              <ShopCategory
                image="/images/categories/Mobiles.png"
              />

              <ShopCategory
                image="/images/categories/Health & Wellness.png"
              />

              <ShopCategory
                image="/images/categories/Grocery.png"
              />

              <ShopCategory
                image="/images/categories/Electronics 2.png"
              />

            </div>
          </div>

          {/* Top Brands */}
          <div className="w-full py-5 flex flex-col gap-10 ">

            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Top Brands</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex flex-col gap-10">

              <div className="flex justify-between items-center">

                <Brands
                  image="/images/brands/Amazon.svg"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />

                <Brands
                  image="/images/brands/Flipkart.webp"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />

                <Brands
                  image="/images/brands/Nykaa.webp"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />
                <Brands
                  image="/images/brands/Blinkit.svg"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />

              </div>
              <div className="flex justify-between items-center">

                <Brands
                  image="/images/brands/Ajio.svg"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />

                <Brands
                  image="/images/brands/Amazon.svg"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />

                <Brands
                  image="/images/brands/Blinkit.svg"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />
                <Brands
                  image="/images/brands/Ajio.svg"
                  alternate="Amazon"
                  brand="Upto 8% Cashback"
                />

              </div>



            </div>
          </div>

          {/* Amazon Top Deals */}
          <div className="w-full py-5 flex flex-col gap-10 ">

            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Amazon Top Deals</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between">

              <BrandDeals
                brandImg="/images/brands/Amazon.svg"
                brandAlt="Amazon"
                category="Women's Fashion"
                discount="Min 40% Off"
                productImg="/images/cards/Brown Abaya.webp"
                productAlt=""
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(219, 184, 134) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

              <BrandDeals
                brandImg="/images/brands/Amazon.svg"
                brandAlt="Amazon"
                category="Men's Fashion"
                discount="Min 70% Off"
                productImg="/images/cards/men-jacket.webp"
                productAlt=""
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(50, 47, 82) 8.043%, rgb(255, 255, 255) 105.57%)" }}
              />

              <BrandDeals
                brandImg="/images/brands/Amazon.svg"
                brandAlt="Amazon"
                category="Beauty Product"
                discount="Min 30% Off"
                productImg="/images/cards/Secret Perfume.webp"
                productAlt=""
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(255, 164, 196) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

            </div>

          </div>

          {/* Nykaa Top Deals */}
          <div className="w-full py-5 flex flex-col gap-10 ">

            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Nykaa Top Deals</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between">

              <BrandDeals
                brandImg="/images/brands/Nykaa.webp"
                brandAlt="Amazon"
                category="Skin Care"
                discount="Min 10% Off"
                productImg="/images/cards/Skin Care.webp"
                productAlt=""
                brandImgClass="opacity-100"
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(255, 255, 255) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

              <BrandDeals
                brandImg="/images/brands/Nykaa.webp"
                brandAlt="Amazon"
                category="Lipstick"
                discount="Min 10% Off"
                productImg="/images/cards/Lipstick.webp"
                productAlt=""
                brandImgClass="opacity-100"
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(255, 255, 255) 8.043%, rgb(255, 255, 255) 105.57%)" }}
              />

              <BrandDeals
                brandImg="/images/brands/Nykaa.webp"
                brandAlt="Amazon"
                category="Makeup Kit"
                discount="Min 10% Off"
                productImg="/images/cards/Makeup Kit.webp"
                productAlt=""
                brandImgClass="opacity-100"
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(255, 255, 255) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

            </div>

          </div>

          {/* Top Deals On Electronics */}
          <div className="w-full py-5 flex flex-col gap-10 ">

            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Top Deals On Electronics</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between">

              <BrandDeals
                brandImg="/images/brands/Flipkart.webp"
                brandAlt="Amazon"
                category="Electronic Accessories"
                discount="Up To 20% Off"
                productImg="/images/cards/Electronic Accessories.webp"
                productAlt=""
                brandImgClass="opacity-100"
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(205, 231, 255) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

              <BrandDeals
                brandImg="/images/brands/Amazon.svg"
                brandAlt="Amazon"
                category="Electronic Devices"
                discount="Up To 30% Off"
                productImg="/images/cards/Electronic Devices.webp"
                productAlt=""
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(224, 225, 166) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

              <BrandDeals
                brandImg="/images/brands/Croma.webp"
                brandAlt="Amazon"
                category="Electronic Watches"
                discount="Up To 25% Off"
                productImg="/images/cards/Electronic Watches.webp"
                productAlt=""
                brandImgClass="opacity-100"
                style={{ backgroundImage: "linear-gradient(114.175005deg, rgb(242, 244, 255) 28.3%, rgb(255, 255, 255) 105.57%)" }}
              />

            </div>

          </div>

          {/* Ernat Special */}
          <div className="w-full py-5 flex flex-col gap-10 ">

            <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
              <h1>Ernat Special - Limited Time Mega Offers</h1>
            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between">

              <MegaCards
                brandImg='/images/brands/Amazon.svg'
                brandAlt='Amazon'
                productImg='/images/cards/Brown Abaya.webp'
                bgGradient="linear-gradient(116.542225deg, rgb(219, 184, 134) 17.854%, rgb(255, 255, 255) 72.894%)"
                prdouctName="Elegant Brown Abaya"
              />

              <MegaCards
                brandImg='/images/brands/Nykaa.webp'
                brandAlt='Nykaa'
                productImg='/images/cards/Pink Abaya.webp'
                bgGradient="linear-gradient(118.133142deg, rgba(227, 54, 78, 0.87) 1.9976%, rgb(255, 255, 255) 76.419%)"
                brandImgClass="opacity-100"
                prdouctName="Elegant Brown Abaya"
              />

              <MegaCards
                brandImg='/images/brands/Flipkart.webp'
                brandAlt='Amazon'
                productImg='/images/cards/Silver Abaya.webp'
                bgGradient="linear-gradient(129.981233deg, rgb(205, 231, 255) 8.8237%, rgb(255, 255, 255) 94.448%)"
                brandImgClass="opacity-100"
                prdouctName="Elegant Brown Abaya"
              />

              <MegaCards
                brandImg='/images/brands/Croma.webp'
                brandAlt='Amazon'
                productImg='/images/cards/Black Abaya.webp'
                bgGradient="linear-gradient(114.175005deg, rgb(242, 244, 255) 28.3%, rgb(255, 255, 255) 105.57%)"
                brandImgClass="opacity-100"
                prdouctName="Elegant Brown Abaya"
              />

            </div>

            <div className="px-4 md:px-8 lg:px-16 flex justify-between">

              <MegaCards
                brandImg='/images/brands/Tira.webp'
                brandAlt='Tira'
                productImg='/images/cards/Soft Glam Makeup.png'
                bgGradient="linear-gradient(116.542225deg, rgba(159, 89, 96, 0.59) 17.854%, rgb(255, 255, 255) 72.894%)"
                prdouctName="Soft Glam Makeup"
              />

              <MegaCards
                brandImg='/images/brands/Nike.webp'
                brandAlt='Nykaa'
                productImg='/images/cards/Casual Nike Sneakers.png'
                bgGradient="linear-gradient(125.269308deg, rgb(55, 56, 57) 4.3524%, rgb(255, 255, 255) 75.556%)"
                brandImgClass="opacity-100"
                prdouctName="Casual Nike Sneakers"
              />

              <MegaCards
                brandImg='/images/brands/Croma.webp'
                brandAlt='Amazon'
                productImg='/images/cards/Electronic Watches.webp'
                bgGradient="linear-gradient(120.627576deg, rgb(233, 237, 255) 38.29%, rgb(255, 255, 255) 74.148%)"
                brandImgClass="opacity-100"
                prdouctName="Minimalist Watch"
              />

              <MegaCards
                brandImg='/images/brands/Amazon.svg'
                brandAlt='Amazon'
                productImg='/images/cards/Brown Abaya.webp'
                bgGradient="linear-gradient(116.542225deg, rgb(219, 184, 134) 17.854%, rgb(255, 255, 255) 72.894%)"
                prdouctName="Elegant Brown Abaya"
              />

            </div>

          </div>

          {/* Banner */}
          <div className="px-4 md:px-8 lg:px-16 flex justify-between py-5">
            <Image
            src="/images/home/Banner.png"
            alt="Earnat"
            width={1920} // Use the actual pixel width
            height={600} // Use the actual pixel height
            className="w-full h-auto object-contain"
            priority
          />
          </div>

        </div>
        {/* Main Content End */}

      </div>

      {/* Main Content End */}
    </>
  );
};