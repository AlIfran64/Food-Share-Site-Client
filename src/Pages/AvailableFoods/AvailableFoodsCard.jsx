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
      className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-52 object-cover"
        />
        <span
          className={`absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full ${foodStatus === 'available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
        >
          {foodStatus}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{foodName}</h3>

        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Quantity:</strong> {foodQuantity}</p>
          <p><strong>Location:</strong> {pickupLocation}</p>
          <p><strong>Expires:</strong> {expiredDate}</p>
        </div>

        {additionalNotes && (
          <p className="text-sm text-gray-500 italic mt-2">
            “{additionalNotes.length > 80 ? additionalNotes.slice(0, 80) + '...' : additionalNotes}”
          </p>
        )}

        <Link to={`/shareFood/${_id}`}>
          <button className="mt-3 w-full py-2 text-center bg-[#F6931E] text-white font-semibold rounded hover:bg-black transition-colors cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AvailableFoodsCard;
