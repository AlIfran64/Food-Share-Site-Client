import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Components/Context/Authentication/AuthContext';
import Loading from '../Loading/Loading';
import MyFoodRequestList from './MyFoodRequestList';
import useRequest from '../../Api/useRequest';

const MyFoodRequest = () => {

  const { user } = useContext(AuthContext);
  const { requestPromise } = useRequest();

  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">My Food Requests</h1>
      <p className="text-center text-gray-600 mb-15">
        Track your requested food items here
      </p>
      <Suspense fallback={<Loading></Loading>}>
        <MyFoodRequestList requestPromise={requestPromise(user.email)}></MyFoodRequestList>
      </Suspense>
    </div>
  );
};

export default MyFoodRequest;