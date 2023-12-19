/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useProperty from "../../../hooks/useProperty";
import toast from "react-hot-toast";
import usePromotion from "../../../hooks/usePromotion";
const AddPromotion = () => {
  const { isLoaded, properties } = useProperty();
  const { promotionProperties } = usePromotion();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const promotionalProperty = properties.filter(property =>
    promotionProperties.some(promotion => promotion.property !== property.id)
  );

  console.log(promotionProperties);
  const onSubmit = data => {
    const user_id = localStorage.getItem("user_id");
    const promotion = {
      title: data.title,
      start_date: data.start_date,
      end_date: data.end_date,
      user: user_id,
      property: data.property,
    };
    // console.log(promotion)
    axios
      .post(
        "https://property-exhibition.onrender.com/promotions/?format=json",
        promotion,
        {}
      )
      .then(response => {
        reset();
        navigate("/dashboard/allPromotion");
        toast.success("Successfully Add a Promotion!");
      })
      .catch(error => {
        alert("Property Id Must be Unique");
        toast.error("Failed to Add a Promotion!");
      });
  };

  return (
    <div>
      <div className="my-5">
        {/* Row */}
        <div className="grid justify-center item-center">
          {/* Col */}
          <div className="w-full bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">
              Create a Featured Property
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Title"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="property"
                >
                  Property
                </label>

                <select
                  // Add a unique key for each select element
                  id="property"
                  type="text"
                  placeholder="Property"
                  {...register("property", { required: true })}
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  aria-label="Select Property"
                >
                  {promotionalProperty.map((p, id) => (
                    <option key={id} value={p.id}>
                      {p.id}. {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 md:flex">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="start_date"
                  >
                    Start Date
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="start_date"
                    type="date"
                    placeholder="Start Date"
                    {...register("start_date", { required: true })}
                  />
                </div>
                <div className="md:ml-10">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="end_date"
                  >
                    End Date
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="end_date"
                    type="date"
                    placeholder="End Date"
                    {...register("end_date", { required: true })}
                  />
                </div>
              </div>

              <div className="mb-6 text-center">
                <button
                  className=" px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit For Featured
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPromotion;
