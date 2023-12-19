/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import useProperty from "../../../hooks/useProperty";
const AddProperty = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { refetch } = useProperty();
  const onSubmit = data => {
    const img = data.img[0];
    const img1 = data.image1[0];
    const img2 = data.image2[0];
    const userId = localStorage.getItem("user_id");

    const formData = new FormData();
    formData.append("image", img);
    fetch(
      "https://api.imgbb.com/1/upload?key=212e3038d6bf0bd9d01b3aa24708a377",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(res => res.json())
      .then(result => {
        const imgUrl0 = result.data.url;
        const formData = new FormData();
        formData.append("image", img1);
        fetch(
          "https://api.imgbb.com/1/upload?key=212e3038d6bf0bd9d01b3aa24708a377",
          {
            method: "POST",
            body: formData,
          }
        )
          .then(res => res.json())
          .then(result => {
            const imgUrl1 = result.data.url;

            const formData = new FormData();
            formData.append("image", img2);
            fetch(
              "https://api.imgbb.com/1/upload?key=212e3038d6bf0bd9d01b3aa24708a377",
              {
                method: "POST",
                body: formData,
              }
            )
              .then(res => res.json())
              .then(result => {
                const stPrice = data.price;
                const numPrice = parseInt(stPrice);
                const property = {
                  title: data.title,
                  area: data.area,
                  price: numPrice,
                  description: data.description,
                  type: data.type,
                  purpose: data.purpose,
                  completion: data.completion,
                  status: data.status,
                  division: data.division,
                  district: data.district,
                  upozila: data.upozila,
                  img_url: imgUrl0,
                  image1: imgUrl1,
                  image2: result.data.url,
                  union_ward: data.union,
                  village: data.village,
                  user: userId,
                };
                console.log(property);
                axios
                  .post(
                    "https://property-exhibition.onrender.com/property/?format=json",
                    property,
                    {}
                  )
                  .then(response => {
                    refetch();
                    reset();
                    toast.success("Successfully Add a Property!");
                  })
                  .catch(error => {
                    console.error("An error occurred:", error);
                    toast.error("Failed to Add a Property!");
                  });
              });
          });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      {/* Row */}
      <div className=" grid justify-center mb-10">
        {/* Row */}
        <div className="">
          {/* Col */}
          <div className="">
            <h3 className="text-2xl text-center">Add Property</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="py-2 ">
              <div className="">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="md:w-10/12 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Title"
                  {...register("title", { required: true })}
                  aria-invalid={errors.title ? "true" : "false"}
                />
              </div>
              <div className="mb-4 md:flex gap-2">
                <div className="mb-4 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="area"
                  >
                    Area (sft)
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="area"
                    type="number"
                    placeholder="Area"
                    {...register("area", { required: true })}
                    aria-invalid={errors.area ? "true" : "false"}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="urpose"
                  >
                    Purpose
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="purpose"
                    type="text"
                    placeholder="Purpose"
                    {...register("purpose", { required: true })}
                    aria-invalid={errors.purpose ? "true" : "false"}
                  >
                    <option disabled>Purpose</option>
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                    placeholder="Price"
                    {...register("price", { required: true })}
                    aria-invalid={errors.price ? "true" : "false"}
                  />
                </div>
              </div>

              <div className="mb-4 md:flex gap-2 ">
                <div className="mb-4 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="status"
                    type="text"
                    placeholder="Status"
                    {...register("status", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                  >
                    <option disabled>Select Status</option>
                    <option value="Available">Available</option>
                    <option value="Booked">Booked</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="area"
                  >
                    Completion
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="completion"
                    type="text"
                    placeholder="Completion"
                    {...register("completion", { required: true })}
                    aria-invalid={errors.completion ? "true" : "false"}
                  >
                    <option disabled>Select Completion</option>
                    <option value="Ready">Ready</option>
                    <option value="Under Construction">
                      Under Construction
                    </option>
                    <option value="Unready">Unready</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="type"
                  >
                    Type
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="type"
                    type="text"
                    placeholder="Type"
                    {...register("type", { required: true })}
                    aria-invalid={errors.type ? "true" : "false"}
                  >
                    <option disabled>Select Type</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="md:w-10/12 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  placeholder="Description"
                  {...register("description", {
                    required: true,
                  })}
                  aria-invalid={errors.title ? "true" : "false"}
                ></textarea>
              </div>
              <div className="mb-4 md:flex gap-2 ">
                <div className="mb-4 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="division"
                  >
                    Division
                  </label>
                  <select
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="division"
                    type="text"
                    placeholder="Division"
                    {...register("division", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                  >
                    <option disabled>Division</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="district"
                  >
                    District
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="district"
                    type="text"
                    placeholder="District"
                    {...register("district", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="upozila"
                  >
                    Upozila
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="upozila"
                    type="text"
                    placeholder="Upozila"
                    {...register("upozila", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                  />
                </div>
              </div>
              <div className="mb-4 md:flex gap-2 justif-between">
                <div className="mb-4 md:mb-0">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="union_ward"
                  >
                    Union/Ward No
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="union_ward"
                    type="text"
                    placeholder="Union Or Ward No"
                    {...register("union", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="village"
                  >
                    Village
                  </label>
                  <input
                    className="w-40 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="village"
                    type="text"
                    placeholder="Village"
                    {...register("village", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                  />
                </div>
              </div>
              <div className="">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="img"
                >
                  Image-1
                </label>
                <input
                  type="file"
                  className="rounded"
                  aria-invalid={errors.img ? "true" : "false"}
                  {...register("img", { required: true })}
                  accept=".png, .jpg, .jpeg"
                />
              </div>
              <div className="mb-4 md:flex gap-2">
                <div className="">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="image1"
                  >
                    Image-2
                  </label>
                  <input
                    type="file"
                    className="rounded"
                    aria-invalid={errors.img ? "true" : "false"}
                    {...register("image1", { required: true })}
                    accept=".png, .jpg, .jpeg"
                  />
                </div>

                <div className="">
                  <label
                    className="block mb-1 text-sm font-bold text-gray-700"
                    htmlFor="image2"
                  >
                    Image-3
                  </label>
                  <input
                    type="file"
                    className="rounded"
                    aria-invalid={errors.img ? "true" : "false"}
                    {...register("image2", { required: true })}
                    accept=".png, .jpg, .jpeg"
                  />
                </div>
              </div>
              <div className="mt-2 text-center">
                <button className="px-3  py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                  <input
                    type="submit"
                    value="Add Property"
                    className="coursor-pointer"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
