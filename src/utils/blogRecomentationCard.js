import React from 'react';
import userrecologo from "../assets/reco-user-logo.avif";
import { Link } from 'react-router-dom';

const BlogRecomentationCard = ({ each }) => {
  const { creatorName, image, content, title, _id } = each;
  const para =
    content && content.length > 120
      ? content.substring(0, 120) + "...."
      : content;

  return (
    <Link to={`/blogs/${_id}`}>
      <div className="w-full md:max-w-[300px] h-[420px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform duration-200 hover:scale-[1.025]">
        <img
          className="rounded-t-lg h-[180px] w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="flex flex-col flex-1 p-5">
          <div className="flex flex-row gap-3 items-center mb-2">
            <img className="w-6 h-6 rounded-full border border-gray-300" src={userrecologo} alt="user" />
            <p className="text-sm text-gray-700 dark:text-gray-300">{creatorName}</p>
          </div>
          <h1 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h1>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-1 overflow-hidden line-clamp-3">
            {para}
          </p>
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5B0913] rounded-lg hover:bg-[#7a1430] focus:ring-4 focus:outline-none focus:ring-[#CC9444] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto transition-colors duration-200">
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

export default BlogRecomentationCard;
