import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};

  const handleAddFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const addFormData = Object.fromEntries(formData.entries());

    axios
      .post('https://sharebite-server-coral.vercel.app/shareFood', addFormData, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then(() => {
        toast.success('Food Added Successfully!');
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message || 'Something went wrong');
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-2">Add Food</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Fill in the form to share food with those in need.
      </p>

      <form
        onSubmit={handleAddFood}
        className="bg-white dark:bg-[#1F2937] shadow-md p-6 rounded-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Name */}
          <div>
            <label className="block font-medium mb-1">Food Name</label>
            <input
              type="text"
              name="foodName"
              required
              className="w-full border dark:border-gray-600 px-4 py-2 rounded bg-transparent dark:text-white"
              placeholder="Enter food name"
            />
          </div>

          {/* Food Image URL */}
          <div>
            <label className="block font-medium mb-1">Food Image URL</label>
            <input
              type="text"
              name="foodImage"
              required
              className="w-full border dark:border-gray-600 px-4 py-2 rounded bg-transparent dark:text-white"
              placeholder="Image URL"
            />
          </div>

          {/* Food Quantity */}
          <div>
            <label className="block font-medium mb-1">Food Quantity</label>
            <input
              type="number"
              name="foodQuantity"
              required
              className="w-full border dark:border-gray-600 px-4 py-2 rounded bg-transparent dark:text-white"
              placeholder="e.g. 10"
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block font-medium mb-1">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              required
              className="w-full border dark:border-gray-600 px-4 py-2 rounded bg-transparent dark:text-white"
              placeholder="Enter pickup location"
            />
          </div>

          {/* Expired Date */}
          <div>
            <label className="block font-medium mb-1">Expired Date</label>
            <input
              type="date"
              name="expiredDate"
              required
              className="w-full border dark:border-gray-600 px-4 py-2 rounded bg-transparent dark:text-white"
            />
          </div>

          {/* Food Status */}
          <div>
            <label className="block font-medium mb-1">Food Status</label>
            <input
              type="text"
              name="foodStatus"
              value="available"
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Donor Name */}
          <div>
            <label className="block font-medium mb-1">Donor Name</label>
            <input
              type="text"
              name="foodDonarName"
              value={displayName || ''}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Donor Email */}
          <div>
            <label className="block font-medium mb-1">Donor Email</label>
            <input
              type="email"
              name="foodDonarEmail"
              value={email || ''}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Donor Image */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-1">Donor Image URL</label>
            <input
              type="text"
              name="foodDonarImage"
              value={photoURL || ''}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block font-medium mb-1">Additional Notes</label>
          <textarea
            name="additionalNotes"
            rows="3"
            className="w-full border dark:border-gray-600 px-4 py-2 rounded bg-transparent dark:text-white"
            placeholder="Any extra info..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#D9224E] hover:bg-[#b81c3f] text-white py-2 px-4 rounded font-semibold transition-colors"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
