import React, { useState,useEffect, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import BASE_URL from "../config";


const Writeblog = () => {
  const navigate=useNavigate()
  const [data, setdata] = useState({});
  const [popToggle, setPopToggle] = useState(false);
  const [select, setselect] = useState(false);
  const [selectdata, setselectData] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const menuRef = useRef();

  const [loading, setLoading] = useState(true);

  window.addEventListener("click", (event) => {
    if (event.target !== menuRef.current) {
      setselect(false);
    }
  });
  useEffect(() => {
    if (image) {
      imghandleSubmit(image);
    }
  }, [image]);

  const handleImageChange = async(event) => {
    if(event.target.files[0])
       setImage(event.target.files[0]); 
  };

  const imghandleSubmit = async(event) => {
    // event.preventDefaults();
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'newpreset'); // Replace with your upload preset
        formData.append('cloud_name', 'dldcgj0mx');
        // formData.append("folder", "samples");
        try {
          console.log(formData)
          const response = await axios.post('https://api.cloudinary.com/v1_1/dldcgj0mx/image/upload', formData);
          setImageUrl(response.data.secure_url);
          console.log(response.data.secure_url);
        } catch (error) {
          console.error('Error uploading image:', error.message);
        }
  };

  const handleChange = (event) => {
    setdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const PopupData = () => {
    return (
      
      <div className=" absolute top-0 px-5 sm:px-40 py-5 z-10">
        <div className="p-6 shadow-md bg-white rounded-md flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h1 className="font-nato text-2xl">{data.title}</h1>
            <button
              className=""
              onClick={() => {
                setPopToggle(!popToggle);
              }}
            >
              <RxCross2 />
            </button>
          </div>
          <img
            className="h-[70vh]"
            src={imageUrl}
          />
          <p className="font-nato">
            {data.content}
          </p>
        </div>
      </div>
    );
  };

  
  const PostData = async (event) => {
    // event.preventDefault();
    
    const toastId = toast.loading("please wait");

    try {
      data.category=select
      data.image=imageUrl;
      console.log(data)
      const response = await axios.post(
        `${BASE_URL}i/createblog`,
        data,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json"
          }
        }
      );
      toast.update(toastId, {
        render: "Blog created successfully",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      navigate("/");


    } catch (e) {
      console.log(e);
      const errorMessage = e.response.data.error;
      toast.update(toastId, {
        render: "Complete all Fields",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

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

    <div className="px-5 sm:px-40 py-5 relative">
      <div className="flex flex-row justify-center">
        {popToggle === true ? <PopupData /> : ""}
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className=" text-xl font-semibold md:text-3xl font-black">
          Write your Blog here
        </h1>
        <button
          onClick={() => {
            setPopToggle(!popToggle);
          }}
          className="bg-green-600 text-white px-2 py-1 rounded-xl text-sm"
        >
          Preview
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="mt-4 border border-dashed border-gray-300 border-2 py-4 ">
          <input
            onChange={handleImageChange}
            className="hidden"
            id="blogImage"
            type="file"
          />
          <label
            htmlFor="blogImage"
            className="flex flex-col justify-center items-center"
          >
            <CiImageOn
              style={{ fontSize: "60px" }}
              className="cursor-pointer"
            />
            <span className="text-md cursor-pointer">{imageUrl!=""?<span className="text-green-600">Image Uploaded</span>:"Upload Image"}</span>
          </label>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <div className=" col-span-4 md:col-span-3 flex flex-col gap-2 md:gap-3 mb-4">
            <label className="text-md md:text-xl font-nato">Topic Name</label>
            <input
              onChange={handleChange}
              type="text"
              value={data.title}
              name="title"
              placeholder="Topic......"
              className="bg-[#f6f6f6] py-4 px-2 rounded-md outline-none "
            />
          </div>
          <div className="md:col-span-1  col-span-4 relative">
            <p className="mb-2">Category</p>
            <h1
              ref={menuRef}
              className="py-[14px] px-4 bg-[#f6f6f6] text-xl rounded-md mt-0 md:mt-4 cursor-pointer"
              onClick={() => {
                setselect(!select);
              }}
            >
              {selectdata !== "" ? selectdata : "select"}
            </h1>
            <div className="border-r-2 border-b-black border-r-black absolute top-14 md:top-16  right-10 rotate-45 border-b-2 w-3 h-3 "> </div>
            {select && (
              <ul className="bg-[#f6f6f6] rounded-md flex shadow-md flex-col gap-2 absolute w-[100%] top-[-1] mt-4">
                <li
                  onClick={() => {
                    setselectData("action");
                    setselect(!select);
                  }}
                  className="py-4 px-2 m-1  cursor-pointer hover:bg-white rounded-md "
                >
                  Action
                </li>
                <li
                  onClick={() => {
                    setselectData("tech");
                    setselect(!select);
                  }}
                  className="py-4 px-2 m-1  cursor-pointer hover:bg-white rounded-md"
                >
                  Tech
                </li>
                <li
                  onClick={() => {
                    setselectData("comedy");
                    setselect(!select);
                  }}
                  className="py-4 px-2 m-1  cursor-pointer hover:bg-white rounded-md"
                >
                  Comedy
                </li>
                <li
                  onClick={() => {
                    setselectData("romantic");
                    setselect(!select);
                  }}
                  className="py-4 px-2 m-1  cursor-pointer hover:bg-white rounded-md"
                >
                  Romance
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 ">
          <label className="text-md md:text-xl font-nato">
            Write what`s on your mind
          </label>
          <textarea
            onChange={handleChange}
            value={data.content}
            name="content"
            placeholder="Here we goooo......"
            className="bg-[#f6f6f6] py-4 px-2 rounded-md outline-none"
            rows={10}
          ></textarea>
        </div>

        <div className="flex flex-row justify-center">
          <button
            onClick={PostData}
            className=" w-fit text-sm px-2 text-white rounded-md py-2 md:px-4 bg-[#5B0913]"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Writeblog;
