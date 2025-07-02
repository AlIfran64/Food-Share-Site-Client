import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authentication/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const Modal = ({ onClose, food }) => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const requestDate = new Date().toISOString().split('T')[0];

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const res = await axios.patch(`https://sharebite-server-coral.vercel.app/shareFood/${food._id}`, {
        foodStatus: 'requested',
        requestedBy: user.email,
        requestDate,
      }, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        toast.success("Food requested successfully!");
        queryClient.invalidateQueries(['foodDetails', food._id]);
        onClose();
      } else {
        toast.error("No changes made. Maybe already requested.");
      }
    },
    onError: () => {
      toast.error("Something went wrong while requesting food.");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-[#1D232A] w-full max-w-2xl rounded-xl shadow-xl p-6 sm:p-8 relative max-h-[95vh] overflow-y-auto text-gray-800 dark:text-gray-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Request Food</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image */}
          <div>
            <label className="block mb-2 font-semibold">Food Image</label>
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-64 sm:h-80 object-cover rounded-md"
            />
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input readOnly value={food.foodName} className="input-dark" />
            <input readOnly value={food._id} className="input-dark" />
            <input readOnly value={food.foodDonarName} className="input-dark" />
            <input readOnly value={food.foodDonarEmail} className="input-dark" />
            <input readOnly value={user?.email || ''} className="input-dark" />
            <input readOnly value={requestDate} className="input-dark" />
            <input readOnly value={food.pickupLocation} className="input-dark" />
            <input readOnly value={food.expiredDate} className="input-dark" />
          </div>

          {/* Note */}
          <textarea
            placeholder="Write your note here..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md resize-none bg-white dark:bg-[#2A323C] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#344D83] dark:focus:ring-[#4c75bf]"
            rows="4"
          ></textarea>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-[#344D83] hover:bg-[#2c3b6e] text-white rounded-md font-semibold transition disabled:opacity-60"
            >
              {isLoading ? 'Requesting...' : 'Request Food'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
