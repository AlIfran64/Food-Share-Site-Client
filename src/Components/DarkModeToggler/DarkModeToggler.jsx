import React from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import { useDarkMode } from '../Context/Theme/ThemeProvider';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className='
        p-1.5 
        rounded-full 
        bg-gray-200 dark:bg-white/10 
        transition-all duration-300 
        cursor-pointer 
        shadow-sm hover:shadow-md 
        flex items-center justify-center
      '
      aria-label='Toggle dark mode'
    >
      {darkMode ? <CiLight size={14} className='sm:size-4 md:size-7' /> : <CiDark size={14} className='sm:size-4 md:size-7' />}
    </button>
  );
};

export default DarkModeToggler;
