/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const AddTestmonial = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  let first_name = localStorage.getItem("fName");
  let last_name = localStorage.getItem("lName");
  const onSubmit = data => {
    const user_id = localStorage.getItem("user_id");
    if (data.booking_date) {
      const testimonial = {
        title: data.title,
        content: data.content,
        rating: data.rating,
        user: user_id,
      };
      axios
        .post(
          "https://property-exhibition.onrender.com/testimonials/",
          testimonial,
          {}
        )
        .then(response => {
          reset();
          toast.success("Successfully Testimonial Added!");
        })
        .catch(error => {
          console.error("An error occurred:", error);
          toast.error("Failed to add Testimonial!");
        });
    } else {
      toast.error("Failed to add Testimonial!");
    }
  };

  let bkinfo = localStorage.getItem("bkinfo");
  let completedBookings = JSON.parse(bkinfo);
  return (
    <div>
      <div className="flex justify-center md:w-full px-2">
        <div className="w-full">
          <div className=" py-10 px-10 bg-white shadow-2xl rounded-xl">
            <h4 className="w-full text-gray-600 text-center text-2xl font-medium leading-snug">
              Add Testimonial
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-1"
            >
              <div className="">
                <label className="font-small text-gray-600 bg-white">
                  Name
                </label>
                <input
                  type="text"
                  className=" w-full px-4 py-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  value={first_name + " " + last_name}
                  {...register("title", { required: true })}
                />
              </div>
              <div className="">
                <label className="font-small text-gray-600 bg-white">
                  Property Buying Date
                </label>
                <select
                  id="booking_date"
                  className="w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  {...register("booking_date", { required: true })}
                  required
                >
                  {completedBookings?.map((bk, id) => (
                    <option key={id} value={bk?.booking_id}>
                      {bk?.booking_date}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label className="font-small text-gray-600 bg-white">
                  Rating
                </label>
                <select
                  id="rating"
                  className="w-full px-4 py-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  {...register("rating", { required: true })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="">
                <label className="font-small text-gray-600 bg-white">
                  Content
                </label>
                <textarea
                  type="text"
                  className="w-full px-4 py-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="Write like a Story"
                  {...register("content", { required: true })}
                ></textarea>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full px-2 py-1 text-xl font-small mt-2 text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTestmonial;
