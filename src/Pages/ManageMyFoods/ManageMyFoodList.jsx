import React, { use, useState } from 'react';
import ManageMyFoodRow from './ManageMyFoodRow';
import { FaUtensils } from 'react-icons/fa';

const ManageMyFoodList = ({ manageMyFoodPromise }) => {
  const initialData = use(manageMyFoodPromise);
  const [food, setFood] = useState(initialData);

  return (
    <div className="w-full">
      {food.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4 text-gray-700 dark:text-gray-300">
          <FaUtensils className="text-6xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">No Food Items Found</h2>
          <p className="text-sm max-w-md">
            It looks like there are no food items available right now. Please check back later or try adding some!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <table className="min-w-full bg-white dark:bg-[#1D232A] text-gray-800 dark:text-gray-200">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600">Image</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-start">Name</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600">Quantity</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-start">Pickup Location</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600">Status</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {food.map((item) => (
                <ManageMyFoodRow
                  key={item._id}
                  item={item}
                  food={food}
                  setFood={setFood}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoodList;
