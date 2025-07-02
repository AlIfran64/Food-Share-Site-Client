import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import Loading from '../Loading/Loading';
import MyFoodRequestList from './MyFoodRequestList';
import useRequest from '../../Api/useRequest';

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const { requestPromise } = useRequest();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-3">
        My Food Requests
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
        Track your requested food items here
      </p>

      <Suspense fallback={<Loading />}>
        <MyFoodRequestList requestPromise={requestPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyFoodRequest;
