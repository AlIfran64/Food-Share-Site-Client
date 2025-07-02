import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Pages/Loading/Loading';

const Root = () => {

  const { state } = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      {
        state == "loading" ? <Loading></Loading> : <div className='min-h-screen bg-white dark:bg-[#1D232A] text-black dark:text-white transition-colors duration-300 pt-[64px] md:pt-[60px] lg:pt-[80px]'><Outlet></Outlet></div>
      }

      <Footer></Footer>
    </div>
  );
};

export default Root;