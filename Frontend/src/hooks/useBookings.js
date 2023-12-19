/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

const useBookings = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookings, setbooking] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const apiUrl = `https://property-exhibition.onrender.com/bookings/?format=json`;
    const axios_instance = axios.create({
      headers: {
        Authorization: `token ${token}`,
      },
    });
    axios_instance
      .get(apiUrl)
      .then(response => {
        setbooking(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        setIsLoaded(true);
      });
  }, [bookings]);
  return { isLoaded, bookings };
};
export default useBookings;
