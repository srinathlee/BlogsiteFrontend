import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import userrecologo from "../assets/userprofileimg.webp";
import "./util.css";
import { FaUser } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import useStore from "../../src/store/store.js"


const Navbar = () => {
  const navigate = useNavigate();
  const [drkMode, setdrkMode] = useState("light");
  const [drop, setDrop] = useState(false);
  const menuRef = useRef();
  const user=useStore((state)=>state.user)
  const {image}=user;
  console.log(user)
  let logUser=localStorage.getItem("user")
  logUser=JSON.parse(logUser)
  const imgg=logUser.image

  const isAuthenticated = localStorage.getItem("jwtToken");

  window.addEventListener("click", (event) => {
    if (event.target !== menuRef.current) {
      setDrop(false);
    }
  });

  const Logout = () => {
    localStorage.removeItem("jwtToken");
    setDrop(!drop);
    navigate("/login");
  };

  useEffect(() => {
    if (drkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [drkMode]);

  const handleDrop = () => {
    setDrop(!drop);
  };

  const handleDarkMode = () => {
    setdrkMode(drkMode === "dark" ? "light" : "dark");
  };
  return (
    <div className=" border:none dark:border-b bg-gray-white py-2 dark:bg-black text-white px-2 md:px-4 lg:px-10 flex justify-between items-center px-5 sm:px-24 ">
      <div>
        <Link to="/">
          <img className="w-24" src={logo} />
        </Link>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <div onClick={handleDarkMode}>
          {drkMode == "dark" ? (
            <CiLight className="text-white darkmode-icon" />
          ) : (
            <MdDarkMode className="text-black darkmode-icon" />
          )}
        </div>
        {
          !isAuthenticated?
        <>
          <div>
            <Link to="/login">
              <button className="text-xs px-2 text-black rounded-md md:px-4 py-2 bg-gray-100">
                Login
              </button>
            </Link>
          </div>

          <div>
            <Link to="/register">
              <button className=" text-xs px-2 text-white rounded-md py-2 md:px-4 bg-[#5B0913]">
                GetStarted
              </button>
            </Link>
          </div>
        </>
:
        <>
          <div>
            <Link to="/writeblog">
              <button className="text-xs px-2 text-black rounded-md md:px-4 py-2">
                <LuPenSquare className="text-2xl dark:text-white" />
              </button>
            </Link>
          </div>

          <div className="relative">
            <img
              ref={menuRef}
              onClick={handleDrop}
              className="h-9 w-9 md:h-12 md:w-12 rounded-full"
              src={imgg}
            />

            {drop && (
              <div className="z-10 absolute bg-white text-white right-3 w-72 text-center rounded-md shadow-md">
                <ul>
                  <Link to="/user">
                    <li
                      onClick={handleDrop}
                      className="px-4 text-black  border-b border-gray-100   py-3 rounded-md flex flex-row items-center justify-start gap-8 hover:bg-[#FCD494] "
                    >
                      <FaUser className=" text-[#5B0913]" />
                      Profile
                    </li>
                  </Link>
                  <Link to="/library">
                    <li
                      onClick={handleDrop}
                      className="px-4 py-3 border-b border-gray-100   text-black rounded-md flex flex-row items-center justify-start gap-8  hover:bg-[#FCD494]"
                    >
                      <IoLibrary className=" text-[#5B0913]" />
                      Library
                    </li>
                  </Link>
                  <Link to="/help">
                    <li
                      onClick={handleDrop}
                      className="px-4 py-3 text-black  border-b border-gray-100   rounded-md flex flex-row items-center justify-start gap-8  hover:bg-[#FCD494] "
                    >
                      <FaHandsHelping className=" text-[#5B0913]" />
                      Help
                    </li>
                  </Link>
                  <li
                    onClick={Logout}
                    className="px-4 py-3 text-black  border-b border-gray-100   rounded-md flex flex-row items-center justify-start gap-8   hover:bg-[#FCD494]"
                  >
                    <IoLogOut className=" text-[#5B0913]" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>

        }
      </div>
    </div>
  );
};

export default Navbar;
