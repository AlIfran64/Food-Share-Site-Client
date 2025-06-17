import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useRequest = () => {

  const axiosSecure = useAxiosSecure();

  const requestPromise = (email) => {
    return axiosSecure.get(`/shareFood/requested?requestedBy=${email}`).then((res) => res.data);
  }

  return {
    requestPromise
  }
};

export default useRequest;