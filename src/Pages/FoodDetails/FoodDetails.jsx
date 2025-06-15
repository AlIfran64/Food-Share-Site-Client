import React from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';

const FoodDetails = () => {

  const food = useLoaderData();

  const {
    additionalNotes,
    expiredDate,
    foodImage,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
    foodDonarName,
    foodDonarEmail,
    foodDonarImage
  } = food;

  return (
    <section className="py-10 lg:py-20 px-4 sm:px-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Food Image */}
        <div className="h-full w-full">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-full object-cover lg:rounded-l-3xl"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 flex flex-col justify-between text-black">

          <div>
            <h2 className="text-4xl font-bold mb-2 text-[#344D83]">{foodName}</h2>
            <p className="text-sm text-gray-500 mb-6">A generous contribution from our community.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-base">
              <p><strong>Status:</strong> <span className={`font-semibold ${foodStatus === 'available' ? 'text-green-600' : 'text-red-600'}`}>{foodStatus}</span></p>
              <p><strong>Quantity:</strong> {foodQuantity}</p>
              <p><strong>Pickup Location:</strong> {pickupLocation}</p>
              <p><strong>Expire Date:</strong> {expiredDate}</p>
            </div>

            {additionalNotes && (
              <div className="bg-gray-100 p-4 rounded-xl text-gray-700 italic border-l-4 border-[#D9224E] mt-4">
                “{additionalNotes}”
              </div>
            )}

            {/* Donor Info */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#344D83] mb-3">Food Donor Information</h3>
              <div className="flex items-center gap-4 bg-[#f9fafb] border rounded-xl p-4 shadow-sm">
                <img
                  src={foodDonarImage}
                  alt={foodDonarName}
                  className="w-16 h-16 object-cover rounded-full border-2 border-[#344D83]"
                />
                <div>
                  <p className="font-bold text-lg">{foodDonarName}</p>
                  <p className="text-sm text-gray-500">{foodDonarEmail}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Request Button */}
          <div className="mt-8">
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#344D83] to-[#D9224E] text-white font-semibold text-lg shadow-md hover:opacity-90 transition-all duration-300">
              Request This Food
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
