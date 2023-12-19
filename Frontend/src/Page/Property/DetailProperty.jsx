/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Component/Footer";
import axios from "axios";
import Favourite from "./Favourite";
import Recommended from "./Recommended";

const DetailProperty = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();
  const uid = localStorage.getItem("user_id");
  const [isLoaded, setIsLoaded] = useState(false);
  const [property, setData] = useState([]);
  const [image, setImage] = useState();

  let count = 0;
  useEffect(() => {
    count++;

    const apiUrl = `https://property-exhibition.onrender.com/property/${id}/?format=json`;
    axios
      .get(apiUrl)
      .then(response => {
        // Set the data in the state
        setData(response.data);
        if (count >= 1) {
          setImage(response.data.img_url);
        }
        setIsLoaded(true);
      })
      .catch(error => {
        setIsLoaded(true);
        console.error("Error fetching data:", error);
      });
  }, []);

  const onSubmit = (id, price) => {
    navigate("/dashboard/booking");
    const booking = {
      total_amount: price,
      payment_status: "Pending",
      user: uid,
      property: id,
    };
    // console.log(booking)
    axios
      .post(
        "https://property-exhibition.onrender.com/bookings/?format=json",
        booking,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then(response => {
        // console.log(response); // Response data
      })
      .catch(error => {
        console.error("An error occurred:", error);
        navigate("/login");
      });
  };

  const handleImage = data => {
    setImage(data);
  };

  return (
    <div>
      <div className="antialiased">
        <div className="py-6">
          <div className="max-w-7xl">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Link to={"/"} className="hover:underline hover:text-gray-600">
                Home
              </Link>

              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <Link
                to={"/property"}
                className="hover:underline hover:text-gray-600"
              >
                All Property
              </Link>

              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Detail Property</span>
            </div>
          </div>

          <div className="max-w-7xl mt-6">
            <div className="flex flex-col md:flex-row gap-5">
              {!isLoaded ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <div className="md:flex-1">
                    <div
                      id="indicators-carousel"
                      className="relative w-full"
                      data-carousel="static"
                    >
                      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="">
                          <img
                            src={image}
                            loading="lazy"
                            className="absolute block w-full"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <Favourite property={property.id} user={uid} />
                  </div>

                  <div className="md:flex-1">
                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-700 text-2xl md:text-3xl">
                      {property?.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Location{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        {property?.village}, {property?.union_ward},{" "}
                        {property?.upozila}, {property?.district},{" "}
                        {property?.division}
                      </a>
                    </p>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="px-2 py-2 font-medium text-gray-400 whitespace-nowrap dark:text-white"
                            >
                              Type:{" "}
                              <span className="text-gray-800">
                                {property.type}{" "}
                              </span>
                            </th>
                            <td className="font-medium px-2 py-3 text-gray-400">
                              Status:{" "}
                              <span className="text-gray-800">
                                {property.status}{" "}
                              </span>
                            </td>
                            <td className="font-medium px-2 py-3 text-gray-400">
                              Completion:{" "}
                              <span className="text-gray-800">
                                {property.completion}{" "}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center space-x-2 my-3">
                      <div>
                        <div className="rounded-lg bg-gray-100 flex py-1 px-2">
                          <span className="text-indigo-400 mr-1">$</span>
                          <span className="font-bold text-indigo-600 text-2xl">
                            {property?.price}
                          </span>
                        </div>
                      </div>
                      <p className="p-2 bg-yellow-200 text-sm text-light rounded text-gray-500 ">
                        For {property?.purpose}
                      </p>
                    </div>
                    <p className="py-1 font-bold text-gray-600">
                      About This Property
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      {property?.area} sft {property?.description}{" "}
                      {property?.type} {property?.status} {property?.completion}
                      , {property?.description} {property?.type}{" "}
                      {property?.area} sft {property?.completion}{" "}
                      {property?.status}, {property?.status} {property?.area}{" "}
                      sft {property?.type} {property?.completion}{" "}
                      {property?.description}, {property?.type}{" "}
                      {property?.description} {property?.status}{" "}
                      {property?.completion} {property?.area} sft
                    </p>
                    <div className="flex py-4 space-x-4">
                      <button
                        title={
                          property.purpose === "Rent"
                            ? `You Can't it For Booking `
                            : ""
                        }
                        onClick={() => onSubmit(property.id, property.price)}
                        type="button"
                        disabled={property.purpose === "Rent"}
                        className="px-2 py-1.5 font-bold rounded bg-indigo-700 hover:bg-indigo-800 text-white"
                      >
                        Add to Book
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex mt-3">
              <div
                onClick={() => handleImage(property?.img_url)}
                className="h-20 w-32 overflow-hidden cursor-pointer rounded-lg"
              >
                <img
                  src={property?.img_url}
                  className="block w-full"
                  alt="..."
                />
              </div>

              <div
                onClick={() => handleImage(property?.image1)}
                className="h-20 w-32 ml-2 overflow-hidden cursor-pointer rounded-lg"
              >
                <img
                  src={property?.image1}
                  className="block w-full"
                  alt="..."
                />
              </div>

              <div
                onClick={() => handleImage(property?.image2)}
                className="h-20 w-32 ml-2 overflow-hidden cursor-pointer rounded-lg"
              >
                <img
                  src={property?.image2}
                  className="block w-full"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Property */}
        <Recommended
          id={id}
          division={property.division}
          district={property.district}
          upozila={property.upozila}
          union_ward={property.union_ward}
          village={property.village}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DetailProperty;
