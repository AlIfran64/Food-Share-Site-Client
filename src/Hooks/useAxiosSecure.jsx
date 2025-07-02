import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Components/Context/Authentication/AuthContext';
import { toast } from 'react-toastify';

const useAxiosSecure = () => {
  const { user, logout } = useContext(AuthContext);

  const axiosSecureInstance = axios.create({
    baseURL: 'https://sharebite-server-coral.vercel.app',
  });

  // Attach fresh token in every request
  axiosSecureInstance.interceptors.request.use((config) => {
    if (user?.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  });

  axiosSecureInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        logout()
          .then(() => toast.error('Logged out due to unauthorized access'))
          .catch((err) => toast.error(err.message));
      }
      return Promise.reject(error);
    }
  );

  return axiosSecureInstance;
};

export default useAxiosSecure;
