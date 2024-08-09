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

  const [data,setData]=useState(null);

  useEffect(()=>{
    FetchData()
  },[])

 const FetchData=async()=>{
  const data = await axios.get("http://localhost:3005/api/blogs",{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
      'Content-Type': 'application/json',
    }
    });

  setData(data.data.blogs)
 }
 

  return (
    <div className="home-bg-container dark:bg-black">
      {/* banner section  */}
      {/* <div className="flex flex-row  overflow-hidden gap-3 p-5 sm:px-24">
        <img
          className="h-96 rounded-lg shadow-xl max-w-[450px] hidden xl:block"
          src={heroimg}
        />
        <div className="bg-slate-200 dark:bg-[#FCD494] p-5 shadow-md rounded-lg flex flex-col gap-4">
          <h1 className=" text-2xl md:text-5xl text-black font-semibold">
            Where Focus Meets Insight
          </h1>
          <p className=" text-4 text-[#616161] dark:text-[#5B0913] ">
            Discover a blog dedicated to providing deep, thoughtful analysis and
            practical wisdom. Our articles bridge the gap between knowledge and
            application, offering readers valuable insights across diverse
            topics. Enhance your understanding and stay informed with content
            designed to inspire and educate.
          </p>
          <button className="flex text-[#5B0913] flex-row gap-2 items-center">
            Explore <FaArrowRightLong className="mt-1" />
          </button>
        </div>
      </div> */}

      <div className="px-5 sm:px-24 py-5 rounded-md overflow-hidden">
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
            <div  className="absolute top-6 left-10 max-w-[700px] shadow-xl">
              <h1 className="text-4xl mb-2 font-semibold">Pick a Topic </h1>
              <p className="text-xl">Select a topic, conduct in-depth research, and craft a captivating and informative blog post.</p>
            </div>
            <img
              className=" rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/portrait-businesswoman-works-from-home-looks-laptop-writes-down-information-makes-notes_1258-199704.jpg?t=st=1722076449~exp=1722080049~hmac=bd735c7022cc2c165c9142bb8a815fe544d6aef40e4b0cf62c800bfc8f012ef0&w=2000"
            />
          </SwiperSlide>
          <SwiperSlide  className="relative">
          <div  className="absolute bottom-10 left-10 max-w-[700px]">
              <h1 className="text-4xl mb-2 font-semibold">Right a Blog</h1>
              <p className="text-xl">Write and publish your blog posts directly on our website. Enjoy an easy-to-use platform that supports all your blogging needs from drafting to publishing.</p>
            </div>
            <img
              className="  rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-writing-journal-adding-notes-planner-sitting-floor_1258-199997.jpg?t=st=1722076481~exp=1722080081~hmac=5ef0ede6c22532dfcd4546494aeb1ee48d27d11dd51b86cffafd39dfb752eca2&w=2000"
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
          <div  className="absolute bottom-10 text-white right-10 max-w-[700px]">
              <h1 className="text-4xl mb-2 font-semibold">Get Reaction</h1>
              <p className="text-xl">Monitor how your audience interacts with your blog post. Read comments, see reactions, and engage with your readers to enhance your content and connections.</p>
            </div>
            <img
              className="  rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/lifestyle-modern-people-concept-young-woman-reading-journal-looking-her-notes-laughing_1258-199970.jpg?t=st=1722076506~exp=1722080106~hmac=187d04f1ac448b4ab720678937ea9a3e204e8555575776e0c0f6fd87f93cef05&w=2000"
            />
          </SwiperSlide>
          <SwiperSlide>
          <div  className="absolute top-10 left-10 max-w-[700px]">
              <h1 className="text-4xl mb-2 font-semibold">Dharana</h1>
              <p className="text-xl">Where your focused thoughts converge with profound insights, creating impactful and inspiring blog content</p>
            </div>
            <img
              className="  rounded-md h-[60vh] w-[100%]"
              src="https://img.freepik.com/free-photo/smiling-brunette-womnan-holding-her-diary-writing-down-planner-working-from-home-laptop_1258-199714.jpg?t=st=1722076532~exp=1722080132~hmac=b0cda30193631736b630bee18f4f9b40579a45464c97b3132acb63993db1d872&w=2000"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <Corosul/> */}

      {/* cards section */}
      <div className="px-5 sm:px-24 grid grid-cols-4 py-5 p">
        <div className="col-span-4 lg:col-span-3  grid md:grid-cols-3 shrink-0 gap-4">
             

        {

data!==null?data.map((each)=>(
          <Link to="/blogs/">
          <Homeblogcard imgg={homecardimg1} each={each} key={each._id} />
        </Link>
         )):""
             }


          
          {/* <Link to="/blogs">
            <Homeblogcard imgg={homecardimg2} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg3} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg4} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg5} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg6} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg4} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg3} />
          </Link>
          <Link to="/blogs">
            <Homeblogcard imgg={homecardimg2} />
          </Link> */}
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
      <Footer />
    </div>
  );
};

export default Home;
