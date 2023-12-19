/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const useCsrf = () => {
  const [csrfData, setcsrfDatae] = useState([]);
  useEffect(() => {
    const apiUrl = "https://property-exhibition.onrender.com/csrf";
    axios
      .get(apiUrl)
      .then(response => {
        setcsrfDatae(response.data.csrf);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return { csrfData };
};

export default useCsrf;
