/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../../Component/Footer";
// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://property-exhibition.onrender.com/contact/")
      .then(response => response.json())
      .then(json => console.log(json));
  });

  const submitContact = data => {
    const contactInfo = {
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    console.log(contactInfo);
    axios
      .post(
        "https://property-exhibition.onrender.com/contact/?format=json",
        contactInfo,
        {}
      )
      .then(response => {
        reset();
        toast.success("Successfully Submitted!");
      })
      .catch(error => {
        console.error("An error occurred:", error);
        toast.error("Failed to Submit");
      });
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="bg-slate-500">
          <div className=" mt-16 ">
            <div className=" bg-slate-50 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <form onSubmit={handleSubmit(submitContact)}>
                <h5 className="text-2xl text-gray-500 font-bold mb-6">
                  Have any Query Of Our Service
                </h5>
                <div className="mb-3">
                  <input
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <select
                    rows="4"
                    className="w-full p-2.5 text-sm leading-tight text-gray-700 border border-gray-300 rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    aria-label="subject"
                    placeholder="subject"
                    {...register("subject", { required: true })}
                  >
                    <option value="Registertion Related">
                      Registertion Related
                    </option>
                    <option value="Login Related">Login Related</option>
                    <option value="Profile Related">Profile Related</option>
                    <option value="Favourite Related">Favourite Related</option>
                    <option value="Testimonial Related">
                      Testimonial Related
                    </option>
                    <option value="Booking Related">Booking Related</option>
                    <option value="Payment Related">Payment Related</option>
                    <option value="Property Related">Property Related</option>
                    <option value="Nearest Location Related">
                      Nearest Location Related
                    </option>
                    <option value="Featured Property Related">
                      Featured Property Related
                    </option>
                    <option value="Searching Related">Searching Related</option>
                    <option value="Filtering Related">Filtering Related</option>
                    <option value="Sorting Related">Sorting Related</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <textarea
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Message or Any Issue ....."
                  id="message"
                  type="text"
                  aria-label="message"
                  {...register("message", { required: true })}
                ></textarea>
                <button
                  type="submit"
                  className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
