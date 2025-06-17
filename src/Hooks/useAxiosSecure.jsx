import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Components/Context/Authentication/AuthContext';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'https://sharebite-server-coral.vercel.app'
})

const useAxiosSecure = () => {

  const { user, logout } = useContext(AuthContext);


  // Request
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`
    return config;
  })

  // Response
  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.status === 401 || error.status === 403) {
      logout()
        .then(() => {
          toast.error("Logged out user for unauthorized access")

        })
        .catch((error) => {
          toast.error(error)
        })

    }
    return Promise.reject(error);
  })

  return axiosInstance;
};

export default useAxiosSecure;