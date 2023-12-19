/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AboutCard = ({ title, role, bio, imglink }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <div className="flex mt-6 px-5 flex-col items-center pb-5">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg origin-center hover:scale-110"
          src={imglink}
          alt="img"
        />
        <h5 className="text-md font-semibold text-gray-700 dark:text-white">
          {title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-600">{role}</span>
        <span className="text-center text-sm text-gray-600 mt-3">{bio}</span>
      </div>
    </div>
  );
};

export default AboutCard;
