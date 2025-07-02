import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import ManageMyFoodList from './ManageMyFoodList';
import Loading from '../Loading/Loading';
import useManageMyFood from '../../Api/useManageMyFood';

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const { manageMyFoodPromise } = useManageMyFood();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen bg-white dark:bg-[#1D232A] transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
        Manage My Foods
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto px-2">
        Update or delete the foods you’ve shared with the community.
      </p>

      <Suspense fallback={<Loading />}>
        <ManageMyFoodList manageMyFoodPromise={manageMyFoodPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default ManageMyFoods;
