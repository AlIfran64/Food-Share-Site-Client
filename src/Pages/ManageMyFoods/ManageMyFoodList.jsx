import React, { use } from 'react';
import ManageMyFoodRow from './ManageMyFoodRow';
import { FaUtensils } from 'react-icons/fa';

const ManageMyFoodList = ({ manageMyFoodPromise }) => {

  const data = use(manageMyFoodPromise);

  return (
    <div>
      {
        data.length === 0 ?
          <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
            <FaUtensils className="text-6xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Food Items Found</h2>
            <p className="text-gray-500 text-sm max-w-md">
              It looks like there are no food items available right now. Please check back later or try adding some!
            </p>
          </div>
          :
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="py-3 px-4 border-b">Image</th>
                  <th className="py-3 px-4 border-b text-start">Name</th>
                  <th className="py-3 px-4 border-b">Quantity</th>
                  <th className="py-3 px-4 border-b text-start">Pickup Location</th>
                  <th className="py-3 px-4 border-b">Status</th>
                  <th className="py-3 px-4 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item) => <ManageMyFoodRow key={item._id} item={item}></ManageMyFoodRow>)
                }
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default ManageMyFoodList;