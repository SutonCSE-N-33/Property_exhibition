// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <div>
                <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  About
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-md font-small">
                  Our Real Estate Inc company is committed to delivering a high
                  level of expertise, customer service, and attention to detail
                  to the marketing and sales of luxury real estate, and rental
                  properties. It is the best real estate theme you can have for
                  your business and your online presence.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/property" className="hover:underline">
                    All Property
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                For Login User
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/dashboard" className="hover:underline">
                    Profile
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/dashboard/favouriteList"
                    className="hover:underline"
                  >
                    Favourite List
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/dashboard/booking" className="hover:underline">
                    Booking
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                For New User
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/login" className="hover:underline">
                    Login
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/register" className="hover:underline">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-cyan-950 md:flex md:items-center md:justify-center">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/">Property Exhibition™</a>.
              All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
