import React from 'react';
import ourteam from "../assets/ourteam.jpg"
import ourvision from "../assets/ourvision.webp"


const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">About Us</h2>
        <p className="text-xl text-gray-700 mb-10">
          Welcome to our blog-based application! We provide a dynamic platform where stories come alive, ideas flourish, and a community of passionate individuals connects and grows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img 
              src={ourvision}
              alt="Our Vision" 
              className="w-full h-60 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We believe in the power of storytelling and open dialogue. Our vision is to create a space where creativity thrives and every voice contributes to meaningful conversations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img 
              src={ourteam}
              alt="Our Team" 
              className=" h-60 w-full object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              Our team consists of experts passionate about technology, writing, and community engagement. We collaborate to continuously enhance our platform for a seamless user experience.
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-700 mb-10">
          Whether you're here to write, read, or explore, we hope you find our platform inspiring and user-friendly. Connect with others and explore new ideas with us!
        </p>
        <div className="flex justify-center">
          <a 
            href="/contact"
            className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
