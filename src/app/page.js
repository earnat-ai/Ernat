import Image from "next/image"
import Categories from "@/components/categories";
import Main from "@/components/main";


export default function Home() {
  return (
    <>
      <div className="w-full">
        <Categories />
        <Main />
      </div>

    </>

  )
}