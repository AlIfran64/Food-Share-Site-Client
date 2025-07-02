import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../Context/Authentication/AuthContext';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import DarkModeToggler from '../../DarkModeToggler/DarkModeToggler';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => toast.success('Logout successful! See you again soon.'))
      .catch((error) => toast.error(`Logout failed: ${error.message}`));
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-[#D9224E] font-semibold mx-2 my-1'
            : 'mx-2 my-1'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/availableFoods"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-[#D9224E] font-semibold mx-2 my-1'
            : 'mx-2 my-1'
        }
      >
        Available Foods
      </NavLink>
      <NavLink
        to="/addFood"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-[#D9224E] font-semibold mx-2 my-1'
            : 'mx-2 my-1'
        }
      >
        Add Food
      </NavLink>
      <NavLink
        to="/manageMyFoods"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-[#D9224E] font-semibold mx-2 my-1'
            : 'mx-2 my-1'
        }
      >
        Manage My Foods
      </NavLink>
      <NavLink
        to="/myFoodRequest"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-[#D9224E] font-semibold mx-2 my-1'
            : 'mx-2 my-1'
        }
      >
        My Food Request
      </NavLink>
    </>
  );

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-[#1D232A] text-black dark:text-white shadow-lg backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap py-2 lg:py-4 px-4 lg:px-8">
        {/* Navbar Start: Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow bg-white dark:bg-gray-800 text-black dark:text-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="text-xl lg:text-2xl font-semibold text-[#344D83] dark:text-white">
              Share<span className="text-[#D9224E]">Bite</span>
            </h1>
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End: Auth Buttons or User Info */}
        <div className="flex items-center gap-2 lg:gap-4 lg:mt-0">
          <DarkModeToggler />

          {user ? (
            <div className="flex items-center gap-2 lg:gap-4">
              {/* User Avatar */}
              <div className="relative">
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border border-white rounded-full"></span>
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 lg:w-12 lg:h-12 border rounded-full"
                  data-tooltip-id="userTooltip"
                  data-tooltip-content={user.displayName || 'No Name'}
                />
              </div>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn btn-sm sm:btn-md border-2 border-[#D9224E] text-[#D9224E] hover:bg-[#D9224E] hover:text-white transition-colors duration-300 bg-white dark:bg-[#1D232A]"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
              <Link
                to="/login"
                className="btn btn-sm sm:btn-md border-2 border-[#D9224E] text-[#D9224E] hover:bg-[#D9224E] hover:text-white transition-colors duration-300 bg-white dark:bg-[#1D232A]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-sm sm:btn-md bg-[#D9224E] text-white border-2 border-[#D9224E] hover:bg-transparent hover:text-[#D9224E] transition-colors duration-300"
              >
                Signup
              </Link>
            </div>
          )}

          {/* Tooltip */}
          <Tooltip id="userTooltip" place="bottom" style={{ zIndex: 9999 }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
