import React from "react";
import homecardimg1 from "../assets/homecard-img-1.jpg";
import homecardimg2 from "../assets/homecard-img-2.jpg";
import homecardimg3 from "../assets/homecard-img-3.jpg";
import homecardimg4 from "../assets/homecard-img-4.jpg";
import homecardimg5 from "../assets/homecard-img-5.jpg";
import homecardimg6 from "../assets/homecard-img-6.jpg";
import { Link } from "react-router-dom";

const Homeblogcard = ({ imgg, each }) => {
  const {_id,title,image}=each;
  const para =
    each?.content.length > 120
      ? each.content.substring(0, 120) + "...."
      : each.content;
  return (
    <Link to={`/blogs/${_id}`}>
      <div className=" w-[100%] md:max-w-[300px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-[220px] w-[100%] md:max-h-[300px]"
          src={image}
          alt="Noteworthy technology acquisitions 2021"
        />
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {para}
          </p>
          <p
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Homeblogcard;
