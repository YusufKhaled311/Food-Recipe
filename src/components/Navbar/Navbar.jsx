import React from 'react';
import Search from '../Search/Search';
import SocialIcons from '../Social_Icons/Social_Icons';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ setSearch }) {
  const location = useLocation();

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
        
        <Link to="/home" className="flex items-center">
          <span className="dancing-font text-4xl font-bold text-[#458964] cursor-pointer">
            Reciply.
          </span>
        </Link>

      
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>


        <div className="hidden w-full md:block" id="navbar-default">
          <div className="flex items-center flex-col md:flex-row">

            {!location.pathname.startsWith("/recipeDetails") && (<Search setSearch={setSearch} />  )}
        
            <SocialIcons />
          </div>
        </div>
      </div>
    </nav>
  );
}
