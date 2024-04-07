'use client'
import React from 'react';
import './style.css';
import { useTheme } from "next-themes";
import moon from "../assets/moon-svgrepo-com.svg";
import sun from "../assets/sun-svgrepo-com.svg";
import Image from 'next/image';

const ButtonDarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 
            transition-all duration-100 text-white dark:text-gray-800 px-1 py-1 rounded-lg bottom-32 mr-2 mt-2'>
            {currentTheme === 'dark' ? 
            <Image 
              src={sun} alt="Sun" width={22} height={22} /> : 
            <Image 
              src={moon} alt="Moon" width={22} height={22} />} 
        </button> 
    )
}

export default ButtonDarkMode;
