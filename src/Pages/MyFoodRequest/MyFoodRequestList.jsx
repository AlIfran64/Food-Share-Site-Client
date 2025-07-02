import React, { use } from 'react';
import MyFoodRequestRow from './MyFoodRequestRow';
import { FaUtensils } from 'react-icons/fa';

const MyFoodRequestList = ({ requestPromise }) => {
  const data = use(requestPromise);

  return (
    <div>
      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
          <FaUtensils className="text-6xl text-gray-400 dark:text-gray-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No Food Request Found</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            It looks like there are no food requests available right now. Please check back later or try requesting some!
          </p>
        </div>
      ) : (
        // Scrollable container for wide tables
        <div className="w-full overflow-x-auto">
          <table className="min-w-[1200px] table-auto bg-white dark:bg-[#1D232A] border border-gray-200 dark:border-gray-700 shadow-md rounded-md">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
              <tr>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">Image</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Name</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Food Id</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Donor Name</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Donor Email</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Your Email</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Request Date</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Expire Date</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-start whitespace-nowrap">Pickup Location</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 whitespace-nowrap">Status</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 whitespace-nowrap">Notes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <MyFoodRequestRow key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequestList;
