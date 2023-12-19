/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import useProperty from "../../hooks/useProperty";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import usePromotion from "../../hooks/usePromotion";

const FeaturedProperty = () => {
  const { isLoaded, properties } = useProperty();
  const navigate = useNavigate();
  const { promotionProperties } = usePromotion();

  const promotionalProperty = properties.filter(property =>
    promotionProperties.some(promotion => promotion?.property === property?.id)
  );

  const goToProperty = () => {
    navigate("/property");
  };
  return (
    <div>
      <div className="my-20">
        <h1 className="my-10 text-3xl text-center font-semibold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white">
          Our Featured Property
        </h1>
        {!isLoaded ? (
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2  gap-2">
            {promotionalProperty.slice(0, 8).map((property, id) => (
              <div
                key={id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="text-right">
                  <span
                    id="badge-dismiss-green"
                    className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-white0 bg-yellow-300 rounded dark:bg-green-900 dark:text-green-300"
                  >
                    Featured
                  </span>
                </div>
                <img
                  className="p-2 rounded-t-lg h-56 w-80"
                  src={property.img_url}
                  alt={property.title}
                />

                <div className="px-5 pb-2 ">
                  <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-white">
                    {property.title}{" "}
                  </h5>

                  <div className="flex justify-between my-2">
                    <div className="flex items-center">
                      <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png" />
                      <p className="ml-2 text-sm font-medium text-gray-700">
                        {property.area} sft
                      </p>
                    </div>
                  </div>
                  <p className="text-md font-bold text-indigo-700 dark:text-white">
                    ${property.price}
                  </p>
                  <div className="">
                    <div className="my-2">
                      <div className="">
                        <Link
                          to={`/property/${property.id}`}
                          className="inline-flex items-center px-2 py-1.5 text-sm text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
        <div className="flex justify-center">
          <button
            onClick={goToProperty}
            className="mt-6 px-6 py-3 flex justify-center bg-blue-800 hover:bg-blue-700 rounded-lg text-white text-center"
          >
            Go to All Property{" "}
            <AiOutlineArrowRight className="ml-3 mt-1 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
