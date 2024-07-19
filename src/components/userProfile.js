import { React, useState } from "react";
import userProfile from "../assets/userprofileimg.webp";
import CreatedBlogCard from "../utils/created-blogs-card";
import Footer from "../utils/footer"

const UserAboutView = () => {
  return (
    <div>
      <p className="text-lg">
        I’m Srinath, a dedicated blogger with a deep passion for writing. My
        journey began with a love for storytelling and a desire to share
        knowledge and experiences. Through my blog, I explore a wide range of
        topics, from technology and web development to personal growth and
        lifestyle. Writing allows me to connect with readers on a personal
        level, providing them with valuable insights and sparking engaging
        conversations. Each post is crafted with care, aiming to inform,
        inspire, and entertain. I believe in the power of words to make a
        difference, whether it’s through offering practical advice, sharing
        personal anecdotes, or delving into thought-provoking subjects. My blog
        is a reflection of my curiosity and creativity, and I’m committed to
        creating content that resonates with my audience and encourages them to
        think critically and embrace new perspectives.
      </p>
    </div>
  );
};

const UserHomeView = () => {
  return (
    <div className="flex flex-col gap-10">
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />
      <CreatedBlogCard />

    </div>
  );
};

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleSelectTab = (value) => {
    setSelectedTab(value);
  };
  return (
    <>
    <div className="relative dark:bg-black dark:text-white min-h-[90vh] pb-10">
      <div className="grid grid-cols-3  gap-10 md:px-10 lg:px-40 ">
        <div className=" order-2 md:order-1  col-span-3 md:col-span-2 pt-20 px-5 md:px-10  ">
          <h1 className="font-semibold text-3xl mb-10 dark:text-white text-[#5B0913]">
            Srinath_5255
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
              Home
            </p>
            <p
              onClick={() => {
                handleSelectTab("about");
              }}
              className={`hover:cursor-pointer  ${
                selectedTab == "about" ? "text-[#5B0913]" : "text-gray-400"
              }`}
            >
              About
            </p>
          </div>
          <div>
            {selectedTab === "home" ? <UserHomeView /> : <UserAboutView />}
          </div>
        </div>
        <div className=" order-1 md:order-2 static col-span-3 md:col-span-1 border:none md:border-l px-5 md:px-10 md:pl-10 pt-10 flex flex-col gap-4 md:sticky top-10 ">
         <div className="md:sticky top-10">
         <img className="w-32 h-32 rounded-full" src={userProfile} />
          <h1 className="font-semibold text-xl  mb-2  text-[#5B0913] dark:text-white">Srinath_5255</h1>
          <div className="flex flex-col gap-1 ">
            <p className="text-xl font-semibold">Bio : </p>
            <p className="text-lg">
              I write about the history of plants and plant-based diets,
              primarily focused on the U.S. and Britain in the 19th and early
              20th centuries.
            </p>
          </div>
         </div>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  );
};

export default UserProfile;
