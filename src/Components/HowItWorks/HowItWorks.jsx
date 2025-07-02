import React from 'react';
import { FaBoxOpen, FaMapMarkerAlt, FaCheckCircle, FaLock } from 'react-icons/fa';
import foodShare from '../../../src/assets/images/foodshare.jpg';

const HowItWorks = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-4 md:px-10 lg:px-20 py-20 bg-[#FFF7ED] dark:bg-[#21272e] transition-colors duration-300">

      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-[#333] dark:text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5921D] mb-4 leading-snug">
          How It Works?
        </h2>
        <p className="text-lg lg:text-xl font-medium mb-4">
          Empowering Communities Through Food Sharing
        </p>
        <p className="text-base lg:text-lg mb-4 leading-relaxed text-justify text-gray-700 dark:text-gray-300">
          We connect individuals and organizations with surplus food to those who need it most.
          Whether you're a restaurant, household, or donor, you can list available food items in just a few clicks.
          Hungry users can browse listings, request items, and arrange pickup—helping reduce food waste while building a compassionate, sustainable community.
        </p>

        <div className="space-y-3 mt-6 mb-10 lg:mb-1 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300">
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
      <div className="w-full lg:w-1/2">
        <img
          src={foodShare}
          alt="Food Sharing Illustration"
          className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
