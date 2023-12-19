/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const useUserProfile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState([]);
  const token = localStorage.getItem("token");
  const profile_id = localStorage.getItem("profile_id");
  useEffect(() => {
    const apiUrl = `https://property-exhibition.onrender.com/users/${profile_id}/?format=json`;
    const axios_instance = axios.create({
      headers: {
        Authorization: `token ${token}`,
      },
    });
    axios_instance
      .get(apiUrl)
      .then(response => {
        setProfile(response.data);
        setIsLoaded(true);
        localStorage.setItem("fName", response.data.user.first_name);
        localStorage.setItem("lName", response.data.user.last_name);
      })
      .catch(error => {
        setIsLoaded(true);
      });
  }, [profile]);
  return { isLoaded, setIsLoaded, profile, setProfile };
};

export default useUserProfile;
