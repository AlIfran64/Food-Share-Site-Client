import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';

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
      className="mySwiper w-full h-[300px] lg:h-[700px]"
    >

      {/* Slider-1 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="/src/assets/images/slider-1.webp" alt="slider-1 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-start">Connect Excess Food to <br /> Empty Plates</h2>
            <p className="mb-5 text-sm lg:text-xl text-start">Join a platform where individuals and organizations turn surplus food into <br /> meaningful support. Simple to donate, easy to manage, and impactful.</p>
            <p className="mb-1 text-xs  lg:text-lg font-semibold tracking-wide opacity-80">| Trusted by 5,000+ users</p>
            <p className="mb-8 text-xs lg:text-lg font-semibold tracking-wide opacity-80">| Over 20,000 meals shared</p>
            <Link to={'/availableFoods'}>
              <button className="bg-[#D8214D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black text-xs lg:text-lg">Explore Available Food</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider -2 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="/src/assets/images/slider-2.webp" alt="slider-1 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-start">Build a Hunger-Free Community</h2>
            <p className="mb-5 text-sm lg:text-xl text-start">Your extra food can make someone’s day. Share locally, track requests, and <br /> be part of a movement that feeds hope.</p>
            <p className="mb-1 text-xs  lg:text-lg font-semibold tracking-wide opacity-80">| Serving 30+ local areas</p>
            <p className="mb-8 text-xs lg:text-lg font-semibold tracking-wide opacity-80">| Backed by 100+ verified partners</p>
            <Link to={'/addFood'}>
              <button className="bg-[#D8214D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black text-xs lg:text-lg">Add Food Now</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* slider-3 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="/src/assets/images/slider-3.webp" alt="slider-1 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 text-start">Got Extra Food? Someone <br /> Needs It.</h2>
            <p className="mb-5 text-sm lg:text-xl text-start">Reduce waste, respond to real needs, and make a difference — one <br /> click is all it takes.</p>
            <p className="mb-1 text-xs  lg:text-lg font-semibold tracking-wide opacity-80">| 98% user satisfaction </p>
            <p className="mb-8 text-xs lg:text-lg font-semibold tracking-wide opacity-80">| Live request tracking available</p>
            <Link to={'/myFoodRequest'}>
              <button className="bg-[#D8214D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black text-xs lg:text-lg">View Food Requests</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;