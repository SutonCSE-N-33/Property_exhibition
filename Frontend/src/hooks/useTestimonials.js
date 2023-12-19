/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useTestimonial = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [testimonials, setTestimonials] = useState([]); // Use setData to update the state
  // useEffect(() => {
  //     const apiUrl = 'https://property-exhibition.onrender.com/testimonials/';
  //     axios.get(apiUrl)
  //         .then((response) => {
  //             // Set the data in the state
  //             setTestimonials(response.data);
  //             setIsLoaded(true);
  //         })
  //         .catch((error) => {
  //             // setIsLoaded(true);
  //             // console.error('Error fetching data:', error);
  //         });
  // }, []);
  // return {isLoaded, setIsLoaded,testimonials}
  const {
    isLoaded,
    error,
    data: testimonials = [],
  } = useQuery({
    queryKey: ["allTestimonial"],
    queryFn: () =>
      fetch(
        "https://property-exhibition.onrender.com/testimonials/?format=json"
      ).then(res => res?.json()),
  });
  return { isLoaded, testimonials };
};

export default useTestimonial;
