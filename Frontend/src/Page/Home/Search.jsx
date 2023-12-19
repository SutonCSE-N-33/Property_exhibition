// eslint-disable-next-line no-unused-vars
import React from "react";

const Search = () => {
  return (
    <div className="search-block flex justify-center my-10">
      <div className="title text-center">
        <h1 className="my-10 text-4xl text-center font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Buy,Sell or Rent
        </h1>
        <p className="ml-2 text-2xl">
          List your house or apartment on our website
        </p>
      </div>

      <div className="search-box bg-teal-900 flex justify-between my-5">
        <input placeholder="Type Keyword" className="w-4/5 border rounded-lg" />

        <div className="relative inline-block text-left">
          <div>
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              type="button"
              className="inline-flex catg-btn w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Categories
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="dropdownHover"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Residatial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Commercial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Indrustial
              </a>
            </li>
          </ul>
        </div>

        <div className="relative inline-block text-left">
          <div>
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              type="button"
              className="inline-flex catg-btn w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Types
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <i className="fa-solid fa-bars icon-btn"></i>

        <button type="button" className="s-btn w-32 bg-green-500 text-white ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
