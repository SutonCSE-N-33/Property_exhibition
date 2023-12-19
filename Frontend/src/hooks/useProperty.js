/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useProperty = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [properties, setProperties] = useState([]); // Use setData to update the state
  // useEffect(() => {
  //     const apiUrl = 'https://property-exhibition.onrender.com/property/?format=json';
  //     axios.get(apiUrl)
  //         .then((response) => {
  //             // Set the data in the state
  //             setProperties(response.data);
  //             setIsLoaded(true);

  //         })
  //         .catch((error) => {
  //             setIsLoaded(true);
  //             // console.error('Error fetching data:', error);
  //         });
  // }, [properties]);
  // return {isLoaded, setIsLoaded,properties, setProperties}
  const {
    isLoaded,
    error,
    data: properties = [],
    refetch,
  } = useQuery({
    queryKey: ["allProperty"],
    queryFn: () =>
      fetch(
        "https://property-exhibition.onrender.com/property/?format=json"
      ).then(res => res?.json()),
  });
  return { isLoaded, properties, refetch };
};

export default useProperty;
