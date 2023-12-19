/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFavourite from "../hooks/useFavourite";
import useUserProfile from "../hooks/useUserProfile";

const Navbar = () => {
  const { favouriteData } = useFavourite();
  const { profile } = useUserProfile();
  const userid = localStorage.getItem("user_id");
  const user = parseInt(userid);
  const userWiseFavourite = favouriteData?.filter(
    favourite => favourite?.user === user
  );

  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("profile_id");
    localStorage.removeItem("fName");
    localStorage.removeItem("lName");
    localStorage.removeItem("bkinfo");
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-4">
          <Link to={"/"} className="flex items-center">
            <img src="/favicon.ico" className="h-8 mr-3" alt="PE" />
            <span className="self-center text-xl text-gray-700 font-bold whitespace-nowrap dark:text-white">
              Property Exhibition
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
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
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium px-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to={"/"}>Home</Link>
              </li>
              {/* <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <Link to={'/testing'}>Test</Link>
                            </li> */}
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to={"/property"}>All Property</Link>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to={"/contact"}>Contact</Link>
              </li>
              {token ? (
                <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              ) : (
                ""
              )}
              {token ? (
                ""
              ) : (
                <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
              {token ? (
                ""
              ) : (
                <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <Link to={"/register"}>Register</Link>
                </li>
              )}

              {token ? (
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className=" flex items-center justify-between w-full py-5 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    {profile?.user?.first_name}
                    {/* {lastName} */}

                    <svg
                      className="w-2.5 h-2.5 ml-2.5 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path stroke="currentColor" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdownNavbar"
                    className="z-20 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-5 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/favouriteList"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Favourite{" "}
                          {userWiseFavourite ? userWiseFavourite.length : 0}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard/booking"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Booking
                        </Link>
                      </li>
                    </ul>
                    <div className="py-1">
                      <button
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
