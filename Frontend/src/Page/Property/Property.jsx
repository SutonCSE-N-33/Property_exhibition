/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer";
import useProperty from "../../hooks/useProperty";
import SearchFilterSort from "./SearchFilterSort";
import useBookings from "../../hooks/useBookings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Property = () => {
  const { isLoaded, properties } = useProperty();
  const { bookings } = useBookings();
  const [query, setQuery] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("All");
  const [purposeFilter, setPurposeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); 

  const searchParam = [
    "title",
    "type",
    "description",
    "purpose",
    "completion",
    "status",
    "division",
    "district",
    "upozila",
    "village",
  ];

  const data = Object.values(properties);

  const filterProperties = () => {
    return data.filter(item => {
      return (
        (divisionFilter === "All" || item.division === divisionFilter) &&
        (purposeFilter === "All" || item.purpose === purposeFilter) &&
        (statusFilter === "All" || item.status === statusFilter) &&
        (typeFilter === "All" || item.type === typeFilter) &&
        searchParam.some(newItem =>
          item[newItem].toString().toLowerCase().includes(query.toLowerCase())
        )
      );
    });
  };

  const sortProperties = () => {
    const sortedData = [...filterProperties()];
    if (sortOrder === "asc") {
      return sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      return sortedData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "minArea") {
      return sortedData.sort((a, b) => a.area - b.area);
    } else if (sortOrder === "maxArea") {
      return sortedData.sort((a, b) => b.area - a.area);
    } else if (sortOrder === "minPrice") {
      return sortedData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "maxPrice") {
      return sortedData.sort((a, b) => b.price - a.price);
    } else {
      return sortedData;
    }
  };

  const resetFiltersAndSorting = () => {
    setQuery("");
    setDivisionFilter("All");
    setPurposeFilter("All");
    setStatusFilter("All");
    setTypeFilter("All");
    setSortOrder("");
  };

  const bookedPropertyIds = bookings
    ?.filter(booking => booking?.payment_status === "Completed")
    .map(booking => booking?.property);
  const availableProperties = sortProperties()?.filter(
    property => !bookedPropertyIds?.includes(property.id)
  );

  const propertiesStr = JSON.stringify(availableProperties);
  localStorage.setItem("properties", propertiesStr);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

 
  return (
    <div>
      <div className="min-h-screen">
        <SearchFilterSort
          query={query}
          setQuery={setQuery}
          setDivisionFilter={setDivisionFilter}
          setPurposeFilter={setPurposeFilter}
          setStatusFilter={setStatusFilter}
          setTypeFilter={setTypeFilter}
          setSortOrder={setSortOrder}
          resetFiltersAndSorting={resetFiltersAndSorting}
          sortOrder={sortOrder}
        />

        {!isLoaded ? (
          <div className="gap-5 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-center justify-center">
            {availableProperties?.map((property, id) => (
              <div
                className="pb-5 w-full md:w-auto bg-white rounded-tl-lg rounded-tr-lg overflow-hidden shadow-lg hover:shadow-xl"
                key={id}
              >
                <Slider {...settings}>
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

                  <div className="relative h-56 overflow-hidden rounded-tl-lg rounded-tr-lg md:h-80">
                    <div className="">
                      <img
                        src={property?.image2}
                        loading="lazy"
                        className="absolute block w-full"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div className="relative h-56 overflow-hidden rounded-tl-lg rounded-tr-lg md:h-80">
                    <div className="">
                      <img
                        src={property?.image2}
                        loading="lazy"
                        className="absolute block w-full"
                        alt="..."
                      />
                    </div>
                  </div>
                </Slider>

                <div className="px-4 py-2 mt-4">
                  <div className="mb-2">
                    <h2 className="text-md font-bold text-gray-700">
                      {property.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 my-2">
                      <div className="rounded-full bg-blue-400 py-1 px-2 text-xs font-normal text-white">
                        {property.type}
                      </div>
                      <div className="rounded-full bg-yellow-400 py-1 px-2 text-xs font-normal text-white">
                        {property.completion}
                      </div>
                      <div
                        className={`rounded-full py-1 px-2 text-xs font-normal	 text-white 
                            ${
                              property.status === "Available"
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
          <div className="flex justify-center">
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
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Property;
