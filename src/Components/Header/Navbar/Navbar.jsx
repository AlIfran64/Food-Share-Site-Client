import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../../public/assets/images/logo.png';

const Navbar = () => {

  const links = <>
    <NavLink to={'/'} className={({ isActive }) => isActive ? "border-b-2 font-semibold mx-2 my-1" : "mx-2 my-1"}>Home</NavLink>

    <NavLink to={'/availableFoods'} className={({ isActive }) => isActive ? "border-b-2 font-semibold mx-2 my-1" : "mx-2 my-1"}>Available Foods</NavLink>

    <NavLink to={'/addFood'} className={({ isActive }) => isActive ? "border-b-2 font-semibold mx-2 my-1" : "mx-2 my-1"}>Add Food</NavLink>

    <NavLink to={'/manageMyFoods'} className={({ isActive }) => isActive ? "border-b-2 font-semibold mx-2 my-1" : "mx-2 my-1"}>Manage My Foods</NavLink>

    <NavLink to={'/myFoodRequest'} className={({ isActive }) => isActive ? "border-b-2 font-semibold mx-2 my-1" : "mx-2 my-1"}>My Food Request</NavLink>
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
      <div className="navbar-end space-x-2 lg:space-x-4">
        <Link className="btn border-2 border-[#D9224E]">Login</Link>
        <Link className="btn bg-[#D9224E] border-[#D9224E] border-2 text-white">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;