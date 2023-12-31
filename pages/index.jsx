import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import ImageSlider from "../components/imageSlide";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import About from "@/components/about";
import Services from "@/components/services";
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <nav className="max-w-screen-md  m-auto  pt-40">
          <img src="/logo1.jpg" alt="" cla />
        </nav>
      </div>
      <div className="relative">
        <nav className="flex justify-center">
          <img src="display1.webp" alt="" />
        </nav>
        <nav className="absolute h-full w-full top-0 flex justify-center items-center  ">
          <p className="  md:mx-20 bg-black text-white p-10  max-w-screen-xl bg-opacity-60 md:rounded-xl max-h-36 overflow-hidden text-sm md:text-2xl">
            Welcome to the event architects, your premier destination for
            creating unforgettable moments and exceptional celebrations.
          </p>
        </nav>
      </div>
      <About />
      <Services />
    </>
  );
}
