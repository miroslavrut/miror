import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="fixed top-0 left-0 z-20 w-full border-b border-gray-900 bg-gray-900 px-2 
      py-2.5 sm:px-4"
    >
      <div className="container mx-auto flex flex-wrap justify-between">
        <a href="/" className="flex items-center">
          {/* <img
            src=""
            className="mr-3 h-6 sm:h-9"
            alt="logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Miro
          </span>
        </a>
        <div className="flex">
          {/* <button
            type="button"
            className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            Get started
          </button> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm 
              text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            (showMenu ? ' ' : 'hidden ') +
            'w-full items-center justify-between md:order-1 md:flex md:w-auto'
          }
          id="navbar-sticky"
        >
          <ul
            className="border-gray-700bg-neutral-700 mt-4 flex flex-col rounded-lg   border 
            p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0
            md:bg-white md:bg-inherit md:text-sm md:font-medium"
          >
            <li>
              <Link href="/">
                <a
                  className="block rounded py-2 pr-4 pl-3 text-white md:bg-transparent
                  md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className="md::hover:bg-transparent block rounded border-gray-700 py-2  pr-4 
                  pl-3 text-gray-400 hover:bg-gray-700 hover:text-white 
                  md:p-0 md:hover:text-white"
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className="block rounded border-gray-700 py-2 pr-4  pl-3 
                  text-gray-400 hover:bg-gray-700 hover:text-white md:p-0 
                   md:hover:bg-transparent md:hover:text-white"
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block rounded border-gray-700 py-2 pr-4  pl-3 
                text-gray-400 hover:bg-gray-700 hover:text-white md:p-0 
                  md:hover:bg-transparent md:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
