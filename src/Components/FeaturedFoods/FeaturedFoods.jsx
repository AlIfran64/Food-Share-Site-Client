import React from 'react';
import { Link, useLoaderData } from 'react-router';
import FeaturedFoodCard from './FeaturedFoodCard';

const FeaturedFoods = () => {
  const featuredFoodData = useLoaderData();
  const data = featuredFoodData.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto my-20">
        {/* Header */}
        <div className="text-center mb-15">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#344D83]">
            Featured <span className="text-[#D9224E]">Foods</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Explore the Most Generously Shared Meals Today
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 md:gap-8">
          {
            data.map((food) => (
              <FeaturedFoodCard key={food._id} food={food} />
            ))
          }
        </div>

        {/* Button */}
        <div className='flex justify-center items-center mt-16'>
          <Link to={'/availableFoods'}>
            <button className="px-6 py-3 bg-[#344D83] text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-black hover:shadow-lg transition duration-300 ease-in-out">
              Show All
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedFoods;
