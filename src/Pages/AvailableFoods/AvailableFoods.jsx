import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import AvailableFoodsCard from './AvailableFoodsCard';

const AvailableFoods = () => {
  const availableFoodData = useLoaderData();
  const location = useLocation();

  const [isThreeColumn, setIsThreeColumn] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  const toggleLayout = () => {
    setIsThreeColumn((prev) => !prev);
  };

  const handleSearch = () => {
    setQuery(searchText.trim());
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Step 1: Filter available foods only
  let filteredData = availableFoodData.filter(
    (data) => data.foodStatus === 'available'
  );

  // Step 2: Apply search filter
  if (query) {
    filteredData = filteredData.filter((data) =>
      data.foodName.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Step 3: Sort by expiredDate
  filteredData.sort((a, b) => {
    const dateA = new Date(a.expiredDate);
    const dateB = new Date(b.expiredDate);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">
            {query ? 'Searched Foods' : 'Available Foods'}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {query
              ? `Results for "${query}"`
              : 'Discover all food items that are ready to be shared right now!'}
          </p>

          {/* Search & Sort Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {/* Search Box */}
            <input
              type="text"
              placeholder="Search food by name..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm w-full max-w-xs bg-white dark:bg-gray-800 text-black dark:text-white"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-[#D8224E] hover:bg-[#b81c3f] text-white px-6 py-2 rounded font-semibold"
            >
              Search
            </button>


            {/* Sort by Expire Date */}
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
            >
              <option value="asc">Expiring Soon</option>
              <option value="desc">Expiring Later</option>
            </select>

            {/* Layout Toggle */}
            <div className="hidden md:block">
              <button
                onClick={toggleLayout}
                className="bg-black hover:bg-gray-800 dark:bg-gray-100 dark:text-black dark:hover:bg-white text-white px-6 py-2 rounded font-semibold transition duration-200"
              >
                Change Layout
              </button>
            </div>
          </div>
        </div>

        {/* Grid layout */}
        {filteredData.length > 0 ? (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${isThreeColumn ? 'lg:grid-cols-3' : 'lg:grid-cols-2 justify-items-center'
              } gap-8 mt-10`}
          >
            {filteredData.map((data) => (
              <AvailableFoodsCard key={data._id} data={data} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg mt-10">
            No {query ? 'searched' : 'available'} food items found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AvailableFoods;
