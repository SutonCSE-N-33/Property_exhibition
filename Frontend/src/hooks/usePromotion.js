/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const usePromotion = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [promotionProperties, setPromotionProperties] = useState([]); // Use setData to update the state
  // useEffect(() => {
  //     const apiUrl = 'https://property-exhibition.onrender.com/promotions/?format=json';
  //     axios.get(apiUrl)
  //         .then((response) => {
  //             // Set the data in the state
  //             setPromotionProperties(response.data);
  //             setIsLoaded(true);
  //         })
  //         .catch((error) => {
  //             // setIsLoaded(true);
  //             // console.error('Error fetching data:', error);
  //         });
  // }, [promotionProperties]);

  const {
    isLoaded,
    error,
    data: promotionProperties = [],
    refetch,
  } = useQuery({
    queryKey: ["allPromotions"],
    queryFn: () =>
      fetch(
        "https://property-exhibition.onrender.com/promotions/?format=json"
      ).then(res => res?.json()),
  });
  return { isLoaded, promotionProperties };
};

export default usePromotion;
