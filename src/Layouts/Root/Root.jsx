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
        state == "loading" ? <Loading></Loading> : <Outlet></Outlet>
      }

      <Footer></Footer>
    </div>
  );
};

export default Root;