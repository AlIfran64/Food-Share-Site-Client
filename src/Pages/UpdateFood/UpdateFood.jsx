import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateFood = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    axios
      .put(`https://sharebite-server-coral.vercel.app/shareFood/${_id}`, updateData, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then(() => {
        Swal.fire({
          title: 'Updated successfully!',
          icon: 'success',
          confirmButtonColor: '#D9224E',
        });
      })
      .catch(() => {
        Swal.fire({
          title: 'Oops!',
          text: 'Failed to update the food item. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#D9224E',
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
        Update Food
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Fill in the form to share food with those in need.
      </p>

      <form
        onSubmit={handleUpdate}
        className="bg-white dark:bg-[#1D232A] shadow-md p-6 sm:p-8 rounded-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Name */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Food Name</label>
            <input
              type="text"
              name="foodName"
              defaultValue={foodName}
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100"
              placeholder="Enter food name"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Food Image URL</label>
            <input
              type="text"
              name="foodImage"
              defaultValue={foodImage}
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100"
              placeholder="Image URL"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Food Quantity</label>
            <input
              type="number"
              name="foodQuantity"
              defaultValue={foodQuantity}
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100"
              placeholder="e.g. 10"
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              defaultValue={pickupLocation}
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100"
              placeholder="Enter pickup location"
            />
          </div>

          {/* Expired Date */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Expired Date</label>
            <input
              type="date"
              name="expiredDate"
              defaultValue={expiredDate}
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Food Status */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Food Status</label>
            <input
              type="text"
              name="foodStatus"
              defaultValue={foodStatus}
              readOnly
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Donor Name */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Donor Name</label>
            <input
              type="text"
              name="foodDonarName"
              value={user?.displayName || ''}
              readOnly
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Donor Email */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">Donor Email</label>
            <input
              type="email"
              name="foodDonarEmail"
              value={user?.email || ''}
              readOnly
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Donor Image */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700 dark:text-gray-300">Donor Image URL</label>
            <input
              type="text"
              name="foodDonarImage"
              value={user?.photoURL || ''}
              readOnly
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Additional Notes</label>
          <textarea
            name="additionalNotes"
            defaultValue={additionalNotes}
            rows="3"
            className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded mt-1 bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100"
            placeholder="Any extra info..."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#D9224E] hover:bg-[#b81c3f] text-white py-2 px-4 rounded font-semibold transition-colors duration-300"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
