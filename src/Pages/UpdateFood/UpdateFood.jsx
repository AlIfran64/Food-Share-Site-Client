import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateFood = () => {

  const { user } = useContext(AuthContext);
  const data = useLoaderData();



  // Destructure
  const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus } = data;

  // handle update
  const handleUpdate = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    console.log(updateData);

    // send edited data to backend
    axios.put(`http://localhost:3000/shareFood/${_id}`, updateData)
      .then(res => {
        console.log(res.data);
        Swal.fire({
          title: "Updated successfully!",
          icon: "success",
          draggable: true
        });
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          title: "Oops!",
          text: "Failed to update the food item. Please try again later.",
          icon: "error",
          draggable: true,
          confirmButtonText: "OK"
        });

      });



  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Update Food</h2>
      <p className="text-center text-gray-600 mb-8">
        Fill in the form to share food with those in need.
      </p>

      <form onSubmit={handleUpdate} className="bg-white shadow-md p-6 rounded-lg space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Name */}
          <div>
            <label className="block font-medium">Food Name</label>
            <input
              type="text"
              name="foodName"
              defaultValue={foodName}
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
              defaultValue={foodImage}
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
              defaultValue={foodQuantity}
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
              defaultValue={pickupLocation}
              className="w-full border px-4 py-2 rounded mt-1"
              placeholder="Enter pickup location"
            />
          </div>

          {/* Expired Date */}
          <div>
            <label className="block font-medium">Expired Date</label>
            <input
              type="date"
              name="expiredDate"
              defaultValue={expiredDate}
              className="w-full border px-4 py-2 rounded mt-1"
            />
          </div>

          {/* Food Status (disabled) */}
          <div>
            <label className="block font-medium">Food Status</label>
            <input
              type="text"
              name='foodStatus'
              defaultValue={foodStatus}
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
              value={user?.displayName || ''}
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
              value={user?.email || ''}
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
              value={user?.photoURL || ''}
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
            defaultValue={additionalNotes}
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
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;