/* eslint-disable no-useless-catch */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useFavourite = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [favouriteData, setfavourite] = useState([]);
  // useEffect(() => {
  //     const apiUrl = 'https://property-exhibition.onrender.com/favourite/?format=json';
  //     axios.get(apiUrl)
  //         .then((response) => {
  //             // console.log(response)
  //             setfavourite(response.data);
  //             setIsLoaded(true);
  //         })
  //         .catch((error) => {
  //             setIsLoaded(true);
  //             console.error('Error fetching data:', error);
  //         });
  // }, [favouriteData]);
  // return {isLoaded,favouriteData}
  // const { isLoaded, error, data } = useQuery({
  //     queryKey: ['favourites'], queryFn: () =>
  //         axios.get('https://property-exhibition.onrender.com/favourite/?format=json')
  //             .then((res) => res.data),
  // });
  // const favouriteData = data
  // return { isLoaded, favouriteData, error }

  // const { isLoaded, error, refetch, data:favouriteData=[] } = useQuery({
  //     queryKey: ['favourites',/*favourite_id */], queryFn: () =>
  //         axios.get('https://property-exhibition.onrender.com/favourite/?format=json')
  //             .then((res) => {
  //                 return res.data
  //             }),

  // });
  // const { isLoaded, error, refetch, data: favouriteData = [] } = useQuery({
  //     queryKey: ['favourites'],
  //     queryFn: () =>
  //       axios.get('https://property-exhibition.onrender.com/favourite/?format=json').then((res) => res.data),
  //   });

  // console.log(favouriteData)
  // return { isLoaded, favouriteData, error }

  // const { isLoaded, error, data: favouriteData = [] } = useQuery({
  //     queryKey: ['favourites'],
  //     queryFn: () => {
  //         axios.get('https://property-exhibition.onrender.com/favourite/?format=json').then((res) => res?.data)
  //     }
  // })

  // const { isLoaded, error, refetch, data: favouriteData = [] } = useQuery({
  //     queryKey: ['favourites'],
  //     queryFn: async () => {
  //         try {
  //             const response = await axios.get('https://property-exhibition.onrender.com/favourite/?format=json');
  //             return response.data;
  //         } catch (error) {
  //             throw error; // Throw the error to be caught by react-query
  //         }
  //     }
  // });
  // return { isLoaded, favouriteData }

  const {
    isLoaded,
    error,
    data: favouriteData = [],
    refetch,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://property-exhibition.onrender.com/favourite/?format=json"
      ).then(res => res.json()),
  });

  return { isLoaded, error, favouriteData, refetch };
};

export default useFavourite;
