"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-50/70 backdrop-blur-lg dark:bg-zinc-950/70 fixed w-full z-[100] top-0 start-0 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400">Anurag Kumar</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-500 rounded-lg hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:focus:ring-zinc-700 transition-colors"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:focus:ring-zinc-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-100/50 rounded-xl bg-zinc-50/80 backdrop-blur-md md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-zinc-900/80 md:dark:bg-transparent dark:border-zinc-700/50">
            {['Home', 'About', 'Services', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-400 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
