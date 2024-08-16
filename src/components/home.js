import React, { useEffect, useState } from "react";
import heroimg from "../assets/hero-image.avif";
import { FaArrowRightLong } from "react-icons/fa6";
import Homeblogcard from "../utils/homeblogcard";
import homecardimg1 from "../assets/homecard-img-1.jpg";
import homecardimg2 from "../assets/homecard-img-2.jpg";
import homecardimg3 from "../assets/homecard-img-3.jpg";
import homecardimg4 from "../assets/homecard-img-4.jpg";
import homecardimg5 from "../assets/homecard-img-5.jpg";
import homecardimg6 from "../assets/homecard-img-6.jpg";
import designedBanner from "../assets/designedbanner.png";
import { CiEdit,CiGlobe } from "react-icons/ci";
import { PiNewspaperClippingThin } from "react-icons/pi";
import BASE_URL from "../config";

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

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await axios.get(`${BASE_URL}/blogs`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "application/json",
      },
    });

    setData(data.data.blogs);
  };

  return (
    <div className="home-bg-container dark:bg-black">
      {/* <div className="px-5 sm:px-24 py-5 rounded-md overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <div className="absolute top-6 left-10 max-w-[700px] shadow-xl">
              <h1 className="text-4xl mb-2 font-semibold">Pick a Topic </h1>
              <p className="text-xl">
                Select a topic, conduct in-depth research, and craft a
                captivating and informative blog post.
              </p>
            </div>
            <img
              className=" rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/portrait-businesswoman-works-from-home-looks-laptop-writes-down-information-makes-notes_1258-199704.jpg?t=st=1722076449~exp=1722080049~hmac=bd735c7022cc2c165c9142bb8a815fe544d6aef40e4b0cf62c800bfc8f012ef0&w=2000"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute bottom-10 left-10 max-w-[700px]">
              <h1 className="text-4xl mb-2 font-semibold">Right a Blog</h1>
              <p className="text-xl">
                Write and publish your blog posts directly on our website. Enjoy
                an easy-to-use platform that supports all your blogging needs
                from drafting to publishing.
              </p>
            </div>
            <img
              className="  rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-writing-journal-adding-notes-planner-sitting-floor_1258-199997.jpg?t=st=1722076481~exp=1722080081~hmac=5ef0ede6c22532dfcd4546494aeb1ee48d27d11dd51b86cffafd39dfb752eca2&w=2000"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute bottom-10 text-white right-10 max-w-[700px]">
              <h1 className="text-4xl mb-2 font-semibold">Get Reaction</h1>
              <p className="text-xl">
                Monitor how your audience interacts with your blog post. Read
                comments, see reactions, and engage with your readers to enhance
                your content and connections.
              </p>
            </div>
            <img
              className="  rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/lifestyle-modern-people-concept-young-woman-reading-journal-looking-her-notes-laughing_1258-199970.jpg?t=st=1722076506~exp=1722080106~hmac=187d04f1ac448b4ab720678937ea9a3e204e8555575776e0c0f6fd87f93cef05&w=2000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute top-10 left-10 max-w-[700px]">
              <h1 className="text-4xl mb-2 font-semibold">Dharana</h1>
              <p className="text-xl">
                Where your focused thoughts converge with profound insights,
                creating impactful and inspiring blog content
              </p>
            </div>
            <img
              className="  rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/smiling-brunette-womnan-holding-her-diary-writing-down-planner-working-from-home-laptop_1258-199714.jpg?t=st=1722076532~exp=1722080132~hmac=b0cda30193631736b630bee18f4f9b40579a45464c97b3132acb63993db1d872&w=2000"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}

      {/* new home hero design */}

      <div className="px-5 sm:px-24 py-5 mb-20 pt-28">
        <div className="flex flex-col justify-center items-center w-[100%] gap-10 relative">
          <CiEdit className=" absolute text-[#5B0913] top-10 md:top-20 right-0 md:right-[200px] text-2xl md:text-4xl rotate-12"/>
          <CiGlobe className="absolute text-[#5B0913] rotate-12 bottom-10 md:bottom-15 left-6  md:left-[220px] text-2xl md:text-5xl"/>

          <h1 className="text-3xl md:text-6xl text-[#CC9444]  font-bold max-w-[1000px] text-center ">Share your stories, explore diverse perspectives, engage  </h1>
          <p className="text-xl text-base md:text-2xl text-[#958B7C]  max-w-[800px] text-center ">
          Explore diverse topics, connect with authors, and stay updated with the latest trends and discussions
          </p>
          <div className="flex flex-row gap-4">
          <Link to="/about"> <button className="bg-[#5B0913] shadow-xl px-5 py-1 text-lg md:px-12 md:text-xl md:py-4 rounded-full text-white border-none">About Us</button></Link>
           <Link to="/blogs"> <button  className="shadow-lg border border-[#5B0913]  px-5 py-1 text-md md:px-9 md:text-xl md:py-[14px] rounded-full text-[#5b0913]">Get All Blogs</button></Link>
          </div>
        </div>

      </div>

      {/* cards section */}
     <div>
     <div className="px-5 sm:px-24 flex flex-row justify-between">
      <div className="flex flex-row items-center gap-3">
        <div className="p-3 rounded-full bg-[#FCD494]">
        <PiNewspaperClippingThin className="text-4xl"/>
        </div>
       <div>
       <p className="text-2xl font-bold text-[#5b0913]">Latest Blogs</p>
       <p className="text-base  text-[#958B7C]">Get started on latest blogs</p>
       </div>
        
      
      </div>
     </div>

     <div className="px-5 sm:px-24 grid grid-cols-4 py-5 ">
        <div className="col-span-4 lg:col-span-3  grid md:grid-cols-3 shrink-0 gap-4">
          {data !== null
            ? data.map((each) => (
                <Link to="/blogs/">
                  <Homeblogcard
                    imgg={homecardimg1}
                    each={each}
                    key={each._id}
                  />
                </Link>
              ))
            : ""}
        </div>

        <div className="h-fit hidden lg:block  sticky top-10  relative grid-cols-1 border-l border-l-gray-10 p-4 ">
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
      </div>
     </div>
      <Footer />
    </div>
  );
};

export default Home;
