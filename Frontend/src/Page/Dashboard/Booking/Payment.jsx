/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { user, property, booking_id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [propertyinfo, setpropertyinfo] = useState([]);
  const token = localStorage.getItem("token");
  const id = property;

  const siteorigin = window.location.origin;

  useEffect(() => {
    const apiUrl = `https://property-exhibition.onrender.com/property/${id}/?format=json`;
    axios
      .get(apiUrl)
      .then(response => {
        setpropertyinfo(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        setIsLoaded(true);
      });
  });
  const paymentGateway = () => {
    const paymentReq = {
      booking_id: booking_id,
      user: user,
      property: property,
      origin: siteorigin,
    };

    axios
      .post(
        "https://property-exhibition.onrender.com/payment/?format=json",
        paymentReq,
        {}
      )
      .then(response => {
        toast.success("You Are Going Payment Gateway Page!");
        window.location.replace(response.data.GatewayPageURL);
      })
      .catch(error => {
        console.error("An error occurred:", error);
        toast.error("Anything Wrong!");
      });
  };

  return (
    <div>
      <h3 className="text-3xl pb-5">Order Summary</h3>
      <div className="py-2 px-2">
        <div className="flex flex-col md:flex-row jusitfy-center items-stretch w-full md:space-x-2 space-y-4 md:space-y-6 md:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 md:space-y-8">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-100 px-4 py-4 md:py-6 md:p-6 md:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">
                Property Order
              </p>
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md md:space-x-6 md:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-20 hidden"
                    src={propertyinfo?.img_url}
                    alt="dress"
                  />
                  <img
                    className="w-20"
                    src={propertyinfo?.img_url}
                    alt="dress"
                  />
                </div>

                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base dark:text-white md:text-lg leading-6">
                      ${propertyinfo?.price}
                    </p>
                    <p className="text-base dark:text-white md:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base dark:text-white md:text-lg font-semibold leading-6 text-gray-800">
                      ${propertyinfo.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 md:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 md:p-8 w-full bg-gray-100 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Name
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      {propertyinfo.title}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Address
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      {propertyinfo.village}, {propertyinfo.district},{" "}
                      {propertyinfo.division}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Area
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      {propertyinfo.area} sft
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Type
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      {propertyinfo.type}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-base dark:text-white leading-4 text-gray-800">
                      Completion
                    </p>
                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                      {propertyinfo.completion}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    ${propertyinfo.price}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 md:p-8 w-full bg-gray-100 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                  SSLCommerz Payment Gateway
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center space-x-4">
                    <div className="flex flex-col justify-start">
                      <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                        Amount :
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                    ${propertyinfo.price}
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    onClick={paymentGateway}
                    className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
