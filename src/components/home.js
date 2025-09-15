import React, { useEffect, useRef, useState } from "react";
import heroimg from "../assets/hero-image.avif";
import { FaArrowRightLong } from "react-icons/fa6";
import Homeblogcard from "../utils/homeblogcard";
import homecardimg1 from "../assets/homecard-img-1.jpg";
import homecardimg2 from "../assets/homecard-img-2.jpg";
import homecardimg3 from "../assets/homecard-img-3.jpg";
import homecardimg4 from "../assets/homecard-img-4.jpg";
import loadbook from "../assets/Book.gif";
import { ThreeDots } from "react-loader-spinner";
import homecardimg5 from "../assets/homecard-img-5.jpg";
import homecardimg6 from "../assets/homecard-img-6.jpg";
import designedBanner from "../assets/designedbanner.png";
import { CiEdit, CiGlobe } from "react-icons/ci";
import { PiNewspaperClippingThin } from "react-icons/pi";
import BASE_URL from "../config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PiSmileySadThin } from "react-icons/pi";

import { Link } from "react-router-dom";
import Footer from "../utils/footer";
// import './styles.css';

// import Corosul from "../utils/swiper"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { MdLocalHospital } from "react-icons/md";

const categoriesList = [
  "action",
  "tech",
  "comedy",
  "romance",
 // ...add more categories as needed
];

const Home = () => {
  const blogsRef=useRef(null);
  const [data, setData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);


    // Scroll to blogs section
  const scrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, [selectedCategories]);

  const FetchData = async () => {
    try{
    // Send selectedCategories as a query param (comma separated)
    const categoryQuery = selectedCategories.join(",");
    const data = await axios.get(
      `${BASE_URL}/blogs?categories=${categoryQuery}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
      }
    );

    setData(data.data.blogs);
  }
  catch (error) {
      console.error("Error fetching data:", error);
      setData(null); // Set data to null in case of error
    }
  };

  const loadingView = () => {
    return (
      <div className="flex justify-center items-center col-span-3">
        {/* <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#5b0913"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        /> */}
        <img src={loadbook} className="w-[600px]" />
        {/* <Skeleton />  */}
        {/* <Skeleton count={5} /> */}
      </div>
    );
  };
// Toggle category: add if not present, remove if present
  const handleCategoryClick = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };


  return (
    <>
      {data !== null ? (
        <div className="home-bg-container dark:bg-black">
          {/* new home hero design */}

          <div className="px-5 sm:px-24 py-5 mb-20 pt-28">
            <div className="flex flex-col justify-center items-center w-[100%] gap-10 relative">
              <CiEdit className=" absolute text-[#5B0913] top-10 md:top-20 right-0 md:right-[200px] text-2xl md:text-4xl rotate-12" />
              <CiGlobe className="absolute text-[#5B0913] rotate-12 bottom-10 md:bottom-15 left-6  md:left-[220px] text-2xl md:text-5xl" />

              <h1 className="text-3xl md:text-6xl text-[#CC9444]  font-bold max-w-[1000px] text-center ">
                Share your stories, explore diverse perspectives, engage{" "}
              </h1>
              <p className="text-xl text-base md:text-2xl text-[#958B7C]  max-w-[800px] text-center ">
                Explore diverse topics, connect with authors, and stay updated
                with the latest trends and discussions
              </p>
              <div className="flex flex-row gap-4">
                <Link to="/about">
                  {" "}
                  <button className="bg-[#5B0913] shadow-xl px-5 py-1 text-lg md:px-12 md:text-xl md:py-4 rounded-full text-white border-none">
                    About Us
                  </button>
                </Link>
                {/* <Link to="/blogs"> */}
                  {" "}
                  <button   onClick={scrollToBlogs} className="shadow-lg border border-[#5B0913]  px-5 py-1 text-md md:px-9 md:text-xl md:py-[14px] rounded-full text-[#5b0913]">
                    Get All Blogs
                  </button>
                {/* </Link> */}
              </div>
            </div>
          </div>

          {/* cards section */}
          <div ref={blogsRef}>
            <div className="px-5 sm:px-24 flex flex-row justify-between">
              <div className="flex flex-row items-center gap-3">
                <div className="p-3 rounded-full bg-[#FCD494]">
                  <PiNewspaperClippingThin className="text-4xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#5b0913]">
                    Latest Blogs
                  </p>
                  <p className="text-base  text-[#958B7C]">
                    Get started on latest blogs
                  </p>
                </div>
              </div>
            </div>

            <div  className="px-5 sm:px-24 grid grid-cols-4 py-5 ">
              
              <div className="col-span-4 lg:col-span-3  grid md:grid-cols-3 shrink-0 gap-4">
                {data !== null
                  ?data.length==0?<div className="col-span-3 flex flex-col items-center justify-center w-full text-center text-3xl font-bold gap-2"><PiSmileySadThin className="text-8xl" /><span>No Blogs Found</span></div>: data.map((each) => (
                      <Link to="/blogs/">
                        <Homeblogcard
                          imgg={homecardimg1}
                          each={each}
                          key={each._id}
                        />
                      </Link>
                    ))
                  : loadingView()}
              </div>

              <div className="h-fit hidden lg:block  sticky top-10  relative grid-cols-1 border-l border-l-gray-10 p-4 ">
                <h className="text-base font-bold dark:text-white">
                  Select Category You Like
                </h>
                <div className="flex flex-row flex-wrap gap-2 mt-4 dark:text-[#5B0913]">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat}
                      className={`px-3 py-2 rounded-3xl border ${
                        selectedCategories.includes(cat)
                          ? "bg-[#5B0913] text-white"
                          : "bg-[#FCD494] text-[#5B0913]"
                      }`}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                      
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        loadingView()
      )}
    </>
  );
};

export default Home;
