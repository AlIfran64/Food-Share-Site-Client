import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import AvailableFoodsCard from './AvailableFoodsCard';

const AvailableFoods = () => {
  const availableFoodData = useLoaderData();
  const location = useLocation();

  const [isThreeColumn, setIsThreeColumn] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const toggleLayout = () => {
    setIsThreeColumn((prev) => !prev);
  };

  // Filter only "available" food
  const availableOnly = availableFoodData.filter(data => data.foodStatus === "available");

  // If query is applied, filter it
  const filteredData = query
    ? availableOnly.filter((data) =>
      data.foodName.toLowerCase().includes(query.toLowerCase())
    )
    : availableOnly;

  const handleSearch = () => {
    setQuery(searchText.trim());
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">
            {query ? "Searched Foods" : "Available Foods"}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {query
              ? `Results for "${query}"`
              : "Discover all food items that are ready to be shared right now!"}
          </p>

          {/* Search Box */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Search food by name..."
              className="px-4 py-2 border rounded-md shadow-sm w-full max-w-xs"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-[#D8224E] hover:bg-[#d8224fa4] text-white px-6 py-2 rounded font-semibold"
            >
              Search
            </button>
          </div>

          {/* Layout Toggle Button */}
          <div className="mt-6 hidden md:flex justify-center">
            <button
              onClick={toggleLayout}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded font-semibold transition duration-200"
            >
              Change Layout
            </button>
          </div>
        </div>

        {/* Grid layout */}
        {filteredData.length > 0 ? (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${isThreeColumn ? "lg:grid-cols-3" : "lg:grid-cols-2 justify-items-center"
              } gap-8 mt-10`}
          >
            {filteredData.map((data) => (
              <AvailableFoodsCard key={data._id} data={data} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No {query ? "searched" : "available"} food items found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AvailableFoods;
