import { React, useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { BsSave2Fill } from "react-icons/bs";
import userlogo from "../assets/blog-user-logo.jpeg";
import blog_banner_1 from "../assets/blog-banner-1.jpg";
import BlogRecomentationCard from "../utils/blogRecomentationCard";
import Footer from "../utils/footer";
import likepost from "../../src/assets/likepost.svg";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import useStore from "../store/store.js";
import "./hero.css";
import { BiSolidLike } from "react-icons/bi";
import BASE_URL from "../config.js";

const BlogView = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [data, setData] = useState("");
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFollow, setFollow] = useState("");
  // const user=useStore((state)=>state.user._id)
  let logUser = localStorage.getItem("user");
  logUser = JSON.parse(logUser);

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [pathname]);

  const getData = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.get(`http://localhost:3005/api/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "Application/json",
      },
    });
    setData(response.data);
    const isLiked = response.data.likes.some(
      (each) => each.user === logUser._id
    );
    setHasLiked(isLiked);
    const isfollowing=logUser.following.some((each)=>each==response.data.CreatorDetails.creatorId)
    // console.log(response.data.CreatorDetails.creatorId,logUser.following)

    setFollow(isfollowing)
    console.log(logUser)
    setLikesCount(response.data.LikesCount);
    setLoading(false);
  };

  const loadingView = () => {
    return (
      <div className="flex justify-center items-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#5b0913"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };

  const Like = async (event) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const { _id } = data.blog;
      const likeResult = await axios.post(
        `${BASE_URL}/blogs/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setHasLiked(!hasLiked);
      const updatelikecount = hasLiked ? likesCount - 1 : likesCount + 1;
      setLikesCount(updatelikecount);
    } catch (e) {
      console.log(e);
    }
  };

  const FollowUnfollow = async (event) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const { creatorId } = data.CreatorDetails;
      const action=isFollow?"unfollow":"follow"
      console.log(action)
      const options = { userIdToUpdate: creatorId, action };

      const result = await axios.post(
        "http://localhost:3005/api/followorUnfollow",
        options,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          }, 
        }
      );
      setFollow("")
    } catch (e) {
      console.log(e);
    }
  };

  const successView = () => {
    const { title, content, category, createdat, creatorName, image } =
      data.blog;
    const recomendations = data.recomendations;
    const { creatorId, creatorImg } = data.CreatorDetails;
    // console.log(creatorImg)

    return (
      <>
        <div className="px-5 sm:px-20 py-4 md:px-40 xl:px-80 dark:bg-black dark:text-white">
          <div>
            <h1 className="text-2xl mb-5 md:text-4xl font-bold md:mb-8">
              {title}
            </h1>
            <div className=" flex flex-row items-center gap-4  mb-8">
              <img src={creatorImg} className="w-20 h-20 rounded-full" />
              <div className="flex flex-col w-[100%] gap-2">
                <div className="flex flex-row gap-4 w-fit">
                  <h1 className="text-base">{creatorName}</h1>
                  <p onClick={FollowUnfollow} className="text-green-700 hover:cursor-pointer">{isFollow?"following":"follow"}</p>
                </div>
                <div className="flex flex-row gap-4 w-fit">
                  <h1 className="text-base w-fit">Published on</h1>
                  <p>{createdat}</p>
                </div>
              </div>
            </div>
            <img src={image} />
            <div className="w-[100%] flex flex-row justify-between  gap-2 border-t border-b py-4 mt-4 mb-4">
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-2 text-[#777777]">
                  <button onClick={Like}>
                    <BiSolidLike
                      className={`text-2xl ${
                        hasLiked ? "text-red-600" : "text-none"
                      }`}
                    />
                  </button>
                  <span className="flex items-center gap-2">{likesCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-2xl" />
                  <span className="flex items-center gap-2 text-[#777777]">
                    0
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-8">
                <IoMdShare className="text-2xl" />
                <BsSave2Fill className="text-2xl" />
              </div>
            </div>
            <p className="text:lg md:text-xl">{content}</p>

            <div className="py-8">
              <h1 className="mb-8 text-2xl font-bold">
                Recommended from Dharana
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  ">
                {recomendations.map((each) => (
                  <BlogRecomentationCard each={each} key={each._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  return <>{loading ? loadingView() : successView()}</>;
};

export default BlogView;
