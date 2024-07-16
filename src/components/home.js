import React from "react";
import "./home.css";
import heroimg from "../assets/hero-image.avif";
import { FaArrowRightLong } from "react-icons/fa6";
import Homeblogcard from "../utils/homeblogcard";
import homecardimg1 from "../assets/homecard-img-1.jpg";
import homecardimg2 from "../assets/homecard-img-2.jpg";
import homecardimg3 from "../assets/homecard-img-3.jpg";
import homecardimg4 from "../assets/homecard-img-4.jpg";
import homecardimg5 from "../assets/homecard-img-5.jpg";
import homecardimg6 from "../assets/homecard-img-6.jpg";

const Home = () => {
  return (
    <div className="home-bg-container ">
      {/* banner section */}
      <div className="flex flex-row  overflow-hidden gap-3 p-10 sm:px-24">
        <img
          className="h-96 rounded-lg shadow-md max-w-[450px]"
          src={heroimg}
        />
        <div className="bg-slate-200 p-10 shadow-md rounded-lg flex flex-col gap-4">
          <h1 className=" text-5xl text-black font-semibold">
            Where Focus Meets Insight
          </h1>
          <p className=" text-4 text-[#616161] ">
            Discover a blog dedicated to providing deep, thoughtful analysis and
            practical wisdom. Our articles bridge the gap between knowledge and
            application, offering readers valuable insights across diverse
            topics. Enhance your understanding and stay informed with content
            designed to inspire and educate.
          </p>
          <button className="flex text-blue-400 flex-row gap-2 items-center">
            Explore <FaArrowRightLong className="mt-1" />
          </button>
        </div>
      </div>

      {/* cards section */}
      <div className="sm:px-24 grid grid-cols-4 py-10">
        <div className="col-span-3 grid grid-cols-3 shrink-0 gap-4">
          <Homeblogcard imgg={homecardimg1} />
          <Homeblogcard imgg={homecardimg2} />
          <Homeblogcard imgg={homecardimg3} />
          <Homeblogcard imgg={homecardimg4} />
          <Homeblogcard imgg={homecardimg5} />
          <Homeblogcard imgg={homecardimg6} />
          <Homeblogcard imgg={homecardimg4} />
          <Homeblogcard imgg={homecardimg3} />
          <Homeblogcard imgg={homecardimg2} />
        </div>

        <div className="h-fit  sticky top-10  relative grid-cols-1 border-l border-l-gray-10 p-4 ">
          <h className="text-base font-bold">Select Category You Like</h>
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Programming
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              History
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Cooking
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Spritual
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Sport
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              History
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Cooking
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Spritual
            </p>
            <p className="px-3 py-2 bg-[#f2f2f2] w-fit rounded-3xl text hover:cursor-pointer">
              Sport
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-t-gray-10 px-10 flex flex-row justify-center items-center py-3">
        <p>@2024 All copy rights reserved</p>
      </div>
    </div>
  );
};

export default Home;
