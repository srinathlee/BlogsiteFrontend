import React, { useState, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Writeblog = () => {
  const [data, setdata] = useState({});
  const [popToggle, setPopToggle] = useState(false);
  const [select, setselect] = useState(false);
  const [selectdata, setselectData] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const menuRef = useRef();

  window.addEventListener("click", (event) => {
    if (event.target !== menuRef.current) {
      setselect(false);
    }
  });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit = (event) => {

    console.log("hhhhh");
    event.preventDefaults();
    //     const formData = new FormData();
    //     formData.append('file', image);
    //     formData.append('upload_preset', 'newpreset'); // Replace with your upload preset
    //     formData.append('cloud_name', 'dldcgj0mx');
    //     formData.append("folder", "samples");
    //    console.log("aaffe")
    //     try {
    //       const response = await axios.post('https://api.cloudinary.com/v1_1/dldcgj0mx/image/upload', formData);
    //       setImageUrl(response.data.secure_url);
    //       console.log("response.data.secure_url")
    //     } catch (error) {
    //       console.error('Error uploading image:', error.message);
    //     }
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
            <h1 className="font-nato text-2xl">heading of the blog</h1>
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
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          />
          <p className="font-nato">
            An image showing a field of view approximating, or greater than,
            that of the human eye – about 160° by 75° – may be termed panoramic.
            This generally means it has an aspect ratio of 2:1 or larger, the
            image being at least twice as wide as it is high. The resulting
            images take the form of a wide strip.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="px-5 sm:px-40 py-5 relative">
      <div className="flex flex-row justify-center">
        {popToggle === true ? <PopupData /> : ""}
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className=" text-xl md:text-3xl font-black">
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
            <span className="text-md cursor-pointer">UploadImage</span>
          </label>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <div className=" col-span-3 flex flex-col gap-2 md:gap-3 mb-4">
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
          <div className="col-span-1 relative">
            <h1
              ref={menuRef}
              className="py-3 px-2 bg-[#f6f6f6] text-xl rounded-md mt-10 cursor-pointer"
              onClick={() => {
                setselect(!select);
              }}
            >
              {selectdata !== "" ? selectdata : "select"}
            </h1>
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
            onClick={handleSubmit}
            className=" w-fit text-sm px-2 text-white rounded-md py-2 md:px-4 bg-[#5B0913]"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writeblog;
