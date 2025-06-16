import React, { use } from 'react';
import MyFoodRequestRow from './MyFoodRequestRow';
import { FaUtensils } from 'react-icons/fa';

const MyFoodRequestList = ({ requestPromise }) => {

  const data = use(requestPromise);

  return (
    <div>
      {
        data.length === 0 ?
          <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
            <FaUtensils className="text-6xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Food Request Found</h2>
            <p className="text-gray-500 text-sm max-w-md">
              It looks like there are no food request available right now. Please check back later or try requesting some!
            </p>
          </div>
          :
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="py-3 px-4 border-b">Image</th>
                  <th className="py-3 px-4 border-b text-start">Name</th>
                  <th className="py-3 px-4 border-b text-start">Food Id</th>
                  <th className="py-3 px-4 border-b text-start whitespace-nowrap">Donor Name</th>
                  <th className="py-3 px-4 border-b text-start">Donor Email</th>
                  <th className="py-3 px-4 border-b text-start">Your Email</th>
                  <th className="py-3 px-4 border-b text-start whitespace-nowrap">Request Date</th>
                  <th className="py-3 px-4 border-b text-start">Expire Date</th>
                  <th className="py-3 px-4 border-b text-start">Pickup Location</th>
                  <th className="py-3 px-4 border-b">Status</th>
                  <th className="py-3 px-4 border-b">Notes</th>
                  {/* <th className="py-3 px-4 border-b text-center">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item) => <MyFoodRequestRow key={item._id} item={item}></MyFoodRequestRow>)
                }
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default MyFoodRequestList;