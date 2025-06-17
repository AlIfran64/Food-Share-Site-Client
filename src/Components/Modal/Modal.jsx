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
        requestDate
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
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-8 relative max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-semibold mb-6">Request Food</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
          <div>
            <label className="block mb-2 font-semibold">Food Image</label>
            <img src={food.foodImage} alt={food.foodName} className="w-full h-80 object-cover rounded-md" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input readOnly value={food.foodName} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={food._id} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={food.foodDonarName} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={food.foodDonarEmail} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={user?.email || ''} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={requestDate} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={food.pickupLocation} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
            <input readOnly value={food.expiredDate} className="w-full px-3 py-2 bg-gray-100 rounded-md" />
          </div>
          <textarea placeholder="Write your note here..." className="w-full px-4 py-3 border border-gray-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#344D83]" rows="4"></textarea>
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-5 py-2 text-gray-600 border border-gray-400 rounded-md hover:bg-gray-100 transition">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-[#344D83] text-white rounded-md hover:opacity-90 transition" disabled={isLoading}>{isLoading ? "Requesting..." : "Request Food"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;