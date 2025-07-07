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
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  let logUser = localStorage.getItem("user");
  logUser = JSON.parse(logUser);


  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [pathname]);

  const getData = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "Application/json",
      },
    });
    setData(response.data);

    // Always get latest user from localStorage (may have changed)
    let logUser = localStorage.getItem("user");
    logUser = logUser ? JSON.parse(logUser) : {};

    const isLiked = response.data.likes.some(
      (each) => each.user === logUser._id
    );
    setHasLiked(isLiked);

    const isfollowing = logUser.following?.some(
      (each) => each == response.data.CreatorDetails.creatorId
    );
    setFollow(isfollowing);

    setLikesCount(response.data.LikesCount);
    setComments(response.data.blog.comments || []);
    setCommentCount(response.data.blog.noOfComments || 0);
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
    setHasLiked((prev) => !prev);
    setLikesCount((prev) => (hasLiked ? prev - 1 : prev + 1));
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const { _id } = data.blog;
      await axios.post(
        `${BASE_URL}/blogs/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      setHasLiked((prev) => !prev);
      setLikesCount((prev) => (hasLiked ? prev + 1 : prev - 1));
  
    }
  };

  const FollowUnfollow = async (event) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const { creatorId } = data.CreatorDetails;
      const action = isFollow ? "unfollow" : "follow";
      // console.log("FollowUnfollow action:", action);
      // console.log(logUser);
      const options = { userIdToUpdate: creatorId, action };

      await axios.post(
        "http://localhost:3005/api/followorUnfollow",
        options,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      
       setFollow((prev) => !prev);
      
      // Fetch updated user data from backend
      const userRes = await axios.get(`${BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      // Update localStorage and Zustand/global state
      localStorage.setItem("user", JSON.stringify(userRes.data.user));
      useStore.getState().setUser(userRes.data.user);

      // Update isFollow state based on new user data
      const updatedUser = userRes.data.user;
      const followingNow = updatedUser.following.some(
        (each) => each == creatorId
      );
      setFollow(followingNow);

    } catch (e) {
      console.log(e)
      // console.error("Error in FollowUnfollow:", e);
      // Optionally handle error
    }
  };

  // COMMENT HANDLING
  const handleCommentInput = (e) => setCommentInput(e.target.value);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setCommentLoading(true);
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const { _id } = data.blog;
      await axios.post(
        `${BASE_URL}/blogs/${_id}/comment`,
        { message: commentInput },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCommentInput("");
      await getData(); // Refresh comments and count
    } catch (err) {
      // Optionally show error
    }
    setCommentLoading(false);
  };

  const successView = () => {
    if (!data.blog) return null;
    const { title, content, category, createdat, creatorName, image } =
      data.blog;
     
    const recomendations = data.recomendations;
    const { creatorId, creatorImg } = data.CreatorDetails;
    
  

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
                  <p
                    onClick={FollowUnfollow}
                    className={`hover:cursor-pointer border-2 px-2 py-1 rounded-lg text-sm transition
                      ${logUser._id == creatorId
                        ? "hidden"
                        : isFollow
                          ? "bg-[#5B0913] border-[#5B0913] text-white"
                          : "border-[#5B0913] text-[#5B0913]"
                      }`
                    }
                  >
                    {logUser._id == creatorId ? "" : isFollow ? "following" : "follow"}
                  </p>
                </div>
                <div className="flex flex-row gap-4 w-fit">
                  <h1 className="text-base w-fit">Published on</h1>
                  <p>{createdat}</p>
                </div>
              </div>
            </div>
            <img
              src={image}
              className="w-full max-h-[400px] object-cover rounded-lg mb-6"
            />
            <div className="w-[100%] flex flex-row justify-between  gap-2 border-t border-b py-4 mt-4 mb-4">
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-2 text-[#777777]">
                  <button onClick={Like}>
                    <BiSolidLike
                      className={`text-2xl ${
                        hasLiked ? "text-[#5B0913]" : "text-none"
                      }`}
                    />
                  </button>
                  <span className="flex items-center gap-2">{likesCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-2xl" />
                  <span className="flex items-center gap-2 text-[#777777]">
                    {commentCount}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-8">
                <IoMdShare className="text-2xl" />
                <BsSave2Fill className="text-2xl" />
              </div>
            </div>

            {/* Comment Section */}
            <div className="w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FaComment className="text-xl" /> Comments ({commentCount})
              </h2>
              <div className="space-y-4 max-h-[220px] overflow-y-auto mb-4">
                {comments.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400">
                    No comments yet.
                  </p>
                )}
                {comments.map((c) => (
                  <div key={c._id || c.user} className="flex items-start gap-3">
                    <img
                      src={userlogo}
                      alt="user"
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <div>
                      <p className="font-semibold text-sm text-[#5B0913] dark:text-[#CC9444]">
                        {c.name}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {c.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <form
                onSubmit={handleCommentSubmit}
                className="flex flex-row gap-2 mt-2"
              >
                <input
                  type="text"
                  value={commentInput}
                  onChange={handleCommentInput}
                  placeholder="Write a comment..."
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white outline-none"
                  disabled={commentLoading}
                />
                <button
                  type="submit"
                  disabled={commentLoading || !commentInput.trim()}
                  className="bg-[#5B0913] text-white px-4 py-2 rounded-lg hover:bg-[#7a1430] transition"
                >
                  {commentLoading ? "Posting..." : "Comment"}
                </button>
              </form>
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
