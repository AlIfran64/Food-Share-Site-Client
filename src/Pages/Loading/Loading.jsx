import React from 'react';

const Loading = () => {
  return (
    <div className="w-11/12 h-screen mx-auto flex justify-center items-center bg-white dark:bg-[#1D232A] py-3 rounded-2xl">
      <span className="loading loading-spinner loading-lg text-gray-700 dark:text-gray-300"></span>
    </div>
  );
};

export default Loading;
