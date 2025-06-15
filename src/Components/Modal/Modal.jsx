import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authentication/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Modal = ({ onClose, food }) => {
  const { user } = useContext(AuthContext);

  const {
    expiredDate,
    foodImage,
    foodName,
    pickupLocation,
    foodDonarName,
    foodDonarEmail,
    _id
  } = food;

  console.log(food);


  // Only date part, no time
  const requestDate = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();


    // send data to backend
    axios.patch(`http://localhost:3000/shareFood/${_id}`, {
      foodStatus: 'requested',
    })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          toast.success("Food requested successfully!")
          onClose(); // close modal after success
        } else {
          toast.error("No changes made. Maybe already requested.")
        }
      })
      .catch(err => {
        console.error(err);
        toast.error("Something went wrong while requesting food.", err);
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-8 relative max-h-[95vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6">Request Food</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">

          <div>
            <label className="block mb-2 font-semibold">Food Image</label>
            <img
              src={foodImage}
              alt={foodName}
              className="w-full h-80 object-cover rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Food Name</label>
              <input type="text" value={foodName} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Food ID</label>
              <input type="text" value={_id} readOnly className="w-full px-3 py-2 bg-gray-100  rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Donor Name</label>
              <input type="text" value={foodDonarName} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Donor Email</label>
              <input type="text" value={foodDonarEmail} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input type="text" value={user?.email || ''} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Request Date</label>
              <input type="text" value={requestDate} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Pickup Location</label>
              <input type="text" value={pickupLocation} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Expire Date</label>
              <input type="text" value={expiredDate} readOnly className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-700 cursor-not-allowed" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Additional Notes</label>
            <textarea
              name="additionalNotes"
              placeholder="Write your note here..."
              className="w-full px-4 py-3 border  border-gray-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#344D83]"
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-gray-600 border border-gray-400 rounded-md hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#344D83] text-white rounded-md hover:opacity-90 transition"
            >
              Request Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
