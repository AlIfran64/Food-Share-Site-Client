import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Modal from '../../Components/Modal/Modal';
import Loading from '../Loading/Loading';

const fetchFoodDetails = async (id) => {
  const res = await fetch(`https://sharebite-server-coral.vercel.app/shareFood/${id}`);
  if (!res.ok) throw new Error('Failed to fetch food details');
  return res.json();
};

const FoodDetails = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const { data: food, isLoading, isError } = useQuery({
    queryKey: ['foodDetails', id],
    queryFn: () => fetchFoodDetails(id),
  });

  if (isLoading) return <Loading />;
  if (isError)
    return <p className="text-red-500 dark:text-red-400 text-center mt-10">Something went wrong!</p>;

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
    foodDonarImage,
    _id,
  } = food;

  return (
    <section className="py-10 lg:py-20 px-4 sm:px-8 bg-gray-50 dark:bg-[#1D232A] min-h-screen font-sans relative transition-colors">
      <div className="max-w-6xl mx-auto bg-white dark:bg-[#1D232A] shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="h-full w-full">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-full object-cover lg:rounded-l-3xl"
          />
        </div>

        {/* Info Section */}
        <div className="p-8 flex flex-col justify-between text-black dark:text-white">
          <div>
            <h2 className="text-4xl font-bold mb-2">{foodName}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              A generous contribution from our community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-base">
              <p>
                <strong>Status:</strong>{' '}
                <span
                  className={`font-semibold ${foodStatus === 'available'
                    ? 'text-green-600 dark:text-green-400'
                    : foodStatus === 'unavailable'
                      ? 'text-red-600 dark:text-red-400'
                      : foodStatus === 'requested'
                        ? 'text-orange-500'
                        : 'text-gray-500'
                    }`}
                >
                  {foodStatus}
                </span>
              </p>
              <p>
                <strong>Quantity:</strong> {foodQuantity}
              </p>
              <p>
                <strong>Pickup Location:</strong> {pickupLocation}
              </p>
              <p>
                <strong>Expire Date:</strong> {expiredDate}
              </p>
            </div>

            {additionalNotes && (
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-gray-700 dark:text-gray-300 italic border-l-4 border-[#D9224E] mt-4">
                “{additionalNotes}”
              </div>
            )}

            {/* Donor Info */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#344D83] dark:text-blue-300 mb-3">
                Food Donor Information
              </h3>
              <div className="flex items-center gap-4 bg-[#f9fafb] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                <img
                  src={foodDonarImage}
                  alt={foodDonarName}
                  className="w-16 h-16 object-cover rounded-full border-2 border-[#344D83] dark:border-blue-300"
                />
                <div>
                  <p className="font-bold text-lg">{foodDonarName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{foodDonarEmail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Button */}
          <div className="mt-8">
            <button
              onClick={() => setModal(true)}
              className="w-full py-3 rounded-lg bg-[#344D83] hover:bg-[#2c3f6a] text-white font-semibold text-lg shadow-md transition duration-300"
            >
              Request This Food
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && <Modal food={food} onClose={() => setModal(false)} />}
    </section>
  );
};

export default FoodDetails;
