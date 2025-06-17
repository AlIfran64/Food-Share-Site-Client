import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useManageMyFood = () => {
  const axiosSecure = useAxiosSecure();

  const manageMyFoodPromise = (email) => {
    return axiosSecure.get(`/shareFood/donor?donorEmail=${email}`).then((res) => res.data)
  }
  return {
    manageMyFoodPromise
  }
};

export default useManageMyFood;