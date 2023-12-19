/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import useProperty from "../../hooks/useProperty";
import useFavourite from "../../hooks/useFavourite";
import UseAllUsers from "../../hooks/useAllUser";
import usePromotion from "../../hooks/usePromotion";
import useTestimonial from "../../hooks/useTestimonials";
import useBookings from "../../hooks/useBookings";
import { useReactToPrint } from "react-to-print";

const Reports = () => {
  const { properties } = useProperty();
  const { favouriteData } = useFavourite();
  const { allUsers } = UseAllUsers();
  const { promotionProperties } = usePromotion();
  const { testimonials } = useTestimonial();
  const { bookings } = useBookings();
  const completedBookings = bookings.filter(
    item => item.payment_status === "Completed"
  );
  const pendingBookings = bookings.filter(
    item => item.payment_status === "Pending"
  );

  let revenue = 0;
  const [onPrint, setOnPrint] = useState(false);

  for (const item of completedBookings) {
    revenue += item.total_amount;
  }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="text-right">
        <button
          onClick={() => {
            handlePrint();
          }}
          className={`px-1.5 py-1 text-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
    ${onPrint === true ? "hidden" : ""}
  `}
        >
          Print
        </button>
      </div>
      <div
        ref={componentRef}
        style={{
          paddingRight: "20px",
          paddingLeft: "20px",
          paddingTop: "30px",
        }}
      >
        <h1 className="my-1 text-2xl text-center font-bold leading-none tracking-tight text-gray-600 dark:text-white">
          Total Reports Or Summary
        </h1>
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-600">
              {properties.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Added Properties
            </h3>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-green-400">
              {completedBookings.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Total Sold Property
            </h3>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-green-400">
              {properties.length - completedBookings.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Available Property
            </h3>
          </div>

          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-700">
              {promotionProperties.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Featured Properties
            </h3>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-700">
              {allUsers.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Registered Users
            </h3>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-green-400">
              {favouriteData.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Favourite Properties
            </h3>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-700">
              {testimonials.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              User`s testimonial{" "}
            </h3>
          </div>

          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-700">
              {pendingBookings.length}
            </span>
            <h3 className="text-md font-semibold text-gray-500">
              Pendingd Orders
            </h3>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 my-2">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-green-400">
                  $ {revenue}
                </span>
                <h3 className="text-md font-semibold text-gray-500">
                  Our Revenue
                </h3>
              </div>
            </div>
            <div id="main-chart"></div>
          </div>

          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-10">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Latest Transactions
                </h3>
                <span className="text-base font-normal text-gray-500">
                  This is a list of latest transactions
                </span>
              </div>
            </div>

            <div className="flex flex-col mt-8">
              <div className="overflow-x-auto rounded-lg">
                <div className="align-middle inline-block min-w-full">
                  <div className="shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Transaction
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Property
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            User
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {completedBookings.map((booking, id) => (
                          <tr key={id}>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-700">
                              {booking.booking_id}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              {booking.property}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              {booking.user}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                              {booking.total_amount}
                            </td>
                          </tr>
                        ))}

                        <tr>
                          <td>
                            <hr />
                            <p className="text-md font-bold text-green-500">
                              Total Amount Of Revenue
                            </p>
                          </td>

                          <td colspan="2">&nbsp;</td>

                          <td>
                            <hr />
                            <p className="text-md font-bold text-green-500">
                              {revenue}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
