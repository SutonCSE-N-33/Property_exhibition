/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useUserProfile from "../../../hooks/useUserProfile";
import EditProfile from "./EditProfile";

const UserProfile = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isLoaded, profile } = useUserProfile();
  // console.log(profile)
  return (
    <div>
      <div className=" mb-10 md:mb-5">
        {isLoaded ? (
          <div className="container mx-auto my-5 p-5">
            <div className="md:-mx-2 ">
              {/* Left Side  */}
              <div className="w-full md:w-1/5  md:mx-2">
                {/* Profile Card  */}
                <div className="bg-white p-3 border-t-4 border-green-400">
                  <div className="image overflow-hidden">
                    <img
                      className="h-auto w-full mx-auto"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt=""
                    />
                  </div>
                  <h1 className="text-gray-700 font-bold text-lg leading-8 my-1">
                    {profile.user !== undefined && profile.user.first_name}
                    <span className="ml-2">
                      {profile.user !== undefined && profile.user.last_name}
                    </span>
                  </h1>
                  <h3 className="text-gray-600 font-lg text-semibold leading-6">
                    {profile.current_address}{" "}
                  </h3>
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                          {profile.user && profile.user.is_staff
                            ? "Admin"
                            : "User"}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>Member Since</span>
                      {profile?.user?.date_joined ? (
                        <span className="ml-auto">
                          {profile?.user?.date_joined.slice(0, 10)}{" "}
                          {profile?.updated_at.slice(11, 19)}
                        </span>
                      ) : (
                        <span className="ml-auto">{Date()}</span>
                      )}
                    </li>
                    <li className="flex items-center py-3">
                      <span>Last Update Profile</span>
                      {profile?.updated_at ? (
                        <span className="ml-auto">
                          {profile?.updated_at.slice(0, 10)}{" "}
                          {profile?.updated_at.slice(11, 19)}
                        </span>
                      ) : (
                        <span className="ml-auto">{Date()}</span>
                      )}
                    </li>
                  </ul>
                </div>
                {/* End of profile card  */}
                <div className="my-4"></div>
              </div>
              {/* Right Side  */}
              <div className="w-full md:w-4/5  md:mx-2 ">
                {/* Profile tab  */}
                {/* About Section  */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          First Name
                        </div>
                        <div className="px-4 py-2">
                          {" "}
                          {profile.user !== undefined &&
                            profile.user.first_name}{" "}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">
                          {profile.user !== undefined && profile.user.last_name}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">
                          {profile.user !== undefined && profile.gender}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">User Name</div>
                        <div className="px-4 py-2">
                          {" "}
                          {profile.user !== undefined && profile.user.username}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <div className="px-4 py-2">
                          {profile.current_address}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Contact No.
                        </div>
                        <div className="px-4 py-2"> {profile.contact_no}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <Link
                            className="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            {profile.user !== undefined && profile.user.email}
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">{profile.date_of_birth}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(!modalIsOpen)}
                    className="block w-full bg-green-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-green-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 text-center"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div role="status flex justify-center">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      <EditProfile
        profile={profile}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
      ></EditProfile>
    </div>
  );
};

export default UserProfile;
