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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto lg:my-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-15">
          <h2 className="text-4xl font-bold">
            Featured Foods
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore the Most Generously Shared Meals Today
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {sortedData.map((food) => (
            <FeaturedFoodCard key={food._id} food={food} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-8 lg:mt-15">
          <Link to={"/availableFoods"}>
            <button className="bg-[#D9224E] text-white px-8 py-3 rounded-sm hover:bg-black transition cursor-pointer font-semibold">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;
