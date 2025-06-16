import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};


  // Handle add food
  const handleAddFood = (e) => {
    e.preventDefault();

    // get form input
    const form = e.target;
    const formData = new FormData(form);
    const addFormData = Object.fromEntries(formData.entries());

    // Send data to backend
    axios.post('http://localhost:3000/shareFood', addFormData)
      .then(function (response) {
        console.log(response);
        toast.success("Food Added Successfully!");
        form.reset();
      })
      .catch(function (error) {
        toast.error(error);
      });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Add Food</h2>
      <p className="text-center text-gray-600 mb-8">
        Fill in the form to share food with those in need.
      </p>

      <form onSubmit={handleAddFood} className="bg-white shadow-md p-6 rounded-lg space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Name */}
          <div>
            <label className="block font-medium">Food Name</label>
            <input
              type="text"
              name="foodName"
              required
              className="w-full border px-4 py-2 rounded mt-1"
              placeholder="Enter food name"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="block font-medium">Food Image URL</label>
            <input
              type="text"
              name="foodImage"
              required
              className="w-full border px-4 py-2 rounded mt-1"
              placeholder="Image URL"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium">Food Quantity</label>
            <input
              type="number"
              name="foodQuantity"
              required
              className="w-full border px-4 py-2 rounded mt-1"
              placeholder="e.g. 10"
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block font-medium">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              required
              className="w-full border px-4 py-2 rounded mt-1"
              placeholder="Enter pickup location"
            />
          </div>

          {/* Expired Date/Time */}
          <div>
            <label className="block font-medium">Expired Date</label>
            <input
              type="date"
              name="expiredDate"
              required
              className="w-full border px-4 py-2 rounded mt-1"
            />
          </div>

          {/* Food Status (disabled) */}
          <div>
            <label className="block font-medium">Food Status</label>
            <input
              type="text"
              name='foodStatus'
              value="available"
              readOnly
              className="w-full border px-4 py-2 rounded mt-1 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Donor Name (disabled) */}
          <div>
            <label className="block font-medium">Donor Name</label>
            <input
              type="text"
              name='foodDonarName'
              value={displayName || ''}
              readOnly
              className="w-full border px-4 py-2 rounded mt-1 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Donor Email (disabled) */}
          <div>
            <label className="block font-medium">Donor Email</label>
            <input
              type="email"
              name='foodDonarEmail'
              value={email || ''}
              readOnly
              className="w-full border px-4 py-2 rounded mt-1 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Donor Image (disabled) */}
          <div className="md:col-span-2">
            <label className="block font-medium">Donor Image URL</label>
            <input
              type="text"
              name='foodDonarImage'
              value={photoURL || ''}
              readOnly
              className="w-full border px-4 py-2 rounded mt-1 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Notes - full width */}
        <div>
          <label className="block font-medium">Additional Notes</label>
          <textarea
            name="additionalNotes"
            rows="3"
            className="w-full border px-4 py-2 rounded mt-1"
            placeholder="Any extra info..."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#D9224E] hover:bg-[#b81c3f] text-white py-2 px-4 rounded font-semibold"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
