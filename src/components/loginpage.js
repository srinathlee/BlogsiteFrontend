import React from "react";
import google from "../assets/search.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/logo.png";
import "./login.css"
import {Link} from "react-router-dom"

const LoginPage = () => {
  return (
    <div className=" dark:bg-black flex px-8 flex-row justify-center items-center h-[90vh] login-bg-container">
      <div className="px-5 py-3 md:px-8 max-w-450px] w-[500px] h-fit shadow-xl rounded-xl bg-white dark:bg-black dark:border">
        <div className="flex flex-col items-center  gap-2">
        
            <img className="w-24 md:w-36" src={logo} />
          <h1 className="font-semibold text-xl md:text-2xl text-[#5B0913] dark:text-white">Welcome Back</h1>
          <p className="text-[#494e51] text-md">Please enter your details to sign in.</p>
          <div className="grid grid-cols-3 grid-flow-row my-4 w-[100%] gap-1 ">
            <div className="border border-gray-300 w-fit h-fit px-6 md:px-8 py-1 sm:px-14 sm:py-3   rounded-md bg hover:cursor-pointer" >
              <img className="w-6 "  src={google} />
            </div>
            <div className="border border-gray-300 w-fit h-fit px-6 md:px-8 py-1 sm:px-14 sm:py-3   rounded-md bg  hover:cursor-pointer" >
              <img className="w-6"  src={twitter} />
            </div>
            <div className="border border-gray-300 w-fit h-fit px-6 md:px-8 py-1 sm:px-14 sm:py-3 hover:cursor-pointer rounded-md bg" >
              <img  className="w-6"  src={facebook} />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-row gap-2 md-4">
          <hr className="w-[50%]"/>
          <p className="text-[#494e51] text-sm">OR</p>
          <hr  className="w-[50%]" />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <label className="text-base md:text-lg  dark:text-white">E-Mail Address</label>
          <input type="email" className=" border border-gray-200 outline-none py-1 md:py-3 text-md rounded-md px-1 dark:bg-black " placeholder="Enter your email.." />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label className="text-base md:text-lg dark:text-white">Password</label>
          <input type="password" className="border border-gray-200 dark:bg-black  outline-none  py-1 md:py-3 text-md rounded-md px-1" placeholder="Enter your password.." />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 ">
            <input id="login-checkbox" className="h-4 w-4 dark:bg-black " type="checkbox" />
            <label htmlFor="login-checkbox" className="text-base  dark:text-white">Remember me</label>
          </div>
          <p className="text-base  dark:text-white">Forgot password ?</p>
        </div>
        <button className="  bg-[#5B0913] rounded-sm md:rounded-xl  text-white px-4 w-[100%] py-1 md:py-3 mt-4 ">Sign in</button>
        <p className="text-center mt-4  dark:text-white">Dont have an account yet? <Link to="/register"><span className="text-[#5B0913] font-semibold">Register</span></Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
