import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import ManageMyFoodList from './ManageMyFoodList';
import Loading from '../Loading/Loading';
import { manageMyFoodPromise } from '../../Api/manageMyFoodApi';


const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Manage My Foods</h1>
      <p className="text-center text-gray-600 mb-15">
        Update or delete the foods you’ve shared with the community.
      </p>

      <Suspense fallback={<Loading></Loading>}>
        <ManageMyFoodList manageMyFoodPromise={manageMyFoodPromise(user.email)}></ManageMyFoodList>
      </Suspense>
    </div>
  );
};

export default ManageMyFoods;
