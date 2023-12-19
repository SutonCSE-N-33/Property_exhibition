/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const UseAllUsers = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const token = localStorage.getItem("token");

  const getAllUsers = () => {
    const apiUrl = `https://property-exhibition.onrender.com/alluser`;
    const axios_instance = axios.create({
      headers: {
        Authorization: `token ${token}`,
      },
    });
    axios_instance
      .get(apiUrl)
      .then(response => {
        setAllUsers(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        setIsLoaded(true);
      });
  };
  useEffect(() => {
    getAllUsers();
  }, [allUsers]);
  return { isLoaded, setIsLoaded, allUsers, setAllUsers, getAllUsers };
};

export default UseAllUsers;
