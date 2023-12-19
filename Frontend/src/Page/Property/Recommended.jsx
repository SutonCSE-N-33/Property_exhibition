/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import useProperty from "../../hooks/useProperty";
import { Link } from "react-router-dom";

const Recommended = ({
  id,
  division,
  district,
  upozila,
  union_ward,
  village,
}) => {
  const { isLoaded, properties } = useProperty();

  const propertyMatching = properties.filter(property => {
    return (
      property.division === division ||
      property.district === district ||
      property.upozila === upozila ||
      property.union_ward === union_ward ||
      property.village === village
    );
  });
  function removeUnMatchId(arr, id) {
    const arrCopy = Array.from(arr);
    const objWithIdIndex = arrCopy.findIndex(obj => obj.id !== id);
    arrCopy.splice(objWithIdIndex, 1);
    return arrCopy;
  }
  const recommendedProperty = removeUnMatchId(propertyMatching, id);

  return (
    <div>
      {recommendedProperty.length > 0 ? (
        <h1 className="my-10 text-3xl text-center font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">
          Recommended Nearest Property
        </h1>
      ) : (
        <h1 className="my-10 text-2xl text-center font-semibold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-4xl dark:text-white">
          Nearest Property Not Available
        </h1>
      )}

      {!isLoaded ? (
        <div className="gap-5 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-center justify-center">
          {recommendedProperty.slice(0, 3).map((property, id) => (
            <div
              className="pb-5 w-full md:w-auto bg-white rounded-tl-lg rounded-tr-lg overflow-hidden shadow-lg hover:shadow-xl"
              key={id}
            >
              <div
                id="indicators-carousel"
                className="relative w-full"
                properties-carousel="static"
              >
                <div className="relative h-56 overflow-hidden rounded-tl-lg rounded-tr-lg md:h-80">
                  <div className="">
                    <img
                      src={property?.img_url}
                      loading="lazy"
                      className="absolute block w-full"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 mt-3">
                <div className="mb-2">
                  <h2 className="text-md font-bold text-gray-700">
                    {property.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 my-2">
                    <div className="rounded-full bg-blue-400 py-1 px-2 text-xs font-light text-white">
                      {property.type}
                    </div>
                    <div className="rounded-full bg-yellow-400 py-1 px-2 text-xs font-light text-white">
                      {property.completion}
                    </div>
                    <div
                      className={`rounded-full py-1 px-2 text-xs font-light text-white 
                                                    ${
                                                      property.status ===
                                                      "Available"
                                                        ? "bg-green-400"
                                                        : "bg-red-400"
                                                    }`}
                    >
                      {property.status}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png" />
                    <p className="ml-2 text-sm font-medium text-gray-600">
                      {property.area} sft
                    </p>
                  </div>
                </div>
                <div className="my-1">
                  <p className="text-lg font-bold text-blue-800">
                    $ {property.price}
                  </p>
                </div>
                <hr />
                <div className="mt-4">
                  <Link
                    to={`/property/${property.id}`}
                    className="rounded bg-green-500 p-1.5 text-sm text-white hover:bg-green-700"
                  >
                    Read More
                  </Link>
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
    </div>
  );
};

export default Recommended;