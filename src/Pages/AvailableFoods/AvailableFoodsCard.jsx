import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const AvailableFoodsCard = ({ data }) => {
  const {
    additionalNotes,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    foodStatus,
    _id
  } = data;

  return (
    <motion.div
      className="w-full max-w-sm bg-white dark:bg-[#1D232A] border border-transparent dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Image + Status */}
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-52 object-cover rounded-t-xl"
        />
        <span
          className={`absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full ${foodStatus === 'available'
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
            }`}
        >
          {foodStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 text-gray-800 dark:text-gray-200">
        <h3 className="text-xl font-bold">{foodName}</h3>

        <div className="text-sm space-y-1">
          <p>
            <strong>Quantity:</strong> {foodQuantity}
          </p>
          <p>
            <strong>Location:</strong> {pickupLocation}
          </p>
          <p>
            <strong>Expires:</strong> {expiredDate}
          </p>
        </div>

        {additionalNotes && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
            “{additionalNotes.length > 80 ? additionalNotes.slice(0, 80) + '...' : additionalNotes}”
          </p>
        )}

        <Link to={`/shareFood/${_id}`}>
          <button className="mt-3 w-full py-2 text-center bg-[#F6931E] hover:bg-[#d97706] text-white font-semibold rounded transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AvailableFoodsCard;
