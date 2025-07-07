import BlogRecomentationCardImg from "../assets/blog-recomendation-card-img.avif";
import userrecologo from "../assets/reco-user-logo.avif";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreatedBlogCard = ({ each, onDelete }) => {
  const { title, _id, content, image, creatorName } = each;
  // Truncate content for uniform card height
  const para =
    content && content.length > 120
      ? content.substring(0, 120) + "..."
      : content;

  const [deleting, setDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (onDelete) {
      setDeleting(true);
      await onDelete(_id);
      setDeleting(false);
    }
  };

  return (
    <div className="w-full h-[200px] flex flex-row bg-white border-2 border-[#CC9444] rounded-xl shadow-xl dark:bg-gray-800 dark:border-[#5B0913] overflow-hidden transition-transform duration-200 hover:scale-[1.02] relative">
      <img
        className="h-full w-[220px] object-cover bg-gray-100"
        src={image}
        alt={title}
      />
      <div className="flex flex-col flex-1 p-4 md:p-6">
        <div className="flex flex-row gap-2 items-center mb-2">
          <img className="w-7 h-7 rounded-full border border-gray-300" src={userrecologo} alt="user" />
          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 truncate">{creatorName}</p>
        </div>
        <h1 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-[#5B0913] dark:text-white line-clamp-1">
          {title}
        </h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-1 overflow-hidden line-clamp-2 text-sm md:text-base">
          {para}
        </p>
        <div className="flex flex-row gap-2 items-center mt-auto">
          <Link to={`/blogs/${_id}`}>
            <span className="inline-flex items-center px-3 py-2 text-xs md:text-sm font-medium text-center text-white bg-[#5B0913] rounded-lg hover:bg-[#7a1430] focus:ring-4 focus:outline-none focus:ring-[#CC9444] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200 w-fit">
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
          </Link>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="inline-flex items-center px-3 py-2 text-xs md:text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 ml-2 transition-colors duration-200"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatedBlogCard;
