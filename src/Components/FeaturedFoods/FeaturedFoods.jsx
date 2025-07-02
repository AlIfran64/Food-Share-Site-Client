import React from 'react';
import { Link, useLoaderData } from 'react-router';
import FeaturedFoodCard from './FeaturedFoodCard';

const FeaturedFoods = () => {
  const featuredFoodData = useLoaderData();

  // Slice top 6 foods and sort by quantity (descending)
  const sortedData = featuredFoodData
    .sort((a, b) => parseInt(b.foodQuantity) - parseInt(a.foodQuantity))
    .slice(0, 6);

  return (
    <section className="my-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:my-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured Foods
          </h2>
          <p className="text-base sm:text-lg dark:text-gray-400 border border-transparent dark:border-gray-700 mt-4 max-w-xl mx-auto">
            Explore the most generously shared meals that are helping fight hunger and bring communities together today
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {sortedData.map((food) => (
            <FeaturedFoodCard key={food._id} food={food} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <Link to={"/availableFoods"}>
            <button className="bg-[#D9224E] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-sm hover:bg-black transition cursor-pointer font-semibold text-sm sm:text-base">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;
