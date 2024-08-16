import { React, useEffect, useState } from "react";
import userProfile from "../assets/userprofileimg.webp";
import CreatedBlogCard from "../utils/created-blogs-card";
import Footer from "../utils/footer";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import useStore from "../../src/store/store.js"
import { ToastContainer, toast } from "react-toastify";
import { json } from "react-router-dom";
import BASE_URL from "../config.js";


const UserAboutView = ({ user, updateUserDetails }) => {
  const { name, email, number, image } = user;
  const [newimage, setImage] = useState(null);

  // Initialize form state with user details
  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    number: number || "",
    image: image || userProfile,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (newimage) {
      imghandleSubmit(newimage);
    }
  }, [newimage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    updateUserDetails(formData);
  };

  const handleImageChange = async (event) => {
    if (event.target.files[0]) setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const imghandleSubmit = async (event) => {
    // event.preventDefaults();
    const formData = new FormData();
    formData.append("file", newimage);
    formData.append("upload_preset", "newpreset"); // Replace with your upload preset
    formData.append("cloud_name", "dldcgj0mx");
    // formData.append("folder", "samples");
    try {
      console.log(formData);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dldcgj0mx/image/upload",
        formData
      );
      setFormData((prevData) => ({
        ...prevData,
        image: response.data.secure_url,
      }));
      console.log(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <input
              onChange={handleImageChange}
              id="userProfile"
              type="file"
              className="hidden"
            />
            <label htmlFor="userProfile">
              <img
                className="w-32 h-32 rounded-full"
                src={formData.image}
                alt="User Profile"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl">Name:</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-xl border p-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl">Number:</p>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="text-xl border p-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl">E-mail:</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-xl border p-1 rounded"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-fit text-sm px-4 py-2 text-white rounded-md bg-[#5B0913]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

const UserHomeView = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="flex flex-col gap-10">
      {blogs == "" ? (
        <div className="text-xl font-semibold">
          No Blog poste have yet been Created
        </div>
      ) : (
        blogs.map((each) => <CreatedBlogCard each={each} key={each._id} />)
      )}
    </div>
  );
};

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("about");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const setUser=useStore((state)=>state.setUser)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
      });
      setData(data.data);
      setUser(data.data.user)
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

  const updateUserDetails = async (formData) => {
    try {
      const newData = await axios.put(`${BASE_URL}/profile/update`,formData,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        }
      });
      const UserString=JSON.stringify(newData.data)
      localStorage.setItem("user",UserString)
     setData({...data,user:newData})
     window.location.reload();
     toast.success("profile updated...")
    } catch (e) {
      console.log(e);
    }
  };

  const successView = () => {
    const { name, email, number,image } = data.user;

    return (
      <>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <div className="relative dark:bg-black dark:text-white min-h-[90vh] pb-10">
          <div className="grid grid-cols-3  gap-10 md:px-10 lg:px-40 ">
            <div className=" order-2 md:order-1  col-span-3 md:col-span-3 pt-20 px-5 md:px-10  ">
              <h1 className="font-semibold text-3xl mb-10 dark:text-white text-[#5B0913]">
                {name}
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
                  About
                </p>
                <p
                  onClick={() => {
                    handleSelectTab("home");
                  }}
                  className={`hover:cursor-pointer ${
                    selectedTab == "home" ? "text-[#5B0913]" : "text-gray-400"
                  }`}
                >
                  My blogs
                </p>
               
              </div>
              <div>
                {selectedTab === "home" ? (
                  <UserHomeView blogs={data.blogs} />
                ) : (
                  <UserAboutView user={data.user} updateUserDetails={updateUserDetails} />
                )}
              </div>
            </div>
            {/* <div className=" order-1 md:order-2 static col-span-3 md:col-span-1 border:none md:border-l px-5 md:px-10 md:pl-10 pt-10 flex flex-col gap-4 md:sticky top-10 ">
              <div className="md:sticky top-10">
                <img className="w-32 h-32 rounded-full" src={image} />
                <h1 className="font-semibold text-xl  mb-2 mt-2 text-[#5B0913] dark:text-white">
                  {name}
                </h1>
                <div className="flex flex-col gap-1 ">
                  <p className="text-xl font-semibold">Bio : </p>
                  <p className="text-lg">
                    I write about the history of plants and plant-based diets,
                    primarily focused on the U.S. and Britain in the 19th and
                    early 20th centuries.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </>
    );
  };

  const handleSelectTab = (value) => {
    setSelectedTab(value);
  };
  return <>{loading ? loadingView() : successView()}</>;
};

export default UserProfile;
