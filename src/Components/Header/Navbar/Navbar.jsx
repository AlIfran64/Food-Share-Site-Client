import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../Context/Authentication/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);


  // Handle Logout
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success('Logout successful! See you again soon.');
      }).catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  }

  const links = <>
    <NavLink to={'/'} className={({ isActive }) => isActive ? "border-b-2 border-[#D9224E] font-semibold mx-2 my-1" : "mx-2 my-1"}>Home</NavLink>

    <NavLink to={'/availableFoods'} className={({ isActive }) => isActive ? "border-b-2 border-[#D9224E] font-semibold mx-2 my-1" : "mx-2 my-1"}>Available Foods</NavLink>

    <NavLink to={'/addFood'} className={({ isActive }) => isActive ? "border-b-2 border-[#D9224E] font-semibold mx-2 my-1" : "mx-2 my-1"}>Add Food</NavLink>

    <NavLink to={'/manageMyFoods'} className={({ isActive }) => isActive ? "border-b-2 border-[#D9224E] font-semibold mx-2 my-1" : "mx-2 my-1"}>Manage My Foods</NavLink>

    <NavLink to={'/myFoodRequest'} className={({ isActive }) => isActive ? "border-b-2 border-[#D9224E] font-semibold mx-2 my-1" : "mx-2 my-1"}>My Food Request</NavLink>
  </>

  return (
    <div className="flex justify-between items-center py-2 lg:py-4 px-4 lg:px-8 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div>
          <Link className='flex items-center gap-2'>
            <img className='w-7 lg:w-8' src={logo} alt="logo" />
            <h1 className='text-xl lg:text-2xl font-semibold text-[#344D83]'>Share<span className='text-[#D9224E]'>Bite</span></h1>
          </Link>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>


      <div className="navbar-end">

        {
          user ?
            <div className='flex space-x-2 lg:space-x-4 items-center'>

              <div className="relative flex-shrink-0">
                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                <img src={user.photoURL
                } alt="profile" className="w-10 h-10 lg:w-12 lg:h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
              </div>

              <button onClick={handleLogout} className="btn text-sm px-3 py-1 sm:px-4 sm:py-2 border-2 border-[#D9224E] text-[#D9224E] hover:bg-[#D9224E] hover:text-white transition-colors duration-300">Logout</button>
            </div>
            :
            <div className='flex space-x-1 sm:space-x-2 lg:space-x-4 items-center'>
              <Link
                to="/login"
                className="btn text-sm px-3 py-1 sm:px-4 sm:py-2 border-2 border-[#D9224E] text-[#D9224E] hover:bg-[#D9224E] hover:text-white transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn text-sm px-3 py-1 sm:px-4 sm:py-2 bg-[#D9224E] text-white border-2 border-[#D9224E] hover:bg-transparent hover:text-[#D9224E] transition-colors duration-300"
              >
                Signup
              </Link>
            </div>
        }


      </div>


    </div>
  );
};

export default Navbar;