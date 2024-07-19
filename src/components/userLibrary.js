import { React, useState } from "react";
import userProfile from "../assets/userprofileimg.webp";
import CreatedBlogCard from "../utils/created-blogs-card";
import Footer from "../utils/footer";
import { BsSave2Fill } from "react-icons/bs";


const LikedBlogs = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
    </div>
    </div>
  );
};

const SavedBlogs = () => {
  return (
    <div className="flex flex-col gap-10">
      <CreatedBlogCard />

    </div>
  );
};

const UserLibrary = () => {
  const [selectedTab, setSelectedTab] = useState("home");

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
                  handleSelectTab("home");
                }}
                className={`hover:cursor-pointer ${
                  selectedTab == "home" ? "text-[#5B0913]" : "text-gray-400"
                }`}
              >
                Saved Blogs
              </p>
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
                  Sport
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
