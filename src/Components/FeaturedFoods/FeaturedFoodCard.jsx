import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const FeaturedFoodCard = ({ food }) => {

  // Destructuring
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
      className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden my-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-52 object-cover"
        />
        <span
          className={`absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full
          ${foodStatus === 'available' ? 'bg-green-500 text-white'
              : foodStatus === 'unavailable' ? 'bg-red-400 text-white'
                : foodStatus === 'requested' ? 'bg-orange-500 text-white'
                  : 'bg-black text-white'
            }`}>
          {foodStatus}
        </span>

      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{foodName}</h3>
        <p className="text-sm text-gray-500">
          <strong>Quantity:</strong> {foodQuantity}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Location:</strong> {pickupLocation}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Expires:</strong> {expiredDate}
        </p>
        {additionalNotes && (
          <p className="text-sm text-gray-600 italic mt-2">
            “{additionalNotes.length > 80 ? additionalNotes.slice(0, 80) + '...' : additionalNotes}”
          </p>
        )}
        <Link to={`/shareFood/${_id}`}>
          <button
            className="mt-3 w-full py-2 text-center bg-[#344D83] text-white font-semibold rounded hover:bg-black transition-colors cursor-pointer"
          >
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedFoodCard;
