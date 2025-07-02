import React from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import { useDarkMode } from '../Context/Theme/ThemeProvider';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button onClick={() => setDarkMode(!darkMode)} className='p-2 rounded-full bg-gray-100 transition-all cursor-pointer dark:bg-white/10'>
      {darkMode ? <CiLight size={30} /> : <CiDark size={30} />}
    </button>
  );
};

export default DarkModeToggler;