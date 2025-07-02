import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import slider1 from '../../../../src/assets/images/slider-1.webp';
import slider2 from '../../../../src/assets/images/slider-2.webp';
import slider3 from '../../../../src/assets/images/slider-3.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full h-[280px] lg:h-[600px]"
    >

      {/* Slider-1 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img
            src={slider1}
            alt="slider-1 image"
            className="w-full h-full lg:h-[600px] object-cover"
          />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-12 lg:px-20">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-start">
              Connect Excess Food to <br /> Empty Plates
            </h2>
            <p className="mb-5 text-xs sm:text-sm lg:text-xl text-start">
              Join a platform where individuals and organizations turn surplus food into <br /> meaningful support. Simple to donate, easy to manage, and impactful.
            </p>
            <p className="mb-1 text-xs sm:text-sm lg:text-lg font-semibold tracking-wide opacity-80">
              | Trusted by 5,000+ users
            </p>
            <p className="mb-8 text-xs sm:text-sm lg:text-lg font-semibold tracking-wide opacity-80">
              | Over 20,000 meals shared
            </p>
            <Link to={'/availableFoods'}>
              <button className="bg-[#D8214D] text-white font-medium rounded hover:bg-gray-200 hover:text-black px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-lg">
                Explore Available Food
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider-2 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img
            src={slider2}
            alt="slider-2 image"
            className="w-full h-full lg:h-[600px] object-cover"
          />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-12 lg:px-20">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-start">
              Build a Hunger-Free Community
            </h2>
            <p className="mb-5 text-xs sm:text-sm lg:text-xl text-start">
              Your extra food can make someone’s day. Share locally, track requests, and <br /> be part of a movement that feeds hope.
            </p>
            <p className="mb-1 text-xs sm:text-sm lg:text-lg font-semibold tracking-wide opacity-80">
              | Serving 30+ local areas
            </p>
            <p className="mb-8 text-xs sm:text-sm lg:text-lg font-semibold tracking-wide opacity-80">
              | Backed by 100+ verified partners
            </p>
            <Link to={'/addFood'}>
              <button className="bg-[#D8214D] text-white font-medium rounded hover:bg-gray-200 hover:text-black px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-lg">
                Add Food Now
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider-3 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img
            src={slider3}
            alt="slider-3 image"
            className="w-full h-full lg:h-[600px] object-cover"
          />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-12 lg:px-20">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-start">
              Got Extra Food? Someone <br /> Needs It.
            </h2>
            <p className="mb-5 text-xs sm:text-sm lg:text-xl text-start">
              Reduce waste, respond to real needs, and make a difference — one <br /> click is all it takes.
            </p>
            <p className="mb-1 text-xs sm:text-sm lg:text-lg font-semibold tracking-wide opacity-80">
              | 98% user satisfaction
            </p>
            <p className="mb-8 text-xs sm:text-sm lg:text-lg font-semibold tracking-wide opacity-80">
              | Live request tracking available
            </p>
            <Link to={'/myFoodRequest'}>
              <button className="bg-[#D8214D] text-white font-medium rounded hover:bg-gray-200 hover:text-black px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-lg">
                View Food Requests
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
