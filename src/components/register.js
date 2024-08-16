import { React, useState } from "react";
import google from "../assets/search.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BASE_URL from "../config";

const Register = () => {
  const navigate = useNavigate();

  const [userdata, setuserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    image:""
  });

  // getting user registration form data
  const getUserData = (event) => {
    setuserData((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
    console.log(userdata);
  };

  const register = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("please wait");

    try {
      const response = await axios.post(
        `${BASE_URL}/register`,
        userdata
      );
      const jwtToken = response.data.jwtToken;
      localStorage.setItem("jwtToken", jwtToken);
      toast.update(toastId, {
        render: "Registration successful",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      navigate("/");
    } catch (e) {
      console.log(e);
      const errorMessage = e.response.data.error;
      const errorMsg=errorMessage.includes("E11000 duplicate key error collection")?"Number already exist":errorMessage
      toast.update(toastId, {
        render: errorMsg,
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

      <div className="dark:bg-black  flex px-8 flex-row justify-center items-center py-5 login-bg-container">
        <div className="px-5 md:px-8 py-4 max-w-450px] w-[500px] h-fit shadow-xl rounded-xl bg-white  dark:bg-black dark:border">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img className="w-20 md:w-36" src={logo} />
            <h1 className="font-semibold text-xl md:text-2xl text-[#5B0913] dark:text-white">
              Welcome
            </h1>
            <p className="text-[#494e51] text-base md:text-md">
              Please enter your details to sign up.
            </p>
            <div className="grid grid-cols-3 grid-flow-row my-4 w-[100%] gap-1 ">
              <div className="border border-gray-300 w-fit h-fit px-6 md:px-8 py-1 sm:px-14 sm:py-3  rounded-md bg hover:cursor-pointer">
                <img className="w-6 " src={google} />
              </div>
              <div className="border border-gray-300 w-fit h-fit px-6 md:px-8 py-1 sm:px-14 sm:py-3  rounded-md bg  hover:cursor-pointer">
                <img className="w-6" src={twitter} />
              </div>
              <div className="border border-gray-300 w-fit h-fit  px-6 md:px-8 py-1 sm:px-14 sm:py-3  hover:cursor-pointer rounded-md bg">
                <img className="w-6" src={facebook} />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-row gap-2">
            <hr className="w-[50%]" />
            <p className="text-[#494e51] text-sm">OR</p>
            <hr className="w-[50%]" />
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="flex flex-col gap-1 col-span-4 ">
              <label className="text-base md:text-lg dark:text-white">
                Name
              </label>
              <input
                type="text"
                onChange={getUserData}
                name="name"
                className="hover:shadow-sm border border-gray-200 outline-none py-1 md:py-3 text-md rounded-md px-1 dark:bg-black"
                placeholder="Enter your name.."
              />
            </div>
            <div className="flex flex-col gap-1 col-span-4 ">
              <label className="text-base md:text-lg dark:text-white">
                E-Mail Address
              </label>
              <input
                onChange={getUserData}
                name="email"
                type="text"
                className="border hover:shadow-sm border-gray-200 outline-none py-1 md:py-3 text-md rounded-md px-1 dark:bg-black"
                placeholder="Enter your email.."
              />
            </div>
            <div className="flex flex-col gap-1 col-span-4 md:col-span-2">
              <label className="text-base md:text-lg dark:text-white">
                Number
              </label>
              <input
                type="text"
                onChange={getUserData}
                name="number"
                className="border hover:shadow-sm  border-gray-200 outline-none py-1 md:py-3 text-md rounded-md px-1 dark:bg-black"
                placeholder="Enter your password.."
              />
            </div>
            <div className="flex flex-col gap-1 col-span-4 md:col-span-2">
              <label className="text-base md:text-lg dark:text-white">
                Password
              </label>
              <input
                type="text"
                onChange={getUserData}
                name="password"
                className="border hover:shadow-sm  border-gray-200 outline-none py-1 md:py-3 text-md rounded-md px-1 dark:bg-black"
                placeholder="Enter your password.."
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 ">
              <input id="login-checkbox" className="h-4 w-4 " type="checkbox" />
              <label
                htmlFor="login-checkbox"
                className="md:text-base text-sm  dark:text-white"
              >
                Remember me
              </label>
            </div>
            <p className="md:text-base text-sm dark:text-white">
              Forgot password ?
            </p>
          </div>
          <button
            onClick={register}
            className="bg-[#5B0913] rounded-sm md:rounded-xl  text-white px-4 w-[100%] py-1 md:py-3 mt-2 md:mt-4 "
          >
            Sign up
          </button>
          <p className="text-center mt-4 dark:text-white">
            Dont have an account yet?
            <Link to="/login">
              <span className="text-[#5B0913] font-semibold"> Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
