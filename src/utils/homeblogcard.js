import React from "react";
import { Link } from "react-router-dom";

const Homeblogcard = ({ imgg, each }) => {
  const { _id, title, image } = each;
  const para =
    each?.content.length > 120
      ? each.content.substring(0, 120) + "...."
      : each.content;
  return (
    <Link to={`/blogs/${_id}`}>
      <div className="w-full md:max-w-[300px] h-[420px] flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <img
          className="rounded-t-lg h-[180px] w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="flex flex-col flex-1 p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-1 overflow-hidden line-clamp-3">
            {para}
          </p>
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#5B0913] bg-transparent rounded-lg hover:underline focus:outline-none mt-auto">
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
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Homeblogcard;
