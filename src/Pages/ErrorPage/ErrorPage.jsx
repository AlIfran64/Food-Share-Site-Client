import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/ErrorpageLottie.json';
import { Link } from 'react-router';

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Lottie options={defaultOptions} height={400} width={400} />

      <Link to={'/'}>
        <button className='bg-[#344D83] text-white py-3 px-6 rounded-md mt-5 font-semibold hover:bg-white hover:border-2 border-2 hover:border-[#344D83] hover:text-black cursor-pointer'>Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
