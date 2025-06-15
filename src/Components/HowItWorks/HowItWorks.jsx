import React from 'react';
import { FaBoxOpen, FaMapMarkerAlt, FaCheckCircle, FaLock } from 'react-icons/fa';
import foodShare from '../../../src/assets/images/foodshare.jpg';

const HowItWorks = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-[#FFF7ED] gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-[#333] px-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#F5921D] mb-4 leading-snug">
          How It Works?
        </h2>
        <p className="text-lg lg:text-xl font-medium mb-4">
          Empowering Communities Through Food Sharing
        </p>
        <p className="text-base mb-4 leading-relaxed text-justify">
          We connect individuals and organizations with surplus food to those who need it most.
          Whether you're a restaurant, household, or donor, you can list available food items in just a few clicks.
          Hungry users can browse listings, request items, and arrange pickup—helping reduce food waste while building a compassionate, sustainable community.
        </p>

        <div className="space-y-3 mt-6 text-sm lg:text-base font-medium text-gray-700">
          <div className="flex items-center gap-3">
            <FaBoxOpen className="text-[#F5921D] text-xl" />
            <span>Add and manage food listings easily</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#F5921D] text-xl" />
            <span>Discover nearby available food</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-[#F5921D] text-xl" />
            <span>Real-time requests and status updates</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLock className="text-[#F5921D] text-xl" />
            <span>Safe, private, and secure user experience</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className=" lg:w-1/2">
        <img
          src={foodShare}
          alt="Food Sharing Illustration"
          className="w-full h-full object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
