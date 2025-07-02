import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const FeaturedFoodCard = ({ food }) => {
  const {
    additionalNotes,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    foodStatus,
    _id
  } = food;

  return (
    <motion.div
      className="w-full max-w-sm bg-white dark:bg-[#1D232A] rounded-xl shadow-md overflow-hidden my-4 
                 transition-colors duration-300 border border-transparent dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
        />
        <span
          className={`absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full capitalize
            ${foodStatus === 'available' ? 'bg-green-500 text-white'
              : foodStatus === 'unavailable' ? 'bg-red-400 text-white'
                : foodStatus === 'requested' ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-white'
            }`}
        >
          {foodStatus}
        </span>
      </div>

      <div className="p-4 space-y-2 text-black dark:text-white">
        <h3 className="text-lg sm:text-xl font-bold">{foodName}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Quantity:</strong> {foodQuantity}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Location:</strong> {pickupLocation}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Expires:</strong> {expiredDate}
        </p>

        {additionalNotes && (
          <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-2">
            “{additionalNotes.length > 80 ? additionalNotes.slice(0, 80) + '...' : additionalNotes}”
          </p>
        )}

        <Link to={`/shareFood/${_id}`}>
          <button className="mt-3 w-full py-2 text-center bg-[#344D83] text-white font-semibold rounded hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedFoodCard;
