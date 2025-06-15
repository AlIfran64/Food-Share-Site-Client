import React from 'react';
import { useLoaderData, useLocation } from 'react-router';
import AvailableFoodsCard from './AvailableFoodsCard';

const AvailableFoods = () => {
  const availableFoodData = useLoaderData();
  const location = useLocation();


  // Filter only available items
  const filteredData = availableFoodData.filter((data) => data.foodStatus === "available");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-15">
          <h2 className="text-4xl font-extrabold">
            Available Foods
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover all food items that are ready to be shared right now!
          </p>
        </div>

        {/* Grid layout */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {
              filteredData.map((data) => (
                <AvailableFoodsCard key={data._id} data={data} />
              ))
            }
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No available foods at the moment. Please check back later.
          </p>
        )}
      </div>
    </section>
  );
};

export default AvailableFoods;
