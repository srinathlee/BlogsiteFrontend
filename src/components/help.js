import React from "react";
import { IoSearch } from "react-icons/io5";
import "./hero.css";
import Footer from "../utils/footer";
import gettingstarted from "../assets/helpgettingstarted.svg";
import wirtingblog from "../assets/helowriteblog.svg";
import manageacc from "../assets/helpmanageacc.svg";
import readingblog from "../assets/helpreadblog.svg";
import { CiUser } from "react-icons/ci";
import { IoCompassOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { TfiPencilAlt } from "react-icons/tfi";

const HelpPage = () => {
  return (
    <>
      <div className="">
        <div className="px-20 md:px-40 help-hero-banner flex flex-col gap-12 justify-center items-center w-[100%]">
          <h1 className="text-5xl font-semibold">How can we help?</h1>
          <div className="max-w-[600px] w-[400px] flex flex-row shadow-md bg-white rounded-md p-3 items-center gap-2">
            <IoSearch className="searchicon" />
            <input
              className="w-[100%] outline-none"
              type="text"
              placeholder="Search....."
            />
          </div>
        </div>

        <div className=" dark:bg-black dark:text-white  py-8 px-20 lg:px-40 grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-4">
          <div className="hover:cursor-pointer justify-self-center border  border-black dark:border-gray-200 max-w-72 rounded-sm p-4 flex flex-col justify-center items-center">
            {/* <img src={gettingstarted} /> */}
            <IoCompassOutline className="h-36 w-36 dark:text-white"/>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-center text-xl font-semibold">
                Getting started
              </h1>
              <p className=" text-center text-base text-[#6b6b6b]">
                Learn more about Medium and set up your account
              </p>
            </div>
          </div>

          <div className="hover:cursor-pointer border justify-self-center border-black  dark:border-gray-200 max-w-72 rounded-sm p-4 flex flex-col justify-center items-center">
            {/* <img src={manageacc} /> */}
            <CiUser className="h-36 w-36 dark:text-white"/>
            <div className="flex flex-col gap-3 ">
              <h1 className="text-center text-xl font-semibold">
                Managing your account
              </h1>
              <p className=" text-center text-base text-[#6b6b6b]">
                Everything you need to know about your account settings and
                profile page
              </p>
            </div>
          </div>

          <div className="hover:cursor-pointer border  justify-self-center border-black  dark:border-gray-200 max-w-72 rounded-sm p-4 flex flex-col justify-center items-center">
            {/* <img src={readingblog} /> */}
            <IoBookOutline className="h-36 w-36 dark:text-white"/>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-center text-xl font-semibold">Reading</h1>
              <p className=" text-center text-base text-[#6b6b6b]">
                Control your reading experience on Medium
              </p>
            </div>
          </div>

          <div className="hover:cursor-pointer border  justify-self-center border-black  dark:border-gray-200 max-w-72 rounded-sm p-4  flex flex-col justify-center items-center">
            {/* <img src={wirtingblog} /> */}
            <TfiPencilAlt className="h-36 w-36 dark:text-white"/>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-center text-xl font-semibold">
                Writing & editing
              </h1>
              <p className=" text-center text-base text-[#6b6b6b]">
                Master to write blogs and edit them with your interest
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpPage;
