import { React, useState,useEffect } from "react";
import userProfile from "../assets/userprofileimg.webp";
import CreatedBlogCard from "../utils/created-blogs-card";
import Footer from "../utils/footer";
import { BsSave2Fill } from "react-icons/bs";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import BASE_URL from "../config";



const LikedBlogs = () => {
  let user=localStorage.getItem("user")
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(data)
  user=JSON.parse(user)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(`${BASE_URL}/blogs/user/liked`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
      });
      setData(data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
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

  const successView=()=>{
    return (
      <div>
        <div className="flex flex-col gap-10"> 
         {
          data.blogs.map((each)=><CreatedBlogCard key={each._id} each={each} />)
         } 
      </div>
      </div>
    );
  }

  return(
    <div>
      {
        loading?loadingView():successView()
      }
    </div>
  )
 
};

const SavedBlogs = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* <CreatedBlogCard /> */}

    </div>
  );
};

const UserLibrary = () => {
  const [selectedTab, setSelectedTab] = useState("about");

  const handleSelectTab = (value) => {
    setSelectedTab(value);
  };
  return (
    <>
      <div className="relative dark:bg-black dark:text-white min-h-[90vh] pb-10">
        <div className="grid grid-cols-3  gap-10 px-5 md:px-10 lg:px-40 ">
          <div className=" col-span-3 md:col-span-2 pt-20 ">
            <h1 className="font-semibold text-3xl mb-10 dark:text-white text-[#5B0913]">
             Your Library
            </h1>
            <div className="flex flex-row gap-6 border-b pb-4 mb-10">
              
            <p
                onClick={() => {
                  handleSelectTab("about");
                }}
                className={`hover:cursor-pointer  ${
                  selectedTab == "about" ? "text-[#5B0913]" : "text-gray-400"
                }`}
              >
                Liked Blogs
              </p>
              <p
                onClick={() => {
                  handleSelectTab("home");
                }}
                className={`hover:cursor-pointer ${
                  selectedTab == "home" ? "text-[#5B0913]" : "text-gray-400"
                }`}
              >
                Saved Blogs
              </p>

              

            </div>
            <div>
              {selectedTab === "home" ? <SavedBlogs /> : <LikedBlogs />}
            </div>
          </div>

          <div className="  static col-span-3 md:col-span-1 border-t md:border-l   md:pl-10 pt-10   ">
           <div className="flex flex-col gap-8 sticky top-10">
           <div className="h-fit lg:block  grid-cols-1  ">
              <h className="text-base font-bold dark:text-white">
                Select Category You Like
              </h>
              <div className="flex flex-row flex-wrap gap-2 mt-4 dark:text-[#5B0913]">
                <p className="px-3 py-2 bg-[#FCD494]   w-fit rounded-3xl text hover:cursor-pointer">
                  Programming
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  History
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  Cooking
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  Spritual
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  Sport
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  History
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  Cooking
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  Spritual
                </p>
                <p className="px-3 py-2 bg-[#FCD494] w-fit rounded-3xl text hover:cursor-pointer">
                  Sports
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold">Reading list</h1>
              <p className="text-[#6b6b6b]">Click the <BsSave2Fill className="inline text-black"/> on any story to easily add it to your reading list or a custom list that you can share.</p>
            </div>
           </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLibrary;
