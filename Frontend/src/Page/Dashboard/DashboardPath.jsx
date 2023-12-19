/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const DashboardPath = ({ path, pathTitle, role, icon }) => {
  return (
    <div>
      <Link
        to={path}
        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
      >
        <svg
          className="w-[18px] h-[18px] text-gray-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={icon}
          />
        </svg>
        <span className="ml-3 flex-1 whitespace-nowrap">{pathTitle}</span>
        <span className="bg-gray-200 text-gray-800 m-1 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
          {role}
        </span>
      </Link>
    </div>
  );
};

export default DashboardPath;
