/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";

const EditProfile = ({ setIsOpen, modalIsOpen, profile }) => {
  const { first_name, last_name, username, email, is_staff } =
    profile.user !== undefined && profile.user;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function closeModal() {
    setIsOpen(false);
  }
  const onSubmit = data => {
    const userProfile = {
      contact_no: data.contact_no,
      city: data.city,
      division: data.division,
      district: data.district,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      area: null,
      current_address: data.current_address,
      profile_avatar: null,
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        username: data.username,
        is_staff: is_staff,
      },
    };
    const token = localStorage.getItem("token");
    const profile_id = localStorage.getItem("profile_id");
    const apiUrl = `https://property-exhibition.onrender.com/users/${profile_id}/`;
    const axios_instance = axios.create({
      headers: {
        Authorization: `token ${token}`,
      },
    });
    axios_instance
      .put(apiUrl, userProfile)
      .then(response => {
        reset();
        closeModal();
        toast.success("Successfully Profile Updated!");
      })
      .catch(error => {
        console.error(error);
        toast.error("Failed to Profile Update!");
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="updateModal updateModal-2 mt-10 grid justify-center item-center"
      >
        <div className="my-5">
          {/* Row */}
          <div className="">
            {/* Col */}
            <div className="w-full px-6 pb-1 h-full rounded-lg lg:rounded-l-none bg-gray-100">
              <div className="flex justify-between">
                <h3 className="pt-4 text-2xl text-center text-gray-600">
                  Update Profile
                </h3>
                <AiOutlineClose
                  onClick={closeModal}
                  className="text-gray-600 cursor-pointer font-bold text-4xl mt-2"
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="rounded">
                <div className="mb-1 md:flex">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      aria-invalid={errors.firstName ? "true" : "false"}
                      defaultValue={first_name}
                      {...register("first_name", { required: true })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      aria-invalid={errors.lastName ? "true" : "false"}
                      defaultValue={last_name}
                      {...register("last_name", { required: true })}
                    />
                  </div>
                </div>

                <div className="mb-1 md:flex">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      className="w-52 px-12 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="gender"
                      id="gender"
                      type="text"
                      aria-invalid={errors.gender ? "true" : "false"}
                      defaultValue={profile.gender}
                      {...register("gender", { required: true })}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="date_of_birth"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="date_of_birth"
                      type="date"
                      aria-invalid={errors.date_of_birth ? "true" : "false"}
                      defaultValue={profile.date_of_birth}
                      {...register("date_of_birth", { required: true })}
                    />
                  </div>
                </div>

                <div className="mb-1 md:flex">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      aria-invalid={errors.email ? "true" : "false"}
                      defaultValue={email}
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="contact_no"
                    >
                      Contact No
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="contact_no"
                      type="text"
                      aria-invalid={errors.contact_no ? "true" : "false"}
                      defaultValue={profile.contact_no}
                      {...register("contact_no", { required: true })}
                    />
                  </div>
                </div>
                <div className="mb-1 md:flex">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="current_address"
                    >
                      Address
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="current_address"
                      type="text"
                      aria-invalid={errors.current_address ? "true" : "false"}
                      defaultValue={profile.current_address}
                      {...register("current_address", { required: true })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="city"
                      type="text"
                      aria-invalid={errors.title ? "true" : "false"}
                      defaultValue={profile.city}
                      {...register("city", { required: true })}
                    />
                  </div>
                </div>
                <div className="mb-1 md:flex">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="district"
                    >
                      District
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="district"
                      type="text"
                      aria-invalid={errors.district ? "true" : "false"}
                      defaultValue={profile.district}
                      {...register("district", { required: true })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-600"
                      htmlFor="division"
                    >
                      Division
                    </label>
                    <input
                      className="w-52 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="division"
                      type="text"
                      aria-invalid={errors.division ? "true" : "false"}
                      defaultValue={profile.division}
                      {...register("division", { required: true })}
                    />
                  </div>
                </div>

                <div className="my-6 text-center">
                  <button
                    className=" px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfile;
